'use client'

import React from 'react';
import { userStore } from '@/zustand/store';
import Image from 'next/image';

const UserAvatar = () => {
  const user = userStore((state) => state.user);
  return (
    <Image src={user.avatarURL} fill className='object-contain rounded-full' alt='profile_pic' />
  )
}

export default UserAvatar