import React from 'react'
import { NavLink } from 'react-router-dom'
import './navStyle.css'
import { useGlobalContext } from '../../Context/provider'
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';

const Navbar = () => {

  const {isLogin,userName} = useGlobalContext();

  return (
    <div className='flex flex-col'>
      <nav className='drop-shadow-md w-[100vw] h-[6vh] bg-backGround flex flex-row justify-center items-center font-medium text-lg'>
        <div className='w-[95vw] h-[6vh] flex flex-row justify-between items-center '>
          <div>
            <h1>My Tasks</h1>
          </div>
          <div className='flex flex-row gap-4 desktopMenuItems'>
            <li className='list-none'><NavLink to='/' ><button className='rounded hover:bg-slate-100'>Home</button></NavLink></li>
            <div className='rounded w-[0.10vw] h-[4vh] bg-Line ml-1'></div>
            
            {
            isLogin ? <div className='bg-black overflow-hidden h-[4.3vh] w-[4.3vh] border-2 flex justify-center items-center rounded-full'><InitialsAvatar name= {userName}/></div>:<><li className='list-none'><NavLink to='/register'><button className='rounded hover:bg-slate-100'>Register</button></NavLink></li>
            <li className='list-none'><NavLink to='/login'><button className='rounded bg-Signin text-white hover:bg-SigninHover'>Login</button></NavLink></li></>
            }
          
          </div>
        </div>
      </nav>
          <label className='hamburgerMenu'>
            <input type="checkbox"/>
          </label>
      <div className='flex w-[100vw] h-[30vh] bg-backGround justify-center items-center mobileMenuItems'>
        <div className="flex flex-col justify-center gap-2">
          <NavLink to='/'><li className='list-none flex items-center w-[80vw] h-[5vh] rounded-sm hover:bg-slate-100'><div className='ml-2'>Home</div></li></NavLink>
          <NavLink to='/about'><li className='list-none flex items-center w-[80vw] h-[5vh] rounded-sm hover:bg-slate-100'><div className='ml-2'>About</div></li></NavLink>
          <NavLink to='/contact'><li className='list-none flex items-center w-[80vw] h-[5vh] rounded-sm hover:bg-slate-100'><div className='ml-2'>Contact</div></li></NavLink>
          <div className='rounded w-[100%] h-[0.15vw] bg-Line'></div>
          <div className='grid grid-cols-2 justify-items-center'>
            <div className='list-none mobileList'><NavLink to='/register'><button className='mobileButton rounded bg-slate-100'>Register</button></NavLink></div>
            <div className='list-none mobileList'><NavLink to='/login'><button className='mobileButton rounded bg-Signin text-white hover:bg-SigninHover'>Login</button></NavLink></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar