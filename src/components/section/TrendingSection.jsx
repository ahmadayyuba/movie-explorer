import React, {useEffect, useRef, useState} from "react";
import { getTrendingMovies, IMAGE_BASE_URL } from "../../services/tmdb";
import { MovieCard } from "../card/MovieCard";

export const TrendingSection = ({onSelectMovie}) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const carouselRef = useRef(null);

    useEffect(() => {
        const fetchTrending = async () => {
            setLoading(true);
            const data = await getTrendingMovies();
            if (data && data.length > 0) {
                setMovies(data);
            }
            setLoading(false);
        };
        fetchTrending();
    }, []);

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === "left" ? -500 : 600 ;
            carouselRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    };

    if (loading) {
        return (
            <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
                <div className="flex gap-4 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="animate-pulse flex flex-col gap-2 w-[180px] sm:w-[170px]] shrink-0">
                            <div className="w-full aspect-[2/3] bg-neutral-800 rounded-2xl"></div>
                            <div className="h-4 bg-neutral-800 rounded w-3/4"></div>
                            <div className="h-3 bg-neutral-800 rounded w-1/2"></div>
                        </div>                                          
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-18 sm:py-10 relative group select-none">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Trending Now
            </h2>

        {/* Grid Poster Film */}
        <div className="relative">
            
            <button
                onClick={() => handleScroll("left")}
                className="absolute -left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-800 cursor-pointer hidden md:flex"
                aria-label="Scroll Left"
            >
                ‹
            </button>


            <div
                ref={carouselRef}
                className="flex items-center gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none"}}
            >
                {movies.slice(0,20).map((item, index) => {
                    const posterUrl = item.poster_path
                    ? `${IMAGE_BASE_URL}${item.poster_path}`
                    : undefined;

                    const ratingFormatted = item.vote_average
                    ? `${item.vote_average.toFixed(1)}/10`
                    : "N/A"

                    return (
                        <MovieCard
                            key={item.id}
                            title={item.title || item.name}
                            rating={ratingFormatted}
                            posterUrl={posterUrl}
                            rank={index + 1}
                            onClick={() => onSelectMovie && onSelectMovie(item.id)}
                            />
                        );
                })}
            </div>

            <button
                onClick={() => handleScroll("right")}
                className="absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-neutral-900/80 border border-neutral-700 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-neutral-800 cursor-pointer hidden md:flex shadow-lg"
                aria-label="Scroll Right"
            >
                ›
                </button>
            </div>
        </section>
    );
};

