import React from 'react';
import Header from './components/header';
import { projectsMock } from './mocks';
import ProjectPostContainer from './components/project/project-post-container';

export default function Home() {
  return (
    <div className="bg-base-200 flex flex-col items-center min-h-screen h-screen overflow-y-auto">
      <Header />
      <ProjectPostContainer projectsInfo={projectsMock} />
    </div>
  );
}
