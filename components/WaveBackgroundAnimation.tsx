"use client"
import { useEffect, useRef } from "react";

const WaveBackgroundAnimation: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const drawWave = (offset: number, amplitude: number, frequency: number, opacity: number) => {
            ctx.beginPath();
            for (let x = 0; x < canvas.width; x++) {
                const y = canvas.height / 2 + Math.sin((x + offset) * frequency) * amplitude;
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);
            ctx.closePath();
            ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.fill();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            drawWave(time * 0.5, 30, 0.015, 0.1);
            drawWave(time * 0.7, 25, 0.02, 0.15);
            drawWave(time * 1, 20, 0.025, 0.2);

            time += 1;
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ opacity: 0.4 }}
        />
    );
};

export default WaveBackgroundAnimation