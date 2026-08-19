import React, { useState } from "react";
import { Badge } from "../ui";
import { motion } from "framer-motion";

export const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: "easeOut" },
    },
};

export const MovieCard = ({
    id,
    title = "Captain America: Brave New World",
    rating = "6.2/10",
    posterUrl = "https://picsum.photos/300/450",
    onClick,
    rank,
    ...props
}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imgError, setImageError] = useState(false);

    const fallbackImage = "https://via.placeholder.com/300x450/171717/888888?text=No+Poster";

    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
            variants={cardVariants}
            onClick={onClick}
            whileHover={{ scale: 1.05, zIndex: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group cursor-pointer flex flex-col gap-1.5 sm:gap-2 w-full items-start bg-transparent shrink-0 select-none"
            {...props}
        >
            <div
                className={`relative w-full aspect-[2/3] rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden bg-neutral-800 transition-opacity duration-500${
                    !isLoaded ? "animate-pulse" : ""
                }`}
            >
                <img
                    src={imgError || !posterUrl ? fallbackImage : posterUrl}
                    alt={title}
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => {
                        setImageError(true);
                        setIsLoaded(true);
                    }}
                    className={`w-full h-full object-cover transition-all duration-500 ease-out ${
                        isLoaded ? "opacity-100 scale-100 group-hover:scale-105" : "opacity-0 scale-95"
                    }`}
                />
                {rank && (
                    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 z-10 w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-neutral-950/80 backdrop-blur flex items-center justify-center text-white font-bold text-[10px] sm:text-xs md:text-sm shadow-md">
                        {rank}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-1 w-full">
                <h3 className="text-white font-medium text-xs sm:text-xs md:text-base leading-snug line-clamp-2 transition-colors">
                    {title}
                </h3>

                <div className="mr-3">
                    <Badge variant="rating">{rating}</Badge>
                </div>
            </div>
        </motion.div>
    );
};