import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-black text-white">
      <HeroBackground />
      <div className="container mx-auto px-6 relative z-10">
        <HeroContent />
      </div>
    </div>
  );
}