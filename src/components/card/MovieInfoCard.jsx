import React from "react";
import { motion } from "framer-motion";

export const infoCardVariants = {
    hidden: {opacity: 0, y: 12},
    show: {opacity:1, y: 0, transition:{duration: 0.4, ease: "easeOut"} },
};

export const MovieInfoCard = ({ icon: Icon, label, value, iconClassName = "text-white" }) => {
    return (
        <div className="w-full rounded-2xl border border-neutral-800 bg-neutral-900/60 p-4 text-center flex flex-col items-center justify-center gap-1.5">
            {Icon && <Icon className={`w-7 h-7 ${iconClassName}`} />}
            <span className="font-normal text-sm text-neutral-400 text-center wrap-break-word">
                {label}
            </span>
            <p className="font-bold text-white text-sm md:text-base leading-tight ">{value}</p>
        </div>
    );
};