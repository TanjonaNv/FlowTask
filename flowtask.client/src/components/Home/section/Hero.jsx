import Button from "../../button/Button"

export default function Hero(){
    return(
        <div className="h-screen flex justify-center items-center w-full">
            <div className="flex flex-row justify-between h-screen mt-[350px] w-full">
                {/* left side */}
            <div className="flex flex-col ml-[10px] w-full sm:w-[60%] md:ml-[50px]">
                <h1 className="font-inter font-bold text-4xl md:text-5xl lg:text-6xl">Organize Your Day, <br />
                Flow Through Your Tasks.</h1>
                <h3 className="mt-[20px] text-sm md:text-md lg:text-lg xl:text-xl">
                    FlowTask is your personal task manager to keep 
                    you productive and in control. Plan, organize, and track everything 
                    in one clean space.
                </h3>
                <div className="mt-[25px] flex justify-around w-[90%] lg:w-[50%]">
                    <Button 
                        name={"GET STARTED"}
                        type={"button"}
                        className={"rounded-full h-[50px] p-[4px] w-[150px] text-sm font-inter bg-[#16badc] text-white md:text-1xl md:p-[10px]"}
                    />
                    <Button 
                        name={"LOGIN"}
                        type={"button"}
                        className={"rounded-full p-[4px] text-sm border-[1px] w-[100px]"}
                    />
                </div>
            </div>

            {/* right side  */}

            <div className="hidden sm:block">
                <img 
                    src="illustration-h.png" 
                    alt="illustration" 
                    className="w-[400px]"
                />
            </div>
            </div>

        </div>
    )
}