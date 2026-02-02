'use client';

import { useState, useRef, useEffect } from 'react';

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  glareSize?: number;
  transitionDuration?: number;
}

export default function GlareHover({
  children,
  className = '',
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareSize = 300,
  transitionDuration = 800,
}: GlareHoverProps) {
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePosition({ x, y });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity"
        style={{
          opacity: isHovering ? glareOpacity : 0,
          transitionDuration: `${transitionDuration}ms`,
          background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent ${glareSize}%)`,
        }}
      />
    </div>
  );
}
