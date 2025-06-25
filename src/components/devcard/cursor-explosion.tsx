'use client';

import React, { useState, useCallback, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  size: number;
  duration: number;
}

const createParticle = (x: number, y: number): Particle => {
  const angle = Math.random() * 2 * Math.PI;
  const distance = Math.random() * 50 + 50;
  const size = Math.random() * 5 + 2;
  const duration = Math.random() * 0.5 + 0.5;
  
  return {
    id: Date.now() + Math.random(),
    x,
    y,
    angle,
    distance,
    size,
    duration,
  };
};

export function CursorExplosion() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    if ((e.target as HTMLElement).closest('.will-change-transform')) {
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 20 }).map(() =>
      createParticle(e.clientX, e.clientY)
    );
    setParticles((prev) => [...prev, ...newParticles]);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  const onParticleComplete = (particleId: number) => {
    setParticles(current => current.filter(p => p.id !== particleId));
  };

  return (
    <div>
      {particles.map((p) => (
        <ParticleElement key={p.id} particle={p} onComplete={() => onParticleComplete(p.id)} />
      ))}
    </div>
  );
}

const ParticleElement = ({ particle, onComplete }: { particle: Particle, onComplete: () => void }) => {
  const { x, y, angle, distance, size, duration } = particle;

  useEffect(() => {
    const timer = setTimeout(onComplete, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);
  
  const translateX = Math.cos(angle) * distance;
  const translateY = Math.sin(angle) * distance;

  return (
    <div
      className="particle"
      style={{
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`,
        '--translateX': `${translateX}px`,
        '--translateY': `${translateY}px`,
        animationDuration: `${duration}s`,
      } as React.CSSProperties}
    />
  );
};
