import React from 'react';
import { Zap, DollarSign, Users, BarChart } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and streamline your workflows',
  },
  {
    icon: DollarSign,
    title: 'Reduced Costs',
    description: 'Cut operational expenses and minimize human error',
  },
  {
    icon: Users,
    title: 'Better Experience',
    description: 'Deliver exceptional customer service at scale',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Make informed decisions with AI-powered analytics',
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose pixel.ai</h2>
          <p className="text-xl text-gray-600">Transform your business with intelligent automation</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <benefit.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}