'use client';

import { selectedUserStore } from '@/zustand/store';
import Image from 'next/image'
import React from 'react'



const Chat = (props) => {

    const id = selectedUserStore((state) => state.id);
    const setID = selectedUserStore((state) => state.setID);

    function handleClick() {
        setID(props.id);
    }
    return (
        <button type='button' onClick={handleClick}>
            <div className={`flex w-full h-20 ${id === props.id ? 'bg-[#5B96F7]' : 'bg-white'} rounded-md shrink-0 drop-shadow-lg  p-4`}>
                <div className='flex w-full items-center gap-2'>
                    {/* Profile Pic */}
                    <div className='w-1/4'>
                        <div className='w-10 h-10 relative'>
                            <Image src={props.src} fill className='object-contain rounded-full' alt='profile pic' />
                            {/* Online Status */}
                            <div className={`absolute h-3 w-3 rounded-full ${props.isActive ? 'bg-green-400' : 'bg-red-400'} bottom-0 right-0`} />
                        </div>
                    </div>


                    {/* Name and message */}
                    <div className='w-1/2 flex flex-col gap-1 items-start overflow-hidden'>
                        {/* Name */}
                        <h1 className={`${id === props.id ? 'text-white' : 'text-black'} font-semibold text-sm text-start`}>{props.name}</h1>
                        {/* Message */}
                        <span className={`${id === props.id ? 'text-white' : 'text-black'} text-xs w-full font-medium overflow-hidden whitespace-nowrap text-start`}>{props.msg}</span>
                    </div>

                    {/* Time and Number of messages */}

                    <div className='w-1/4 flex flex-col gap-1 items-center'>
                        {/* Time */}
                        <span className={`${id === props.id ? 'text-white' : 'text-black'} text-sm`}>{props.time}</span>

                        {/* Num Messages */}

                        <div className={`w-4 h-4 bg-[#5B96F7] rounded-full flex justify-center items-center ${props.unread && id != props.id > 0 ? 'opacity-100' : 'opacity-0'}`}>
                            <span className={`text-white text-xs`}>{props.unread}</span>
                        </div>

                    </div>

                </div>
            </div>
        </button>
    )
}

export default Chat