import React, { useState } from "react";


import { Badge } from "../ui"; 
import { RankBadge } from "../icons/icons";
import { motion } from "framer-motion";


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
            initial={{ opacity:0, filter: "blur(10px)"}}
            whileInView={{opacity: 1, filter: "blur(0px)" }}
            viewport={{once: true, margin: "-50px"}}
            transition={{duration: 0.5, ease: "easeOut"}}
            onClick={onClick}
            style={{
                transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), z-index 0.3s"
            
            }}

            className="group cursor-pointer flex flex-col gap-2  items-start bg-transparent shrink-0 select-none hover:scale-105 hover:z-20"
            {...props}
        >

        <div 
            onClick={onClick}
            className="group cursor-pointer flex flex-col gap-2 w-[140px] md:w-[190px] sm:w-[190px] items-start bg-transparent shrink-0 select-none transition-transform duration-700 hover:scale-105 hover:z-20"
            {...props}
        >
            <div className={`relative w-full aspect-[2/3] md:rounded-2xl rounded-xl overflow-hidden bg-neutral-800 transition-opacity duration-700 ${!isLoaded ? 'animate-pulse' :''}`} >
                <img 
                    src={imgError || !posterUrl ? fallbackImage : posterUrl} 
                    alt={title} 
                    loading="lazy"
                    onLoad={() => setIsLoaded(true)}
                    onError={() => {
                        setImageError(true);
                        setIsLoaded(true);
                    }}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
                        isLoaded 
                        ? 'opacity-100 scale-100 group-hover:scale-105' 
                        : 'opacity-0 scale-95'
                    }`} 
                />
        {rank && (
            <div className="absolute top-2 left-2 z-10 w-12 h-12 rounded-full bg-neutral-950/80 backdrop-blur flex items-center justify-center text-white font-bold text-xs sm:text-sm shadow-md">
                {rank}
            </div>
        )}
            </div>
            <div className="flex flex-col gap-1 w-full">
                {/* Judul Film */}
                <h3 className="text-white font-medium text-xs sm:text-xs md:text-base leading-snug line-clamp-2 transition-colors">
                    {title}
                </h3>

                <div className="mr-3">
                    <Badge variant="rating">{rating}</Badge>
                </div>
            </div>
        </div> 
        </motion.div>
    );
};