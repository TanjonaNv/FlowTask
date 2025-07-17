import Button from "../button/Button"
import Lock from "../Icons/Lock"
import Mail from "../Icons/Mail"
const Input = ({label, type, placeHolder, name, error, isText, isPass, isMail, onTextChange}) => {
  return (
    <>
        {/* <i className="absolute">{isPass?<Lock/>:""}</i>
        <p className="absolute bg-red-400">{!isMail?<Mail/>:""}</p> */}
        <label className="text-sm font-medium font-inter my-[5px]">{label}</label>
        <input 
            type={type}
            placeholder={placeHolder}
            name={name}
            className={isText?"border border-gray-500 p-2 rounded-[5px] focus:outline focus:border-sky-500":""}
            onChange={isText? (e) => onTextChange(e.target.value): (e) => onTextChange(e.target.checked)}
        />
        <span className="text-red-500 font-inter text-sm">{error}</span>
    </>
  )
}

export default Input