"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Input from "../components/input";
import { useState } from "react";


const Auth = () => {
    const[email, setEmail] = useState('');
    const[name, setName] = useState('');
    const[password, setPassword] = useState('');
    return(
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat
         bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50 ">
        <nav className="px-12 py-3">
        <img src="/images/logo.png" alt="logo">
        </img>
        </nav>
        <div className="flex justify-center ">
            <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl mb-8 font-semibold ">
                   Sign In 
                </h2>
            <div className="flex flex-col gap-4">
            <Input
            label="E-mail"
            onChange={(ev:any)=>setEmail(ev.target.value)}
            id="email"
            type="email"
            value={email}
            />
              <Input
            label="Username"
            onChange={(ev:any)=>setName(ev.target.value)}
            id="email"
            type="email"
            value={name}
            />
              <Input
            label="Password"
            onChange={(ev:any)=>setEmail(ev.target.value)}
            id="password"
            type="password"
            value={email}
            />
            </div>
            <button className="bg-red-600 w-full py-3 text-white rounded-md mt-10 hover:bg-red-700 transition">
            Login
            </button>
            </div>

        </div>
        </div>
        </div>
    );
    }


    export default Auth;