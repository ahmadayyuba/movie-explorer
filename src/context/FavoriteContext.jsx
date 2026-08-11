import React, { createContext, useContext, useState, useEffect } from "react";
import { getFavoriteMovies, toggleFavoriteMovie, isMovieFavorite } from "../services/favoriteService";

const FavoriteContext = createContext(null);

export const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    
    useEffect(() => {
        setFavorites(getFavoriteMovies());
    }, []);

    const toggleFavorite = (movieData) => {
        const isAdded = toggleFavoriteMovie(movieData);
        setFavorites(getFavoriteMovies()); 
        return isAdded;
    };

    const checkIsFavorite = (movieId) => {
        return favorites.some((m) => String(m.id) === String(movieId));
    };

    return (
        <FavoriteContext.Provider value={{ favorites, toggleFavorite, checkIsFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorites = () => {
    const context = useContext(FavoriteContext);
    if (!context) {
        throw new Error("useFavorites must be used within a FavoriteProvider");
    }
    return context;
};