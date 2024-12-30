import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ChallengeCard from './ChallengeCard';
import { Clock, UserX, Mail } from 'lucide-react';

const challenges = [
  {
    icon: Clock,
    title: 'Long Response Times',
    description: 'Customer inquiries pile up, leading to frustrated customers and lost business opportunities.'
  },
  {
    icon: UserX,
    title: 'Manual CRM Tasks',
    description: 'Hours wasted on data entry and routine tasks that could be automated.'
  },
  {
    icon: Mail,
    title: 'Generic Outreach',
    description: 'Low engagement rates due to impersonal, one-size-fits-all email campaigns.'
  }
];

export default function ChallengeSection() {
  return (
    <Section accent>
      <SectionTitle
        title="Ready to Overcome These Challenges?"
        subtitle="Let flowmatics.ai handle your business automation needs"
      />
      <div className="grid md:grid-cols-3 gap-8">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </Section>
  );
}