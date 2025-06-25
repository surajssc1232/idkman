'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Codepen, Github, Linkedin, Mail } from 'lucide-react';
import Link from "next/link";
import React, { useRef, useState } from 'react';

export function Bio() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = -((y - height / 2) / (height / 2)) * 8; // Max rotation 8 degrees
    const rotateY = ((x - width / 2) / (width / 2)) * 8; // Max rotation 8 degrees

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      transition: 'transform 0.1s ease-out',
      transformStyle: 'preserve-3d',
    });
  };

  const onMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
      transformStyle: 'preserve-3d',
    });
  };

  return (
    <Card 
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={style}
      className="relative w-full max-w-md bg-card text-card-foreground rounded-lg shadow-2xl p-8 font-headline text-center border-0 will-change-transform"
    >
      <div style={{ transform: 'translateZ(20px)'}} className="absolute top-4 left-4 text-xs font-body text-card-foreground/70">+1 240.284.6363</div>
      <div style={{ transform: 'translateZ(50px)'}} className="absolute top-4 right-4 text-card-foreground/70">
        <Codepen className="h-6 w-6" />
      </div>

      <CardContent style={{ transform: 'translateZ(40px)'}} className="p-0 pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-[0.2em] uppercase">Suraj Chauhan</h1>
        <p className="text-base font-normal font-body text-card-foreground/80 mt-2 tracking-[0.3em] uppercase">Software Engineer</p>
      </CardContent>

      <div style={{ transform: 'translateZ(30px)'}} className="flex items-center justify-center gap-6">
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full hover:bg-transparent transition-transform hover:scale-125">
            <Link href="mailto:hello@example.com">
                <Mail className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full hover:bg-transparent transition-transform hover:scale-125">
            <Link href="#" target="_blank">
                <Github className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full hover:bg-transparent transition-transform hover:scale-125">
            <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full hover:bg-transparent transition-transform hover:scale-125">
            <Link href="#" target="_blank">
                <Codepen className="h-5 w-5" />
            </Link>
        </Button>
      </div>
    </Card>
  );
}
