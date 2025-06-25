'use client';

import { Bio } from '@/components/devcard/bio';
import { CursorExplosion } from '@/components/devcard/cursor-explosion';
import { Footer } from '@/components/devcard/footer';
import { Header } from '@/components/devcard/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground p-4">
      <div className="w-full flex-1 flex flex-col border border-foreground/10 rounded-md">
        <CursorExplosion />
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <Bio />
        </main>
        <Footer />
      </div>
    </div>
  );
}
