import React from "react";
import Divider from '@mui/material/Divider';

export default function Nav(){
    return(
        <div className="fixed top-0 w-full z-50 py-8" style={{ backgroundColor: '#1d1c1c' }}>
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
            <nav className="flex justify-between items-center w-full py-4 px-8" style={{ backgroundColor: '#1d1c1c' }}>
                <div>
                    <a href="/" className="dark:text-gray-200 hover:underline">
                        CHASE TIPTON
                    </a>
                </div>
                <ul className="flex space-x-6">
                    <li>
                        <a href="/about" className="dark:text-gray-200 hover:underline">
                            MORE
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="dark:text-gray-200 hover:underline">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
        </div>
    )
}