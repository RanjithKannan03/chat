'use client';

import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
        }
    }
}

const Delete = (props) => {
    return (
        <>
            <div className='absolute top-0 left-0 z-40 w-screen h-screen bg-black opacity-50' />

            <div className='absolute top-0 left-0 z-50 flex items-center justify-center w-screen h-screen bg-transparent' onClick={() => { props.setIsOpen(false) }}>

                <motion.div variants={cardVariant} initial="initial" animate="animate" className='w-[30%] h-[20%] bg-white rounded-2xl flex flex-col p-8 justify-between' onClick={(e) => e.stopPropagation()}>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-lg font-semibold text-black'>Delete this contact</h1>
                        <span className='text-[#696969]'>Are you sure you want to Delete this Contact ?</span>
                    </div>

                    <div className='flex self-end gap-4'>

                        <button className='text-[#5B96F7] font-semibold' onClick={() => { props.setIsOpen(false) }}><span>Cancel</span></button>
                        <button className='text-[#5B96F7] font-semibold'><span>Yes</span></button>

                    </div>

                </motion.div>


            </div>
        </>
    )
}

export default Delete