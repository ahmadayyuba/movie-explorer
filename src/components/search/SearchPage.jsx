import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { MovieCard } from "../card/MovieCard";
import { searchMovies, IMAGE_BASE_URL } from "../../services/tmdb";
import { EmptyStateIcon } from "../icons/icons";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const query = searchParams.get("q") || "";

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query.trim()) {
            setMovies([]);
            return;
        }

        const fetchResults = async () => {
            setLoading(true);
            const data = await searchMovies(query);
            setMovies(data || []);
            setLoading(false);
        };

        fetchResults();
    }, [query]);

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-between select-none">
            <Header />

            <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1 w-full">
                
                {/* Judul Halaman Tunggal */}
                <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-white">
                    {query.trim() ? (
                        <>
                            Search results for: <span className="text-neutral-300 font-normal">{query}</span>
                        </>
                    ) : (
                        "Search"
                    )}
                </h1>

                {/* --- STATE 1: QUERY KOSONG / DIHAPUS (NO SEARCH QUERY) --- */}
                {!query.trim() && !loading && (
                    <motion.div 
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-center justify-center py-20 text-center gap-3"
                    >
                        <EmptyStateIcon className="w-48 h-48 -mb-2"/>
                        <h2 className="text-xl font-bold text-white tracking-tight">No Search Query</h2>
                        <p className="text-neutral-500 text-sm">Please enter a keyword to search movies.</p>
                    </motion.div>
                )}

                {/* --- STATE 2: LOADING SKELETON (3 KOLOM MOBILE) --- */}
                {loading && query.trim() && (
                    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6">
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="animate-pulse flex flex-col gap-2">
                                <div className="w-full aspect-[2/3] bg-neutral-900 rounded-xl"></div>
                                <div className="h-4 bg-neutral-900 rounded w-3/4"></div>
                                <div className="h-3 bg-neutral-900 rounded w-1/2"></div>
                            </div>
                        ))}
                    </div>
                )}

                {/* --- STATE 3: HASIL DITEMUKAN (3 KOLOM MOBILE) --- */}
                {!loading && query.trim() && movies.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-6"
                    >
                    {movies
                        .filter((movie) => movie.vote_average > 0 && movie.poster_path)
                        .map((movie) => {
                            const posterUrl = `${IMAGE_BASE_URL}${movie.poster_path}`;
                            const ratingFormatted = `${movie.vote_average.toFixed(1)}/10`;

                            return (
                                <MovieCard
                                    key={movie.id}
                                    id={movie.id}
                                    title={movie.title || movie.name}
                                    rating={ratingFormatted}
                                    posterUrl={posterUrl}
                                    onClick={() => navigate(`/movie/${movie.id}`)}
                                />
                            );
                        })}
                    </motion.div>
                )}

                {/* --- STATE 4: FILM TIDAK DITEMUKAN / HURUF ASAL (DATA NOT FOUND) --- */}
                {!loading && query.trim() && movies.length === 0 && (
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-center justify-center py-20 text-center gap-3"
                    >
                        <div className="text-7xl mb-2 filter drop-shadow-lg opacity-80">
                            🎬🔍
                        </div>
                        <h2 className="text-xl font-bold text-white tracking-tight">Data Not Found</h2>
                        <p className="text-neutral-500 text-sm">Try other keywords</p>
                    </motion.div>
                )}
            </main>

            <Footer />
        </div>
    );
};