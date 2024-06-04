'use client';

import React from 'react';
import { selectedUserStore, sidebarStore } from "@/zustand/store";
import Contact from './Contact';

const SideBar = () => {
    const open = sidebarStore((state) => state.open);
    const id = selectedUserStore((state) => state.id);
    return (
        <>
            {id > -1 && open &&

                <div className="w-[23%] h-screen bg-[#F8FAFF]">
                    <Contact open={open} />
                </div>

            }
        </>
    )
}

export default SideBar