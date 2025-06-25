'use client';

import { CursorExplosion } from '@/components/devcard/cursor-explosion';
import { Footer } from '@/components/devcard/footer';
import { Header } from '@/components/devcard/header';
import { Projects } from '@/components/devcard/projects';

const projectsData = [
  {
    id: '1',
    title: 'Project Alpha',
    description: 'A cutting-edge e-commerce platform with a focus on user experience and performance.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce website',
    link: '#',
  },
  {
    id: '2',
    title: 'Project Beta',
    description: 'A data visualization dashboard for analyzing complex datasets in real-time.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'data dashboard',
    link: '#',
  },
  {
    id: '3',
    title: 'Project Gamma',
    description: 'A mobile application for social networking, connecting people with shared interests.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'mobile app',
    link: '#',
  },
    {
    id: '4',
    title: 'Project Delta',
    description: 'An open-source library for simplifying common development tasks.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'code library',
    link: '#',
  },
    {
    id: '5',
    title: 'Project Epsilon',
    description: 'A content management system designed for flexibility and ease of use.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'cms dashboard',
    link: '#',
  },
    {
    id: '6',
    title: 'Project Zeta',
    description: 'A productivity tool that helps teams manage their workflows and collaborate effectively.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'team collaboration',
    link: '#',
  },
];


export default function WorksPage() {
  return (
    <div className="flex flex-col min-h-dvh text-foreground p-4">
      <div className="w-full flex-1 flex flex-col border border-foreground/10 rounded-md">
        <CursorExplosion />
        <Header />
        <main className="flex-1">
            <Projects projects={projectsData} highlightedProjects={[]} isLoading={false} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
