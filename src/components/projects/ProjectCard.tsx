import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={image}
        alt={title}
        className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </h3>
        <p className="text-gray-300 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {description}
        </p>
      </div>
    </div>
  );
}