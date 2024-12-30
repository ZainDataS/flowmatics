import React from 'react';
import Hero from './components/hero/Hero';
import ChallengeSection from './components/challenges/ChallengeSection';
import SolutionTabs from './components/solutions/SolutionTabs';
import Benefits from './components/benefits/Benefits';
import Contact from './components/contact/Contact';

function App() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <ChallengeSection />
      <SolutionTabs />
      <Benefits />
      <Contact />
    </main>
  );
}

export default App;