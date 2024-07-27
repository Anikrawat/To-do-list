import React from 'react'
import Avatar from 'react-avatar';

const Cards2 = ({Name}) => {
    return (
        <div className='w-[8vw] h-[20vh] border rounded border-gray-300 overflow-hidden flex flex-col flex-shrink-0 flex-grow-0 basis-auto items-center justify-center'>
            <div className='rounded-full bg-gray-300 h-[8vh] w-[8vh] flex justify-center items-center'>
            <Avatar facebookId="100008343750912" round = {true} size='70'/>
            </div>
            
            <div className='h-[8vh] text-sm text-Signin flex items-center justify-center'>
                <span>{Name}</span>
            </div>
        </div>
    )
}

export default Cards2