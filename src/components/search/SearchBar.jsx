import React from "react";
import {SearchIcon} from "../icons/icons";

export const SearchBar = ({
    placeholder = "Search movie",
    value,
    onChange,
    ...props 
}) => {
    return (

        <div className=" max-w-80 h-12 bg-neutral-800 rounded-2xl flex items-center px-5 gap-3 border border-neutral-500">

            <SearchIcon className="w-5 h-5 text-neutral-500"/>

            <input 
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent text-white text-sm outline-none placeholder-neutral-500"
                {...props}
                />
        </div>
    );
};  