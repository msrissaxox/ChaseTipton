'use client';

import React, { useState } from "react";
import Divider from '@mui/material/Divider';

export default function Nav(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <div className="fixed top-0 w-full z-50 py-2 md:py-4" style={{ backgroundColor: '#1d1c1c' }}>
            <div className="w-full flex justify-center">
                <Divider className=""sx={{ backgroundColor: '#bfbab0', width: '90%' }} />
            </div>
            <div className="w-full flex justify-center">
                <nav className="flex justify-between items-center w-[90%] py-1 md:py-2" style={{ backgroundColor: '#1d1c1c' }}>
                    <div>
                        <a href="/" className="dark:text-gray-200 text-2xl">
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
                            <a href="https://flickr.com/photos/203808147@N05/" target="_blank" rel="noopener noreferrer" className="font-serif text-lg md:text-2xl dark:text-gray-200">
                                MORE
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="font-serif text-lg md:text-2xl dark:text-gray-200">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Mobile Menu Dropdown */}
            <div 
                className={`w-full flex justify-center overflow-hidden transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="md:hidden w-[90%] py-4" style={{ backgroundColor: '#1d1c1c' }}>
                    <ul className="flex flex-col space-y-4">
                        <li>
                            <a href="https://flickr.com/photos/203808147@N05/" target="_blank" rel="noopener noreferrer" className="font-serif text-lg dark:text-gray-200 hover:underline block" onClick={() => setIsMenuOpen(false)}>
                                MORE
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="font-serif text-lg dark:text-gray-200 hover:underline block" onClick={() => setIsMenuOpen(false)}>
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="w-full flex justify-center">
                <Divider sx={{ backgroundColor: '#bfbab0', width: '90%' }} />
            </div>
        </div>
    )
}