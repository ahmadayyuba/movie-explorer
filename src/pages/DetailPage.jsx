import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Button } from "../components/ui/Button";
import { FavoriteButton } from "../components/ui/FavoriteButton";
import { MovieInfoCard } from "../components/card/MovieInfoCard";
import { CastCard } from "../components/card/CastCard";
import { Toast } from "../components/ui/Toast";
import { StarBoldIcon, VideoIcon, HappyIcon, CalendarIcon } from "../components/icons/icons";
import { getMovieDetails, IMAGE_BASE_URL } from "../services/tmdb";

const DetailPage = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            if (movieId) {
                const data = await getMovieDetails(movieId);
                setMovie(data);
            }
            setLoading(false);
        };

        fetchDetails();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [movieId]);

    const handleFavoriteToggle = () => {
        setIsFavorite((prev) => !prev);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    if (loading) {
        return (
            <div className="w-full min-h-screen bg-neutral-950 flex items-center justify-center text-neutral-400">
                Loading Movie Details...
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="w-full min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-neutral-400 gap-4">
                <p>Movie Detail not Found</p>
                <Button variant="secondary" onClick={() => navigate("/")}>
                    Back to Home
                </Button>
            </div>
        );
    }

    const backdropUrl = movie.backdrop_path ? `${IMAGE_BASE_URL}${movie.backdrop_path}` : "";
    const posterUrl = movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "";
    const genres = movie.genres?.map((g) => g.name).join(", ") || "N/A";
    const rating = movie.vote_average ? `${movie.vote_average.toFixed(1)}` : "N/A";
    const releaseDate = movie.release_date || "N/A";
    const castList = movie.credits?.cast?.slice(0, 9) || [];

    return (
        <div className="min-h-screen bg-neutral-950 text-white flex flex-col relative select-none">
            {showToast && (
                <div className="fixed top-30 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
                    <Toast message={isFavorite ? "Added to Favorites" : "Removed from Favorites"} />
                </div>
            )}

            <div className="relative overflow-hidden">
                <Header />
            </div>

            <div className="relative inset-0 flex justify-center aspect-[16/9] md:aspect-[16/9]">
                <img
                    src={backdropUrl}
                    alt={movie.title || movie.name}
                    className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden md:block" />
            </div>

            <main className="relative z-20 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 -mt-44 sm:-mt-64 md:-mt-80 pb-16 flex-1 w-full">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-end min-h-[508px] md:min-h-[700px]">
                    <div className="w-48 sm:w-60 md:w-72 shrink-0 rounded-2xl overflow-hidden border border-neutral-800/80 shadow-2xl mx-auto md:mx-0 bg-neutral-900">
                        <img src={posterUrl} alt={movie.title} className="w-full h-auto object-cover" />
                    </div>

                    <div className="flex-1 flex flex-col gap-4 w-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
                            {movie.title || movie.name}
                        </h1>

                        <div className="flex items-center gap-2 text-sm text-neutral-300">
                            <CalendarIcon />
                            <span>{releaseDate}</span>
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

                <section className="w-full mt-12 flex flex-col justify-start gap-3">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Overview</h2>
                    <p className="text-neutral-300 text-base md:text-lg leading-relaxed">
                        {movie.overview || "No overview available for this movie."}
                    </p>
                </section>

                <section className="w-full mt-12 flex flex-col gap-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Cast & Crew</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        {castList.length > 0 ? (
                            castList.map((actor) => (
                                <CastCard
                                    key={actor.id}
                                    name={actor.name}
                                    role={actor.character}
                                    imageUrl={
                                        actor.profile_path
                                            ? `${IMAGE_BASE_URL}${actor.profile_path}`
                                            : "https://via.placeholder.com/150"
                                    }
                                />
                            ))
                        ) : (
                            <p className="text-neutral-500 text-sm">No cast information available.</p>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DetailPage;