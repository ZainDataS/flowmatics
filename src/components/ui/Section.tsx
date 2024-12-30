import React from 'react';

interface SectionProps {
  className?: string;
  children: React.ReactNode;
  accent?: boolean;
}

export default function Section({ className = '', children, accent = false }: SectionProps) {
  return (
    <section className={`
      section-padding
      ${accent ? 'bg-background-accent' : 'bg-background'}
      ${className}
    `}>
      <div className="container mx-auto container-padding">
        {children}
      </div>
    </section>
  );
}