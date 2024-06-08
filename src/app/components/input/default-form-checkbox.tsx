/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

function DefaultCheckBox({
  register, label, data,
}:
{ register: UseFormRegister<FieldValues>, label: string, data: string }) {
  return (
    <label
      className="font-light text-xl hover:cursor-pointer w-full"
      htmlFor={label}
    >
      <input
        className="checkbox ml-4 border-blue-500 mr-2 bg-[#4f4f4f]"
        id={label}
        type="checkbox"
        {...register(data)}
      />
      {' '}
      {label}
    </label>
  );
}

export default DefaultCheckBox;
