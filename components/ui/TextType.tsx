'use client';

import { useEffect, useRef, useState } from 'react';

interface TextTypeProps {
  text: string | string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  loop?: boolean;
  showCursor?: boolean;
  cursorCharacter?: string;
  className?: string;
}

export default function TextType({
  text,
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  loop = true,
  showCursor = true,
  cursorCharacter = '_',
  className = '',
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          if (loop || textIndex < texts.length - 1) {
            timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentText.slice(0, displayText.length - 1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typingSpeed);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse">{cursorCharacter}</span>
      )}
    </span>
  );
}
