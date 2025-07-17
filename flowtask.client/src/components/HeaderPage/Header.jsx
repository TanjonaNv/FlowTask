import { useState } from "react"
import Button from "../button/Button"

export default function Header(){
    const [isClicked, setIsCliked] = useState(false);
    return (
        <div className="z-10 text-lg bg-gray-100 h-[100px] p-4 fixed flex justify-between items-center w-full  sm:text-xl">
            <div className="flex items-center relative right-7">
                <img  
                    className="w-[80px] relative"
                    src="icon-ft.png" 
                    alt="Logo_FlowTask" 
                />
                <h1 className="text-[#233a56] font-inter font-bold text-2xl w-full relative right-[10px]">FlowTask</h1>
            </div>

            <div className={`${isClicked? "mt-30":""}`}>
                {/* menu burger */}
            <div className="flex w-50 flex-row justify-end">
                <div 
                className={`h-[50px] grid place-content-center  left-50 sm:hidden ${isClicked? "burger-toggle": ""}`}
                onClick={() => {setIsCliked(!isClicked)}}
            >
                <div 
                    className="
                        w-10
                        h-2
                        bg-gray-700
                        rounded-full
                        before:content-['']
                        before:absolute
                        before:w-10
                        before:h-2
                        before:bg-gray-700
                        before:rounded-full
                        before:-translate-y-3
                        after:content-['']
                        after:absolute
                        after:w-10
                        after:h-2
                        after:bg-gray-700
                        after:rounded-full
                        after:translate-y-3
                        after:transition-all
                        after:duration-150
                    "
                ></div>
            </div>
            </div>
            <div className={`w-50 bg-gray-200  rounded-[5px] flex flex-col rounded-[1px]  h-30 justify-around ${isClicked? "block": "hidden"}`}>
                <Button 
                    name={"Register"} 
                    type={"button"}
                    className={"hover:bg-[#16badc] hover:rounded-auto font-inter hover:text-white h-[50%]"}
                />
                <Button 
                    name={"Login"}
                    type={"button"}
                    className={"h-[50%] hover:bg-[#16badc] font-inter hover:text-white"}
                />
            </div>
            </div>

            {/* button sm > screen */}
            <div className="hidden sm:block w-80 sm:flex justify-around">
                <Button 
                    name={"Register"} 
                    type={"button"}
                    className={"font-inter border-1 w-30 h-13 rounded-full"}
                />
                <Button 
                    name={"Login"}
                    type={"button"}
                    className={"font-inter border-1 w-30 h-13 rounded-full"}
                />
            </div>
        </div>
    )
}