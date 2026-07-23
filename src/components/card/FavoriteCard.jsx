import React from "react";

import { Badge } from "../ui";
import { Button } from "../ui";
import { FavoriteButton } from "../ui";
import { VideoIcon } from "../icons/icons";

export const FavoriteCard = ({
    title = "Captain America: Brave New World",
    rating = "7.2/10",
    description= "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before t...",
    posterUrl = "https://picsum.photos/300/450",
    onWatchTrailer,
    onFavoriteClick,
    ...props 
}) => {
    return (
        <div 
        className="flex items-start gap-3 w-full h-full md:gap-6 select-none p-3 md:p-0 rounded-2xl md:bg-transparent"
        {...props}>


            <div className="relative w-52 md:w-52 h-80 aspect-[2/3] overflow-hidden md:rounded-2xl rounded-xl ">
                <img 
                    src={posterUrl}
                    alt={title}
                    className="w-full h-full object-cover"
                    />
            </div>

    {/* 1. Detail Info Film */}
            <div className="text-white flex flex-col md:gap-3 flex-1 gap-1.5 min-w-0 mt-0.5">

            <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-base md:text-2xl leading-tight md:leading-tight line-clamp-2 md:line-clamp-none">    
            {title}
            </h3>
            </div>

            <div >
                <Badge 
                    variant="rating"
                    className= "flex items-center gap-2"
                    >{rating}
                    
                </Badge>
            </div>

            <p className="text-neutral-500 text-base md:text-sm leading-relaxed">{
            description}
            </p>

                <div className="mt-1"> 
                <Button
                    variant="primary"
                    icon={VideoIcon}
                    onClick={onWatchTrailer}
                >
                    Watch Trailer
                </Button>
                </div>
            </div>
  {/* 2. Tombol Favorite (Hati) */}

            <div className="shrink-0">
                <FavoriteButton onClick={onFavoriteClick}/>
            </div>
        </div>
    );
};