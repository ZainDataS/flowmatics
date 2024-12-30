import React from 'react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <Section accent>
      <div className="max-w-4xl mx-auto">
        <SectionTitle 
          title="Get Started with flowmatics.ai"
          subtitle="Transform your business with intelligent automation"
        />
        <ContactForm />
      </div>
    </Section>
  );
}