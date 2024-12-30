import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ChallengeCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ChallengeCard({ icon: Icon, title, description }: ChallengeCardProps) {
  return (
    <div className="p-6 rounded-xl bg-dark border border-primary/10 hover:border-primary/30 transition-colors">
      <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}