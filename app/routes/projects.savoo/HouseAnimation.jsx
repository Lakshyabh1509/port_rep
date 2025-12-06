import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import styles from './house-animation.module.css';

export const HouseAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animationId;
        let theta1 = 0;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor(0x11151c);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x11151c, 0.1);

        // HDR Environment
        new RGBELoader()
            .setPath('https://miroleon.github.io/daily-assets/')
            .load('gradient_4.hdr', (texture) => {
                texture.mapping = THREE.EquirectangularReflectionMapping;
                scene.environment = texture;
            });

        // Camera
        const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 0.2, 6);

        // Lights
        scene.add(new THREE.AmbientLight(0xA4C3B2, 0.08));
        const pointlight = new THREE.PointLight(0xf25d50, 1, 100);
        pointlight.position.set(0, 0, 0);
        scene.add(pointlight);

        // Materials
        const landscape_mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.2,
            metalness: 0.1,
            transparent: true,
            opacity: 1
        });

        const house_mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 0.2,
            transparent: true,
            opacity: 1
        });

        const roof_mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 0.3,
            transparent: true,
            opacity: 1
        });

        // Load Models
        const loader = new FBXLoader().setPath('https://miroleon.github.io/daily-assets/');

        loader.load('LANDSCAPE_V2.fbx', (object) => {
            const model = object.children[0];
            model.scale.setScalar(0.03);
            model.position.set(0, -0.1, 0);
            model.material = landscape_mat;
            scene.add(model);
        });

        loader.load('HOUSE_V3.fbx', (object) => {
            const model = object.children[0];
            model.scale.setScalar(0.03);
            model.position.set(0, -0.1, 0);
            model.material = house_mat;
            scene.add(model);
        });

        loader.load('ROOF_V2.fbx', (object) => {
            const model = object.children[0];
            model.scale.setScalar(0.03);
            model.position.set(0, -0.1, 0);
            model.material = roof_mat;
            scene.add(model);
        });

        // Post-processing
        const composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(new AfterimagePass(0.6));

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            1.5, 0.4, 0.85
        );
        bloomPass.threshold = 0.3;
        bloomPass.strength = 0.5;
        bloomPass.radius = 0.5;
        composer.addPass(bloomPass);

        // Animation
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            theta1 += 0.005;
            camera.position.x = Math.sin(theta1 + 1) * 11;
            camera.position.z = Math.cos(theta1 + 1) * 11;
            camera.position.y = 2 * Math.cos(theta1 - 3) - 2;
            camera.lookAt(0, 0, 0);

            composer.render();
        };

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            composer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

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
