'use client';

import { Experience } from '@/components/devcard/experience';
import { Footer } from '@/components/devcard/footer';
import { Header } from '@/components/devcard/header';
import { CursorExplosion } from '@/components/devcard/cursor-explosion';

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground p-4">
      <div className="w-full flex-1 flex flex-col border border-foreground/10 rounded-md">
        <CursorExplosion />
        <Header />
        <main className="flex-1">
          <Experience />
        </main>
        <Footer />
      </div>
    </div>
  );
}
