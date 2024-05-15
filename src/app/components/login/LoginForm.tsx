import { useForm } from "react-hook-form"

const LoginForm  = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data:any) => {
        console.log(data);
    }

    return (
    <form>
        <div>
            <input 
            className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
            type="email" 
            placeholder="E-mail"
            {...register("email", {required: true})}
        />
        </div>
        <div>
            <input 
            className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
            type="password" 
            placeholder="Senha"
            {...register("senha", {required: true})}
        />
        </div>
        <div>
            <div className="flex p-1">
            <input 
                className="checkbox ml-4 border-blue-500 mr-2 bg-[#4f4f4f] border-white"
                id="remember"
                type="checkbox" 
                {...register("remember")}
                />
                <label
                className="font-light text-xl hover:cursor-pointer"
                htmlFor="remember"> Deseja continuar conectado?</label>
            </div>
        </div>
        <button onClick={() => {handleSubmit(onSubmit)()}}
                className="btn btn-secondary bg-[#C14080] hover:scale-[1.01] rounded-3xl mt-3 w-full" 
                >
                <span className="text-white text-xl font-light">Continuar com Vision</span>
        </button>
    </form>
    );
}

export default LoginForm;