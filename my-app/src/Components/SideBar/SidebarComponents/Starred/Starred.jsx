import React from 'react'

const Starred = () => {
  return (
    <div className='w-[75vw] h-[80vh]  flex justify-center items-center'>
      <div className='w-[20vw] h-[35vh]  flex flex-col gap-4 items-center '>
        <i className="fa-regular fa-star fa-6x "></i>
        <p>No Tasks are Starred till now</p>
      </div>
    </div>
  )
}

export default Starred