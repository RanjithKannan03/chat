'use client';

import React, { useState } from 'react';
import { Bell, CaretLeft, Lock, Image as Img, Key, Clipboard, Article, WarningCircle, PencilSimple } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';
import { userStore } from '@/zustand/store';



const page = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);
  const user = userStore((state) => state.user);
  const optionsList = [
    {
      name: "Notifications",
      icon: <Bell size={22} />,
      onclick: () => { }
    },
    {
      name: "Privacy",
      icon: <Lock size={22} />,
      onclick: () => { }
    },
    {
      name: "Security",
      icon: <Key size={22} />,
      onclick: () => { }
    },
    {
      name: "Chat Wallpaper",
      icon: <Img size={22} />,
      onclick: () => { }
    },
    {
      name: "Request Account Info",
      icon: <Clipboard size={22} />,
      onclick: () => { }
    },
    {
      name: "Keyboard Shortcuts",
      icon: <Article size={22} />,
      onclick: () => { setShowShortcuts(true) }
    },
    {
      name: "Help",
      icon: <WarningCircle size={22} />,
      onclick: () => { }
    },


  ]
  faker.seed(256);
  return (
    <div className='flex h-screen'>

      {/* Settings */}

      <div className='w-[23%] bg-[#F8FAFF] h-screen p-10 drop-shadow flex flex-col gap-12'>

        <div className='flex flex-col gap-10'>

          {/* Title */}
          <div className='flex items-center w-full gap-4'>

            <Link href={'/'}><CaretLeft size={40} /></Link>
            <h1 className='text-4xl font-bold'>Settings</h1>

          </div>

          {/* Info */}

          <div className='flex items-center w-full gap-8'>

            <button className='relative w-24 h-24 group'>
              <div className='absolute z-10 bg-[rgba(8,5,5,0.38)] w-full h-full top-0 rounded-full items-center justify-center group-hover:flex hidden'>
                <PencilSimple size={25} />
              </div>
              <Image src={user.avatarURL} fill alt='profile' className='relative z-0 object-contain rounded-full' />
            </button>

            <div className='flex flex-col items-start gap-2 text-black'>
              <span className='text-lg font-medium'>{user.username}</span>
              <span className='text-sm'>Exploring</span>

            </div>

          </div>

        </div>

        {/* Options */}
        <div className='flex flex-col flex-1 gap-8'>

          {
            optionsList.map((option, index) => {
              return (
                <div className='flex flex-col gap-4'>

                  <button className='flex w-full gap-4 items-center text-[#727375]' type='button' onClick={option.onclick}>
                    {option.icon}

                    <span className='font-medium'>{option.name}</span>

                  </button>

                  {
                    index + 1 === optionsList.length ? null : <div className='w-full h-[1px] bg-[#B4B4B4]' />
                  }


                </div>
              )
            })
          }

        </div>

      </div>

      {showShortcuts ? <KeyboardShortcuts setShowShortcuts={setShowShortcuts} /> : null}

    </div>
  )
}

export default page