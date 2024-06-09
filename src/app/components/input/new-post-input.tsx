'use client';

import { User } from '@/app/interfaces';
import React from 'react';
import UserIcon from '../user-icon';

export default function NewPostInput({ user, className = '' }:{ user: User, className: string }) {
  const handleOpenModal = () => {
    const element = document.getElementById('create_projet_modal') as any;
    if (element) element.showModal();
  };

  return (
    <div className={`w-3/4 md:w-8/12 lg:w-1/2 mt-6 flex flex-row gap-2 bg-base-100 items-center p-4 ${className}`}>
      <UserIcon src={user.image} />
      <label htmlFor="post-project" className="input input-bordered flex items-center gap-2 w-full bg-base-100 border-1 border-solid rounded-2xl border-slate-300">
        <span className="text-xl sr-only">🚀</span>
        <input id="post-project" type="text" className="grow input-bordered" placeholder="Compartilhe seu projeto!" onClick={handleOpenModal} />
      </label>
    </div>
  );
}
