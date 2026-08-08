import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/section/Hero";
import { TrendingSection } from "../components/section/TrendingSection";
import { ExploreSection } from "../components/section/ExploreSection";
import { ScrollButton } from "../components/ui/ScrollButton";
import { Footer } from "../components/layout/Footer";

const HomePage = () => {
    const navigate = useNavigate();

    // Fungsi Navigasi ke Detail Page
    const handleSelectMovie = (movieId) => {
        if (movieId) {
            navigate(`/movie/${movieId}`);
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 text-white relative">
            <Header/>

            <main>
                <Hero 
                    onWatchTrailer={(movie) => console.log("Watch Trailer for:", movie.title)}
                    onSeeDetail={handleSelectMovie} // <-- Hubungkan ke handleSelectMovie
                />

                <TrendingSection 
                    onSelectMovie={handleSelectMovie} // <-- Hubungkan ke handleSelectMovie
                />

                <ExploreSection 
                    onSelectMovie={handleSelectMovie} // <-- Hubungkan ke handleSelectMovie
                />

                <Footer/>
            </main>
            <ScrollButton />
        </div>
    );
};

export default HomePage;