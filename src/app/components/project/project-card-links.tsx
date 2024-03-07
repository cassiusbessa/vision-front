import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

export default function ProjectCardLinks({ github, demo }: { github: string, demo: string }) {
  return (
    <div className="card-links flex items-center">
      <a href={github} className="btn btn-square btn-ghost w-fit h-fit p-1">
        <FaGithub size={24} />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={demo} className="btn btn-square btn-ghost w-fit h-fit p-1">
        <TbWorld size={24} />
        <span className="sr-only">Live</span>
      </a>
    </div>
  );
}

ProjectCardLinks.defaultProps = {
  github: 'https://github.com',
  demo: 'https://tailwindcss.com',
};

ProjectCardLinks.propTypes = {
  github: PropTypes.string,
  demo: PropTypes.string,
};
