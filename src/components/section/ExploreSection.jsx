import React, { useEffect, useState } from "react";
import { getPopularMovies, IMAGE_BASE_URL } from "../../services/tmdb";
import { MovieCard } from "../card/MovieCard";

export const ExploreSection = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(2);
    const [loadingInitial, setLoadingInitial] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    const fetchInitialMovies = async () => {
        try {
            const [data1, data2] = await Promise.all([
                getPopularMovies(1),
                getPopularMovies(2)
            ]);
            
            const combinedData = [...(data1 || []), ...(data2 || [])];
            if (combinedData.length > 0) {
                setMovies(combinedData);
            }
        } catch (error) {
            console.error("Failed to fetch explore movies:", error);
        } finally {
            setLoadingInitial(false);
        }
    };

    useEffect(() => {
        fetchInitialMovies();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLoadMore = async () => {
        setLoadingMore(true);
        const nextPage1 = page + 1;
        const nextPage2 = page + 2;

        try {
            const [data1, data2] = await Promise.all([
                getPopularMovies(nextPage1),
                getPopularMovies(nextPage2)
            ]);

            const combinedData = [...(data1 || []), ...(data2 || [])];

            if (combinedData.length > 0) {
                setMovies((prevMovies) => {
                    const existingIds = new Set(prevMovies.map((m) => m.id));
                    const newUniqueMovies = combinedData.filter((m) => !existingIds.has(m.id));
                    return [...prevMovies, ...newUniqueMovies];
                });
                setPage(nextPage2); 
            }
        } catch (error) {
            console.error("Failed to load more movies:", error);
        } finally {
            setLoadingMore(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (loadingInitial) {
        return (
            <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-6">Explore More</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="animate-pulse flex flex-col gap-2">
                            <div className="w-full aspect-[2/3] bg-neutral-800 rounded-lg sm:rounded-2xl"></div>
                            <div className="h-3 bg-neutral-800 rounded w-3/4"></div>
                            <div className="h-2.5 bg-neutral-800 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-10 select-none relative">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight">
                Explore More
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-6 sm:gap-6">
                {movies
                    .filter((item) => item.vote_average > 0 && item.poster_path)
                    .map((item, index) => {
                        const posterUrl = `${IMAGE_BASE_URL}${item.poster_path}`;
                        const ratingFormatted = `${item.vote_average.toFixed(1)}/10`;

                        return (
                            <MovieCard
                                key={`${item.id}-${index}`}
                                title={item.title || item.name}
                                rating={ratingFormatted}
                                posterUrl={posterUrl}
                                onClick={() => onSelectMovie && onSelectMovie(item.id)}
                            />
                        );
                    })}
            </div>

            <div className="flex justify-center items-center pt-12 pb-16">
                <button
                    type="button"
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                    className="px-8 py-2.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white font-medium text-sm hover:bg-neutral-800 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2.5 shadow-md active:scale-95"
                >
                    {loadingMore ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-transparent rounded-full animate-spin"></span>
                            <span>Loading...</span>
                        </>
                    ) : (
                        "Load More"
                    )}
                </button>
            </div>
        </section>
    );
};