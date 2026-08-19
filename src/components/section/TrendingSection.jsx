import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getTrendingMovies, IMAGE_BASE_URL } from "../../services/tmdb";
import { MovieCard } from "../card/MovieCard";
import { usePusherChannel } from "../../hooks/usePusherChannel"

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
        },
    },
};

const cardItemVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.96 },
    show: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: { duration: 0.35, ease: "easeOut" } 
    },
};

export const TrendingSection = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isSlowConnection, setIsSlowConnection] = useState(false);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const carouselRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftPos, setScrollLeftPos] = useState(0);
    const [hasDragged, setHasDragged] = useState(false);

    const checkScrollPosition = useCallback(() => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    }, []);

    useEffect(() => {
        let isMounted = true;
        
        const slowTimer = setTimeout(() => {
            if (loading) setIsSlowConnection(true);
        }, 3000);

        const fetchTrending = async () => {
            setLoading(true);
            const data = await getTrendingMovies();
            if (isMounted) {
                if (data && data.length > 0) {
                    const filteredData = data.filter((m) => m.vote_average > 0 && m.poster_path);

                    let finalMovies = [...filteredData];
                    if (finalMovies.length < 20) {
                        const fallbackMovies = data.filter((m) => !filteredData.some((f) => f.id === m.id));
                        finalMovies = [...finalMovies, ...fallbackMovies];
                    }
                    setMovies(finalMovies.slice(0, 20));
                }
                setLoading(false);
                setIsSlowConnection(false);
                clearTimeout(slowTimer);
            }
        };

        fetchTrending();

        return () => {
            isMounted = false;
            clearTimeout(slowTimer);
        };
    }, []);

    const handleRealtimeUpdate = useCallback((newData) => {
        if (newData && newData.movie) {
            setMovies((prevMovies) => {
                const exists = prevMovies.some((m) => m.id === newData.movie.id);
                if (exists) return prevMovies;
                return [newData.movie, ...prevMovies.slice(0, 19)];
            });
        }
    }, []);

    usePusherChannel("trending-channel", "trending-updated", handleRealtimeUpdate);

    useEffect(() => {
        const carouselEl = carouselRef.current;
        if (!carouselEl) return;

        checkScrollPosition();
        carouselEl.addEventListener("scroll", checkScrollPosition);
        window.addEventListener("resize", checkScrollPosition);

        return () => {
            carouselEl.removeEventListener("scroll", checkScrollPosition);
            window.removeEventListener("resize", checkScrollPosition);
        };
    }, [movies, loading, checkScrollPosition]);

    const handleMouseDown = (e) => {
        if (!carouselRef.current) return;

        // FIX #1: Cegah native browser drag-and-drop (ghost image)
        // Ini WAJIB dipanggil di titik paling awal, sebelum browser
        // sempat menginisiasi native dragstart pada elemen <img>.
        e.preventDefault();

        setIsDragging(true);
        setHasDragged(false);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeftPos(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        
        if (Math.abs(walk) > 5) {
            setHasDragged(true); 
        }
        
        carouselRef.current.scrollLeft = scrollLeftPos - walk;
    };

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const scrollAmount = 500;

            if (direction === "right") {
                if (scrollLeft + clientWidth >= scrollWidth - 15) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
                }
            } else {
                if (scrollLeft <= 15) {
                    carouselRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
                } else {
                    carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                }
            }
        }
    };

    if (loading) {
        return (
            <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Trending Now</h2>
                    {isSlowConnection && (
                        <span className="text-xs text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20 animate-pulse">
                            Koneksi lambat, memuat data...
                        </span>
                    )}
                </div>
                <div className="flex gap-4 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="animate-pulse flex flex-col gap-2 w-[180px] sm:w-[170px] shrink-0">
                            <div className="w-full aspect-[2/3] bg-neutral-900 rounded-2xl"></div>
                            <div className="h-4 bg-neutral-900 rounded w-3/4"></div>
                            <div className="h-3 bg-neutral-900 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative select-none">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Trending Now
            </h2>

            <div className="relative group px-1 sm:px-0">
                {canScrollLeft && (
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute left-1 sm:-left-6 md:-left-7 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white flex items-center justify-center leading-none text-base sm:text-xl font-bold hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-2xl backdrop-blur-sm"
                        aria-label="Scroll Left"
                    >
                        <span className="-mt-0.5">‹</span>
                    </button>
                )}

                <motion.div
                    ref={carouselRef}
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className={`flex items-center gap-3 sm:gap-4 overflow-x-auto scrollbar-none pb-4 ${
                        isDragging ? "cursor-grabbing scroll-auto" : "cursor-grab scroll-smooth"
                    }`}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {movies.map((item, index) => {
                        const posterUrl = item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : undefined;
                        const ratingFormatted = item.vote_average ? `${item.vote_average.toFixed(1)}/10` : "N/A";

                        return (
                            <motion.div 
                                key={item.id} 
                                variants={cardItemVariants}
                                className="w-[calc(50%-6px)] sm:w-[170px] lg:w-[200px] shrink-0"
                            >
                                <MovieCard
                                    title={item.title || item.name}
                                    rating={ratingFormatted}
                                    posterUrl={posterUrl}
                                    rank={index + 1}
                                    onClick={() => {
                                        if (!hasDragged && onSelectMovie) {
                                            onSelectMovie(item.id);
                                        }
                                    }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {canScrollRight && (
                    <button
                        onClick={() => handleScroll("right")}
                        className="absolute right-1 sm:-right-6 md:-right-7 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white flex items-center justify-center leading-none text-base sm:text-xl font-bold hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all cursor-pointer flex shadow-2xl backdrop-blur-sm"
                        aria-label="Scroll Right"
                    >
                        <span className="-mt-0.5">›</span>
                    </button>
                )}
            </div>
        </section>
    );
};