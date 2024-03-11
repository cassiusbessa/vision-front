/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { Comment } from '@/app/interfaces';

function ProjectPostCommentWithReply({ comment }: { comment: Comment }) {
  return (
    <div className="ml-8 ">
      <ProjectPostComment comment={comment} />
    </div>
  );
}

export default function ProjectPostComment({ comment }: { comment: Comment }) {
  const postDate = '25 de Fevereiro, 2024';

  return (
    <div className="rounded-lg shadow-md p-4 mx-4 my-2 relative bg-base-200">
      <div className="flex items-start">
        <img className="w-10 h-10 rounded-full mr-4" src={comment.user.image} alt="User Avatar" />
        <div>
          <h4 className="font-bold">{comment.user.fullName}</h4>
          <p className="text-gray-600">{comment.content}</p>
        </div>
      </div>
      <div className="absolute top-0 right-0 mt-1 mr-1 text-xs text-gray-500">
        {postDate}
      </div>
      {comment.replies.map((reply) => (
        <ProjectPostCommentWithReply key={reply.date} comment={reply} />
      ))}
    </div>
  );
}
