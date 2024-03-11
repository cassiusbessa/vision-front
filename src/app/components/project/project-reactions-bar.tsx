import { ReactionsCount } from '@/app/interfaces';
import React from 'react';
import { CiHeart } from 'react-icons/ci';

export default function ProjectReactionsBar({ reactionsCount, showAddComment, setShowAddComment }:
{ reactionsCount: ReactionsCount,
  showAddComment: boolean, setShowAddComment: (showAddComment: boolean) => void }) {
  return (
    <div className="card-info h-fit flex items-center p-2">
      <div className="content flex justify-between border-b-2 border-white border-solid w-full p-1">
        <button type="button" className="left-reactions h-fit flex items-center gap-2 btn-ghost">
          <CiHeart size={24} />
          <p className="h-fit text-center">{reactionsCount.heart }</p>
        </button>
        <button type="button" className="right-reactions btn-ghost" onClick={() => setShowAddComment(!showAddComment)}>
          <span className="h-fit">
            {reactionsCount.comment}
            {' '}
            Comentários
          </span>
        </button>
      </div>
    </div>
  );
}
