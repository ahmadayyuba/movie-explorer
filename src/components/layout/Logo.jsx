import React from "react";
import { TvIcon } from "../icons/icons"; 

export const Logo = () => {
    return (
        // Wadah utama logo (berbaris horizontal antara ikon dan teks)
        <div className="flex items-center gap-2 select-none cursor-pointer">
            
            {/* Bagian Ikon Logo */}
            <TvIcon className="w-7 h-7 text-white " />
            
            {/* Bagian Teks Merk */}
            <span className="text-xl font-bold tracking-tight text-white ">
                Movie
            </span>
            
        </div>
    );
};