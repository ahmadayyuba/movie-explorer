const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
export const IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

export const getTrendingMovies = async () =>{
    try {
        const response = await fetch(
            `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`
        );
        if (!response.ok) throw new Error ("Gagal mengambil data trending");
        const data = await response.json();
        return data.results;
    }   catch (error){
        console.error("Error fetching trending movies:", error);
        return [];
    }
};

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetch (
            `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`
        );
        if (!response.ok) throw new Error ("Gagal mengambil detail film")
        return await response.json();
    }   catch (error) {
        console.error("Error fetching movie details", error);
        return null;
    }
};