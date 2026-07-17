import React from 'react';

export const Button = ({ 
    children, 
    variant = 'primary', 
    className = '', 
    ...props 
}) => {

    const baseStyle = "flex items-center justify-center gap-2 font-medium transition-all duration-200 active:scale-95 text-md";

    const variants = {
    primary: "bg-primary-300 hover:bg-primary-200 text-neutral-25 rounded-md px-5 py-2.5 shadow-md",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 rounded-md px-5 py-2.5",
    outline: "bg-transparent border border-neutral-600 hover:bg-neutral-800 text-neutral-300 rounded-md px-5 py-2.5",
    redPill: "bg-red-800 hover:bg-red-700 text-white rounded-full px-10 py-3 shadow-lg"
};

    return (
    <button
    className={`${baseStyle} ${variants[variant]} ${className}`}
    {...props}
    >
    {children}
    </button>
    );
};