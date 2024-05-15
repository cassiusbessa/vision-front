import { useForm } from "react-hook-form"

const RegisterForm  = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data:any) => {
        console.log(data);
    }

    return (
    <form>
        <div>
            <input 
            className="input-error w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
            type="name" 
            placeholder="Nome"
            {...register("nome", {required: true})}
        />
        </div>
        <div>
            <input
            className="w-full border-2 rounded-3xl p-4 pl-7 m-2 bg-[#4f4f4f] placeholder-white"
            type="email" 
            placeholder="Email"
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
            </div>
            <button onClick={() => {handleSubmit(onSubmit)()}}
                    className="btn btn-secondary bg-[#C14080] hover:scale-[1.01] rounded-3xl mt-3 w-full" 
                    type="submit">
                    <span className="text-white text-xl font-light">Criar conta</span>
            </button>
    </form>
    );
}

export default RegisterForm;