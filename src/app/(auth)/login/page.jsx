"use client";

import FormSubmitButton from "@/components/FormSubmitButton";
import Link from "next/link";
import React, { useState } from "react";
import { Eye, EyeSlash, GoogleLogo, MetaLogo } from "@/components/Icons";
import Image from "next/image";
import { login } from "@/lib/auth";
import { useFormState } from 'react-dom';


const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, formAction] = useFormState(login, { error: null })
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="flex w-[30%] flex-col gap-4 p-4 text-black">
        <div className="relative self-center w-32 h-32">
          <Image
            src={"/assets/chirpify_logo.png"}
            fill
            className="object-contain"
            alt="logo"
          />
        </div>

        <span className="text-2xl font-semibold">Login to Chirpify</span>

        {state.error && <span>{state.error}</span>}

        <span className="">
          New User?{" "}
          <Link className="text-[#5B96F7]" href={"/register"}>
            Create an account
          </Link>
        </span>

        <form className="flex flex-col gap-4" action={formAction}>
          <div className="relative items-center w-full px-2 py-1 border border-gray-200 rounded-md 0 focus-within:ring-1 focus-within:ring-black">
            <input
              type="text"
              id="floating_outlined_email"
              name="email"
              className="peer w-full appearance-none bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-0 dark:text-white"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined_email"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Email
            </label>
          </div>

          <div className="relative flex items-center w-full px-2 py-1 border border-gray-200 rounded-md 0 focus-within:ring-1 focus-within:ring-black">
            <input
              type={`${showPassword ? "text" : "password"}`}
              name="password"
              autoComplete="off"
              id="floating_outlined_pass"
              className="peer flex-1 appearance-none bg-transparent px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:outline-0 dark:text-white"
              placeholder=" "
            />
            <button
              type="button"
              onClick={() => {
                setShowPassword((prev) => {
                  return !prev;
                });
              }}
            >
              {showPassword ? <Eye size={25} /> : <EyeSlash size={25} />}
            </button>
            <label
              htmlFor="floating_outlined_pass"
              className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-black rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500"
            >
              Password
            </label>
          </div>

          <span className="self-end hover:underline">
            <Link href="/auth/login">Forgot password?</Link>
          </span>

          <FormSubmitButton text="Login" />
        </form>

        <div className="flex items-center w-full gap-4">
          <div className="h-[1px] flex-1 bg-black" />
          <span>OR</span>
          <div className="h-[1px] flex-1 bg-black" />
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 px-4 py-2 font-medium text-white bg-black rounded-lg">
            <GoogleLogo size={25} weight={"bold"} />

            <span>Sign in with Google</span>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-transparent px-4 py-2 font-medium text-[#5B96F7] ring-2 ring-[#5B96F7]">
            <MetaLogo size={25} weight="bold" />

            <span>Sign in with Meta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
