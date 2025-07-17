import { useState } from "react"
import Button from "../button/Button"
import Input from "../InputForm/Input"


const Register = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const [isAgreed,setIsAgreed] = useState(false);

   const clicked = () => {
    console.log("clicked")
   }
  return (
    <div className='w-full mt-[100px] h-auto bg-white flex flex-col justify-center items-center'>
        
        <div className="h-auto w-[350px] p-6 rounded-xl bg-white shadow-lg sm:w-[400px] my-[5px] lg:my-[20px] flex flex-col">
            <div className="flex flex-col items-center mb-2">
                <h1 className="text-2xl font-bold">Register to FlowTask</h1>
                <p className="text-md">"Start organizing your tasks now"</p>
            </div> 
            <Input 
            label={"Full Name *:"} 
            type={"text"} 
            placeHolder={"John Doe"} 
            name={"fname"}
            isText={true}
            onTextChange={setFullName}
            />
            <Input 
            label={"Email Address *:"} 
            type={"text"} 
            placeHolder={"johndoe@example.com"} 
            name={"fname"}
            isText={true}
            onTextChange={setEmail}
            />
            <Input 
            label={"Password *:"} 
            type={"password"} 
            name={"fname"}
            isText={true}
            onTextChange={setPassword}
            />
            <Input 
            label={"Confirm Password *:"} 
            type={"password"} 
            name={"fname"}
            isText={true}
            />
            <span className="my-[5px]">* Obligatory</span>
            <div className="flex gap-[10px] flex-row items-center my-[10px]">
                <input 
                type="checkbox"
                className="w-[20px] h-[20px]"
                name="agree"
                onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <p className="text-[1rem] font-inter">I agree to the terms</p>
            </div>
            <button 
                className={`bg-[#16badc] h-[50px] rounded-[5px] text-white font-semibold cursor-pointer disabled:opacity-70`}
                type="button"
                name="terms"
                disabled={!isAgreed}
                onClick={clicked}
            >Register
            </button>
            <div className="text-center my-[10px]">
                <p>Already have an account ? <a>Login</a></p>
            </div>
        </div>
    </div>
  )
}

export default Register