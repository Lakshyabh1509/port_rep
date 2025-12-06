import { useEffect, useRef } from 'react';
import styles from './p5-animation.module.css';

export const P5Animation = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        let t = 0;
        let x = 0;
        let y = 0;
        const easing = 0.001;
        const easing2 = 0.01;
        const pointCount = 100;
        let animationId;
        let canvas;
        let ctx;
        let width;
        let height;

        const init = () => {
            canvas = document.createElement('canvas');
            containerRef.current.appendChild(canvas);
            ctx = canvas.getContext('2d');
            resize();
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * window.devicePixelRatio;
            canvas.height = height * window.devicePixelRatio;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };

        const draw = () => {
            // Clear background
            ctx.fillStyle = 'rgb(17, 21, 28)';
            ctx.fillRect(0, 0, width, height);

            const diameter1 = (width / 4 + height / 4) * 2;
            const diameter2 = (width / 4 + height / 4) * 0.2;
            const diameter3 = (width / 4 + height / 4) * 2;
            const angle1 = 0.01;

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
            ctx.lineWidth = 0.2;

            for (let i = angle1; i < (Math.PI * 2 + angle1); i += (Math.PI * 2) / pointCount) {
                const cx1 = diameter2 / 2 * Math.cos(i / 2 + -t * Math.sin(2)) + width / 2;
                const cy1 = diameter2 / 2 * Math.sin(i / 2 + -t * Math.sin(2)) + height / 2;
                const cx2 = diameter1 / 2 * Math.cos(i + -t * Math.sin(1 + 0.1)) + width / 2;
                const cy2 = diameter1 / 2 * Math.sin(i + -t * Math.sin(-2 + 0.1)) + height / 2;
                const cx3 = diameter3 / 2 * Math.cos(-i + -t * Math.sin(1 + 0.1)) + width / 2;
                const cy3 = diameter3 / 2 * Math.sin(-i + -t * Math.sin(-2 + 0.1)) + height / 2;
                const cx4 = diameter2 / 2 * Math.cos(i / -2 + -t * Math.sin(2)) + width / 2;
                const cy4 = diameter2 / 2 * Math.sin(i / -2 + -t * Math.sin(2)) + height / 2;

                ctx.beginPath();
                ctx.moveTo(cx1, cy1);
                ctx.bezierCurveTo(cx2, cy2, cx3, cy3, cx4, cy4);
                ctx.stroke();
            }

            t += 0.02;
            animationId = requestAnimationFrame(draw);
        };

        const handleResize = () => {
            resize();
        };

        init();
        window.addEventListener('resize', handleResize);
        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (canvas && containerRef.current) {
                containerRef.current.removeChild(canvas);
            }
        };
    }, []);

    return (
        <div className={styles.container} ref={containerRef} />
    );
};
