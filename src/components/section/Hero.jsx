import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Button } from "../ui/Button";
import { PlayIcon } from "../icons/icons";
import { getTrendingMovies, getMovieTrailerKey, IMAGE_BASE_URL } from "../../services/tmdb";

const contentVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const Hero = ({ onSeeDetail, ...props }) => {
    const [movie, setMovie] = useState(null);
    const [trailerKey, setTrailerKey] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            setLoading(true);
            const data = await getTrendingMovies();
            if (data && data.length > 0) {
                const heroMovie = data[0];
                setMovie(heroMovie);

                // Ambil trailer key dinamis
                const key = await getMovieTrailerKey(heroMovie.id);
                setTrailerKey(key);
            }
            setLoading(false);
        };
        fetchHeroData();
    }, []);

    // Handler untuk Buka Tab Baru YouTube Dinamis
    const handleWatchTrailer = () => {
        if (trailerKey) {
            window.open(
                `https://www.youtube.com/watch?v=${trailerKey}`,
                "_blank",
                "noopener,noreferrer"
            );
        } else {
            alert("Maaf, trailer film ini tidak ditemukan di TMDB.");
        }
    };

    if (loading) {
        return (
            <div className="w-full flex justify-center items-center bg-neutral-950 text-neutral-500 h-[100svh] min-h-[1120px]">
                Loading Hero Banner...
            </div>
        );
    }

    if (!movie) return null;

    const backdropUrl = movie.backdrop_path
        ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
        : "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600";

    return (
        <section
            className="relative w-full min-h-[600px] h-[100svh] flex items-end justify-start select-none overflow-hidden"
            {...props}
        >
            <motion.img
                key={movie.id}
                src={backdropUrl}
                alt={movie.title || movie.name}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
            />

            <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden md:block" />

            <div className="relative z-10 flex items-end justify-between px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 gap-6 max-w-[1120px] mx-auto w-full">
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col gap-4 w-full items-start"
                >
                    <motion.h1
                        variants={itemVariants}
                        className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md"
                    >
                        {movie.title || movie.name}
                    </motion.h1>

                    <motion.p
                        variants={itemVariants}
                        className="hidden lg:block lg:line-clamp-2 mt-2 text-sm sm:text-base lg:text-lg text-neutral-400 leading-relaxed"
                    >
                        {movie.overview}
                    </motion.p>

                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row items-center flex-wrap gap-3 pt-2 w-full sm:w-auto"
                    >
                        <Button
                            variant="primary"
                            icon={PlayIcon}
                            iconPosition="right"
                            className="w-full sm:w-auto flex-1 cursor-pointer"
                            onClick={handleWatchTrailer}
                        >
                            Watch Trailer
                        </Button>

                        <Button
                            variant="secondary"
                            className="w-full sm:w-auto flex-1 cursor-pointer"
                            onClick={() => onSeeDetail && onSeeDetail(movie.id)}
                        >
                            See Detail
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};