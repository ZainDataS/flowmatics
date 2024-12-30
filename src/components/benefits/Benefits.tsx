import React from 'react';
import { Zap, DollarSign, Users, BarChart } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import BenefitCard from './BenefitCard';

const benefits = [
  {
    icon: Zap,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline your workflows with AI-powered solutions.',
  },
  {
    icon: DollarSign,
    title: 'Reduced Costs',
    description: 'Cut operational expenses by up to 60% and minimize human error through automation.',
  },
  {
    icon: Users,
    title: 'Better Experience',
    description: 'Deliver exceptional customer service at scale with AI-driven interactions.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with real-time analytics and predictive modeling.',
  },
];

export default function Benefits() {
  return (
    <Section className="bg-background-accent">
      <SectionTitle 
        title="Why Choose flowmatics.ai"
        subtitle="Transform your business with intelligent automation"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </Section>
  );
}