'use client';

import Image from 'next/image'
import React from 'react'

import { userStore } from '@/zustand/store';


const Chat = (props) => {

    const user = userStore(state => state.user);

    const pinnedChannels = user.pinnedChannels;

    const {
        channel,
        activeChannel,
        displayImage,
        displayTitle,
        latestMessage,
        setActiveChannel,
        isPinned,
    } = props;

    const isSelected = channel.id === activeChannel?.id;
    const latestMessageAt = channel.state.last_message_at;
    const unreadCount = channel.countUnread();

    function handleClick() {
        setActiveChannel?.(channel);
    }


    if (!pinnedChannels.includes(channel.id) && isPinned) {
        return null;
    }



    return (
        <button type='button' onClick={handleClick}>
            <div className={`flex w-full h-20 ${isSelected ? 'bg-[#5B96F7]' : 'bg-white'} rounded-md shrink-0 drop-shadow-lg  p-4`}>
                <div className='flex items-center w-full gap-2'>
                    {/* Profile Pic */}
                    <div className='w-1/4'>
                        <div className='relative w-10 h-10'>
                            <Image src={displayImage} fill className='object-contain rounded-full' alt='profile pic' />
                            {/* Online Status */}
                            <div className={`absolute h-3 w-3 rounded-full ${props.isActive ? 'bg-green-400' : 'bg-red-400'} bottom-0 right-0`} />
                        </div>
                    </div>


                    {/* Name and latest message */}
                    <div className='flex flex-col items-start w-1/2 gap-1 overflow-hidden'>
                        {/* Name */}
                        <h1 className={`${isSelected ? 'text-white' : 'text-black'} font-semibold text-sm text-start`}>{displayTitle}</h1>
                        {/* Latest Message */}
                        <span className={`${isSelected ? 'text-white' : 'text-black'} text-xs w-full font-medium overflow-hidden whitespace-nowrap text-start`}>{latestMessage}</span>
                    </div>

                    {/* Latest Message Time and Number of messages */}

                    <div className='flex flex-col items-center w-1/4 gap-1'>
                        {/* Time */}
                        <span className={`${isSelected ? 'text-white' : 'text-black'} text-sm`}>{latestMessageAt}</span>

                        {/* Num Messages */}

                        <div className={`w-4 h-4 bg-[#5B96F7] rounded-full flex justify-center items-center ${props.unread && id != props.id > 0 ? 'opacity-100' : 'opacity-0'}`}>
                            <span className={`text-white text-xs`}>{unreadCount}</span>
                        </div>

                    </div>

                </div>
            </div>
        </button>
    )
}

export default Chat