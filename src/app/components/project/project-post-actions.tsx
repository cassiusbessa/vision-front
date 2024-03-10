import React from 'react';
import { GrSend } from 'react-icons/gr';
import { CiHeart } from 'react-icons/ci';
import { FaRegComment } from 'react-icons/fa6';

export default function ProjectPostActions() {
  return (
    <div className="card-links flex items-center justify-evenly">
      <button type="button" className="btn btn-square btn-ghost w-fit h-fit p-1">
        <CiHeart className="md:w-8 md:h-8 w-6 h-6" />
        <span className="hidden md:block">Curtir</span>
      </button>
      <button type="button" className="btn btn-square btn-ghost w-fit h-fit p-1">
        <FaRegComment className="md:w-8 md:h-8 w-6 h-6" />
        <span className="hidden md:block">Comentar</span>
      </button>
      <button type="button" className="btn btn-square btn-ghost w-fit h-fit p-1">
        <GrSend className="md:w-8 md:h-8 w-6 h-6" />
        <span className="hidden md:block">Enviar</span>
      </button>
    </div>
  );
}
