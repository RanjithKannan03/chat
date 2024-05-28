'use client';

import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const MuteSlider = (props) => {
    const [isMuted, setIsMuted] = useState(props.isMuted);

    return (
        <div className={`w-12 h-6 ${isMuted ? 'bg-[#5B96F7] justify-end' : 'bg-[#B2B2B2] justify-start'} rounded-2xl flex items-center px-1`}>
            <motion.button layout onClick={() => { setIsMuted((prev) => !prev) }} className='w-4 h-4 rounded-full bg-white' />
        </div>
    );
};

export default MuteSlider;