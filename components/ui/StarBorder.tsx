'use client';

import React from 'react';

interface StarBorderProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  color?: string;
  speed?: string;
  thickness?: number;
}

export default function StarBorder({
  children,
  as: Component = 'div',
  className = '',
  color = 'white',
  speed = '5s',
  thickness = 1,
}: StarBorderProps) {
  return (
    <Component className={`relative ${className}`}>
      <div
        className="absolute inset-0 rounded-xl"
        style={{
          padding: `${thickness}px`,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          animation: `star-border ${speed} linear infinite`,
        }}
      />
      <div className="relative z-10">{children}</div>
      <style jsx>{`
        @keyframes star-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Component>
  );
}
