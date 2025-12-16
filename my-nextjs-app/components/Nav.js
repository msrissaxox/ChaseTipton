import React from "react";

export default function Nav(){
    return(
        <nav className="w-full py-4 px-8 bg-white dark:bg-gray-900 shadow-md">
            <ul className="flex space-x-6">
                <li>
                    <a href="/" className="text-gray-800 dark:text-gray-200 hover:underline">

                        Home
                    </a>
                </li>
                <li>
                    <a href="/about" className="text-gray-800 dark:text-gray-200 hover:underline">
                        About
                    </a>
                </li>
                <li>
                    <a href="/contact" className="text-gray-800 dark:text-gray-200 hover:underline">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    )
}