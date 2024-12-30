import React from 'react';
import { Send } from 'lucide-react';
import Button from '../ui/Button';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white/5 text-white placeholder-gray-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white/5 text-white placeholder-gray-400"
        />
      </div>
      <textarea
        placeholder="Message"
        rows={6}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all bg-white/5 text-white placeholder-gray-400"
      ></textarea>
      <Button icon={Send} className="mx-auto">
        Send Message
      </Button>
    </form>
  );
}