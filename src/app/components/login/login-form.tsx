/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import DefaultInput from '../input/default-form-input';
import DefaultCheckBox from '../input/default-form-checkbox';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput register={register} type="email" placeholder="Email" autoComplete="email" data="email" />
      <DefaultInput register={register} type="password" placeholder="Senha" autoComplete="current-password" data="password" />
      <DefaultCheckBox register={register} label="Lembrar de mim" data="remember" />
      <button
        type="submit"
        className="btn btn-secondary bg-[#C14080] hover:scale-[1.01] rounded-3xl mt-3 w-full"
      >
        <span className="text-white text-xl font-light">Continuar com Vision</span>
      </button>
    </form>
  );
}

export default LoginForm;
