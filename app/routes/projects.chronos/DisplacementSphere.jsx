import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import styles from './displacement-sphere.module.css';

export const DisplacementSphere = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // --- Variables ---
        let camera, scene, renderer, composer, controls;
        let transitionStartCameraPosition = new THREE.Vector3();
        let transitionStartCameraQuaternion = new THREE.Quaternion();

        // Transition variables
        let isUserInteracting = false;
        let transitionProgress = 0;
        const transitionTime = 2; // Seconds
        const transitionIncrement = 1 / (60 * transitionTime);
        let theta = 0;
        let animationId;

        // --- Init ---
        const init = () => {
            // Renderer
            renderer = new THREE.WebGLRenderer({
                canvas: canvasRef.current,
                antialias: true
            });
            renderer.setClearColor(0x11151c);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);

            // Scene
            scene = new THREE.Scene();

            // Camera
            camera = new THREE.PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                0.1,
                1000
            );
            camera.position.set(0, 0, 10);

            // Controls
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.1; // Reduced for smoother feel
            controls.enablePan = false;
            const angleLimit = Math.PI / 7;
            controls.minPolarAngle = Math.PI / 2 - angleLimit;
            controls.maxPolarAngle = Math.PI / 2 + angleLimit;

            controls.addEventListener("start", function () {
                isUserInteracting = true;
            });

            controls.addEventListener("end", function () {
                isUserInteracting = false;
                transitionStartCameraPosition.copy(camera.position);
                transitionStartCameraQuaternion.copy(camera.quaternion);
                transitionProgress = 0;
            });

            // Environment (HDR)
            const hdrLoader = new RGBELoader();
            hdrLoader.setPath("https://miroleon.github.io/daily-assets/");
            hdrLoader.load("GRADIENT_01_01_comp.hdr", function (texture) {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
            });

            // Fog
            scene.fog = new THREE.FogExp2(0x11151c, 0.4);

            // Material
            const surfaceImperfection = new THREE.TextureLoader().load(
                "https://miroleon.github.io/daily-assets/surf_imp_02.jpg"
            );
            surfaceImperfection.wrapT = THREE.RepeatWrapping;
            surfaceImperfection.wrapS = THREE.RepeatWrapping;

            const hands_mat = new THREE.MeshPhysicalMaterial({
                color: 0x606060,
                roughness: 0.2,
                metalness: 1,
                roughnessMap: surfaceImperfection,
                envMapIntensity: 1.5
            });

            // Model (FBX)
            const fbxloader = new FBXLoader();
            fbxloader.load(
                "https://miroleon.github.io/daily-assets/two_hands_01.fbx",
                function (object) {
                    object.traverse(function (child) {
                        if (child.isMesh) {
                            child.material = hands_mat;
                        }
                    });
                    object.position.set(0, 0, 0);
                    object.scale.setScalar(0.05);
                    scene.add(object);
                }
            );

            // --- Post Processing ---
            const renderScene = new RenderPass(scene, camera);

            const afterimagePass = new AfterimagePass();
            afterimagePass.uniforms["damp"].value = 0.9;

            const bloomPass = new UnrealBloomPass(
                new THREE.Vector2(window.innerWidth, window.innerHeight),
                1.5,
                0.4,
                0.85
            );
            bloomPass.strength = 1.75;
            bloomPass.threshold = 0.1;
            bloomPass.radius = 1;

            // Displacement Shader
            const displacementShader = {
                uniforms: {
                    tDiffuse: { value: null },
                    displacement: { value: null },
                    scale: { value: 0.1 },
                    tileFactor: { value: 2 }
                },
                vertexShader: `
              varying vec2 vUv;
              void main() {
                  vUv = uv;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
          `,
                fragmentShader: `
              uniform sampler2D tDiffuse;
              uniform sampler2D displacement;
              uniform float scale;
              uniform float tileFactor;
              varying vec2 vUv;
              void main() {
                  if (vUv.x < 0.75 && vUv.x > 0.25 && vUv.y < 0.75 && vUv.y > 0.25) {
                      vec2 tiledUv = mod(vUv * tileFactor, 1.0);
                      vec2 disp = texture2D(displacement, tiledUv).rg * scale;
                      vec2 distUv = vUv + disp;
                      gl_FragColor = texture2D(tDiffuse, distUv);
                  } else {
                      gl_FragColor = texture2D(tDiffuse, vUv);
                  }
              }
          `
            };

            const displacementTexture = new THREE.TextureLoader().load(
                "https://raw.githubusercontent.com/miroleon/displacement_texture_freebie/main/assets/1K/jpeg/normal/ml-dpt-21-1K_normal.jpeg",
                function (texture) {
                    texture.minFilter = THREE.NearestFilter;
                }
            );

            const displacementPass = new ShaderPass(displacementShader);
            displacementPass.uniforms["displacement"].value = displacementTexture;
            displacementPass.uniforms["scale"].value = 0.025;
            displacementPass.uniforms["tileFactor"].value = 2;

            composer = new EffectComposer(renderer);
            composer.addPass(renderScene);
            composer.addPass(afterimagePass);
            composer.addPass(bloomPass);
            composer.addPass(displacementPass);
        };

        // Ease function
        function easeInOutCubic(x) {
            return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
        }

        // Animation Loop
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            theta += 0.005;

            let targetPosition = new THREE.Vector3(
                Math.sin(theta) * 3,
                Math.sin(theta),
                Math.cos(theta) * 3
            );

            let targetQuaternion = new THREE.Quaternion().setFromEuler(
                new THREE.Euler(0, -theta, 0)
            );

            if (!isUserInteracting) {
                if (transitionProgress < 1) {
                    transitionProgress += transitionIncrement;
                    let easedProgress = easeInOutCubic(transitionProgress);

                    camera.position.lerpVectors(
                        transitionStartCameraPosition,
                        targetPosition,
                        easedProgress
                    );
                    camera.quaternion.slerp(
                        transitionStartCameraQuaternion,
                        targetQuaternion,
                        easedProgress
                    );
                } else {
                    camera.position.copy(targetPosition);
                    camera.quaternion.copy(targetQuaternion);
                }
            }

            // Always look at center
            camera.lookAt(0, 0, 0);

            // Update controls
            controls.update();

            // Render
            composer.render();
        };

        // Resize Handler
        const handleResize = () => {
            if (!camera || !renderer || !composer) return;
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };

        // Start
        init();
        animate();
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (renderer) renderer.dispose();
            // Dispose geometry/materials if strictly needed, but renderer release should be enough for page switch
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};
