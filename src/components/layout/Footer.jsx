import React from "react";
import { Logo } from "./Logo";

export const Footer = ({
    copyrightText = "Copyright @2026 Movie Explorer",
    ...props 
}) => {     
    return (

        <footer 
            className="flex items-center justify-between px-32 md:20 py-6 bg-neutral-950 w-full"
        {...props}
        >
            <div>
                <Logo/>
            </div>

            <div className="text-xs md:text-sm text-neutral-600 font-normal">
                <p>{copyrightText}</p>
            </div>
        </footer>
    );
};

