import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import styles from './buddha-animation.module.css';

export const BuddhaAnimation = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        // Variables
        let animationId;
        let theta1 = 0;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Scene
        const scene = new THREE.Scene();

        // HDR Environment
        const hdrEquirect = new RGBELoader()
            .setPath('https://raw.githubusercontent.com/miroleon/gradient_hdr_freebie/main/Gradient_HDR_Freebies/')
            .load('ml_gradient_freebie_01.hdr', function () {
                hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
            });
        scene.environment = hdrEquirect;

        // Fog
        scene.fog = new THREE.FogExp2(0x11151c, 0.15);

        // Group for camera and objects
        const group = new THREE.Group();
        scene.add(group);

        // Point lights
        const pointlight = new THREE.PointLight(0x85ccb8, 7.5, 20);
        pointlight.position.set(0, 3, 2);
        group.add(pointlight);

        const pointlight2 = new THREE.PointLight(0x9f85cc, 7.5, 20);
        pointlight2.position.set(0, 3, 2);
        group.add(pointlight2);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            45,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 10;
        group.add(camera);

        // Material
        const material1 = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0,
            metalness: 0.5,
            envMapIntensity: 10
        });

        // Load Buddha model
        const objloader = new OBJLoader();
        objloader.load(
            'https://raw.githubusercontent.com/miroleon/peace-of-mind/main/assets/buddha.obj',
            (object) => {
                object.children[0].material = material1;
                object.scale.setScalar(20);
                object.position.set(0, -0.25, 0);
                group.add(object);
            }
        );

        // Update function
        const update = () => {
            theta1 += 0.0024;

            // Camera panning
            camera.position.x = Math.sin(theta1) * 10;
            camera.position.z = Math.cos(theta1) * 10;
            camera.position.y = Math.cos(theta1);

            // Point light animations
            pointlight.position.x = Math.sin(theta1 + 1) * 11;
            pointlight.position.z = Math.cos(theta1 + 1) * 11;
            pointlight.position.y = 2 * Math.cos(theta1 - 3) + 3;

            pointlight2.position.x = -Math.sin(theta1 + 1) * 11;
            pointlight2.position.z = -Math.cos(theta1 + 1) * 11;
            pointlight2.position.y = 2 * -Math.cos(theta1 - 3) - 6;

            // Rotate group (slower)
            group.rotation.y += 0.009;

            camera.lookAt(0, 0, 0);
        };

        // Animation loop
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            update();
            renderer.render(scene, camera);
        };

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Start animation
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
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
