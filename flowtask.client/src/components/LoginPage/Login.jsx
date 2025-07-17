import Input from '../InputForm/Input';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isAgreed,setIsAgreed] = useState(false);
  return (
    <div className='w-full mt-[100px] h-auto bg-white flex flex-col justify-center items-center'>
    <div className="h-auto w-[350px] p-6 rounded-xl bg-white shadow-2xl sm:w-[400px] mt-[60px] lg:my-[20px] xl:mt-[100px] flex flex-col">
            <div className="flex flex-col items-center mb-2">
                <h1 className="text-2xl font-bold">Welcome Back 👋</h1>
                <p className="text-md">Log in to your FlowTask</p>
            </div> 
            <Input 
            label={"Email Address:"} 
            type={"text"} 
            placeHolder={"johndoe@example.com"} 
            name={"fname"}
            isText={true}
            onTextChange={setEmail}
            />
            <Input 
            label={"Password:"} 
            type={"password"} 
            name={"fname"}
            isText={true}
            onTextChange={setPassword}
            />
            <div className="flex gap-[10px] flex-row items-center mt-[10px]">
                <input 
                type="checkbox"
                className="w-[20px] h-[20px]"
                name="agree"
                onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <p className="text-[1rem] font-inter">Remember me</p>
            </div>
            <span className="my-[10px] text-sm">Forgot password?</span>
            <button 
                className={`bg-[#16badc] h-[50px] rounded-[5px] text-white font-semibold cursor-pointer disabled:opacity-70`}
                type="button"
                name="terms"
            >Login
            </button>
            <div className="text-center my-[10px]">
                <p>Don't have an account ? <a>Register</a></p>
            </div>
        </div>
    </div>
  )
}

export default Login