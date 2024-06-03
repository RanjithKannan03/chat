'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeSlash, GoogleLogo, InstagramLogo } from '@/components/Icons';
import FormSubmitButton from '@/components/FormSubmitButton';
import Image from 'next/image';

const page = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='flex flex-col w-[30%] gap-4 text-black p-4'>

                <div className='w-32 h-32 relative self-center'>

                    <Image src={'/assets/chirpify_logo.png'} fill className='object-contain' alt='logo' />

                </div>

                <span className='font-semibold text-2xl'>Get Started With Chirpify</span>
                <span className=''>Already have an account? <Link className='text-[#5B96F7] ' href={'/login'}>Sign in</Link></span>

                <form className='flex flex-col gap-4'>

                    <div className='flex w-full justify-between items-center gap-4'>

                        <div className="relative  border border-gray-200  rounded-md w-full items-center px-2 py-1 focus-within:ring-1 focus-within:ring-black 0">
                            <input type="text" id="floating_outlined_first" name='firstName' className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                            <label htmlFor="floating_outlined_first" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                First Name
                            </label>
                        </div>

                        <div className="relative  border border-gray-200  rounded-md w-full items-center px-2 py-1 focus-within:ring-1 focus-within:ring-black 0">
                            <input type="text" id="floating_outlined_last" name='lastName' className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                            <label htmlFor="floating_outlined_last" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                                Last Name
                            </label>
                        </div>

                    </div>

                    <div className="relative  border border-gray-200  rounded-md w-full items-center px-2 py-1 focus-within:ring-1 focus-within:ring-black 0">
                        <input type="text" id="floating_outlined_email" name='email' className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <label htmlFor="floating_outlined_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Email
                        </label>
                    </div>

                    <div className="relative  border border-gray-200  rounded-md w-full flex items-center px-2 py-1 focus-within:ring-1 focus-within:ring-black 0">
                        <input type={`${showPassword ? 'text' : 'password'}`} name='password' autoComplete='off' id="floating_outlined_pass" className="flex-1 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <button type='button' onClick={() => { setShowPassword((prev) => { return !prev }) }}>
                            {showPassword ?
                                <Eye size={25} /> :
                                <EyeSlash size={25} />
                            }
                        </button>
                        <label htmlFor="floating_outlined_pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Password
                        </label>
                    </div>

                    <FormSubmitButton text="Signup" />



                </form>

                <div className='w-full flex items-center gap-4'>

                    <div className='flex-1 bg-black h-[1px]' />
                    <span>OR</span>
                    <div className='flex-1 bg-black h-[1px]' />

                </div>

                <div className='flex gap-2 items-center justify-between'>

                    <div className='flex gap-2 items-center px-4 py-2 bg-black text-white font-medium rounded-lg'>

                        <GoogleLogo size={25} weight={'bold'} />

                        <span>Sign in with Google</span>

                    </div>

                    <div className='flex gap-2 items-center px-4 py-2 bg-transparent ring-2 ring-[#5B96F7] text-[#5B96F7] font-medium rounded-lg'>

                        <InstagramLogo size={25} />

                        <span>Sign in with Instagram</span>

                    </div>





                </div>

            </div>

        </div>
    )
}

export default page