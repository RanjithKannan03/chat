'use client';

import React, { useState } from 'react';
import { Bell, CaretLeft, Lock, Image as Img, Key, Clipboard, Article, WarningCircle } from '@/components/Icons';
import Link from 'next/link';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';



const page = () => {
  const [showShortcuts, setShowShortcuts] = useState(false);
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
            <h1 className='font-bold text-4xl'>Settings</h1>

          </div>

          {/* Info */}

          <div className='flex w-full gap-8 items-center'>

            <div className='w-24 h-24 relative'>
              <Image src={faker.image.avatar()} fill alt='profile' className='object-contain rounded-full' />
            </div>

            <div className='flex flex-col items-start text-black gap-2'>
              <span className='font-medium text-lg'>{faker.person.fullName()}</span>
              <span className='text-sm'>Exploring</span>

            </div>

          </div>

        </div>

        {/* Options */}
        <div className='flex flex-1 flex-col gap-8'>

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

      {showShortcuts?<KeyboardShortcuts setShowShortcuts={setShowShortcuts}/>:null}

    </div>
  )
}

export default page