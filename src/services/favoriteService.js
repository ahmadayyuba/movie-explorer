// File: src/services/favoriteService.js
// HANYA JAVASCRIPT MURNI - TANPA JSX

const FAVORITES_KEY = "movie_explorer_favorites";

export const getFavoriteMovies = () => {
    try {
        const data = localStorage.getItem(FAVORITES_KEY);
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error reading favorites:", error);
        return [];
    }
};

export const isMovieFavorite = (movieId) => {
    if (!movieId) return false;
    const favorites = getFavoriteMovies();
    return favorites.some((movie) => String(movie.id) === String(movieId));
};

export const toggleFavoriteMovie = (movieData) => {
    if (!movieData || !movieData.id) return false;

    let favorites = getFavoriteMovies();
    const exists = favorites.some((m) => String(m.id) === String(movieData.id));

    if (exists) {
        favorites = favorites.filter((m) => String(m.id) !== String(movieData.id));
    } else {
        favorites.push({
            id: movieData.id,
            title: movieData.title || movieData.name || "Untitled Movie",
            vote_average: movieData.vote_average || 0,
            overview: movieData.overview || "No description available.",
            poster_path: movieData.poster_path || "",
            backdrop_path: movieData.backdrop_path || "",
            release_date: movieData.release_date || ""
        });
    }

    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    return !exists;
};