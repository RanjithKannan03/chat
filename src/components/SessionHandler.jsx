'use client';

import React, { useEffect, useState } from 'react';
import { redirect } from "next/navigation";
import axios from 'axios';

const SessionHandler = ({ children }) => {



    useEffect(() => {
        async function checkCookie() {
            const response = await axios.get('http://localhost:8000/isAuthenticated', { withCredentials: true });
            return response.data.message;
        }

        async function authenticate() {
            const result = await checkCookie();
            if (!result) {
                console.log('redirect');
                window.location.href = 'http://localhost:3000/login';
            }
        }
        authenticate();
    }, [])



    return (
        <>
            {children}
        </>
    )
}

export default SessionHandler;