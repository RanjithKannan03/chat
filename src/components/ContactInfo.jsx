'use client';

import React from 'react';
import { XCircle, CaretRight, Star, Bell, Prohibit, Trash } from './Icons';
import Image from 'next/image';
import MuteSlider from './MuteSlider';
import { faker } from '@faker-js/faker';
import { sidebarStore } from '@/zustand/store';
import Block from './Block';
import { useState } from 'react';
import Delete from './Delete';


const ContactInfo = (props) => {
    faker.seed(123);
    const ChatList = [
        {
            id: 0,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "9:36",
            unread: 0,
            pinned: true,
            online: true,
        },
        {
            id: 1,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "12:02",
            unread: 2,
            pinned: true,
            online: false,
        },
        {
            id: 2,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "10:35",
            unread: 3,
            pinned: false,
            online: true,
        },
        {
            id: 3,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "04:00",
            unread: 0,
            pinned: false,
            online: true,
        },
        {
            id: 4,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "08:42",
            unread: 0,
            pinned: false,
            online: false,
        },
        {
            id: 5,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "08:42",
            unread: 0,
            pinned: false,
            online: false,
        },
        {
            id: 6,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "08:42",
            unread: 0,
            pinned: false,
            online: false,
        },
        {
            id: 7,
            img: faker.image.avatar(),
            name: faker.internet.userName(),
            msg: faker.music.songName(),
            time: "08:42",
            unread: 0,
            pinned: false,
            online: false,
        },
    ];
    const toggle = sidebarStore((state) => state.toggle);
    const setType = sidebarStore((state) => state.setType);
    const [isOpen, setIsOpen] = useState(false);
    const [action, setAction] = useState("");
    return (
        <div className='flex flex-col w-full h-full gap-6'>
            {/* Title */}
            <div className='flex items-center w-full h-20 gap-8 px-4 text-black shadow '>
                <button type='button' onClick={toggle}><XCircle size={25} /></button>
                <span className='text-lg'>Contact Info</span>
            </div>

            {/* Details */}
            <div className='flex flex-col flex-1 w-full gap-4 px-4'>
                {/* Profile Pic and Name */}
                <div className='flex items-center gap-8 py-6'>

                    <div className='relative w-16 h-16'>
                        <Image src={ChatList[props.selectedID].img} alt="profile_pic" fill className='object-contain rounded-full ' />
                    </div>

                    <div className='flex flex-col gap-2 text-black'>
                        <span className='text-lg font-medium'>{ChatList[props.selectedID].name}</span>
                        <span>+91 6265 081 928</span>
                    </div>

                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* About */}
                <div className='flex flex-col gap-4 py-2 text-black'>
                    <span className=''>About</span>
                    <span className='font-medium'>Hi there</span>
                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Media,Links & Docs */}
                <div className='flex flex-col gap-4 py-2 text-black'>

                    <div className='flex items-center justify-between w-full'>
                        <span className=''>Media, links and docs</span>

                        <button className='flex items-center gap-2' type='button' onClick={() => { setType("MEDIA") }}>
                            <sapn className='text-sm text-center'>401</sapn>
                            <CaretRight size={25} />
                        </button>

                    </div>

                    <div className='flex items-center justify-between w-full'>
                        {[1, 2, 3].map((el) => {
                            return (
                                <div className='relative min-w-24 min-h-24 max-w-24 max-h-24'>
                                    <Image src={faker.image.url()} alt='media' fill className='object-contain' />
                                </div>
                            )
                        })

                        }
                    </div>
                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Starred */}

                <div className='flex flex-col gap-4 py-2'>

                    <div className='flex justify-between w-full'>
                        <div className='flex gap-4'>
                            <Star size={25} />
                            <span>Starred Messages</span>
                        </div>

                        <button type='button' onClick={() => { setType("STARRED") }}><CaretRight size={25} /></button>

                    </div>

                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Mute Notififications */}
                <div className='flex flex-col gap-4 py-2'>

                    <div className='flex justify-between w-full'>
                        <div className='flex gap-4'>
                            <Bell size={25} />
                            <span>Mute Notifications</span>
                        </div>

                        <div>
                            <MuteSlider isMuted={false} />
                        </div>

                    </div>

                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Common Groups */}

                <div className='flex flex-col w-full gap-4 py-2'>

                    <span>3 groups in common</span>

                    <div className='flex items-center w-full overflow-y-scroll h-28'>

                        <div className='flex flex-col w-full h-24 gap-6'>

                            {[1, 2, 3].map((el) => {
                                return (
                                    <div className='flex items-center w-full h-20 gap-4'>
                                        <div className='relative min-w-12 min-h-12 max-w-12 max-h-12'>
                                            <Image src={faker.image.avatar()} alt='media' fill className='object-contain rounded-full' />
                                        </div>

                                        <div className='flex flex-col justify-center flex-1 h-full overflow-hidden text-black'>
                                            <span className='text-lg font-medium'>Name</span>
                                            <span className='text-sm whitespace-nowrap'>Owl, Parrot, Rabbit , You</span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

                {/* Block & Delete */}

                <div className='flex items-center flex-1 gap-4 pb-2'>
                    <button onClick={() => {
                        setIsOpen((prev) => { return !prev });
                        setAction("BLOCK");
                    }}
                        className='h-full w-1/2 flex items-center justify-center ring-1 rounded-xl bg-white ring-[#5B96F7] text-[#5B96F7] hover:bg-[#5B96F7] hover:text-white'>
                        <div className='flex items-center gap-2 '>
                            <Prohibit size={30} />
                            <span className='font-semibold'>Block</span>
                        </div>
                    </button>

                    <button onClick={() => {
                        setIsOpen((prev) => { return !prev });
                        setAction("DELETE");
                    }}
                        className='h-full w-1/2 flex items-center justify-center ring-1 rounded-xl bg-white ring-[#5B96F7] text-[#5B96F7] hover:bg-[#5B96F7] hover:text-white'>
                        <div className='flex items-center gap-2 '>
                            <Trash size={30} />
                            <span className='font-semibold'>Delete</span>
                        </div>
                    </button>
                </div>




            </div>

            {
                isOpen ? action === "BLOCK" ? <Block setIsOpen={setIsOpen} /> : <Delete setIsOpen={setIsOpen} /> : null
            }

        </div>
    )
}

export default ContactInfo