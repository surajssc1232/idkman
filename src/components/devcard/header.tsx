import { BotIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center gap-2" prefetch={false}>
        <BotIcon className="h-6 w-6 text-primary" />
        <span className="font-bold text-lg">DevCard</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#projects" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Projects
        </Link>
        <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Skills
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
