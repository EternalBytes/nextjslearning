'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({href, ...rest}){
    const pathname = usePathname();
    const isActive = href === pathname;

    return (
        <Link className={ isActive ? " text-white" : " text-gray-400" } href={href} {...rest} />
    )
}