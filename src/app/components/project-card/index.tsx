import React from 'react';
import PropTypes from 'prop-types';
import ProjectCardTags from './project-card-tags';
import ProjectCardLinks from './project-card-links';

export default function ProjectCard({ className }: { className: string }) {
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <figure className="h-3/5 overflow-hidden">
        <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="h-full w-full object-cover" />
      </figure>
      <div className="card-body flex flex-col justify-between p-4 h-2/5">
        <article className="prose text-ellipsis overflow-hidden ...">
          <h3 className="card-title">
            Shoes!
          </h3>
          <p className="whitespace-pre-line">If a dog chews shoes whose shoes does he choose?</p>
        </article>
        <div className="card-actions justify-between">
          <ProjectCardLinks />
          <ProjectCardTags tags={['React', 'Front-end']} />
        </div>
      </div>
    </div>
  );
}

ProjectCard.defaultProps = {
  className: '',
};

ProjectCard.propTypes = {
  className: PropTypes.string,
};
