/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import { Project } from '../../interfaces';
import ProjectCardLinks from './project-card-links';
import ProjectCardTags from './project-card-tags';

export default function StarProject({ className, project }: { className: string,
  project: Project }) {
  return (
    <div className={`card md:card-side shadow-xl ${className}`}>
      <div className="card-body h-2/5 w-full md:h-full md:w-1/2 flex flex-col pb-0">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h1 className="card-title font-bold my-1 sm:text-6xl">{project.title}</h1>
          <p className="whitespace-pre-line sm:text-xl">{project.description}</p>
        </article>
        <div className="flex-grow" />
        <div className="hidden md:flex justify-between align-bottom">
          <ProjectCardLinks links={project.links} />
          <ProjectCardTags tags={project.tags} />
        </div>
      </div>
      <figure className="flex justify-center items-center h-3/5 w-full md:h-full md:w-1/2">
        <img src={project.image} alt="Project" className="max-h-full max-w-full object-contain" />
      </figure>
    </div>
  );
}

StarProject.defaultProps = {
  className: '',
  project: {
    id: '1',
    title: 'Super Project',
    description: 'This is a super project',
    tags: ['best', 'project'],
    links: {
      github: 'github.com',
      demo: 'demo.com',
    },
    image: 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
  },
};

StarProject.propTypes = {
  className: PropTypes.string,
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
};
