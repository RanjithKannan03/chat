'use client';

import React from 'react';
import Image from 'next/image';
import { VideoCamera,Phone,MagnifyingGlass,CaretDown } from 'phosphor-react';

const ChatScreen = () => {
    return (
        <div className='w-full h-full'>

            <div className='flex flex-col'>
                {/* Header */}
                <div className='w-full h-20 bg-[#F8FAFF] flex justify-between items-center px-8 shadow'>

                    {/* User Info */}
                    <div className='flex gap-4 items-center'>
                        <div className='w-12 h-12 relative'>
                            <Image src='/assets/default.png' fill className='object-contain rounded-full' />
                            {/* Online Status */}
                            <div className={`absolute h-3 w-3 rounded-full ${true ? 'bg-green-400' : 'bg-red-400'} bottom-0 right-0`} />
                        </div>

                        <div className='flex flex-col justify-center'>
                        <h1 className='text-black font-semibold text-lg'>Pink Panda</h1>
                        <span className='text-[#696969] text-sm'>Online</span>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className='flex gap-5 items-center text-[#595959]'>
                    <div className='flex items-center gap-8'>
                    <VideoCamera size={25} />
                    <Phone size={25} />
                    <MagnifyingGlass size={25} />
                    </div>
                    <div className='h-10 w-[1px] bg-[#595959]'/>
                    <CaretDown size={25} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ChatScreen