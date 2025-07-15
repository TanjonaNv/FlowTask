export default function Button({handleClick, name}){
    return(
        <button
        onClick={handleClick}
        className="h-[50px] font-bold w-[150px] rounded-[5px] border hover:bg-[#3fabdd] hover:text-white hover:border-none cursor-pointer"
        >
        {name}</button>
    )
}