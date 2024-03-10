'use client';

import React, { useState } from 'react';
import { ProjectInfo } from '@/app/interfaces';
import ProjectCardTags from './project-card-tags';
import ProjectAuthor from './project-author';
import ProjectReactionsBar from './project-reactions-bar';
import ProjectPostActions from './project-post-actions';
import ProjectPostAddComment from './project-post-add-comment';

export default function ProjectPostCard({ className, projectInfo }: { className: string,
  projectInfo: ProjectInfo }) {
  const [showMore, setShowMore] = useState(false);
  const [comment, setComment] = useState('');
  return (
    <div className={`card bg-base-100 shadow-xl w-3/4 md:w-1/2 ${className}`}>
      <div className="card-header">
        <div className="info flex justify-between items-center p-2">
          <ProjectAuthor user={projectInfo.user} projectName={projectInfo.project.title} />
          <ProjectCardTags tags={projectInfo.project.tags} />
        </div>
      </div>
      <div className="card-body flex flex-col justify-between pl-4 py-2">
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
      <figure className="max-h-80 overflow-hidden">
        <img src={projectInfo.project.image || 'https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'} alt="Shoes" className="max-h-96 w-full object-cover" />
      </figure>
      <ProjectReactionsBar reactionsCount={{
        heart: 15, comment: 0, share: 0, lastUserReactionFullName: 'Cássius Bessa',
      }}
      />
      <ProjectPostActions />
      <ProjectPostAddComment comment={comment} setComment={setComment} />
    </div>
  );
}
