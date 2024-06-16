'use client';

import React from 'react';
import { Channel } from 'stream-chat-react';


const ChannelWrapper = ({ children }) => {
    return (
        <Channel>
            {children}
        </Channel>
    )
}

export default ChannelWrapper