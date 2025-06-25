'use client';

import { useState, useEffect } from 'react';
import type { PersonalizeLayoutOutput } from '@/ai/flows/personalize-layout';
import { personalizeLayout } from '@/ai/flows/personalize-layout';

import { Bio } from '@/components/devcard/bio';
import { Contact } from '@/components/devcard/contact';
import { Footer } from '@/components/devcard/footer';
import { Header } from '@/components/devcard/header';
import { Projects } from '@/components/devcard/projects';
import { Skills } from '@/components/devcard/skills';

import { Code, Server, BrainCircuit, Database, Cloud, Palette, TestTube, Bot } from 'lucide-react';

const projectsData = [
  {
    id: 'proj-ai-chatbot',
    title: 'AI-Powered Chatbot',
    description: 'A responsive chatbot application using Next.js and integrated with a powerful AI model for natural language processing.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'chatbot interface',
    link: '#',
  },
  {
    id: 'proj-ecommerce',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with features like product catalog, shopping cart, and secure checkout.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    link: '#',
  },
  {
    id: 'proj-portfolio',
    title: 'This Very Portfolio',
    description: 'A dynamic, single-page developer portfolio built with Next.js, shadcn/ui, and personalized with GenAI.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    link: '#',
  },
];

const skillsData = [
  { id: 'skill-react', name: 'React/Next.js', Icon: Code },
  { id: 'skill-node', name: 'Node.js', Icon: Server },
  { id: 'skill-ai', name: 'AI/ML', Icon: BrainCircuit },
  { id: 'skill-sql', name: 'SQL/NoSQL', Icon: Database },
  { id: 'skill-cloud', name: 'Cloud/DevOps', Icon: Cloud },
  { id: 'skill-uiux', name: 'UI/UX Design', Icon: Palette },
  { id: 'skill-testing', name: 'Testing', Icon: TestTube },
  { id: 'skill-agents', name: 'AI Agents', Icon: Bot },
];


export default function Home() {
  const [highlighted, setHighlighted] = useState<PersonalizeLayoutOutput>({
    highlightedProjects: [],
    highlightedSkills: [],
    layoutAdjustments: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPersonalization = async () => {
      setIsLoading(true);
      const visitorActions = "Visitor spent time looking at projects using React and AI, and viewed the skills section for frontend and AI/ML development.";
      try {
        const result = await personalizeLayout({ visitorActions });
        setHighlighted(result);
      } catch (error) {
        console.error("Failed to personalize layout:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getPersonalization();
  }, []);

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <Header />
      <main className="flex-1 animate-in fade-in duration-500">
        <Bio />
        <Projects projects={projectsData} highlightedProjects={highlighted.highlightedProjects} isLoading={isLoading} />
        <Skills skills={skillsData} highlightedSkills={highlighted.highlightedSkills} isLoading={isLoading} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
