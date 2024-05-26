'use client';

import React, { useState } from 'react'
import { Link, Smiley, PaperPlaneTilt } from './Icons';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';
import { motion, AnimatePresence } from 'framer-motion';

const emojiPieckerVariant = {
    close: {
        y: "100vh"
    },
    open: {
        y: 0,
        transition: {
            type: "spring",
            mass: 0.4,
            damping: 6
        }
    },
    exit: {
        y: "100vw",
        transition: {
            duration: 0.5
        }
    }
}

const Footer = () => {
    const [msg, setMsg] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='flex items-center w-full h-20 bg-#F7F9FD shadow px-8 gap-8'>
            <div className='flex-1 flex items-center h-12 px-4 bg-[#EAF2FE] rounded-lg text-[#709CE6] gap-4 relative'>
                <div>
                    <Link size={25} />
                </div>
                <div className='flex-1'>
                    <input type='text' className='w-full outline-none placeholder-[#709CE6] bg-transparent px-2' placeholder='Write a message...' value={msg} onChange={(e) => { setMsg(e.target.value) }} />
                </div>
                <div className=''>
                    <button type='button' onClick={() => { setIsOpen((prev) => { return (!prev) }) }}>
                        <Smiley size={25} />
                    </button>
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div key={1} variants={emojiPieckerVariant} initial="close" animate="open" className='absolute bottom-12 right-0' exit="exit">
                                <Picker data={data} onEmojiSelect={(emoji) => { setMsg((prev) => { return (prev + emoji.native) }) }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className='flex items-center justify-center h-12 w-12 bg-[#5B96F7] text-white rounded-lg'>
                <PaperPlaneTilt size={25} />
            </div>
        </div>
    )
}

export default Footer