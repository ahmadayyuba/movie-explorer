import React, { useState } from "react";
import  { SearchIcon, MenuIcon, XIcon}  from "../icons/icons";
import { SearchBar } from "../search/SearchBar";
import { Logo } from "./Logo";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    
    return (

        <header className="w-full fixed top-0 left-0 right-0 min-h-1 bg-neutral-950/90 z-50 backdrop-blur-md border-b border-neutral-800/80 select-none transition-all duration-300 "> 
            <div className="max-w-[1120px] flex items-center justify-between mx-auto px-4 sm:px-8 md:px-20 h-20">

                {/* --- BAGIAN KIRI: LOGO & NAV DESKTOP --- */}
                <div className="flex items-center gap-10">
                    <a href="#">
                        <Logo />
                    </a>

                    <nav className="hidden md:flex items-center gap-6 font-medium text-white">
                        <a href="#" className="text-red-600 font-semibold transition-colors duration-200 text-">
                            Home
                        </a>
                        <a href="#" className="hover:text-red-600 transition-colors duration-200">
                            Favorites
                        </a>
                    </nav>
                </div>

                {/* --- BAGIAN KANAN: SEARCH BAR DESKTOP --- */}
                <div className="hidden md:block">
                    <SearchBar placeholder="Search Movie" />
                </div>

                {/* --- BAGIAN KANAN: TOMBOL MOBILE (SEARCH & HAMBURGER) --- */}
                <div className="md:hidden flex items-center gap-4">
                    <button 
                        onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                        className="text-neutral-300 hover:text-white p-1 cursor-pointer transition-colors"
                    >
                        <SearchIcon className="w-6 h-6" />
                    </button>
    
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
                        {isMenuOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* --- 3. DRAWER MENU MOBILE (SESUAI VIDEO: RATA KIRI & HOME MERAH) --- */}
            {isMenuOpen && (
                <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 flex flex-col items-start px-6 py-6 gap-2 font-medium text-base transition-all duration-200 shadow-xl min-h-screen">
                    <a 
                        href="#" 
                        className="text-red-600 font-semibold py-1 w-full" 
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a 
                        href="#" 
                        className="text-white hover:text-red-600 py-1 w-full transition-colors" 
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Favorites
                    </a>
                </div>
            )}
        </header>
    );
};