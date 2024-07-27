import React, { useState } from 'react'
import './task.css'
import AddSpaceCard from '../../../Cards/AddSpaceCard'
import { useGlobalContext } from "../../../../Context/provider";
import Modal from '../../../Modals/Modal';


const Task = () => {

  const {fetchedTasks,modal,setModal} = useGlobalContext();
  

  return (
    <>
      <div className='w-[75vw] h-[80vh] flex justify-evenly items-center rounded-xl shadow-lg '>
        <div className='w-[80%] h-[90%] flex flex-col items-center mt-8 '>
          <div className='w-[100%] h-[7%] flex flex-col gap-1 mb-7'>
            <h2 className='text-xl ml-3 text-Signin'>MY TASKS</h2>
            <div className='w-[100%] h-[1%] bg-slate-300'></div>
          </div>
            <div className='tasks flex w-[100%] flex-wrap gap-y-5 justify-center gap-5 overflow-y-scroll'>
              {
                fetchedTasks.map((curr)=>{
                  return <AddSpaceCard Title = {curr.Title} Description = {curr.Description} noteId = {curr._id}/>
                })
              }
            </div>
          </div>
          <div className='h-[90%] flex items-end'><button onClick = {() => setModal(!modal)} className='text-5xl w-[5vw] h-[5vw] rounded-xl shadow-md hover:shadow-xl'><i className="cursor-pointer justify-self-end fa-solid fa-plus"/></button></div>
        </div>

        {modal && <Modal/>}
        </>
  )
}

export default Task