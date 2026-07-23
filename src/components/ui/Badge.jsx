import React from "react";
import { StarIcon } from "../icons/icons"; // 👈 Impor StarIcon bawaan project lu

export const Badge = ({ children, variant = "default", ...props }) => {
    return (
        <span 
            className="inline-flex items-center gap-1 text-xs font-semibold rounded-md  text-neutral-200 py-1 select-none" 
            {...props}
        >
            {/* Jika variant="rating", tampilkan ikon bintang kuning */}
            {variant === "rating" && (
                <StarIcon className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            )}
            
            <span>{children}</span>
        </span>
    );
};