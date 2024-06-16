'use client';

import React from 'react';
import { selectedUserStore, sidebarStore } from "@/zustand/store";
import Contact from './Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { useChannelStateContext } from 'stream-chat-react';

const SideBar = () => {
    const open = sidebarStore((state) => state.open);

    const { channel } = useChannelStateContext();


    return (
        <AnimatePresence>
            {channel.id && open &&


                <motion.div key={1} className="w-[400px] h-screen bg-[#F8FAFF]" initial={{ width: 0 }} animate={{ width: 400 }} exit={{ width: 0 }}>
                    <Contact open={open} />
                </motion.div>


            }
        </AnimatePresence>
    )
}

export default SideBar