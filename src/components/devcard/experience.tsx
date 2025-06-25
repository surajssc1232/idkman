import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and accomplishments.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Senior Software Engineer</CardTitle>
              <CardDescription>Tech Innovations Inc. | 2020 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Led the development of a new microservices-based architecture, improving system scalability by 50%.</li>
                <li>Mentored junior engineers, fostering a culture of learning and continuous improvement.</li>
                <li>Implemented a CI/CD pipeline that reduced deployment time by 75%.</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Software Engineer</CardTitle>
              <CardDescription>Solutions Co. | 2018 - 2020</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Developed and maintained client-facing web applications using React and Node.js.</li>
                <li>Collaborated with cross-functional teams to define and ship new features.</li>
                <li>Refactored legacy code, improving performance and maintainability.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
