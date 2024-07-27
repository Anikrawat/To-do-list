import React from 'react'
import Cards from '../../../Cards/Cards'
import './overview.css'
import Cards2 from '../../../Cards/Cards2'
import { useGlobalContext } from '../../../../Context/provider'

const Overview = () => {
  const {userName,isLogin} = useGlobalContext()
  return (
      <div className='w-[75vw] h-[80vh] rounded shadow-lg grid grid-rows-5 grid-cols-3 gap-3 overflow-hidden'>
        <div className='col-span-3 row-span-1 flex items-center bg-[#ffcdb2]'>
          <h1 className='ml-[2vw] text-3xl text-[#885148]'>Welcome{` ${userName}`}</h1>
        </div>
        <div className='col-span-1 row-span-4 flex justify-center '>
          <div className='grid grid-cols-1 grid-rows-3 gap-0 content-center justify-items-center'>
            <div className='w-[85%] h-[95%] flex flex-col gap-2 justify-center items-center'>
              <h1 className='text-lg gridElement2'>First things first: Your Task Manager site is made up of <span className='text-[#AB2D23]'>Spaces</span>.</h1>
              <p className='text-sm text-gray-600'>What is a space, anyway? Think of them as places for you, your teams, and your company to organize and work on ideas, projects, documents, and more.</p>
            </div>

            <div className='w-[85%] h-[95%] flex flex-col gap-2 justify-center items-center'>
              <h1 className='text-lg gridElement2'>Spaces are made up of content like <span className='text-[#AB2D23]'>pages</span> and blog posts.</h1>
              <p className='text-sm text-gray-600'>Your personal space already has a page to help you create purposeful content, right away.</p>
            </div>

            <div className='w-[85%] h-[95%] flex flex-col gap-2 justify-center'>
              <h1 className='text-lg gridElement2'>Task Manager is better with teammates.</h1>
              <p className='text-sm text-gray-600'><span className='text-[#AB2D23]'>Invite</span> people to help set up your site and spaces and start collaborating on content. Here's an example of what that might look like:</p>
            </div>
          </div>
        </div>
        
        <div className='col-span-2 row-span-4 grid grid-rows-5 content-center'>
          <div className='w-[100%] h-[100%] flex items-center gap-4 row-span-2'>
            <Cards Name = 'kuchni'/>
            <Cards/>
          </div>
          <div className='w-[95%] h-[100%] flex flex-col px-4 justify-around border-2 rounded-lg'>
            <p className='text-lg'>🚀{isLogin ?'Welcome to your own Task Manager.':`The first step to an extraordinary journey is just a registration away – get started now!🚀`}</p>
            {!isLogin && <div><p className='text-sm'>Don’t be afraid to start. It’s a brand new opportunity to rebuild what you truly want.</p>
            <div className='w-[70%] flex justify-end'>
              <p className='text-sm text-slate-500 '>-Your Inner Voice</p>
            </div></div>}
          </div>
          <div className='w-[98%] h-[100%] cards flex flex-row items-center justify-start row-span-2 gap-4 overflow-x-scroll'>
            <Cards2 Name = 'My Team'/>
            <Cards2 Name = 'IT'/>
            <Cards2 Name = 'HR'/>
            <Cards2 Name = 'Marketing'/>
            <Cards2 Name = 'Sales'/>
            <Cards2 Name = 'Accounting'/>
            <Cards2 Name = 'R&D'/>
            <Cards2 Name = 'Administration'/>
            <Cards2 Name = 'Legal'/>
            <Cards2 Name = 'Training'/>
            <Cards2 Name = 'Management'/>
          </div>
        </div>
      </div>
  )
}

export default Overview