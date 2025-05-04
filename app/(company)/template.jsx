'use client'

import NavLink from "@/components/ui/NavLink";
import { motion } from "framer-motion";

export default function Template({ children }) {
    
    return (
        <div className=" container flex">
            <div className=" overflow-y-auto border-r border-gray-200 py-6 pr-12">
                <nav>
                    <ul role="list" className=" flex flex-1 flex-col gap-y-4">
                        <motion.li 
                            key={133}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <NavLink href={'/about'}>About</NavLink>
                        </motion.li>
                        <motion.li 
                            key={233}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <NavLink href={'/team'}>Team</NavLink>
                        </motion.li>
                        <motion.li 
                            key={333}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <NavLink href={'/contact'}>Contact</NavLink>
                        </motion.li>
                        <motion.li 
                            key={433}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <NavLink href={'/join'}>Join</NavLink>
                        </motion.li>
                    </ul>
                </nav>
            </div>
            <main className=" grow ml-12 p-6 bg-gray-700 rounded">{ children }</main>
        </div>
    )
}