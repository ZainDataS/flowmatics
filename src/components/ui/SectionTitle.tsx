import React from 'react';

interface SectionTitleProps {
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({ 
  title, 
  subtitle, 
  align = 'center',
  className = ''
}: SectionTitleProps) {
  return (
    <div className={`
      mb-12 
      ${align === 'center' ? 'text-center' : 'text-left'}
      ${className}
    `}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-light text-lg md:text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}