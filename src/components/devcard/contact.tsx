import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="mailto:hello@example.com">
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" /> Twitter
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
