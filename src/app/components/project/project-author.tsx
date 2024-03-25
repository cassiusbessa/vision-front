import React from 'react';
import { User } from '@/app/interfaces';
import UserIcon from '../user-icon';

export default function ProjectAuthor({ user, projectName }: { user: User, projectName: string }) {
  return (
    <div className="author-info flex items-center">
      <UserIcon src={user.image} />
      <div className="ml-2">
        <h4>{user.fullName}</h4>
        <p className="text-xs">{projectName}</p>
      </div>
    </div>
  );
}
