import React from 'react';

export default function HeroHeadline() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
        Unlock the Power of AI for
        <span className="block text-gradient mt-2">
          Effortless Customer Experiences
        </span>
      </h1>
      <p className="text-xl text-gray-300 max-w-2xl">
        flowmatics.ai automates customer support, streamlines CRM workflows, and personalizes 
        email outreach to drive growth and customer satisfaction.
      </p>
    </div>
  );
}