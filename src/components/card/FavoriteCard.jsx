import React from "react";
import { motion } from "framer-motion";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { FavoriteButton } from "../ui/FavoriteButton";
import { VideoIcon } from "../icons/icons";

export const FavoriteCard = ({
    title = "Captain America: Brave New World",
    rating = "7.2/10",
    description = "After meeting with newly elected U.S. President Thaddeus Ross...",
    posterUrl = "https://picsum.photos/300/450",
    isFavorite = true,
    onWatchTrailer,
    onFavoriteClick,
    onCardClick,
    ...props 
}) => {
    return (
        <motion.div 
            {...props}
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            whileHover={{ scale: 1.01, y: -3 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => {
                if (onCardClick) onCardClick(e);
            }}
            className="flex flex-col md:flex-row md:items-start justify-between items-start gap-4 max-w-290 md:gap-6 select-none p-4 md:p-4 rounded-2xl bg-neutral-950/40 border border-neutral-800/60 hover:border-neutral-700/80 hover:bg-neutral-900/80 hover:shadow-xl hover:shadow-neutral-950/50 cursor-pointer transition-all relative group"
        >
            <div className="flex gap-6 md:gap-8 w-full md:contents">
                {/* Poster Film */}
                <div className="relative w-32 sm:w-36 md:w-48 aspect-[2/3] overflow-hidden md:rounded-2xl rounded-xl shrink-0">
                    <img 
                        src={posterUrl}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                {/* Detail Info Film */}
                <div className="text-white flex flex-col flex-1 justify-start md:justify-between min-w-0 md:gap-3 gap-1.5 sm:gap-2">
                    <h3 className="font-bold text-base sm:text-lg md:text-2xl leading-tight line-clamp-3 transition-colors">    
                        {title}
                    </h3>
                
                    <div>
                        <Badge 
                            variant="rating"
                            className="flex items-center gap-2 text-xs sm:text-sm"
                        >
                            {rating}
                        </Badge>
                    </div>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-2">
                        {description}
                    </p>

                    {/* Button Desktop */}
                    <div className="hidden md:block mt-2"> 
                        <Button
                            variant="primary"
                            icon={VideoIcon}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onWatchTrailer) onWatchTrailer();
                            }}
                        >
                            Watch Trailer
                        </Button>
                    </div>
                </div>
            </div>

            {/* Tombol Mobile (Watch Trailer & Favorite) */}
            <div className="flex items-center justify-between gap-3 md:hidden w-full pt-1">
                <Button
                    variant="primary"
                    icon={VideoIcon}
                    onClick={(e) => {
                        e.stopPropagation();
                        if (onWatchTrailer) onWatchTrailer();
                    }}
                    className="flex-1 text-xs sm:text-sm py-2 px-4"
                >
                    Watch Trailer
                </Button>

                <div 
                    className="shrink-0"
                    onClick={(e) => e.stopPropagation()}
                >
                    <FavoriteButton active={isFavorite} onClick={onFavoriteClick} />
                </div>
            </div>

            {/* Tombol Favorite Desktop */}
            <div 
                className="hidden md:block shrink-0"
                onClick={(e) => e.stopPropagation()}
            >
                <FavoriteButton active={isFavorite} onClick={onFavoriteClick} />
            </div>
        </motion.div>
    );
};