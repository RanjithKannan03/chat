'use client';
import React, { useState } from 'react';
import { MagnifyingGlass, FunnelSimple } from './Icons'

const Search = () => {
    const [text, setText] = useState("");
    return (
        <div className="flex items-center bg-[#dae7fc] rounded-xl w-full h-12 px-2 gap-2 text-[#709CE6]">

            <div>
                <MagnifyingGlass size={25} />
            </div>

            <div className="flex-1">
                <input className="bg-transparent outline-none w-full placeholder-[#709CE6] px-2" placeholder="Search" type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            </div>

            <div>
                <button><FunnelSimple size={25} className='text-[#B4B4B4]' /></button>
            </div>

        </div>
    )
}

export default Search