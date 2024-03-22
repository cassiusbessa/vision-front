import React from 'react';
import { ProjectInfo } from '@/app/interfaces';
import ProjectPostCard from './project-post-card';

export default function ProjectPostContainer({ className = '', projectsInfo }:
{ className?: string, projectsInfo: ProjectInfo[] }) {
  return (
    <div className={`w-3/4 md:w-1/2 ${className} flex flex-col`}>
      {projectsInfo.map((info) => (
        <ProjectPostCard key={info.project.id} projectInfo={info} className="m-8" />
      ))}
    </div>
  );
}

ProjectPostContainer.defaultProps = {
  className: '',
};
