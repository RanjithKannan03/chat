'use client';

import React from 'react';
import { useChannelStateContext } from 'stream-chat-react';
import ChatScreen from './ChatScreen';


const ChatContent = () => {
    const { channel } = useChannelStateContext();
    return (
        <div className="w-full h-full">
            {
                channel.id ?
                    <ChatScreen />
                    :
                    <DefaultScreen />
            }

        </div>
    )
}

export default ChatContent