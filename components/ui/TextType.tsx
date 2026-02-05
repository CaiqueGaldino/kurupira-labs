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
  cursorCharacter = '|',
  className = '',
}: TextTypeProps) {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const texts = Array.isArray(text) ? text : [text];

  useEffect(() => {
    if (isWaiting) return;

    const currentText = texts[textIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Digitando
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          // Terminou de digitar, pausa antes de deletar
          if (loop || textIndex < texts.length - 1) {
            setIsWaiting(true);
            timeoutRef.current = setTimeout(() => {
              setIsWaiting(false);
              setIsDeleting(true);
            }, pauseDuration);
            return;
          }
        }
      } else {
        // Deletando
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          // Terminou de deletar, vai para próximo texto
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(handleTyping, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayText, isDeleting, textIndex, isWaiting, texts, typingSpeed, deletingSpeed, pauseDuration, loop]);

  return (
    <span className={className}>
      {displayText}
      {showCursor && (
        <span className="animate-pulse">{cursorCharacter}</span>
      )}
    </span>
  );
}
