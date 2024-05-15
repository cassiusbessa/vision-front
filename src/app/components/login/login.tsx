'use client'
import React, { useState } from 'react';
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import AltLogin from './alternatives_login';

const Login = () => {
    
    const [action, setAction] = useState("login");

    return (
        <div className="mx-auto ">
            <div className="bg-[#3c3c3c] border border-slate-400 rounded-3xl p-8 shadow-lg backdrop-filter backdrop-blur-sm relative">
                <div className="text-center m-3 text-4x1 text-xl font-medium">
                    <h1>Seja bem vindo ao</h1>
                    <span className="bg-gradient-to-r from-[#8042BF] to-[#B44480] bg-clip-text text-transparent font-extrabold text-4xl">VISION</span>
                </div>
                <div className="text-center">
                    <a onClick={() => {setAction("login")}} className={action === "login" ? "m-4 text-[#f769AF] hover:cursor-pointer hover:text-[#f769AF] hover:underline text-xl" : "m-4 hover:cursor-pointer  hover:text-[#f769AF] hover:underline text-xl"}>Entrar</a>
                    <a onClick={() => {setAction("register")}} className={action === "register" ? "m-4 text-[#f769AF] hover:cursor-pointer hover:text-[#f769AF] hover:underline text-xl" : "m-4 hover:cursor-pointer hover:text-[#f769AF] hover:underline text-xl"}>Registre-se</a>
                </div>
                <div className="mt-8">
                {action === "login" ? <LoginForm/> : <RegisterForm/>} 
               
                </div>
                <hr className="my-8 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-30 dark:via-neutral-400" />
                <AltLogin/>
                <a className="pl-6 font-light text-xl" href="#">Esqueceu a senha?</a>
            </div>
        </div>
    )
}

export default Login