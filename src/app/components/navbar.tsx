'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const pages = ['Home', 'Services', 'Contact Us', 'Calculations'];

export default function ResponsiveAppBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-none h-[78px]  px-7 flex items-center justify-between w-full">
            <div>
                <Image src="/logo.svg" alt="Logo" width={90} height={70} priority />
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <button onClick={handleToggleMenu} className="text-black focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden">
                    {pages.map((page) => (
                        <div key={page} className="p-4 border-b text-center text-black">
                            {page}
                        </div>
                    ))}
                </div>
            )}
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
                {pages.map(page => (
                    <button key={page} className="text-black text-lg text-[15px] px-4 py-2">
                        {page}
                    </button>
                ))}
                <button className="bg-[#88AA00] text-white rounded-full px-6 py-2 text-lg font-medium">
                    Request a Quote
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-[#002B5B] text-white rounded-full transition-transform hover:bg-[#001F3F] hover:rotate-45">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                                </svg>
                </button>
            </div>
        </nav>
    );
}
