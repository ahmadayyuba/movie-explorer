import React from "react";

export const MovieInfoCard = ({ icon: Icon, label, value }) => {
    return (

        <div className="w-full max-w-64 rounded-2xl border border-neutral-800 bg-black p-4 md:p-5 text-center text-neutral-25 flex flex-col items-center justify-center gap-2">
            
            {Icon && <Icon className="w-7 h-7 text-white"/>}
            <span className="font-normal text-sm text-neutral-400 text-center wrap-break-word">{label}
            </span>
            <p className="font-bold text-white text-sm md:text-base leading-tight ">{value}</p>
        </div>
    );
};