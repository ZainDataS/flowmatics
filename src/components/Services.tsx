import React from 'react';
import { MessageSquare, LineChart, Database, Mail } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Customer Service Automation',
    description: '24/7 customer support with AI-powered chatbots',
  },
  {
    icon: LineChart,
    title: 'Sales Automation',
    description: 'Streamline your sales process and boost conversion rates',
  },
  {
    icon: Database,
    title: 'Data Processing & Analysis',
    description: 'Turn raw data into actionable insights automatically',
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description: 'Personalized marketing campaigns at scale',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-400">Comprehensive AI solutions for your business</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-900 hover:bg-gray-800 transition-colors">
              <service.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}