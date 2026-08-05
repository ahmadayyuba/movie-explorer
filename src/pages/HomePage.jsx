import React from "react";
import { Header } from "../components/layout/Header";
import { Hero } from "../components/section/Hero";
import { TrendingSection } from "../components/section/TrendingSection";
import { ExploreSection } from "../components/section/ExploreSection";
import { ScrollButton } from "../components/ui/ScrollButton";


const HomePage = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white relative">
            <Header/>

      {/* 2. Hero Banner */}
    <main>
        <Hero 
            onWatchTrailer={(movie) => console.log("Watch Trailer for:", movie.title)}
            onSeeDetail={(movieId) => console.log("See Detail for ID:", movieId)}
        />

        {/* Section Trending Now */}
        <TrendingSection 
            onSelectMovie={(movieId) => console.log("Selected Movie ID:", movieId)} 
        />

        {/* 3. Section Explore More (Grid 5 Kolom + Load More) */}
        <ExploreSection 
            onSelectMovie={(movieId) => console.log("Selected Movie ID:", movieId)}
        />
        
    </main>
        <ScrollButton />
    </div>
  );
}

export default HomePage;