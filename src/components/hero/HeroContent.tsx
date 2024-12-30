import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import Logo from '../ui/Logo';
import HeroHeadline from './HeroHeadline';
import HeroStats from './HeroStats';

export default function HeroContent() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-16 py-20">
      <div className="flex flex-col gap-8 lg:w-1/2">
        <Logo />
        <HeroHeadline />
        
        <div className="flex flex-wrap gap-4">
          <Button icon={ArrowRight}>
            Schedule a Free Consultation
          </Button>
          <Button variant="secondary">
            See How It Works
          </Button>
        </div>
        
        <HeroStats />
      </div>

      <div className="lg:w-1/2 relative mt-8 lg:mt-16">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 blur-2xl rounded-full" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
          alt="AI Technology Visualization"
          className="relative rounded-2xl shadow-2xl border border-primary/10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent rounded-2xl" />
      </div>
    </div>
  );
}