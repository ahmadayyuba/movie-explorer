import React, {useState, useEffect} from "react";
import { Badge } from "../ui";
import { Button } from "../ui";
import { FavoriteButton } from "../ui";
import { VideoIcon } from "../icons/icons";

export const FavoriteCard = ({
    title = "Captain America: Brave New World",
    rating = "7.2/10",
    description= "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before t...",
    posterUrl = "https://picsum.photos/300/450",
    isFavorite = true,
    onWatchTrailer,
    onFavoriteClick,
    ...props 
}) => {
    
    const [active, setActive] = useState(isFavorite);

    useEffect(() => {
        setActive(isFavorite);
    }, [isFavorite]);

    const handleClick = () => {
        setActive(false);
        if (onFavoriteClick) {
            onFavoriteClick();
        }
    };


    return (
        <div 
        className="flex flex-col md:flex-row md:items-start justify-between  items-start gap-4 max-w-290 md:gap-6 select-none p-4 md:p-0"
        {...props}>


        <div className="flex gap-3.5 sm:gap-4 md:contents">
            <div className="relative w-28 sm:w-36 md:w-48 aspect-2/3 overflow-hidden md:rounded-2xl rounded-xl shrink-0">
                <img 
                    src={posterUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
            </div>

            {/* 1. Detail Info Film */}
            <div className="text-white flex flex-col flex-1 justify-start md:justify-between min-w-0 md:gap-3  gap-1.5 sm:gap-2">
                <h3 className="font-bold text-base sm:text-lg md:text-2xl leading-tight line-clamp-2">    
                {title}
                </h3>
            
            <div >
                <Badge 
                    variant="rating"
                    className= "flex items-center gap-2 text-xs sm:text-sm"
                    >{rating}
                    
                </Badge>
            </div>

            <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-2 ">{
            description}
            </p>

                <div className=" hidden md:block mt-2"> 
                <Button
                    variant="primary"
                    icon={VideoIcon}
                    onClick={onWatchTrailer}
                >
                    Watch Trailer
                </Button>
                </div>
            </div>
        </div>

        {/* 2. Tombol Favorite (Hati) */}
            <div className="flex items-center justify-between gap-3 md:hidden w-full pt-1">
                <Button
                    variant="primary"
                    icon={VideoIcon}
                    onClick={onWatchTrailer}
                    className="flex-1 text-xs sm:text-sm py-2 px-4"
                >
                    Watch Trailer
                </Button>

                <div className="shrink-0">
                    <FavoriteButton active={isFavorite} onClick={onFavoriteClick} />
                </div>
            </div>

            {/* 3. TOMBOL FAVORITE (KHUSUS DESKTOP - POJOK KANAN ATAS) */}
            <div className="hidden md:block shrink-0">
                <FavoriteButton active={isFavorite} onClick={onFavoriteClick} />
            </div>
        </div>
    );
};