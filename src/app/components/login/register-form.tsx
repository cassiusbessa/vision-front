import { useForm } from 'react-hook-form';
import React from 'react';
import DefaultInput from './default-input';

function RegisterForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
        <DefaultInput register={register} type="name" placeholder="Nome" autoComplete='name' data='name' />
        <DefaultInput register={register} type="email" placeholder="Email" autoComplete='email' data='email' />
        <DefaultInput register={register} type="password" placeholder="Senha" autoComplete='password' data='password' />
      <button
        className="btn btn-secondary bg-[#C14080] hover:scale-[1.01] rounded-3xl mt-3 w-full"
        type="submit"
      >
        <span className="text-white text-xl font-light">Criar conta</span>
      </button>
    </form>
  );
}

export default RegisterForm;
