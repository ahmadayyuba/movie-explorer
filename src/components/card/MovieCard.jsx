import React from "react";
import { Badge } from "../ui"; 
import { RankBadge } from "../icons/icons";


export const MovieCard = ({ 
    title = "Captain America: Brave New World", 
    rating = "6.2/10", 
    posterUrl = "https://picsum.photos/300/450", 
    onClick,
    rank,
    ...props 
}) => {
    return (
        <div 
            onClick={onClick}
            className="group cursor-pointer flex flex-col gap-2 object-cover w-48 items-start border-neutral-800 bg-neutral-950 select-none"
            {...props}
        >
            <div className="relative w-full aspect-[2/3] rounded-2xl overflow-hidden bg-neutral-900 border-e-neutral-900">
                <img 
                    src={posterUrl} 
                    alt={title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
        {rank && (
            <div className="absolute top-2 left-2 z-10">
                <RankBadge className="w-10 h-10"/>
            </div>
        )}
            </div>
            <div className="flex flex-col gap-1 w-full">
                {/* Judul Film */}
                <h3 className="text-white font-semibold text-sm leading-snug line-clamp-2 transition-colors">
                    {title}
                </h3>

                <div className="mr-3">
                    <Badge variant="rating">{rating}</Badge>
                </div>
            </div>
        </div>
    );
};