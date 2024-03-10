'use client';

import React from 'react';

export default function ProjectPostAddComment({ comment, setComment }:
{ comment: string, setComment: (comment: string) => void }) {
  return (
    <div className="flex items-center justify-between p-4">
      <textarea
        className="w-full textarea textarea-bordered resize-none"
        placeholder="Adicione um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="button" className="btn btn-primary ml-2">Enviar</button>
    </div>
  );
}
