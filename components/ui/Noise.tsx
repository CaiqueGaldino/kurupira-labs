'use client';

import { useEffect, useRef } from 'react';

interface NoiseProps {
  patternSize?: number;
  patternScaleX?: number;
  patternScaleY?: number;
  patternAlpha?: number;
  className?: string;
}

export default function Noise({
  patternSize = 250,
  patternScaleX = 2,
  patternScaleY = 2,
  patternAlpha = 15,
  className = '',
}: NoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let isAnimating = true;
    let frameCount = 0;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const createNoise = () => {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const imageData = ctx.createImageData(patternSize, patternSize);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        buffer[i] = ((255 * Math.random()) | 0) << 24 | patternAlpha << 16 | patternAlpha << 8 | patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
      ctx.restore();
    };

    const animate = () => {
      if (!isAnimating) return;

      // Update noise every 3 frames (reduce CPU usage)
      if (frameCount % 3 === 0) {
        createNoise();
      }
      frameCount++;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isAnimating = false;
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [patternSize, patternScaleX, patternScaleY, patternAlpha]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 opacity-30 ${className}`}
      style={{ mixBlendMode: 'overlay' }}
    />
  );
}
