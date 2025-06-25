import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Codepen, Github, Linkedin, Mail } from 'lucide-react';
import Link from "next/link";

export function Bio() {
  return (
    <Card className="relative w-full max-w-md bg-card text-card-foreground rounded-lg shadow-2xl p-8 font-headline text-center border-0">
      <div className="absolute top-4 left-4 text-xs font-body text-card-foreground/70">+1 240.284.6363</div>
      <div className="absolute top-4 right-4 text-card-foreground/70">
        <Codepen className="h-6 w-6" />
      </div>

      <CardContent className="p-0 pt-12 pb-10">
        <h1 className="text-4xl font-bold tracking-[0.2em] uppercase">Jane Doe</h1>
        <p className="text-base font-normal font-body text-card-foreground/80 mt-2 tracking-[0.3em] uppercase">Software Engineer</p>
      </CardContent>

      <div className="flex items-center justify-center gap-6">
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full">
            <Link href="mailto:hello@example.com">
                <Mail className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full">
            <Link href="#" target="_blank">
                <Github className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full">
            <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" />
            </Link>
        </Button>
        <Button asChild variant="ghost" size="icon" className="text-card-foreground/70 hover:text-card-foreground rounded-full">
            <Link href="#" target="_blank">
                <Codepen className="h-5 w-5" />
            </Link>
        </Button>
      </div>
    </Card>
  );
}
