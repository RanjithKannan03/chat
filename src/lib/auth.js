'use client';
import axios from "axios";
import { redirect } from "next/navigation";


function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function login(prevState, formData) {
    const user = {
        username: formData.get('email'),
        password: formData.get('password')
    }
    console.log(user);
    if (!user.username || user.username.trim().length === 0) {
        return { error: "Email and password fields cannot be empty. Please enter your credentials." };
    }
    if (!user.password || user.password.trim().length === 0) {
        return { error: "Email and password fields cannot be empty. Please enter your credentials." };
    }
    const response = await axios.post('http://localhost:8000/login', { ...user }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
    console.log(response);
    if (response.status != 200) {
        throw new Error("Please try again later.")
    }
    else {
        const data = response.data;
        if (data.message != "success") {
            return { error: data.message };
        }
        else {
            redirect('/');
        }
    }
}

export async function register(prevState, formData) {
    const user = {
        email: formData.get('email'),
        username: formData.get('username'),
        password: formData.get('password')
    };
    if (!isValidEmail(user.email)) {
        return { error: "Please enter a valid email address." };
    }
    if (formData.get('confirmPassword') != user.password) {
        return { error: "The passwords you entered do not match. Please try again." }
    }
    const response = await axios.post('http://localhost:8000/register', { ...user }, {
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true
    });
    if (response.status != 200) {
        throw new Error("Please try again later.")
    }
    else {
        const data = response.data;
        if (data.message != 'success') {
            return { error: data.message };
        }
        else {
            redirect('/')
        }
    }
}

