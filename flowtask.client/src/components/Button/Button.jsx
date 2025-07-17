export default function Button({handleClick, name, className, type}){
    return(
        <button
        onClick={handleClick}
        className={className}
        type={type}
        >
        {name}</button>
    )
}