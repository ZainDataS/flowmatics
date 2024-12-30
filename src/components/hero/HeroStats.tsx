import React from 'react';
import { Users, Clock, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '10k+',
    label: 'Customers Served'
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'AI Support'
  },
  {
    icon: Award,
    value: '99.9%',
    label: 'Satisfaction Rate'
  }
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-8">
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            <stat.icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-sm text-gray-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}