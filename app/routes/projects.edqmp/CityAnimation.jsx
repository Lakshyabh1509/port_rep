import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import styles from './city-animation.module.css';

export const CityAnimation = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let animationId;
        const mouse = { x: 0, y: 0 };
        const uSpeed = 0.001;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        if (window.innerWidth > 800) {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }
        containerRef.current.appendChild(renderer.domElement);

        // Camera
        const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 500);
        camera.position.set(0, 2, 14);

        // Scene
        const scene = new THREE.Scene();
        const setcolor = 0x11151c;
        scene.background = new THREE.Color(setcolor);
        scene.fog = new THREE.Fog(setcolor, 10, 16);

        // Groups
        const city = new THREE.Object3D();
        const smoke = new THREE.Object3D();
        const town = new THREE.Object3D();

        // Random function
        const mathRandom = (num = 8) => -Math.random() * num + Math.random() * num;

        // Create city
        const segments = 2;
        for (let i = 1; i < 100; i++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);
            const material = new THREE.MeshStandardMaterial({
                color: 0x000000,
                wireframe: false,
                side: THREE.DoubleSide
            });
            const wmaterial = new THREE.MeshLambertMaterial({
                color: 0xFFFFFF,
                wireframe: true,
                transparent: true,
                opacity: 0.03,
                side: THREE.DoubleSide
            });

            const cube = new THREE.Mesh(geometry, material);
            const wfloor = new THREE.Mesh(geometry, wmaterial);
            const floor = new THREE.Mesh(geometry, material);

            cube.add(wfloor);
            cube.castShadow = true;
            cube.receiveShadow = true;
            cube.scale.y = 0.1 + Math.abs(mathRandom(8));

            const cubeWidth = 0.9;
            cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
            cube.position.x = Math.round(mathRandom());
            cube.position.z = Math.round(mathRandom());

            floor.scale.y = 0.05;
            floor.position.set(cube.position.x, 0, cube.position.z);

            town.add(floor);
            town.add(cube);
        }

        // Particles
        const gmaterial = new THREE.MeshToonMaterial({ color: 0xFFFF00, side: THREE.DoubleSide });
        const gparticular = new THREE.CircleGeometry(0.01, 3);
        const aparticular = 5;

        for (let h = 1; h < 300; h++) {
            const particular = new THREE.Mesh(gparticular, gmaterial);
            particular.position.set(mathRandom(aparticular), mathRandom(aparticular), mathRandom(aparticular));
            particular.rotation.set(mathRandom(), mathRandom(), mathRandom());
            smoke.add(particular);
        }

        // Ground plane
        const pmaterial = new THREE.MeshPhongMaterial({
            color: 0x000000,
            side: THREE.DoubleSide,
            opacity: 0.9,
            transparent: true
        });
        const pgeometry = new THREE.PlaneGeometry(60, 60);
        const pelement = new THREE.Mesh(pgeometry, pmaterial);
        pelement.rotation.x = -90 * Math.PI / 180;
        pelement.position.y = -0.001;
        pelement.receiveShadow = true;
        city.add(pelement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xFFFFFF, 4);
        const lightFront = new THREE.SpotLight(0xFFFFFF, 20, 10);
        const lightBack = new THREE.PointLight(0xFFFFFF, 0.5);

        lightFront.rotation.x = 45 * Math.PI / 180;
        lightFront.rotation.z = -45 * Math.PI / 180;
        lightFront.position.set(5, 5, 5);
        lightFront.castShadow = true;
        lightFront.shadow.mapSize.width = 2048;
        lightFront.shadow.mapSize.height = 2048;
        lightFront.penumbra = 0.1;
        lightBack.position.set(0, 6, 0);

        smoke.position.y = 2;

        scene.add(ambientLight);
        city.add(lightFront);
        scene.add(lightBack);
        scene.add(city);
        city.add(smoke);
        city.add(town);

        // Grid
        const gridHelper = new THREE.GridHelper(60, 120, 0xFF0000, 0x000000);
        city.add(gridHelper);

        // Moving lines/cars
        let createCarPos = true;
        const createCars = (cScale = 2, cPos = 20, cColor = 0xFFFF00) => {
            const cMat = new THREE.MeshToonMaterial({ color: cColor, side: THREE.DoubleSide });
            const cGeo = new THREE.BoxGeometry(1, cScale / 40, cScale / 40);
            const cElem = new THREE.Mesh(cGeo, cMat);
            const cAmp = 3;

            if (createCarPos) {
                createCarPos = false;
                cElem.position.x = -cPos;
                cElem.position.z = mathRandom(cAmp);
            } else {
                createCarPos = true;
                cElem.position.x = mathRandom(cAmp);
                cElem.position.z = -cPos;
                cElem.rotation.y = 90 * Math.PI / 180;
            }
            cElem.receiveShadow = true;
            cElem.castShadow = true;
            cElem.position.y = Math.abs(mathRandom(5));
            city.add(cElem);

            // Simple animation without GSAP
            cElem.userData = {
                startX: cElem.position.x,
                startZ: cElem.position.z,
                direction: createCarPos ? 'x' : 'z',
                speed: 0.02 + Math.random() * 0.03,
                range: cPos * 2
            };
        };

        for (let i = 0; i < 60; i++) {
            createCars(0.1, 20);
        }

        // Mouse move handler
        const onMouseMove = (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        // Animation
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            city.rotation.y -= ((mouse.x * 8) - camera.rotation.y) * uSpeed;
            city.rotation.x -= (-(mouse.y * 2) - camera.rotation.x) * uSpeed;
            if (city.rotation.x < -0.05) city.rotation.x = -0.05;
            else if (city.rotation.x > 1) city.rotation.x = 1;

            smoke.rotation.y += 0.01;
            smoke.rotation.x += 0.01;

            camera.lookAt(city.position);
            renderer.render(scene, camera);
        };

        // Resize handler
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', onMouseMove);
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', onMouseMove);
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
