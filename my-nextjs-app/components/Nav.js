import React from "react";
import Divider from '@mui/material/Divider';

export default function Nav(){
    return(
        <div className="fixed top-0 w-full z-50">
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
            <nav className="w-full py-4 px-8 dark:bg-gray-900 shadow-md" style={{ backgroundColor: '#1d1c1c' }}>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/" className="dark:text-gray-200 hover:underline">

CHASE TIPTON                    </a>
                    </li>
                    <li>
                        <a href="/about" className=" dark:text-gray-200 hover:underline">
                            MORE
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className=" dark:text-gray-200 hover:underline">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
        </div>
    )
}