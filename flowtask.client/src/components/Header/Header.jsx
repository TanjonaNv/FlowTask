import Button from "../Home/button/Button"


export default function Header(){
    return (
        <div className="w-full h-[100px] fixed bg-[#e8e8e8] flex-row items-center flex justify-between ">
            <div>
            <img  
            className="w-[200px]"
            src="logo_flowtask.png" 
            alt="Logo_FlowTask" 
            />
            </div>

            <div className="w-[400px] flex items-center justify-evenly h-full">
                {/* TO DO: handleClick redirect to each page */}
                <Button name={"Register"}/>
                <Button name={"Login"}/>
            </div>
        </div>
    )
}