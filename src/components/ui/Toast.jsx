import React from "react";

import { CheckIcon } from "../icons/icons";
import { motion } from "framer-motion";

export const Toast = ({message = "Succes Add to Favorite", ...props }) => {
    return (

        <motion.div
            // Animasi Masuk & Keluar (Slide Down + Fade In)
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
        <div
            className="flex items-center gap-3 bg-neutral-900 text-white border border-neutral-600 w-64 py-2.5 px-5 rounded-2xl"
            {...props}
        >
        
        <CheckIcon className="w-5 h-5 font-medium"/>

        <span className="text-sm font-medium ">
            {message}
        </span>
        </div>
        </motion.div>
    );
};