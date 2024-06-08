'use client';

import React from 'react';
import { selectedUserStore, sidebarStore } from "@/zustand/store";
import Contact from './Contact';
import { motion, AnimatePresence } from 'framer-motion';

const SideBar = () => {
    const open = sidebarStore((state) => state.open);
    const id = selectedUserStore((state) => state.id);
    return (
        <AnimatePresence>
            {id > -1 && open &&


                <motion.div key={1} className="w-[23%] h-screen bg-[#F8FAFF]" initial={{ width: 0 }} animate={{ width: "23%" }} exit={{ width: 0 }}>
                    <Contact open={open} />
                </motion.div>


            }
        </AnimatePresence>
    )
}

export default SideBar