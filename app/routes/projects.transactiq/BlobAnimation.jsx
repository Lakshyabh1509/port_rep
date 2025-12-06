import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { AfterimagePass } from 'three/examples/jsm/postprocessing/AfterimagePass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import styles from './blob-animation.module.css';

export const BlobAnimation = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Variables
        let composer;
        let body_01_mixer, eyes_01_mixer;
        let animationId;
        let theta1 = 0;
        let currentScroll = 0;
        let targetScroll = 0;
        const ease = 0.00025;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true
        });
        renderer.setClearColor(0x11151c);
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 20;
        camera.position.y = 40;

        // Clock
        const clock = new THREE.Clock();

        // HDR Environment
        const hdrEquirect = new RGBELoader()
            .setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/')
            .load('ml_gradient_freebie_01.hdr', function () {
                hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
            });
        scene.environment = hdrEquirect;

        // Materials
        const blob_mat = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            roughness: 0.3,
            metalness: 0,
            envMap: hdrEquirect,
            envMapIntensity: 0.5
        });

        const uni_mat = new THREE.MeshPhysicalMaterial({
            envMap: hdrEquirect,
            envMapIntensity: 0,
            emissive: 0x11151c
        });

        const scale = 0.03;

        // Load Models
        const loader = new FBXLoader();

        // Load Body
        loader.load('https://miroleon.github.io/daily-assets/body_03.fbx', function (body_01) {
            body_01_mixer = new THREE.AnimationMixer(body_01);
            const body_01_action = body_01_mixer.clipAction(body_01.animations[0]);
            body_01_action.play();

            body_01.traverse(function (child) {
                if (child.isMesh) {
                    child.material = blob_mat;
                }
            });

            body_01.position.set(0, -5, 0);
            body_01.scale.setScalar(scale);
            scene.add(body_01);
        });

        // Load Eyes
        loader.load('https://miroleon.github.io/daily-assets/eyes_03.fbx', function (eyes_01) {
            eyes_01_mixer = new THREE.AnimationMixer(eyes_01);
            const eyes_01_action = eyes_01_mixer.clipAction(eyes_01.animations[0]);
            eyes_01_action.play();

            eyes_01.traverse(function (child) {
                if (child.isMesh) {
                    child.material = uni_mat;
                }
            });

            eyes_01.position.set(0, -5, 0);
            eyes_01.scale.setScalar(scale);
            scene.add(eyes_01);
        });

        // Fog
        scene.fog = new THREE.FogExp2(0x11151c, 0.005);

        // Post Processing
        const renderScene = new RenderPass(scene, camera);

        const afterimagePass = new AfterimagePass();
        afterimagePass.uniforms['damp'].value = 0.85;

        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight)
        );
        bloomPass.threshold = 0.1;
        bloomPass.strength = 1.35;
        bloomPass.radius = 1;

        composer = new EffectComposer(renderer);
        composer.addPass(renderScene);
        composer.addPass(afterimagePass);
        composer.addPass(bloomPass);

        // Scroll handling
        let theta2 = 0;
        let theta3 = 0;

        const handleScroll = () => {
            targetScroll = window.pageYOffset;
        };

        const updateScroll = () => {
            currentScroll += (targetScroll - currentScroll) * ease;
            theta2 = currentScroll * 0.07;
            theta3 = currentScroll * 0.035;
        };

        window.addEventListener('scroll', handleScroll);

        // Update function
        const update = () => {
            updateScroll();
            theta1 += 0.005 + (window.pageYOffset * 0.0000025);

            camera.position.x = -Math.sin(theta1 + 1) * (45 + theta2);
            camera.position.z = -Math.cos(theta1 + 1) * (45 + theta2);
            camera.position.y = 20 * Math.cos(theta1 + 1) + 20 + theta3;

            camera.lookAt(0, 5, 0);
        };

        // Animation loop
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const delta = clock.getDelta();

            if (body_01_mixer) body_01_mixer.update(delta / 2);
            if (eyes_01_mixer) eyes_01_mixer.update(delta / 2);

            update();
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

        // Start animation
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationId);
            if (renderer) renderer.dispose();
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef}>
            <canvas ref={canvasRef} className={styles.canvas} />
        </div>
    );
};
