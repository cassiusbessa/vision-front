import React from 'react';
import PropTypes from 'prop-types';
import ProjectCardTags from './project-card-tags';
import ProjectCardLinks from './project-card-links';
import { Project } from '../../interfaces';

export default function ProjectCard({ className, project }: { className: string,
  project: Project }) {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <figure className="h-3/5 overflow-hidden">
        <img src={project.image && 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'} alt="Shoes" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body flex flex-col justify-between p-4 h-2/5">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h3 className="card-title">
            {project.title}
          </h3>
          <p className="whitespace-pre-line">{project.description}</p>
        </article>
        <div className="card-actions justify-between">
          <ProjectCardLinks />
          <ProjectCardTags tags={project.tags} />
        </div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
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

ProjectCard.propTypes = {
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
