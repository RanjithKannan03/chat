'use client';

import React from "react";
import { motion } from 'framer-motion';
import { useTheme } from "next-themes";

const ToggleDark = () => {
    const { setTheme, resolvedTheme } = useTheme();
    return (
        <div className={`w-16 h-8 bg-[#5B96F7] rounded-2xl flex items-center px-1 ${resolvedTheme === "dark" ? 'justify-end' : 'justify-start'}`}>
            <motion.button layout className='w-6 h-6 bg-white rounded-full' onClick={() => { setTheme(() => { return resolvedTheme === "light" ? "dark" : "light" }) }} />
        </div>
    );
};

export default ToggleDark;
