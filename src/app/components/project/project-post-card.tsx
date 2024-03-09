'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ProjectInfo } from '@/app/interfaces';
import ProjectCardTags from './project-card-tags';
import ProjectAuthor from './project-author';

export default function ProjectPostCard({ className, projectInfo }: { className: string,
  projectInfo: ProjectInfo }) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <div className="card-header">
        <div className="info flex justify-between items-center p-2">
          <ProjectAuthor user={projectInfo.user} projectName={projectInfo.project.title} />
          <ProjectCardTags tags={projectInfo.project.tags} />
        </div>
      </div>
      <div className="card-body flex flex-col justify-between pl-4">
        <article className="prose text-ellipsis overflow-hidden ...">
          <p>
            {showMore ? projectInfo.project.description
              : projectInfo.project.description.substring(0, 100)}
            { projectInfo.project.description.length > 100
            && (
            <button
              type="button"
              className="ml-2 text-secondary"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? 'ver menos...' : '...ver mais'}
            </button>
            )}
          </p>
        </article>
      </div>
      <figure className="h-4/5 overflow-hidden">
        <img src={projectInfo.project.image && 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'} alt="Shoes" className="h-full w-full object-cover" />
      </figure>
    </div>
  );
}

ProjectPostCard.defaultProps = {
  className: '',
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

ProjectPostCard.propTypes = {
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
};
