import React from 'react';
import { Project } from '@/app/interfaces';
import { ProjectCard } from '../project';

export default function ProjectContainer({ className, projects }: { className: string,
  projects: Project[] }) {
  return (
    <div className={`rounded-2xl px-8 my-4 flex flex-col items-center ${className}`}>
      <article className="prose text-ellipsis overflow-hidden ... text-center flex justify-center p-2 h-full bg-base-200 w-full mt-4">
        <h2 className="text-4xl font-bold text-center">Projetos</h2>
      </article>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} className="my-8 h-96 bg-base-200" />
        ))}
      </div>
    </div>
  );
}
