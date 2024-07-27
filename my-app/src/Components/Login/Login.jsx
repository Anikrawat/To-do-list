import React,{ useState} from 'react'
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../../Context/provider'

const Login = () => {
  const {getUserData,login,userData} = useGlobalContext();
  const [togglePass,setTogglePass] = useState(true)

  return (
    <div className='w-[100vw] h-[94vh] flex justify-center items-center'>
          <div className="w-[25vw] h-[65vh] flex justify-center items-center mobileView rounded-xl bg-gray-100 shadow-lg" style={{ SigninColor: 'rgb(247,247,247)' }}>
              <div className="flex items-center justify-center">
                <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
                  <h4 className="block font-sans text-2xl text-Signin font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Login
                  </h4>
                  <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Enter your details to register.
                  </p>
                  <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={login}>
                    <div className="mb-4 flex flex-col gap-6">
                      <div className="relative h-11 w-full min-w-[200px]">
                        <input
                          onChange={getUserData}
                          value={userData.email}
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
                        onChange={getUserData}
                        value={userData.password}
                          name = 'password'
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
                    <Link to='/forgotpass'><span className='text-sm text-Signin'>Forgot Password?</span></Link>
                    <button
                      className="mt-6 flex justify-center items-center w-full select-none rounded-lg bg-Signin py-3 px-6 font-sans text-md font-bold uppercase text-white shadow-md shadow-Signin/20 transition-all hover:shadow-lg hover:shadow-Signin/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      type="submit"
                      data-ripple-light="true">
                      <p>Login</p>
                    </button>
                    <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                      New Here?
                      <Link
                        className="font-semibold text-Signin transition-colors hover:text-blue-700"
                        to="/register"
                      >
                        &nbsp;Register
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
          </div>
    </div>
  )
}

export default Login