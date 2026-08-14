import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { getTrendingMovies, IMAGE_BASE_URL } from "../../services/tmdb";
import { MovieCard } from "../card/MovieCard";

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.06 },
    },
};

export const TrendingSection = ({ onSelectMovie }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const carouselRef = useRef(null);

    // Cek posisi scroll untuk visibilitas tombol
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
        }
    };

    useEffect(() => {
        const fetchTrending = async () => {
            setLoading(true);
            const data = await getTrendingMovies();
            if (data && data.length > 0) {
                // Filter film valid (rating > 0 & ada poster)
                const filteredData = data.filter((m) => m.vote_average > 0 && m.poster_path);
                setMovies(filteredData);
            }
            setLoading(false);
        };
        fetchTrending();
    }, []);

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
    }, [movies, loading]);

    const handleScroll = (direction) => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            const scrollAmount = 500;

            if (direction === "right") {
                // Jika sudah mendekati/menyentuh ujung kanan, reset scroll ke paling awal (looping)
                if (scrollLeft + clientWidth >= scrollWidth - 15) {
                    carouselRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                } else {
                    carouselRef.current.scrollBy({
                        left: scrollAmount,
                        behavior: "smooth",
                    });
                }
            } else {
                // Scroll ke kiri
                if (scrollLeft <= 15) {
                    carouselRef.current.scrollTo({
                        left: scrollWidth,
                        behavior: "smooth",
                    });
                } else {
                    carouselRef.current.scrollBy({
                        left: -scrollAmount,
                        behavior: "smooth",
                    });
                }
            }
        }
    };

    if (loading) {
        return (
            <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
                <h2 className="text-2xl font-bold text-white mb-6">Trending Now</h2>
                <div className="flex gap-4 overflow-hidden">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="animate-pulse flex flex-col gap-2 w-[180px] sm:w-[170px] shrink-0">
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
        <section className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 relative select-none">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
                Trending Now
            </h2>

            <div className="relative group">
                {/* Tombol Navigasi Kiri */}
                {canScrollLeft && (
                    <button
                        onClick={() => handleScroll("left")}
                        className="absolute -left-5 sm:-left-6 md:-left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white items-center justify-center leading-none text-xl font-bold hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all cursor-pointer hidden md:flex shadow-2xl backdrop-blur-sm"
                        aria-label="Scroll Left"
                    >
                        <span className="-mt-0.5">‹</span>
                    </button>
                )}

                {/* Container List Film */}
                <motion.div
                    ref={carouselRef}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex items-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 overflow-x-auto scrollbar-none scroll-smooth pb-4"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {movies.slice(0, 20).map((item, index) => {
                        const posterUrl = item.poster_path ? `${IMAGE_BASE_URL}${item.poster_path}` : undefined;
                        const ratingFormatted = item.vote_average ? `${item.vote_average.toFixed(1)}/10` : "N/A";

                        return (
                            <div key={item.id} className="w-[calc(33.333%-6px)] sm:w-[170px] lg:w-[200px] shrink-0">
                                <MovieCard
                                    title={item.title || item.name}
                                    rating={ratingFormatted}
                                    posterUrl={posterUrl}
                                    rank={index + 1}
                                    onClick={() => onSelectMovie && onSelectMovie(item.id)}
                                />
                            </div>
                        );
                    })}
                </motion.div>

                {/* Tombol Navigasi Kanan */}
                {canScrollRight && (
                    <button
                        onClick={() => handleScroll("right")}
                        className="absolute -right-5 sm:-right-6 md:-right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-white items-center justify-center leading-none text-xl font-bold hover:bg-neutral-800 hover:scale-105 active:scale-95 transition-all cursor-pointer hidden md:flex shadow-2xl backdrop-blur-sm"
                        aria-label="Scroll Right"
                    >
                        <span className="-mt-0.5">›</span>
                    </button>
                )}
            </div>
        </section>
    );
};