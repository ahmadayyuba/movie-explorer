import React from "react";

export const Badge = ({ children, ...props }) => {
    return (
        <span className="text-xs font-semibold rounded-md bg-neutral-700 text-neutral-200 px-2.5 py-1" {...props}>
            {children}
        </span>
    );
};