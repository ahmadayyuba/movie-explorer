import React from "react";

export const Button = ({ 
    children, 
    variant = "primary", 
    icon: Icon = null, 
    iconPosition ="right",
    onClick, 
    className = "", 
    ...props 
}) => {

    const baseStyle = "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-8 py-3 font-medium transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 w-full sm:w-auto";

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
            {Icon && iconPosition === "left" && <Icon className="w-5 h-5 shrink-0" />}

            <span>{children}</span>

            {Icon && iconPosition === "right" && <Icon className="w-5 h-5 shrink-0" />}
        </button>
    );
};