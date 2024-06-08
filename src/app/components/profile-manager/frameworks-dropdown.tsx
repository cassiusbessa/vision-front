import React from 'react';
import { FrameWork } from '@/app/interfaces';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import DefaultCheckBox from '../input/default-form-checkbox';

function FrameworksDropdown({ frameWorks, register }:
{ frameWorks: FrameWork[], register: UseFormRegister<FieldValues> }) {
  return (
    <details className="dropdown w-full border-2 rounded-3xl m-2 bg-[#4f4f4f] flex">
      <summary className="btn w-full p-0  bg-[#4f4f4f] hover:bg-[#4f4f4f] flex justify-start rounded-3xl">
        <span className="text-start start-0 pl-8 text-white">Principais Frameworks</span>
      </summary>
      <ul className="p-2 shadow dropdown-content z-[1] bg-base-100 rounded-box w-52 max-h-32 overflow-y-scroll flex flex-col">
        {frameWorks.map((framework) => (
          <li key={framework.id} className="w-full">
            <DefaultCheckBox
              label={framework.name}
              data={framework.id}
              register={register}
            />
          </li>
        ))}
      </ul>
    </details>
  );
}

export default FrameworksDropdown;
