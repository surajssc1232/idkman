'use client';

import { Bio } from '@/components/devcard/bio';
import { Footer } from '@/components/devcard/footer';
import { Header } from '@/components/devcard/header';

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground">
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Bio />
      </main>
      <Footer />
    </div>
  );
}
