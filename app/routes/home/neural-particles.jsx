import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { useEffect, useRef } from 'react';
import {
    BufferAttribute,
    BufferGeometry,
    Color,
    Line,
    LineBasicMaterial,
    PerspectiveCamera,
    Points,
    PointsMaterial,
    Scene,
    Vector3,
    WebGLRenderer,
} from 'three';
import { cleanRenderer, cleanScene } from '~/utils/three';
import styles from './neural-particles.module.css';

const PARTICLE_COUNT = 100;
const CONNECTION_DISTANCE = 150;

export const NeuralParticles = props => {
    const { theme } = useTheme();
    const canvasRef = useRef();
    const renderer = useRef();
    const camera = useRef();
    const scene = useRef();
    const particles = useRef();
    const lines = useRef([]);
    const positions = useRef([]);
    const velocities = useRef([]);
    const reduceMotion = useReducedMotion();
    const isInViewport = useInViewport(canvasRef);
    const windowSize = useWindowSize();

    useEffect(() => {
        const { innerWidth, innerHeight } = window;

        renderer.current = new WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
        });
        renderer.current.setSize(innerWidth, innerHeight);
        renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        camera.current = new PerspectiveCamera(75, innerWidth / innerHeight, 1, 1000);
        camera.current.position.z = 400;

        scene.current = new Scene();

        // Create particles
        const geometry = new BufferGeometry();
        const positionArray = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            positions.current[i] = new Vector3(
                (Math.random() - 0.5) * 800,
                (Math.random() - 0.5) * 600,
                (Math.random() - 0.5) * 400
            );
            velocities.current[i] = new Vector3(
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5,
                (Math.random() - 0.5) * 0.5
            );
            positionArray[i * 3] = positions.current[i].x;
            positionArray[i * 3 + 1] = positions.current[i].y;
            positionArray[i * 3 + 2] = positions.current[i].z;
        }

        geometry.setAttribute('position', new BufferAttribute(positionArray, 3));

        const material = new PointsMaterial({
            color: theme === 'dark' ? 0x00d4ff : 0x0066cc,
            size: 4,
            transparent: true,
            opacity: 0.8,
        });

        particles.current = new Points(geometry, material);
        scene.current.add(particles.current);

        return () => {
            cleanScene(scene.current);
            cleanRenderer(renderer.current);
        };
    }, []);

    // Update colors when theme changes
    useEffect(() => {
        if (particles.current) {
            particles.current.material.color = new Color(theme === 'dark' ? 0x00d4ff : 0x0066cc);
        }
        // Update line colors
        lines.current.forEach(line => {
            if (line.material) {
                line.material.color = new Color(theme === 'dark' ? 0x8b5cf6 : 0x6366f1);
            }
        });
    }, [theme]);

    useEffect(() => {
        const { width, height } = windowSize;
        if (renderer.current && camera.current) {
            renderer.current.setSize(width, height);
            camera.current.aspect = width / height;
            camera.current.updateProjectionMatrix();
        }
    }, [windowSize]);

    useEffect(() => {
        let animation;

        const animate = () => {
            animation = requestAnimationFrame(animate);

            // Update particle positions
            const positionAttribute = particles.current.geometry.attributes.position;

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                positions.current[i].add(velocities.current[i]);

                // Bounce off boundaries
                if (Math.abs(positions.current[i].x) > 400) velocities.current[i].x *= -1;
                if (Math.abs(positions.current[i].y) > 300) velocities.current[i].y *= -1;
                if (Math.abs(positions.current[i].z) > 200) velocities.current[i].z *= -1;

                positionAttribute.setXYZ(
                    i,
                    positions.current[i].x,
                    positions.current[i].y,
                    positions.current[i].z
                );
            }
            positionAttribute.needsUpdate = true;

            // Remove old lines
            lines.current.forEach(line => {
                scene.current.remove(line);
                if (line.geometry) line.geometry.dispose();
                if (line.material) line.material.dispose();
            });
            lines.current = [];

            // Draw connections between nearby particles
            const lineMaterial = new LineBasicMaterial({
                color: theme === 'dark' ? 0x8b5cf6 : 0x6366f1,
                transparent: true,
                opacity: 0.3,
            });

            for (let i = 0; i < PARTICLE_COUNT; i++) {
                for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                    const distance = positions.current[i].distanceTo(positions.current[j]);
                    if (distance < CONNECTION_DISTANCE) {
                        const lineGeometry = new BufferGeometry().setFromPoints([
                            positions.current[i],
                            positions.current[j],
                        ]);
                        const line = new Line(lineGeometry, lineMaterial.clone());
                        line.material.opacity = 0.3 * (1 - distance / CONNECTION_DISTANCE);
                        scene.current.add(line);
                        lines.current.push(line);
                    }
                }
            }

            renderer.current.render(scene.current, camera.current);
        };

        if (!reduceMotion && isInViewport) {
            animate();
        } else if (renderer.current && scene.current && camera.current) {
            renderer.current.render(scene.current, camera.current);
        }

        return () => {
            cancelAnimationFrame(animation);
        };
    }, [isInViewport, reduceMotion, theme]);

    return (
        <Transition in timeout={3000} nodeRef={canvasRef}>
            {({ visible, nodeRef }) => (
                <canvas
                    aria-hidden
                    className={styles.canvas}
                    data-visible={visible}
                    ref={nodeRef}
                    {...props}
                />
            )}
        </Transition>
    );
};
