'use client';
import React, { useState } from 'react';
import { ChatTeardropDots, Users, Phone, Gear } from './Icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const links = [
    { url: '/', name: 'chats', icon: <ChatTeardropDots /> },
    { url: '/groups', name: 'group', icon: <Users /> },
    { url: '/calls', name: 'calls', icon: <Phone /> },
    { url: '/options', name: 'options', icon: <Gear /> }
]

const NavBar = () => {
    const path = usePathname();
    const [isDark, setIsDark] = useState(false);
    return (
        <div className='w-full h-full flex flex-col justify-between items-center py-10 bg-[#F0F4FA]'>

            <div className='flex flex-col gap-8'>

                {/* Icon */}
                <div className='w-14 h-14 relative flex'>
                    <Image src='/assets/chirpify_logo.png' fill className='object-contain' />
                </div>

                {/* Navlinks */}
                <div className='flex flex-col gap-8 grow-0 items-center'>

                    {links.map((link) => {
                        return (
                            <Link key={link.url} className={`relative w-10 h-10 p-2 xl:text-[25px] text-[20px] rounded-2xl ${path === link.url ? 'text-white' : 'bg-transparent text-black'}`} href={link.url} >
                                {path === link.url && (
                                    <motion.div layoutId='active-pill' className='absolute inset-0 bg-[#5B96F7]' transition={{ type: 'spring', mass: '0.4', damping: 8 }} style={{ borderRadius: 16 }} />
                                )}
                                <span className={`relative z-10 ${path === link.url ? 'text-white' : 'text-black'}`} >{link.icon}</span>
                            </Link>

                        )
                    })}
                </div>


            </div>


            <div className='flex flex-col gap-8 items-center'>
                <div className={`w-16 h-8 bg-[#5B96F7] rounded-2xl flex items-center px-1 ${isDark ? 'justify-end' : 'justify-start'}`}>
                    <motion.button layout className='w-6 h-6 rounded-full bg-white' onClick={() => { setIsDark((prev) => { return !prev }) }} />
                </div>

                <div className='w-12 h-12 rounded-full relative'>
                    <button>
                        <Image src='/assets/default.png' fill className='object-contain' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NavBar