import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar/SideBar'


const Home = () => {
  return (
    <div className='flex'>
      <div className='fixed'>
      <SideBar/>
      </div>
      <div className='w-[100vw] flex flex-col items-end'>
        <div className='w-[80vw] h-[94vh] flex justify-center items-center'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Home