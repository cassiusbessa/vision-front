/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

function DefaultInput({
  register, type, placeholder, autoComplete, data,
}:
{ register: UseFormRegister<FieldValues>,
  type: string, placeholder: string, autoComplete: string, data:string }) {
  return (
    <input
      className="w-full border-2 rounded-3xl p-4 bg-[#4f4f4f] placeholder-white"
      type={type}
      placeholder={placeholder}
      autoComplete={autoComplete}
      {...register(data, { required: true })}
    />
  );
}

export default DefaultInput;
