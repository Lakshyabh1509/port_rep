import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import styles from './glass-animation.module.css';

export const GlassAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animationId;

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x11151c);

        // Camera
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.set(0, 0, 5);

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        containerRef.current.appendChild(renderer.domElement);

        // Orbit group for spheres
        const orbitGroup = new THREE.Group();
        scene.add(orbitGroup);

        // Create orbiting spheres
        const sphereCount = 12;
        const sphereRadius = 3.0;
        const sphereSize = 0.15;

        for (let i = 0; i < sphereCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;
            const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
            const y = sphereRadius * Math.cos(phi);
            const z = sphereRadius * Math.sin(phi) * Math.sin(theta);

            const sphere = new THREE.Mesh(
                new THREE.SphereGeometry(sphereSize, 32, 32),
                new THREE.MeshStandardMaterial({ color: 0xff4444 })
            );
            sphere.position.set(x, y, z);
            orbitGroup.add(sphere);
        }

        // Lighting
        scene.add(new THREE.AmbientLight(0xffffff, 0.5));
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(5, 5, 5);
        scene.add(dirLight);

        // Render target for glass effect
        const rt = new THREE.WebGLRenderTarget(window.innerWidth, window.innerHeight);

        // Glass shader uniforms
        const glassUniforms = {
            uScene: { value: rt.texture },
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uRefraction: { value: 0.02 },
            uDispersion: { value: 0.02 },
            uFrost: { value: 5.0 },
            uLightIntensity: { value: 1.0 },
            uReflectionStrength: { value: 0.4 },
            uPrismStrength: { value: 0.6 },
            uLightPos: { value: dirLight.position },
            uThickness: { value: 0.2 },
            uOpacity: { value: 0.7 },
        };

        // Glass material
        const glassMaterial = new THREE.ShaderMaterial({
            uniforms: glassUniforms,
            vertexShader: `
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewDir;
                varying vec3 vWorldPos;
                void main() {
                    vUv = uv;
                    vNormal = normalize(normalMatrix * normal);
                    vViewDir = normalize((modelViewMatrix * vec4(position, 1.0)).xyz);
                    vWorldPos = (modelMatrix * vec4(position, 1.0)).xyz;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D uScene;
                uniform float uTime;
                uniform float uRefraction;
                uniform float uDispersion;
                uniform float uFrost;
                uniform float uLightIntensity;
                uniform float uReflectionStrength;
                uniform float uPrismStrength;
                uniform vec3 uLightPos;
                uniform vec2 uResolution;
                uniform float uThickness;
                uniform float uOpacity;
                varying vec2 vUv;
                varying vec3 vNormal;
                varying vec3 vViewDir;
                varying vec3 vWorldPos;

                float random(vec2 st) {
                    return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453123);
                }

                float noise(vec2 st) {
                    vec2 i = floor(st);
                    vec2 f = fract(st);
                    vec2 u = f * f * (3.0 - 2.0 * f);
                    return mix(
                        mix(random(i + vec2(0.0, 0.0)), random(i + vec2(1.0, 0.0)), u.x),
                        mix(random(i + vec2(0.0, 1.0)), random(i + vec2(10.0, 1.0)), u.x),
                        u.y
                    );
                }

                void main() {
                    vec2 offset = vNormal.xy * uRefraction * (1.0 + sin(uTime * 0.5) * 0.1);
                    float thicknessFactor = uThickness * (1.0 - dot(vNormal, vViewDir));
                    offset *= (1.0 + thicknessFactor);
                    vec4 colR = texture2D(uScene, vUv + offset * (1.0 + uDispersion));
                    vec4 colG = texture2D(uScene, vUv + offset);
                    vec4 colB = texture2D(uScene, vUv - offset * uDispersion);
                    vec3 refracted = vec3(colR.r, colG.g, colB.b);

                    vec2 reflUV = vUv + vNormal.xy * uReflectionStrength * (1.0 - dot(vNormal, vViewDir)) * 1.5;
                    vec4 reflection = texture2D(uScene, reflUV);
                    vec3 finalColor = mix(refracted, reflection.rgb, uReflectionStrength);

                    vec3 frost = vec3(0.0);
                    float blurSize = uFrost / uResolution.x;
                    for (int x = -2; x <= 2; x++) {
                        for (int y = -2; y <= 2; y++) {
                            vec2 sampleUV = vUv + vec2(float(x), float(y)) * blurSize;
                            float noiseVal = noise(sampleUV * 5.0 + uTime * 0.02);
                            frost += texture2D(uScene, sampleUV).rgb * (1.0 + noiseVal * 0.15);
                        }
                    }
                    frost /= 25.0;
                    finalColor = mix(finalColor, frost, 0.35) * uLightIntensity;

                    float fresnel = pow(1.0 - abs(dot(vNormal, vViewDir)), 4.0);
                    finalColor += fresnel * 0.3;

                    vec3 lightDir = normalize(uLightPos - vWorldPos);
                    vec3 reflectDir = reflect(-lightDir, vNormal);
                    float spec = pow(max(dot(vViewDir, reflectDir), 0.0), 48.0);
                    vec3 prismColor = vec3(0.0);
                    prismColor.r = spec * (1.0 + uDispersion * 0.15);
                    prismColor.g = spec * (1.0 + uDispersion * 0.05);
                    prismColor.b = spec * (1.0 - uDispersion * 0.15);
                    finalColor += prismColor * uPrismStrength * (1.0 + sin(uTime * 0.3) * 0.25);

                    gl_FragColor = vec4(finalColor, uOpacity);
                }
            `,
            transparent: true,
            side: THREE.DoubleSide
        });

        // Glass cube
        const roundedCube = new THREE.Mesh(
            new RoundedBoxGeometry(1, 1, 1, 5, 0.2),
            glassMaterial
        );
        scene.add(roundedCube);

        // Post processing
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.78, 0.3, 0.3
        ));

        // Animation
        const animate = (time) => {
            animationId = requestAnimationFrame(animate);

            glassUniforms.uTime.value = time * 0.001;
            roundedCube.rotation.y += 0.005;
            orbitGroup.rotation.y -= 0.0025;

            renderer.setRenderTarget(rt);
            renderer.render(scene, camera);
            renderer.setRenderTarget(null);

            composer.render();
        };

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
            rt.setSize(window.innerWidth, window.innerHeight);
            glassUniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate(0);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (renderer.domElement && containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef} />
    );
};
