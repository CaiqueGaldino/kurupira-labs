'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollFloatProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  duration?: number;
}

export default function ScrollFloat({
  children,
  className = '',
  stagger = 0.03,
  duration = 1,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('.char');

    gsap.fromTo(
      chars,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center bottom+=50%',
          end: 'bottom bottom-=40%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, [stagger, duration]);

  const splitText = (text: string) => {
    return text.split('').map((char, index) => (
      <span key={index} className="char inline-block">
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={className}>
      {typeof children === 'string' ? splitText(children) : children}
    </div>
  );
}
