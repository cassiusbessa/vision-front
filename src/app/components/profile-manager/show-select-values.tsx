import React from 'react';
import { FrameWork } from '@/app/interfaces';

function ShowSelectedFrameworks({ frameWorks }: { frameWorks: FrameWork[] }) {
  const frameWorksToValues = () => {
    const value = '';
    frameWorks.forEach((frameWork) => {
      value.concat(frameWork.name);
    });
    return value;
  };

  return (
    <input
      className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
      type="text"
      placeholder="Frameworks Selecionados"
      autoComplete="frameworks"
      value={frameWorksToValues()}
    />
  );
}

export default ShowSelectedFrameworks;
