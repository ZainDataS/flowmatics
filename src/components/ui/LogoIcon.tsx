import React from 'react';

export default function LogoIcon() {
  return (
    <div className="relative w-12 h-12">
      {/* Background circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#78B3CE] to-[#C9E6F0] shadow-lg" />
      
      {/* Geometric shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Sync arrows forming an infinity-like shape */}
        <svg viewBox="0 0 48 48" className="w-8 h-8 text-white">
          <path
            fill="currentColor"
            d="M24 12c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
          />
          <path
            fill="currentColor"
            d="M36 24c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
          />
          <path
            fill="currentColor"
            d="M12 24c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
          />
          {/* Connecting lines */}
          <path
            fill="currentColor"
            d="M18 30c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1H18zm12-12c-.6 0-1-.4-1-1s.4-1 1-1h12c.6 0 1 .4 1 1s-.4 1-1 1H30z"
          />
        </svg>
      </div>
      
      {/* Subtle animation pulse */}
      <div className="absolute inset-0 rounded-full animate-pulse bg-[#78B3CE]/20" />
    </div>
  );
}