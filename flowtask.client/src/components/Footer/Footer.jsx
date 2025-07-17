import Link from '../Icons/Link'
import Contact from '../Icons/Contact'
import Mail from '../Icons/Mail'
import Phone from '../Icons/Phone'
import Copyright from '../Icons/Copyright'
import LinkedIn from '../Icons/LinkedIn'
import GitHub from '../Icons/GitHub'
const Footer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center text-gray-300 text-sm bg-gray-900'> 
        <div className='flex flex-wrap justify-around gap-y-[20px] gap-x-[50px] mt-[50px] after:content-[""] after:w-[350px]'>
          <div className='w-[350px]'>
            <div className='flex flex-row items-center relative right-5'>
              <img src="flowtask-icon.png" className='w-[100px]' alt="logo" />
              <h1 className='text-[1.2rem] font-bold font-inter relative right-[45px] text-gray-300'>FlowTask</h1>
            </div>
            <p className='font-inter text-sm relative bottom-5'>"Manage your productivity"</p>
        </div>
        <div className='w-[350px]'>
            <div className='flex gap-[5px]'>
                <Link/>
                <p className='underline'>Useful Links:</p>
            </div>
            <p className='hover:underline'>- Home</p>
            <p className='hover:underline'>- Login</p>
            <p className='hover:underline'>- Register</p>
            <p className='hover:underline'>- GitHub Repo</p>
        </div>
        <div className='w-[350px]'>
          <div className='flex items-center w-[40%] flex-row gap-[5px] mb-[10px]'>
            <p className='underline'>Contact:</p>
          </div>
          <div className='flex hover:underline cursor-pointer items-center mb-[8px]'>
            <Mail/>: tanjona351@gmail.com
          </div>
          <div className='flex hover:underline   items-center mb-[8px]'>
            <Phone/>: +261 38 63 114 42
          </div>
          <div className='flex hover:underline  items-center mb-[8px]'>
            <LinkedIn/>: Tanjona Naivojaona
          </div>
          <div className='flex hover:underline  items-center mb-[8px]'>
            <GitHub/>: TanjonaNv
          </div>
        </div> 
        </div>
        <div>
        <p className='flex  m-[20px] gap-[5px]'><Copyright/> 2025 FlowTask. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer