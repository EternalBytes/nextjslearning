'use client'

import { useRouter } from "next/navigation";
import React, { startTransition } from "react";

export default function Error({ error, reset }) {
    const router = useRouter();
    const refresh = ()=> {
        startTransition(()=>{
            router.refresh();
            reset()
        })
    };
    return (
        <div>
            <h2 className=" text-red-400 text-sm">Something went wrong.</h2>
            <button onClick={refresh}>Try again</button>
        </div>
    )
}