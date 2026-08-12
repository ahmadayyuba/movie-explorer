import React from "react";
import { Logo } from "./Logo";

export const Footer = ({
    copyrightText = "Copyright @2026 Movie Explorer",
    ...props 
}) => {     
    return (

        <footer 
            className="flex md:flex-row justify-between px-4 sm:px-6 md:px-20 py-6 min-h-[120px] bg-neutral-950  w-full border-neutral-800 select-none md:gap-10 gap-4 mx-auto max-w-[1220px] items-center"
        {...props}
        >
            <div className="flex items-center gap-1">
                <Logo/>
            </div>

            <div className="text-xs md:text-sm text-neutral-600 font-normal text-center md:text-neutral-600 md:text-right">
                <p>{copyrightText}</p>
            </div>
        </footer>
    );
};

