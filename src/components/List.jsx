'use client';

import React, { useEffect, useState } from 'react';
import { userStore } from '@/zustand/store';

const List = ({ children, error = false, loading, type, isPinned }) => {

    const user = userStore(state => state.user);

    const pinnedChannels = user.pinnedChannels;


    if (error) {
        return (
            <div className={`flex flex-col w-full ${isPinned ? 'h-[200px]' : 'h-[400px]'}`}>
                <p>Connection error, please wait a moment and try again.</p>
            </div>
        )
    }

    if (loading) {
        return (
            <div className={`flex flex-col w-full ${isPinned ? 'h-[200px]' : 'h-[400px]'}`}>
                <p className="team-channel-list__message loading">
                    {type === 'team' ? 'Groups' : 'Messages'} loading...
                </p>
            </div>
        )
    }

    if (isPinned && pinnedChannels.length === 0) {
        return (
            <div className={`flex flex-col gap-2 w-full h-[200px]`}>
                <span>{isPinned ? 'Pinned' : 'All Messages'}</span>
                <div className='flex items-center justify-center flex-1'>
                    <span>You have no Pinned messages.</span>

                </div>
            </div>
        )
    }

    return (
        <div className={`flex flex-col gap-2 w-full ${isPinned ? 'h-[200px]' : 'h-[400px]'}`}>
            <span>{isPinned ? 'Pinned' : 'All Messages'}</span>

            <div className="flex flex-1 w-full py-2 overflow-y-auto">

                <div className="flex flex-col w-full gap-4 pb-2 pr-2">
                    {children}

                </div>

            </div>

        </div>
    )
}

export default List