import React from 'react';
import { motion } from 'framer-motion';

const cardVariant={
    initial:{
        y:"100vh"
    },
    animate:{
        y:0,
        transition:{
            duration:0.2
        }
    }
}

const Delete = (props) => {
    return (
        <>
            <div className='w-screen h-screen bg-black opacity-50 absolute top-0 left-0 z-40' />

            <div className='w-screen h-screen bg-transparent absolute top-0 left-0 z-50 flex justify-center items-center'>

                <motion.div variants={cardVariant} initial="initial" animate="animate" className='w-[30%] h-[20%] bg-white rounded-2xl flex flex-col p-8 justify-between'>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-black font-semibold text-lg'>Delete this contact</h1>
                        <span className='text-[#696969]'>Are you sure you want to Delete this Contact ?</span>
                    </div>

                    <div className='flex gap-4 self-end'>

                        <button className='text-[#5B96F7] font-semibold' onClick={()=>{props.setIsOpen(false)}}><span>Cancel</span></button>
                        <button className='text-[#5B96F7] font-semibold'><span>Yes</span></button>

                    </div>

                </motion.div>


            </div>
        </>
    )
}

export default Delete