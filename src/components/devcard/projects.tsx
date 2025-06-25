import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  link: string;
}

interface ProjectsProps {
  projects: Project[];
  highlightedProjects: string[];
  isLoading: boolean;
}

export function Projects({ projects, highlightedProjects, isLoading }: ProjectsProps) {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects that showcase my skills and passion for development.
            </p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-56 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter className="p-6">
                  <Skeleton className="h-10 w-28" />
                </CardFooter>
              </Card>
            ))
          ) : (
            projects.map((project) => (
              <Card key={project.id} className={cn('overflow-hidden transition-all duration-300 hover:shadow-xl', highlightedProjects.includes(project.id) && 'ring-2 ring-primary shadow-2xl')}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="object-cover aspect-[3/2] w-full"
                />
                <CardContent className="p-6">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="mt-2 text-card-foreground/80">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6">
                  <Button asChild variant="outline" className="text-foreground">
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
