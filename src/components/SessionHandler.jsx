'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { userStore } from '@/zustand/store';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

const apiKey = 'nd3w9vpqxz7d';

const SessionHandler = ({ children }) => {

    const loginUser = userStore((state) => state.loginUser);

    const [isLoading, setIsLoading] = useState(true);

    const client = StreamChat.getInstance(apiKey);

    const user = userStore((state) => state.user);




    useEffect(() => {
        async function checkCookie() {
            const response = await axios.get('http://localhost:8000/isAuthenticated', { withCredentials: true });
            return response.data;
        }

        async function authenticate() {
            const result = await checkCookie();
            console.log(result);
            if (!result.message) {
                console.log('redirect');
                window.location.href = 'http://localhost:3000/login';
            }
            else {
                loginUser(result.user);
                console.log(result.user);
                setIsLoading(false);
            }
        }
        authenticate();
    }, [])

    if (isLoading) {
        return (
            <div className='flex-1 bg-white' />
        )
    }

    if (!isLoading) {
        client.connectUser({
            id: user.id,
            name: user.username,
            avatarURL: user.avatarURL,
            status: user.status,
        }, user.token);
    }

    return (
        <Chat client={client}>
            {children}
        </Chat>
    )
}

export default SessionHandler;