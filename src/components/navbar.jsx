import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import ToggleDark from './ToggleDark';


const NavBar = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between items-center py-10 bg-[#F0F4FA]'>

            <div className='flex flex-col gap-8'>

                {/* Icon */}
                <div className='w-14 h-14 relative flex'>
                    <Image src='/assets/chirpify_logo.png' fill className='object-contain' />
                </div>

                {/* Navlinks */}
                <div>
                    <NavLinks />
                </div>


            </div>


            <div className='flex flex-col gap-8 items-center'>

                {/* Dark mode Toggle */}
                <div>
                    <ToggleDark />
                </div>

                {/* Profile Pic */}
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