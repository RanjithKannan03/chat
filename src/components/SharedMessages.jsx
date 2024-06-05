'use client';

import React from 'react';
import { ArrowLeft } from 'phosphor-react';
import { sidebarStore } from '@/zustand/store';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Media from './Media';
import Links from './Links';
import Docs from './Docs';

const options = ['Media', 'Links', 'Docs'];



const SharedMessages = () => {

    const setType = sidebarStore((state) => state.setType)
    const [option, setOption] = useState("Media");
    return (
        <div className='flex flex-col w-full h-full gap-6'>

            {/* Header */}
            <div className='flex items-center w-full h-20 gap-8 px-4 text-black shadow'>
                <button type='button' onClick={() => (setType("CONTACT"))}><ArrowLeft size={25} /></button>
                <span>Shared Messages</span>
            </div>

            {/* Titles */}
            <div className='flex items-center justify-between w-full px-8 font-semibold'>

                {options.map((el, index) => {
                    return (
                        <button type='button' key={index} onClick={() => { setOption(el) }} className={`${option === el ? 'text-[#5B96F7]' : 'text-black'} relative`}>
                            <span>{el}</span>
                            {option === el ?
                                <motion.div layoutId='option-pill' className='absolute -bottom-1 bg-[#5B96F7] h-[2px] w-full' />
                                :
                                null}
                        </button>
                    )
                })}


            </div>

            <div className='flex-1 overflow-y-scroll'>

                {option === "Media" ?
                    <Media /> :
                    option === "Links" ?
                        <Links />
                        :
                        <Docs />
                }

            </div>


        </div>
    )
}

export default SharedMessages;