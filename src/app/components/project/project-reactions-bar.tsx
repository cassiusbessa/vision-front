import { ReactionsCount } from '@/app/interfaces';
import React from 'react';
import { CiHeart } from 'react-icons/ci';

export default function ProjectReactionsBar({ reactionsCount }:
{ reactionsCount: ReactionsCount }) {
  return (
    <div className="card-info h-fit flex items-center p-2">
      <div className="content flex justify-between border-b-2 border-white border-solid w-full p-1">
        <div className="left-reactions h-fit flex items-center gap-2">
          <CiHeart size={24} />
          <p className="h-fit text-center">{reactionsCount.heart }</p>
        </div>
        <div className="right-reactions">
          <span className="h-fit">
            {reactionsCount.comment}
            {' '}
            Comentários
          </span>
        </div>
      </div>
    </div>
  );
}
