const API_KEY = import.meta.env.VITE_TMDB_API_KEY ? import.meta.env.VITE_TMDB_API_KEY : "b7b309c2b048adffa402f471c6445d90";
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL ? import.meta.env.VITE_TMDB_BASE_URL : "https://api.themoviedb.org/3";
export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL ? import.meta.env.VITE_TMDB_IMAGE_BASE_URL : "https://image.tmdb.org/t/p/w500";


export const getTrendingMovies = async () => {
    try {
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        if (!response.ok) throw new Error("Gagal mengambil data trending");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching trending movies:", error);
        return [];
    }
};

export const getPopularMovies = async (page = 1) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`
        );
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits,videos`
        );
        if (!response.ok) throw new Error("Gagal mengambil detail film");
        return await response.json();
    } catch (error) {
        console.error("Error fetching movie details:", error);
        return null;
    }
};

export const searchMovies = async (query) => {
    if (!query) return [];
    try {
        const response = await fetch(
            `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`
        );
        const data = await response.json();
        
        // Filter film tanpa rating / tanpa poster dari data API
        const validMovies = (data.results || []).filter(
            (movie) => movie.vote_average > 0 && movie.poster_path
        );

        return validMovies;
    } catch (error) {
        console.error("Error searching movies:", error);
        return [];
    }
};

export const getMovieTrailerKey = async (movieId) => {
    if (!movieId) return null;
    try {
        const response = await fetch(
            `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        const trailer = data.results?.find(
            (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        const fallbackVideo = data.results?.find((vid) => vid.site === "YouTube");

        return trailer ? trailer.key : fallbackVideo ? fallbackVideo.key : null;
    } catch (error) {
        console.error("Error fetching movie trailer:", error);
        return null;
    }
};