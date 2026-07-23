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
        className="flex items-start gap-6 w-full h-full"
        {...props}>


            <div className="w-52 h-80 aspect-[2/3] overflow-hidden ">
                <img 
                    src={posterUrl}
                    alt={title}
                    className="w-full h-full object-cover rounded-2xl"
                    />
            </div>

    {/* 1. Detail Info Film */}
            <div className="text-white flex flex-col mt-1 gap-3 flex-1 ">
            <h3 className="font-bold text-2xl leading-tight">{title}</h3>

            <div >
                <Badge 
                    variant="rating"
                    className= "flex items-center gap-2"
                    >{rating}
                    
                </Badge>
            </div>

            <p className="text-neutral-500 text-base ">{description}</p>

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