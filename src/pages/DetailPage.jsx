import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { FavoriteButton } from "../components/ui/FavoriteButton";
import { MovieInfoCard } from "../components/card/MovieInfoCard";
import { CastCard } from "../components/card/CastCard";
import { Toast } from "../components/ui/Toast";
import { StarBoldIcon, VideoIcon, HappyIcon, CalendarIcon } from "../components/icons/icons";
import { CheckIcon } from "../components/icons/icons";
import { motion } from "framer-motion";

const MOCK_MOVIE = {
    id: 933260,
    title: "Supergirl",
    backdrop_path: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600",
    poster_path: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600",
    release_date: "24 June 2026",
    vote_average: 6.7,
    genres: [{ name: "Action" }, { name: "Adventure" }, { name: "Science Fiction" }],
    adult: false,
    overview: "When an unexpected and ruthless adversary strikes too close to home, Kara Zor-El, aka Supergirl, reluctantly joins forces with an unlikely companion on an epic, interstellar journey of vengeance and justice.",
    credits: {
        cast: [
            { id: 1, name: "Milly Alcock", character: "Supergirl", profile_path: null },
            { id: 2, name: "Eve Ridley", character: "Ruthye", profile_path: null },
            { id: 3, name: "Matthias Schoenaerts", character: "Krem", profile_path: null },
            { id: 4, name: "Jason Momoa", character: "Lobo", profile_path: null },
            { id: 5, name: "David Krumholtz", character: "Zor-El", profile_path: null },
            { id: 6, name: "Emily Beecham", character: "Alura In-Ze", profile_path: null }
        ]
    }
};

const DetailPage = () => {
    const [movie] = useState(MOCK_MOVIE);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteToggle = () => {
        setIsFavorite((prev) => !prev);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const genres = movie.genres?.map((g) => g.name).join(", ") || "N/A";
    const rating = movie.vote_average ? `${movie.vote_average.toFixed(1)}` : "N/A";
    const castList = movie.credits?.cast || [];

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col relative select-none">
            {showToast && (
                <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
                    <Toast message={isFavorite ? "Added to Favorites" : "Removed from Favorites"} />
                </div>
            )}

            {/* Header ditaruh melayang di atas hero backdrop */}
            <div className="relative  overflow-hidden">
                <Header />
            </div>

            {/* 1. SECTION HERO BACKDROP (Disamakan penuh seperti Hero.jsx) */}
            <div className="relative  inset-0 flex justify-center aspect-[16/9] md:aspect-[16/9] ">
                <img
                    src={movie.backdrop_path}
                    alt={movie.title}
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                />

                {/* Overlays Gradasi Presisi Persis Hero.jsx */}
                <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden md:block" />
            </div>

            {/* 2. MAIN CONTENT (Overlap naik ke atas Hero) */}
            <main className="relative z-20 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 -mt-44 sm:-mt-64 md:-mt-80 pb-16 flex-1 w-full">
                
                {/* Poster & Info Kanan */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end min-h-[508px] md:min-h-[700px]">
                    
                    {/* Poster Image */}
                    <div className="w-48 sm:w-60 md:w-72 shrink-0 rounded-2xl overflow-hidden border border-neutral-800/80 shadow-2xl mx-auto md:mx-0 bg-neutral-900">
                        <img src={movie.poster_path} alt={movie.title} className="w-full h-auto object-cover" />
                    </div>

                    {/* Info Text */}
                    <div className="flex-1 flex flex-col gap-4 w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
                            {movie.title}
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-neutral-300">
                            <CalendarIcon />
                            <span>{movie.release_date}</span>
                        </div>

                        <div className="flex items-center gap-3 py-1">
                            <Button variant="primary" icon={VideoIcon}>
                                Watch Trailer
                            </Button>
                            <FavoriteButton active={isFavorite} onClick={handleFavoriteToggle} />
                        </div>

                        <div className="grid grid-cols-3 gap-3 md:gap-4 pt-2 w-full">
                            <MovieInfoCard icon={StarBoldIcon} label="Rating" value={`${rating} / 10`} />
                            <MovieInfoCard icon={VideoIcon} label="Genre" value={genres} />
                            <MovieInfoCard icon={HappyIcon} label="Age Limit" value={movie.adult ? "18+" : "13+"} />
                        </div>
                    </div>
                </div>

                {/* Overview */}
                <section className="w-full mt-12 flex flex-col justify-start gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Overview</h2>
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed ">
                        {movie.overview}
                    </p>
                </section>

                {/* Cast & Crew */}
                <section className="w-full mt-12 flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Cast & Crew</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {castList.map((actor) => (
                            <CastCard
                                key={actor.id}
                                name={actor.name}
                                role={actor.character}
                                imageUrl="https://via.placeholder.com/150"
                            />
                        ))}
                    </div>
                </section>

                
            </main>

            <Footer />
        </div>
    );
};

export default DetailPage;