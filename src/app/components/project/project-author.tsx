import React from 'react';
import { User } from '@/app/interfaces';

export default function ProjectAuthor({ user }: { user: User }) {
  return (
    <div className="author-info flex items-center">
      <div className="w-10">
        <img alt="User Icon" className="rounded-full" src={user.image} />
      </div>
      <div className="ml-2">
        <h4>{user.fullName}</h4>
      </div>
    </div>
  );
}
