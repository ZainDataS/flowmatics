import React from 'react';

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-dark z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10 z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent z-[-1]" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark to-transparent z-0" />
      
      {/* Animated grid effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00C2FF12_1px,transparent_1px),linear-gradient(to_bottom,#00C2FF12_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000,transparent)] z-0" />
    </>
  );
}