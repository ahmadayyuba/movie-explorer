import React from "react";
import { HeartBoldIcon, HeartIcon } from "../icons/icons";
export const FavoriteButton = ({ active = false, onClick, ...props }) => {
    return (
        <button 
            type="button" 
            className="bg-neutral-800 border rounded-full border-neutral-900 p-2 hover:bg-neutral-700 transition-colors cursor-pointer" 
            onClick={onClick} // Langsung teruskan event klik ke parent
            {...props}
        >
            {/* 3. Render icon berdasarkan prop 'active' secara real-time */}
            {active ? (
                <HeartBoldIcon className="w-5 h-5 text-red-700" />
            ) : (
                <HeartIcon className="w-5 h-5 text-neutral-400"/>
            )}
        </button>
    );
};