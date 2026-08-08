import React from "react";

export const CastCard = ({ 
    name = "Anthony Mackie", 
    role = "Sam Wilson / Captain America", 
    imageUrl = "https://via.placeholder.com/150", 
    ...props 
}) => {
    return (
        <div 
            className="flex items-center gap-3 rounded-xl cursor-pointer bg-neutral " 
            {...props}
        >
            <img 
                src={imageUrl} 
                alt={name} 
                className="w-8xl h-10xl rounded-lg" 
            />

            <div className="text-white p-2">
                <h4 className="font-semibold text-md">{name}</h4>
                <p className="font-light text-neutral-500 text-md">{role}</p>
            </div>
        </div>
    );
};