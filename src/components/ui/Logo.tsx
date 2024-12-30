import React from 'react';
import LogoIcon from './LogoIcon';
import LogoText from './LogoText';

export default function Logo() {
  return (
    <div className="flex items-center gap-4">
      <LogoIcon />
      <LogoText />
    </div>
  );
}