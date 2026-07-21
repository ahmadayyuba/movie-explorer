import React from "react";

import { CheckIcon } from "../icons/icons";

export const Toast = ({message = "Succes Add to Favorite", ...props }) => {
    return (

        <div
            className="flex items-center gap-3 bg-neutral-900 text-white border border-neutral-600 w-64 py-2.5 px-5 rounded-2xl"
            {...props}
        >
        
        <CheckIcon className="w-5 h-5 font-medium"/>

        <span className="text-sm font-medium ">
            {message}
        </span>
        </div>
    );
};