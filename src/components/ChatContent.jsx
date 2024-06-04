'use client';

import React from 'react';
import DefaultScreen from './DefaultScreen';
import { selectedUserStore } from "@/zustand/store";
import ChatScreen from './ChatScreen';

const ChatContent = () => {
    const id = selectedUserStore((state) => state.id);
    return (
        <div className="w-full h-full">
            {
                id > -1 ?
                    <ChatScreen selectedID={id} />
                    :
                    <DefaultScreen />
            }

        </div>
    )
}

export default ChatContent