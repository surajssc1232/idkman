import { Briefcase, Layers, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="w-full p-4 md:p-6">
      <nav className="group mx-auto flex w-full max-w-xs items-center justify-center rounded-full bg-card/5 border border-border backdrop-blur-sm transition-all duration-300 ease-in-out hover:max-w-md">
        <Button asChild variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-transparent flex-1">
          <Link href="/" className="flex flex-col items-center gap-1 p-2 text-xs h-auto transition-transform duration-300 group-hover:scale-105">
            <User className="h-5 w-5" />
            <span>ABOUT</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-transparent flex-1">
          <Link href="/experience" className="flex flex-col items-center gap-1 p-2 text-xs h-auto transition-transform duration-300 group-hover:scale-105">
            <Briefcase className="h-5 w-5" />
            <span>EXPERIENCE</span>
          </Link>
        </Button>
        <Button asChild variant="ghost" className="rounded-full text-foreground/80 hover:text-foreground hover:bg-transparent flex-1">
          <Link href="/works" className="flex flex-col items-center gap-1 p-2 text-xs h-auto transition-transform duration-300 group-hover:scale-105">
            <Layers className="h-5 w-5" />
            <span>WORKS</span>
          </Link>
        </Button>
      </nav>
    </header>
  );
}
