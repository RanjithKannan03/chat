'use client';

import React from 'react';
import { Channel } from 'stream-chat-react';


const SideBarChannelWrapper = ({ children }) => {
    return (
        <Channel>
            {children}
        </Channel>
    )
}

export default SideBarChannelWrapper