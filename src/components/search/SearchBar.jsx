import React from "react";
import {SearchIcon, XIcon} from "../icons/icons";

export const SearchBar = ({
    placeholder = "Search movie",
    value,
    onChange,
    onClear,
    onSubmit,
    children,
    ...props 
}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative w-full max-w-80">
            <div className="w-full h-12 bg-neutral-900 border border-neutral-700/80 rounded-2xl flex items-center px-4 gap-3 focus-within:border-neutral-500 transition-all">
                <input 
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-500"
                    {...props}
                />

                {value && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="text-neutral-500 hover:text-white transition-colors cursor-pointer p-0.5"
                    >
                        <XIcon className="w-4 h-5"/>
                    </button>
                )}

                {/* Tombol Search (Submit) */}
                <button
                    type="submit"
                    className="p-1.5 rounded-full bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-all cursor-pointer shrink-0"
                    aria-label="Search"
                >
                    <SearchIcon className="w-4 h-4" />
                </button>
            </div>
            {/* Render dropdown jika ada */}
            {children}
        </form>
    );
};  