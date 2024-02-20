import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbWorld } from 'react-icons/tb';

export default function ProjectCardLinks() {
  return (
    <div className="card-links flex items-center">
      <a href="https://github.com" className="btn btn-square btn-ghost w-fit h-fit p-1">
        <FaGithub size={24} />
        <span className="sr-only">GitHub</span>
      </a>
      <a href="https://tailwindcss.com" className="btn btn-square btn-ghost w-fit h-fit p-1">
        <TbWorld size={24} />
        <span className="sr-only">Live</span>
      </a>
    </div>
  );
}
