import React from "react";
import {SearchIcon} from "../icons/icons";

export const SearchBar = ({
    placeholder = "Search movie",
    value,
    onChange,
    children,
    ...props 
}) => {
    return (
        <div className="relative w-full max-w-80">
            <div className="w-full h-12 bg-neutral-900 rounded-2xl flex items-center px-5 gap-3">
                <SearchIcon className="w-5 h-5 text-neutral-500 shrink-0" />
                <input 
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-500"
                    {...props}
                />
            </div>
            {/* Render dropdown jika ada */}
            {children}
        </div>
    );
};  