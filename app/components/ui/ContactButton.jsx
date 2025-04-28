'use client'

import { useRouter } from "next/navigation";
import React from "react";

export default function ContactButton(){
    const router = useRouter();

    const handleClick = ()=> {
        router.push("/contact")
    }

    return <button onClick={handleClick}>Contact</button>
}