import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-8 max-w-4xl">
          <Bot className="w-16 h-16 text-purple-500" />
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
            Unlock Growth with AI-powered Automation
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
            Streamline workflows, boost productivity, and gain a competitive edge with our custom AI automation solutions.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="group flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}