/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { ProjectInfo } from '@/app/interfaces';
// import projectImage from '@/app/assets/project.jpg';
import ProjectCardTags from './project-card-tags';
import ProjectCardLinks from './project-card-links';
import ProjectAuthor from './project-author';

export default function ProjectCard({ className, projectInfo, profile }: { className: string,
  projectInfo: ProjectInfo, profile: boolean }) {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <figure className="h-3/6 overflow-hidden">
        <img src={projectInfo.project.image} alt="Project" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body flex flex-col justify-between p-4 pb-0 h-3/6">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h3 className="card-title">
            {projectInfo.project.title}
          </h3>
          <p className="whitespace-pre-line">{projectInfo.project.description}</p>
        </article>
        <div className="card-actions justify-between items-center">
          {profile ? (

            <ProjectAuthor user={projectInfo.user} projectName={projectInfo.project.title} />
          ) : <ProjectCardLinks links={projectInfo.project.links} /> }
          <ProjectCardTags tags={projectInfo.project.tags} />
        </div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  className: '',
  profile: false,
  projectInfo: {
    project: {
      id: '',
      title: '',
      description: '',
      tags: [],
      links: {
        github: '',
        demo: '',
      },
      image: '',
    },
    user: {
      fullName: '',
      image: '',
    },
  },
};

ProjectCard.propTypes = {
  className: PropTypes.string,
  projectInfo: PropTypes.shape({
    project: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      tags: PropTypes.arrayOf(PropTypes.string),
      links: PropTypes.shape({
        github: PropTypes.string,
        demo: PropTypes.string,
      }),
      image: PropTypes.string,
    }),
    user: PropTypes.shape({
      fullName: PropTypes.string,
      image: PropTypes.string,
    }),
  }),
  profile: PropTypes.bool,
};
