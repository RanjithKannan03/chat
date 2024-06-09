import React from 'react';
import Image from 'next/image';
import NavLinks from './NavLinks';
import ToggleDark from './ToggleDark';


const NavBar = () => {
    return (
        <div className='w-full h-full flex flex-col justify-between items-center py-10 bg-[#F0F4FA]'>

            <div className='flex flex-col gap-8'>

                {/* Icon */}
                <div className='relative flex w-14 h-14'>
                    <Image src='/assets/chirpify_logo.png' fill className='object-contain' alt='logo' />
                </div>

                {/* Navlinks */}
                <div>
                    <NavLinks />
                </div>


            </div>


            <div className='flex flex-col items-center gap-8'>

                {/* Dark mode Toggle */}
                <div>
                    <ToggleDark />
                </div>

                {/* Profile Pic */}
                <div className='relative w-12 h-12 rounded-full'>
                    <button>
                        <Image src='/assets/default.png' fill className='object-contain' alt='profile_pic' />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default NavBar