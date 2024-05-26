import React from 'react';
import { VideoCamera, Phone, MagnifyingGlass, CaretDown } from './Icons';
import Image from 'next/image';
import { sidebarStore } from '@/zustand/store';

const Header = (props) => {
    return (
        <div className='w-full h-20 bg-[#F8FAFF] flex justify-between items-center px-8 shadow'>

            {/* User Info */}
            <div className='flex gap-4 items-center'>

                <div>
                    <Toggle src={props.src} isOnline={props.isOnline} />
                </div>

                <div className='flex flex-col justify-center'>
                    <h1 className='text-black font-semibold text-lg'>{props.name}</h1>
                    <span className='text-[#696969] text-sm'>{props.isOnline ? 'Online' : 'Offline'}</span>
                </div>

            </div>

            {/* Actions */}
            <div className='flex gap-5 items-center text-[#595959]'>
                <div className='flex items-center gap-8'>
                    <button><VideoCamera size={25} /></button>
                    <button><Phone size={25} /></button>
                    <button><MagnifyingGlass size={25} /></button>
                </div>
                <div className='h-10 w-[1px] bg-[#595959]' />
                <button><CaretDown size={25} /></button>
            </div>

        </div>
    )
}


export const Toggle = (props) => {
    const toggle = sidebarStore((state) => state.toggle)
    return (
        <div className='w-12 h-12 relative cursor-pointer' onClick={toggle}>
            <Image src={props.src} fill className='object-contain rounded-full' />
            {/* Online Status */}
            <div className={`absolute h-3 w-3 rounded-full ${props.isOnline ? 'bg-green-400' : 'bg-red-400'} bottom-0 right-0`} />
        </div>
    )
}



export default Header