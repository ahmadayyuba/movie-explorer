import React, { useEffect, useState } from "react";
import { SearchIcon, MenuIcon, XIcon, ArrowLeftIcon } from "../icons/icons";
import { SearchBar } from "../search/SearchBar";
import { Logo } from "./Logo";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
    
    // 1. Perbaikan typo variabel state
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // 2. Hubungkan state isScrolled ke class Tailwind Header
        <header 
            className={`w-full fixed top-0 left-0 right-0 z-50 select-none transition-all duration-300 ${
                isScrolled 
                    ? "bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-lg" 
                    : "bg-gradient-to-b from-neutral-950/80 via-neutral-950/20 to-transparent backdrop-blur-none border-transparent"
            }`}
        > 
            <div className="max-w-[1120px] flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-20">

                {/* --- JIKA MOBILE SEARCH DIBUKA --- */}
                {isMobileSearchOpen ? ( 
                    <div className="flex items-center gap-3 w-full md:hidden transition-all duration-300">
                        {/* Tombol Back berdiri sendiri */}
                        <button
                            type="button"
                            onClick={() => setIsMobileSearchOpen(false)}
                            className="text-neutral-300 hover:text-white p-1 cursor-pointer"
                            aria-label="Close search"
                        >
                            <ArrowLeftIcon className="w-6 h-6" />
                        </button>

                        {/* SearchBar dipisah dari tag button */}
                        <div className="flex-1">
                            <SearchBar placeholder="Search Movie" autoFocus />
                        </div>
                    </div>
                ) : ( 
                    /* --- TAMPILAN NORMAL HEADER --- */
                    <> 
                        <div className="flex items-center gap-10">
                            <a href="#" className="flex items-center text-xl font-bold tracking-tight text-white">
                                <Logo />
                            </a>

                            <nav className="hidden md:flex items-center gap-6 font-medium text-white">
                                <a href="#" className="text-red-600 font-semibold transition-colors duration-200">
                                    Home
                                </a>
                                <a href="#" className="hover:text-red-600 font-semibold transition-colors duration-200">
                                    Favorites
                                </a>
                            </nav>
                        </div>

                        {/* BAGIAN KANAN: SEARCH BAR DESKTOP */}
                        <div className="hidden md:block">
                            <SearchBar placeholder="Search Movie" />
                        </div>

                        {/* BAGIAN KANAN: TOMBOL MOBILE */}
                        <div className="md:hidden flex items-center gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsMobileSearchOpen(true);
                                    if (isMenuOpen) setIsMenuOpen(false);
                                }}
                                className="text-neutral-300 hover:text-white p-1 cursor-pointer transition-colors"
                                aria-label="Open Search"
                            >
                                <SearchIcon className="w-6 h-6"/>
                            </button>

                            <button 
                                type="button"
                                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                                className="text-white p-1 cursor-pointer"
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6" />}
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/*  DRAWER MENU MOBILE */}
            {isMenuOpen && !isMobileSearchOpen && (
                <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 flex flex-col items-start px-6 py-6 gap-3 font-medium text-base transition-all duration-200 shadow-xl min-h-screen">
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