import React from 'react';
import { XCircle, CaretRight, Star, Bell, Prohibit, Trash } from './Icons';
import Image from 'next/image';
import MuteSlider from './MuteSlider';
import { faker } from '@faker-js/faker';
import { sidebarStore } from '@/zustand/store';


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
    const setType = sidebarStore((state)=>state.setType);
    return (
        <div className='flex flex-col gap-6 w-full h-full'>
            {/* Title */}
            <div className='w-full h-20 flex px-4 items-center text-black gap-8 shadow '>
                <button type='button' onClick={toggle}><XCircle size={25} /></button>
                <span className='text-lg'>Contact Info</span>
            </div>

            {/* Details */}
            <div className='w-full flex-1 flex flex-col px-4 gap-4'>
                {/* Profile Pic and Name */}
                <div className='flex  items-center gap-8 py-6'>

                    <div className='w-16 h-16 relative'>
                        <Image src={ChatList[props.selectedID].img} alt="profile_pic" fill className='object-contain rounded-full ' />
                    </div>

                    <div className='flex flex-col gap-2 text-black'>
                        <span className='text-lg font-medium'>{ChatList[props.selectedID].name}</span>
                        <span>+91 6265 081 928</span>
                    </div>

                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* About */}
                <div className='flex flex-col gap-4 text-black py-2'>
                    <span className=''>About</span>
                    <span className='font-medium'>Hi there</span>
                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Media,Links & Docs */}
                <div className='flex flex-col gap-4 text-black py-2'>

                    <div className='flex w-full justify-between items-center'>
                        <span className=''>Media, links and docs</span>

                        <button className='flex gap-2 items-center' type='button' onClick={()=>{setType("MEDIA")}}>
                            <sapn className='text-sm text-center'>401</sapn>
                            <CaretRight size={25} />
                        </button>

                    </div>

                    <div className='flex justify-between w-full items-center'>
                        {[1, 2, 3].map((el) => {
                            return (
                                <div className='min-w-24 min-h-24 max-w-24 max-h-24 relative'>
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

                    <div className='flex w-full justify-between'>
                        <div className='flex gap-4'>
                            <Star size={25} />
                            <span>Starred Messages</span>
                        </div>

                        <button><CaretRight size={25} /></button>

                    </div>

                </div>

                <div className='w-full h-[0.5px] bg-[#A4A4A4]' />

                {/* Mute Notififications */}
                <div className='flex flex-col gap-4 py-2'>

                    <div className='flex w-full justify-between'>
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

                <div className='flex flex-col gap-4 py-2 w-full'>

                    <span>3 groups in common</span>

                    <div className='flex w-full h-28 overflow-y-scroll items-center'>

                        <div className='w-full h-24 flex flex-col gap-6'>

                            {[1, 2, 3].map((el) => {
                                return (
                                    <div className='w-full h-20 flex gap-4 items-center'>
                                        <div className='min-w-12 min-h-12 max-w-12 max-h-12 relative'>
                                            <Image src={faker.image.avatar()} alt='media' fill className='object-contain rounded-full' />
                                        </div>

                                        <div className='flex flex-col justify-center h-full flex-1 text-black overflow-hidden'>
                                            <span className='font-medium text-lg'>Name</span>
                                            <span className='text-sm whitespace-nowrap'>Owl, Parrot, Rabbit , You</span>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                    </div>

                </div>

                {/* Block & Delete */}

                <div className='flex-1 flex items-center gap-4 pb-2'>
                    <button className='h-full w-1/2 flex items-center justify-center ring-1 rounded-xl bg-white ring-[#5B96F7] text-[#5B96F7] hover:bg-[#5B96F7] hover:text-white'>
                        <div className='flex gap-2 items-center '>
                            <Prohibit size={30} />
                            <span className='font-semibold'>Block</span>
                        </div>
                    </button>

                    <button className='h-full w-1/2 flex items-center justify-center ring-1 rounded-xl bg-white ring-[#5B96F7] text-[#5B96F7] hover:bg-[#5B96F7] hover:text-white'>
                        <div className='flex gap-2 items-center '>
                            <Trash size={30} />
                            <span className='font-semibold'>Delete</span>
                        </div>
                    </button>
                </div>


            </div>
        </div>
    )
}

export default ContactInfo