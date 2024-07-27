import React from 'react'
import { NavLink } from 'react-router-dom'
import InitialsAvatar from 'react-initials-avatar';
import 'react-initials-avatar/lib/ReactInitialsAvatar.css';
import { useGlobalContext } from '../../Context/provider';

const Cards = ({Name}) => {

  const {userName} = useGlobalContext()

  return (
    <NavLink><div className='w-[9vw] h-[14vh] border rounded border-gray-300 overflow-hidden flex flex-col hover:bg-slate-50 hover:drop-shadow'>
        <div className='h-[35%] w-[100%] bg-[#DCDFE4]'>
            <div className='absolute rounded-full bg-gray-300 h-[5vh] w-[5vh] translate-x-4 translate-y-7 '>
            {Name?<div className='h-[100%] flex justify-center items-center'><p className='text-lg'>🚀</p></div>:<InitialsAvatar name= {userName}/>}
            </div>
        </div>
        <div className='h-[65%] text-sm text-Signin flex items-center justify-center'>
            <span>{Name?'Create Space':userName === '' ? "Your Name":userName}</span>
        </div>
    </div></NavLink>
  )
}

export default Cards