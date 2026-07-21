import React from "react";

import { ArrowIcon } from "../icons/icons";

export const ScrollButton = ({direction = "up", onClick, ...props}) => {

    return (
        <button
            type="button"
            onClick={onClick}
            className="bg-red-900 p-3 rounded-full border border-neutral-950 hover:bg-red-800"
            {...props}
        >
        
        <ArrowIcon className={`w-6 h-6 transition-transform duration-300 ${
                    direction === "down" ? "rotate-180" : ""
                }`}
        />
        </button>
    );
};