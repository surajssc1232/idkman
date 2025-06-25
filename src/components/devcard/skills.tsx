import { Card, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  Icon: LucideIcon;
}

interface SkillsProps {
  skills: Skill[];
  highlightedSkills: string[];
  isLoading: boolean;
}

export function Skills({ skills, highlightedSkills, isLoading }: SkillsProps) {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A glimpse into my technical toolbox.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
          {isLoading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="flex flex-col items-center justify-center p-6">
                <Skeleton className="h-10 w-10 rounded-lg mb-4" />
                <Skeleton className="h-6 w-24" />
              </Card>
            ))
          ) : (
            skills.map((skill) => (
              <Card key={skill.id} className={cn('flex flex-col items-center justify-center p-6 transition-all duration-300 hover:shadow-xl', highlightedSkills.includes(skill.id) && 'ring-2 ring-primary shadow-2xl')}>
                <skill.Icon className="h-10 w-10 mb-4 text-primary" />
                <CardTitle className="text-lg text-center">{skill.name}</CardTitle>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
