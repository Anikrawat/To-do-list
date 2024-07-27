import React, { useState } from 'react'
import './registerStyle.css'
import { useGlobalContext } from '../../Context/provider'
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Register = () => {
  const {getNewUserData,register,newUserData} = useGlobalContext(); 
  const [togglePass,setTogglePass] = useState(true)

  const [authors] = useTypewriter({
    words:[' - William Wordsworth',' - Maya Angelou', ' - Ayn Rand'," - Louis L'Amour", ' -  Isabel Allende',' - Nathaniel Hawthorne',' -  Terry Pratchett',' - Ernest Hemingway',' - Thomas Mann','  - E.B. White'],
    loop:false  
  })

  const [qoutes] = useTypewriter({
    words:["Fill your paper with the breathings of your heart.",'There is no greater agony than bearing an untold story inside you.',"Words are a lens to focus one's mind.","Start writing, no matter what. The water does not flow until the faucet is turned on.","Write what should not be forgotten.","Easy reading is damn hard writing.","The first draft is just you telling yourself the story.","There is nothing to writing. All you do is sit down at a typewriter and bleed.","A writer is someone for whom writing is more difficult than it is for other people.","Writing is both mask and unveiling."],
    loop:false
  })

  return (
    <>
      <div className="main w-[100vw] h-[94vh] z-[-1] flex justify-center items-center ">
        <div className='w-[80vw] flex justify-center items-center shadow-2xl mobileView'>
          <div className="w-[45vw] h-[80vh] bg-Signin flex flex-col gap-4 justify-center items-center text-white responsive">
            <div>
              <h1 className='text-4xl'>Hi There!</h1>
              <div className='w-[100px] ml-[3vw] h-[6px] rounded bg-white'></div>
            </div>
            <div className='w-[80%] h-[8%] flex justify-center'>
              <p className='text-xl'>{qoutes}<span><Cursor cursorStyle='_'/></span></p>
            </div>
            <div className='w-[80%] flex justify-end'>
              <p className='text-l'>{authors}<span><Cursor cursorStyle='_'/></span></p>
            </div>
          </div>
          <div className="w-[35vw] h-[80vh] flex justify-center items-center mobileView" style={{ SigninColor: 'rgb(247,247,247)' }}>
              <div className="flex items-center justify-center">
                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                  <h4 className="block font-sans text-2xl text-Signin font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Sign Up
                  </h4>
                  <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your details to register.
                  </p>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={register}>
                    <div className="mb-4 flex flex-col gap-6">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          value={newUserData.name}
                          onChange={getNewUserData}
                          name = "name"
                          className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Signin focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Signin peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-Signin peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-Signin peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Name
                        </label>
                      </div>
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          value={newUserData.email}
                          onChange={getNewUserData}
                          name = "email"
                          className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Signin focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Signin peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-Signin peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-Signin peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Email
                        </label>
                      </div>
                      <div className="relative flex flex-col justify-center items-end h-11 w-full min-w-[200px]">
                        <input
                          value={newUserData.password}
                          onChange={getNewUserData}
                          name = "password"
                          type={togglePass ? 'password' : 'text'}
                          className="absolute peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-Signin focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-Signin peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-Signin peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-Signin peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Password
                        </label>
                        <label className='mr-[0.5vh] cursor-pointer z-[1] eyeIconLabel' >
                          <input type="checkbox" className='eyeIcon z-[2]'/>
                          <i className="mr-[1.4vh] cursor-pointer z-[1] fa-solid fa-eye" onClick={() => {setTogglePass(togglePass => !togglePass)}}></i>
                        </label>
                      </div>
                    </div>
                    
                    <button
                      className="mt-6 flex justify-center items-center w-full select-none rounded-lg bg-Signin py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-Signin/20 transition-all hover:shadow-lg hover:shadow-Signin/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="submit"
                      data-ripple-light="true"
                    >
                      <p>Register</p>
                    </button>
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      Already have an account?
                      <a
                        className="font-semibold text-Signin transition-colors hover:text-blue-700"
                        href="/login"
                      >
                        &nbsp;Sign In
                      </a>
                    </p>
                  </form>
                </div>
              </div>
          </div>
        </div>
        </div>
      </>
      )
}

      export default Register   