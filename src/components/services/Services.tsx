import React from 'react';
import { MessageSquare, LineChart, Database, Mail } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: MessageSquare,
    title: 'Customer Service AI',
    description: 'Intelligent chatbots and virtual assistants that provide 24/7 customer support with human-like interactions.',
  },
  {
    icon: LineChart,
    title: 'Predictive Analytics',
    description: 'Advanced machine learning models that forecast trends and optimize your business strategies.',
  },
  {
    icon: Database,
    title: 'Data Processing',
    description: 'Automated data processing pipelines that transform raw data into actionable insights.',
  },
  {
    icon: Mail,
    title: 'Smart Marketing',
    description: 'AI-driven marketing campaigns that deliver personalized content to your target audience.',
  },
];

export default function Services() {
  return (
    <Section dark>
      <SectionTitle 
        title="Our Services"
        subtitle="Comprehensive AI solutions powered by flowmatics.ai"
        dark
      />
      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </Section>
  );
}