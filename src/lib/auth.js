'use server';

import { redirect } from "next/navigation";

export async function login(formData) {
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    console.log(user);
    redirect('/');
}