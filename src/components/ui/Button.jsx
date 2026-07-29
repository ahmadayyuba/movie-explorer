import React from "react";

export const Button = ({ 
    children, 
    variant = "primary", 
    icon: Icon = null, 
    onClick, 
    className = "", 
    ...props 
}) => {

    const baseStyle = "flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 cursor-pointer";

    const variants = {
        
        primary :"bg-red-900 text-white hover:bg-red-700 shadow-md shadow-red-900/3",
        
        secondary:"bg-neutral-900/80 text-white border border-neutral-700 hover:bg-neutral-800"
    };
    return (
        <button
            type="button"
            onClick={onClick}
            className={`${baseStyle} ${variants[variant] || variants.primary} ${className}`}
            {...props}
        >
            {Icon && <Icon className="w-4 h-4" />}

            <span>{children}</span>

        </button>
    );
};