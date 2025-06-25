'use client';

import { useEffect, useRef } from 'react';

export function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (bgRef.current) {
        const { clientX, clientY } = e;
        bgRef.current.style.setProperty('--bg-x', `-${clientX / 50}px`);
        bgRef.current.style.setProperty('--bg-y', `-${clientY / 50}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 -z-50"
      style={{
        backgroundImage: 'radial-gradient(hsl(var(--foreground) / 0.13) 1px, transparent 1px)',
        backgroundSize: '1.5rem 1.5rem',
        backgroundPosition: 'var(--bg-x, 0) var(--bg-y, 0)',
        transition: 'background-position 0.1s linear',
      }}
    />
  );
}
