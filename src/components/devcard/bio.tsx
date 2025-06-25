import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export function Bio() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto border-0 shadow-none md:border md:shadow-sm">
          <CardHeader className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left p-6 md:p-8">
            <Avatar className="w-24 h-24 md:w-32 md:h-32 border-2 border-primary/10">
              <AvatarImage src="https://placehold.co/128x128.png" data-ai-hint="profile picture" alt="Developer" />
              <AvatarFallback>DV</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Jane Doe</h1>
              <p className="text-muted-foreground text-lg">Full-Stack Developer | AI Enthusiast</p>
            </div>
          </CardHeader>
          <CardContent className="p-6 md:p-8 pt-0 md:pt-0">
            <p className="text-muted-foreground text-center md:text-left">
              A passionate Full-Stack Developer with a knack for creating elegant solutions in the least amount of time.
              Experienced in building and personalizing web applications using modern technologies like React, Next.js, and Node.js.
              Always curious and ready to tackle new challenges.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
