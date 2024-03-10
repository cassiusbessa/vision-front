import React, { useState } from 'react';

export default function ProjectPostAddComment({ textareaRef }:
{ textareaRef: React.RefObject<HTMLTextAreaElement> }) {
  const [comment, setComment] = useState('');
  return (
    <div className="flex items-center justify-between p-4">
      <textarea
        ref={textareaRef}
        className="w-full textarea textarea-bordered resize-none"
        placeholder="Adicione um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="button" className="btn btn-primary ml-2">Enviar</button>
    </div>
  );
}
