'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChatTeardropDots, Users, Phone, Gear } from './Icons';
import { usePathname } from 'next/navigation';

const links = [
    { url: '/', name: 'chats', icon: <ChatTeardropDots /> },
    { url: '/groups', name: 'group', icon: <Users /> },
    { url: '/calls', name: 'calls', icon: <Phone /> },
    { url: '/options', name: 'options', icon: <Gear /> }
]



const NavLinks = () => {
    const path = usePathname();
    return <div className='flex flex-col items-center gap-8 grow-0'>

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
};

export default NavLinks;
