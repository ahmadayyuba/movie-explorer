import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { FavoriteCard } from "../components/card/FavoriteCard";
import { Toast } from "../components/ui/Toast";
import { IMAGE_BASE_URL } from "../services/tmdb";
import { useFavorites } from "../context/FavoriteContext";
import { EmptyStateIcon } from "../components/icons/icons";

const FavoritePage = () => {
    const navigate = useNavigate();
    const { favorites, toggleFavorite } = useFavorites();
    const [showToast, setShowToast] = useState(false);

    const handleRemoveFavorite = (movie) => {
        toggleFavorite(movie);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col relative select-none">
            {showToast && (
                <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
                    <Toast message="Removed from Favorites" />
                </div>
            )}

            <Header />

            <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full flex-1 flex flex-col items-start">
                <h1 className="text-2xl sm:text-3xl font-bold mb-8">Favorites</h1>

                {favorites.length === 0 ? (
                    <div className="w-full flex-1 flex flex-col items-center justify-center my-16 gap-4 text-center">
                        <EmptyStateIcon className="w-48 h-48 -mb-2"/>
                        <h2 className="text-xl font-semibold text-white">Data Empty</h2>
                        <p className="text-neutral-400 text-sm -mt-2">You don't have a favorite movie yet</p>
                        <Button variant="primary" onClick={() => navigate("/")} className="mt-2 !w-auto">
                            Explore Movies
                        </Button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6 w-full">
                        <AnimatePresence mode="popLayout">
                            {favorites.map((movie) => {
                                const posterUrl = movie.poster_path
                                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                                    : "https://via.placeholder.com/300x450";
                                const rating = movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : "N/A";

                                return (
                                    <FavoriteCard
                                        key={movie.id}
                                        title={movie.title}
                                        rating={rating}
                                        description={movie.overview || "No overview available."}
                                        posterUrl={posterUrl}
                                        isFavorite={true}
                                        onCardClick={() => navigate(`/movie/${movie.id}`)}
                                        onWatchTrailer={() => navigate(`/movie/${movie.id}`)}
                                        onFavoriteClick={() => handleRemoveFavorite(movie)}
                                    />
                                );
                            })}
                        </AnimatePresence>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default FavoritePage;