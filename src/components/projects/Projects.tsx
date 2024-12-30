import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Neural Network Analysis',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    description: 'Advanced neural networks for predictive analytics and pattern recognition',
  },
  {
    title: 'Quantum Computing',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    description: 'Next-generation quantum computing solutions for complex problems',
  },
  {
    title: 'AI Infrastructure',
    image: 'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80',
    description: 'Scalable AI infrastructure for enterprise applications',
  },
];

export default function Projects() {
  return (
    <Section className="bg-gray-50">
      <SectionTitle 
        title="Featured Projects"
        subtitle="See our AI automation in action"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </Section>
  );
}