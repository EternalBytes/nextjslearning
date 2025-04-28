import React from "react";
import NavLink from "../ui/NavLink";
import ContactButton from "../ui/ContactButton";

export default function Header(){
    return(
        <header className=" bg-gray-900 py-4 px-24">
          <nav className=" container">
            <ul className=" flex gap-3">
              <li>
                <NavLink href={"/"} >Home</NavLink>
              </li>
              <li>
                <NavLink href={"/about"} >About</NavLink>
              </li>
              <li>
                <ContactButton />
              </li>
              <li>
                <NavLink href={"/posts"}>Blog</NavLink>
              </li>
            </ul>
          </nav>
        </header>
    )
}