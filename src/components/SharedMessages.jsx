'use client';

import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { sidebarStore } from '@/zustand/store';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Media from './Media';

const options=['Media','Links','Docs'];



const SharedMessages = () => {
    
    const setType = sidebarStore((state) => state.setType)
    const [option, setOption] = useState("Media");
    return (
        <div className='flex flex-col gap-6 w-full h-full'>

            {/* Header */}
            <div className='w-full h-20 flex px-4 items-center text-black gap-8 shadow'>
                <button type='button' onClick={() => (setType("CONTACT"))}><ArrowLeft size={25} /></button>
                <span>Shared Messages</span>
            </div>

            {/* Titles */}
            <div className='w-full px-8 flex items-center justify-between font-semibold'>

            {options.map((el,index)=>{
                return(
                        <button type='button' key={index} onClick={()=>{setOption(el)}} className={`${option===el?'text-[#5B96F7]':'text-black'} relative`}>
                        <span>{el}</span>
                        {option===el?
                        <motion.div layoutId='option-pill' className='absolute -bottom-1 bg-[#5B96F7] h-[2px] w-full'/>
                        :
                        null}
                        </button>
                )
            })}
            

            </div>

            <div className='flex-1 overflow-y-scroll'>
            
            {option==="Media"?
            <Media/>:
            null
            }

            </div>
            

        </div>
    )
}

export default SharedMessages;