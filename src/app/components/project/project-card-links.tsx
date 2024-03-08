import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';
import { ProjectLinks } from '@/app/interfaces';

export default function ProjectCardLinks({ links } : { links: ProjectLinks }) {
  return (
    <div className="card-links flex items-center">
      <a href={links && (links.github || 'https://github.com')} className="btn btn-square btn-ghost w-fit h-fit p-1">
        <FaGithub size={24} />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={links && (links.demo || 'https://github.com')} className="btn btn-square btn-ghost w-fit h-fit p-1">
        <TbWorld size={24} />
        <span className="sr-only">Live</span>
      </a>
    </div>
  );
}

ProjectCardLinks.propTypes = {
  links: PropTypes.shape({
    github: PropTypes.string,
    demo: PropTypes.string,
  }).isRequired,
};
