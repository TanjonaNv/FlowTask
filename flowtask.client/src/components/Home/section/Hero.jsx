import Button from "../button/Button"

export default function Hero(){
    return(
        <div className="h-screen flex justify-between w-full mt-[100px] p-[50px]">
            {/* left side */}
            <div className="w-50%] flex flex-col mt-[80px]">
                <h1 className="font-[inter] text-7xl font-bold">Organize Your Day, <br />
                Flow Through Your Tasks.</h1>
                <h3 className="text-[1.3rem] mt-[30px]">
                    FlowTask is your personal task manager to keep 
                    you productive and in control. Plan, organize, and track everything 
                    in one clean space.
                </h3>
                <div className="mt-[50px] w-[350px] flex flex-row justify-between">
                    <Button name={"GET STARTED"}/>
                    <Button name={"LOGIN"}/>
                </div>
            </div>

            {/* right side  */}
            <div className="w-[50%]">
                <img src="../../../../hero_illustration.png" className="relative bottom-[40px]" alt="illustration" />
            </div>
        </div>
    )
}