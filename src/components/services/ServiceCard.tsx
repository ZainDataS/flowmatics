import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group p-8 rounded-2xl bg-dark-lighter hover:bg-dark-lighter/80 transition-all duration-300 border border-primary/10">
      <div className="relative mb-4">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur transition duration-300" />
        <div className="relative p-3 rounded-lg bg-dark w-fit">
          <Icon className="w-8 h-8 text-primary" />
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}