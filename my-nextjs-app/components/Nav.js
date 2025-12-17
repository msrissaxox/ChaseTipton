'use client';

import React, { useState } from "react";
import Divider from '@mui/material/Divider';

export default function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="fixed top-0 w-full z-50 py-8" style={{ backgroundColor: '#1d1c1c' }}>
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
            <nav className="flex justify-between items-center w-full py-4 px-8" style={{ backgroundColor: '#1d1c1c' }}>
                <div>
                    <a href="/" className="dark:text-gray-200 hover:underline">
                        CHASE TIPTON
                    </a>
                </div>
                
                {/* Hamburger Menu Button - Mobile Only */}
                <button 
                    className="md:hidden text-gray-200 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6">
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
            
            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden px-8 py-4" style={{ backgroundColor: '#1d1c1c' }}>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a href="/about" className="dark:text-gray-200 hover:underline block" onClick={() => setIsMenuOpen(false)}>
                                MORE
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="dark:text-gray-200 hover:underline block" onClick={() => setIsMenuOpen(false)}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            )}
            
            <Divider sx={{ backgroundColor: '#bfbab0' }} />
        </div>
    )
}