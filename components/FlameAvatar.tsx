'use client';

import { useId } from 'react';

interface FlameAvatarProps {
  size?: number;
  className?: string;
  withGlow?: boolean;
}

export default function FlameAvatar({
  size = 40,
  className = '',
  withGlow = true,
}: FlameAvatarProps) {
  const uid = useId().replace(/:/g, '');
  const gradientId = `flame-gradient-${uid}`;
  const highlightId = `flame-highlight-${uid}`;

  return (
    <span
      className={`flame-avatar ${withGlow ? 'flame-avatar--glow' : ''} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg className="flame-avatar__svg" viewBox="0 0 220 220">
        <defs>
          <linearGradient id={gradientId} x1="62" y1="28" x2="166" y2="214" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="0.42" stopColor="#f97316" />
            <stop offset="1" stopColor="#dc2626" />
          </linearGradient>
          <radialGradient id={highlightId} cx="38%" cy="30%" r="70%">
            <stop offset="0" stopColor="#fde68a" stopOpacity="0.85" />
            <stop offset="0.5" stopColor="#fb923c" stopOpacity="0.32" />
            <stop offset="1" stopColor="#f97316" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g className="flame-avatar__body">
          <path
            d="M105.5 18.5c10.8-13.8 32.3-13.1 42.7.8 18.3 24.5 37.5 49.2 50.4 76.9 12.8 27.6 15.8 63.1-1.9 88.4-15.9 22.8-43.6 28.8-83.3 28.8-37.4 0-66-10.1-82.1-36.1-12.2-19.8-11.1-39.3-11.1-61.8V68.1c0-12 7.1-23 18.1-27.8 15.4-6.8 32.4-4.2 46 5.5l21.2-27.3Z"
            fill={`url(#${gradientId})`}
          />
          <path
            d="M105.5 18.5c10.8-13.8 32.3-13.1 42.7.8 18.3 24.5 37.5 49.2 50.4 76.9 12.8 27.6 15.8 63.1-1.9 88.4-15.9 22.8-43.6 28.8-83.3 28.8-37.4 0-66-10.1-82.1-36.1-12.2-19.8-11.1-39.3-11.1-61.8V68.1c0-12 7.1-23 18.1-27.8 15.4-6.8 32.4-4.2 46 5.5l21.2-27.3Z"
            fill={`url(#${highlightId})`}
            className="flame-avatar__highlight"
          />
        </g>

        <g className="flame-avatar__face">
          <ellipse cx="75" cy="130" rx="18" ry="29" fill="#fffaf0" />
          <ellipse cx="151" cy="130" rx="18" ry="29" fill="#fffaf0" />
        </g>
      </svg>
    </span>
  );
}
