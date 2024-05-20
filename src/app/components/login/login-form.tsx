import React from 'react';
import { useForm } from 'react-hook-form';
import DefaultInput from './default-input';

function LoginForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log(data);
  };

  return (
    <form className="h-full" onSubmit={handleSubmit(onSubmit)}>
      <DefaultInput register={register} type="email" placeholder="Email" autoComplete='email' data='email' />
        <DefaultInput register={register} type="password" placeholder="Senha" autoComplete='current-password' data='password' />
        <div className="flex p-1">
          <input
            className="checkbox ml-4 border-blue-500 mr-2 bg-[#4f4f4f]"
            id="remember"
            type="checkbox"
            {...register('remember')}
          />
          <label
            className="font-light text-xl hover:cursor-pointer"
            htmlFor="remember"
          >
            {' '}
            Deseja continuar conectado?
          </label>
        </div>
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
