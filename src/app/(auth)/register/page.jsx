'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeSlash, GoogleLogo, MetaLogo } from '@/components/Icons';
import FormSubmitButton from '@/components/FormSubmitButton';
import Image from 'next/image';
import { register } from '@/lib/auth';
import { useFormState } from 'react-dom';
import logo from '../../../../public/assets/chirpify_logo.png';

const page = () => {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [state, formAction] = useFormState(register, { error: null });
    return (
        <div className='flex items-center justify-center w-full h-full'>
            <div className='flex flex-col w-[30%] gap-4 text-black p-4'>

                <div className='relative self-center w-32 h-32'>

                    <Image src={logo} className='object-contain' alt='logo' />

                </div>

                <span className='text-2xl font-semibold'>Get Started With Chirpify</span>

                {state.error && <span>{state.error}</span>}
                <span className=''>Already have an account? <Link className='text-[#5B96F7] ' href={'/login'}>Sign in</Link></span>

                <form className='flex flex-col gap-4' action={formAction}>


                    <div className="relative items-center w-full px-2 py-1 border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-black 0">
                        <input type="text" id="floating_outlined_email" name='email' className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <label htmlFor="floating_outlined_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Email
                        </label>
                    </div>

                    <div className="relative items-center w-full px-2 py-1 border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-black 0">
                        <input type="text" id="floating_outlined_username" name='username' className="px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <label htmlFor="floating_outlined_username" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Username
                        </label>
                    </div>

                    <div className="relative flex items-center w-full px-2 py-1 border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-black 0">
                        <input type={`${showPassword1 ? 'text' : 'password'}`} name='password' autoComplete='off' id="floating_outlined_pass" className="flex-1 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <button type='button' onClick={() => { setShowPassword1((prev) => { return !prev }) }}>
                            {showPassword1 ?
                                <Eye size={25} /> :
                                <EyeSlash size={25} />
                            }
                        </button>
                        <label htmlFor="floating_outlined_pass" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Password
                        </label>
                    </div>

                    <div className="relative flex items-center w-full px-2 py-1 border border-gray-200 rounded-md focus-within:ring-1 focus-within:ring-black 0">
                        <input type={`${showPassword2 ? 'text' : 'password'}`} name='confirmPassword' autoComplete='off' id="floating_outlined_pass_confirm" className="flex-1 px-2.5 pb-2.5 pt-4 text-sm text-gray-900 bg-transparent  appearance-none focus:outline-0 dark:text-white peer" placeholder=" " />
                        <button type='button' onClick={() => { setShowPassword2((prev) => { return !prev }) }}>
                            {showPassword2 ?
                                <Eye size={25} /> :
                                <EyeSlash size={25} />
                            }
                        </button>
                        <label htmlFor="floating_outlined_pass_confirm" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-black peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            Confirm Password
                        </label>
                    </div>

                    <FormSubmitButton text="Signup" />



                </form>

                <div className='flex items-center w-full gap-4'>

                    <div className='flex-1 bg-black h-[1px]' />
                    <span>OR</span>
                    <div className='flex-1 bg-black h-[1px]' />

                </div>

                <div className='flex items-center justify-between gap-2'>

                    <div className='flex items-center gap-2 px-4 py-2 font-medium text-white bg-black rounded-lg'>

                        <GoogleLogo size={25} weight={'bold'} />

                        <span>Sign up with Google</span>

                    </div>

                    <div className='flex gap-2 items-center px-4 py-2 bg-transparent ring-2 ring-[#5B96F7] text-[#5B96F7] font-medium rounded-lg'>

                        <MetaLogo size={25} weight="bold" />

                        <span>Sign up with Instagram</span>

                    </div>





                </div>

            </div>

        </div>
    )
}

export default page