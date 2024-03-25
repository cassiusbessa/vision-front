import React from 'react';
import Header from './components/header';
import { projectsMock } from './mocks';
import { ProjectPostContainer } from './components/project';
import UserIcon from './components/user-icon';

export default function Home() {
  const user = {
    fullName: 'John Doe',
    image: 'https://i.pravatar.cc/150?img=68',
  };
  return (
    <div className="bg-base-200 flex flex-col items-center min-h-screen h-screen overflow-y-auto">
      <Header />
      <div className="w-3/4 md:w-1/2 mt-6 flex flex-row gap-2 bg-base-100 items-center p-4">
        <UserIcon src={user.image} />
        <label htmlFor="post-project" className="input input-bordered flex items-center gap-2 w-full bg-base-100 border-1 border-solid rounded-2xl border-slate-300">
          <span className="text-xl sr-only">🚀</span>
          <input id="post-project" type="text" className="grow input-bordered" placeholder="Compartilhe seu projeto!" />
        </label>
      </div>
      <ProjectPostContainer projectsInfo={projectsMock} />
    </div>
  );
}
