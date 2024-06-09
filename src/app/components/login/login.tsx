'use client';

import React, { useState } from 'react';
import LoginForm from './login-form';
import RegisterForm from './register-form';
import AltLogin from './alternatives-login';

function Login() {
  const [activeForm, setActiveForm] = useState('login');

  const activeFormText = 'text-[#f769AF] hover:cursor-pointer hover:text-[#f769AF] hover:underline text-xl';
  const inactiveFormText = 'hover:cursor-pointer hover:text-[#f769AF] hover:underline text-xl';

  return (
    <div className="my-4 w-full flex justify-center">
      <div className="w-10/12 max-w-[560px] h-fit bg-[#3c3c3c] border border-slate-400 rounded-3xl py-8 px-4 md:py-8 md:px-12 shadow-lg backdrop-filter backdrop-blur-sm relative">
        <div className="text-center m-3 text-4x1 text-xl font-medium">
          <h1>Seja bem vindo ao</h1>
          <span className="bg-gradient-to-r from-[#8042BF] to-[#B44480] bg-clip-text text-transparent font-extrabold text-4xl">VISION</span>
        </div>
        <div className="text-center">
          <button type="button" onClick={() => { setActiveForm('login'); }} className={activeForm === 'login' ? `m-4 ${activeFormText}` : `m-4 ${inactiveFormText}`}>Entrar</button>
          <button type="button" onClick={() => { setActiveForm('register'); }} className={activeForm === 'register' ? `m-4 ${activeFormText}` : `m-4 ${inactiveFormText}`}>Registre-se</button>
        </div>
        {activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
        <hr className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
        <AltLogin />
        <button type="button" className="pl-6 font-light text-xl">Esqueceu a senha?</button>
      </div>
    </div>
  );
}

export default Login;
