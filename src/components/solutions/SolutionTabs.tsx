import React, { useState } from 'react';
import { MessageSquare, GitMerge, Mail } from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const solutions = [
  {
    id: 'support',
    icon: MessageSquare,
    title: 'Customer Support Automation',
    description: 'AI-powered chatbots handle routine inquiries 24/7, while smart routing ensures complex issues reach the right human agents.',
    features: [
      'Instant response to common questions',
      'Multilingual support capabilities',
      'Seamless handoff to human agents',
      'Learning from each interaction'
    ],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'crm',
    icon: GitMerge,
    title: 'Smart CRM Integration',
    description: 'Automate data entry, lead scoring, and follow-ups while maintaining a personal touch in every interaction.',
    features: [
      'Automated data synchronization',
      'Intelligent lead prioritization',
      'Task automation workflows',
      'Performance analytics'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'email',
    icon: Mail,
    title: 'Personalized Email Outreach',
    description: 'AI-driven email campaigns that adapt to recipient behavior and deliver the right message at the right time.',
    features: [
      'Dynamic content personalization',
      'Behavioral trigger automation',
      'A/B testing optimization',
      'Engagement analytics'
    ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  }
];

export default function SolutionTabs() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);
  const activeSolution = solutions.find(s => s.id === activeTab)!;

  return (
    <Section className="bg-gradient-to-b from-background to-background-accent">
      <SectionTitle
        title={<span className="text-gradient">Our Solutions</span>}
        subtitle="Streamline operations and delight customers with flowmatics.ai automation"
        dark
      />
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/3">
          <div className="flex flex-col gap-4">
            {solutions.map((solution) => (
              <button
                key={solution.id}
                onClick={() => setActiveTab(solution.id)}
                className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${
                  activeTab === solution.id
                    ? 'bg-primary/10 border border-primary/20'
                    : 'hover:bg-primary/5 border border-transparent'
                }`}
              >
                <solution.icon className={`w-6 h-6 transition-colors duration-300 ${
                  activeTab === solution.id ? 'text-primary' : 'text-primary/40'
                }`} />
                <span className={`font-semibold transition-colors duration-300 ${
                  activeTab === solution.id ? 'text-text' : 'text-text-light'
                }`}>{solution.title}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:w-2/3">
          <div className="relative rounded-2xl overflow-hidden group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-light opacity-30 blur-lg group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative">
              <img
                src={activeSolution.image}
                alt={activeSolution.title}
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent rounded-2xl" />
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-text">{activeSolution.title}</h3>
            <p className="text-text-light mb-6 leading-relaxed">{activeSolution.description}</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {activeSolution.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary-light group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-text-light group-hover:text-text transition-colors duration-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}