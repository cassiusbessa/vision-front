import React from 'react';
import Header from './components/header';
import ProjectPostCard from './components/project/project-post-card';
import { projectsMock } from './mocks';

export default function Home() {
  return (
    <div className="bg-base-200 flex flex-col items-center min-h-screen h-screen overflow-y-auto">
      <Header />
      <ProjectPostCard projectInfo={projectsMock[0]} className="m-8" />
      <ProjectPostCard projectInfo={projectsMock[1]} className="m-8" />
    </div>
  );
}
