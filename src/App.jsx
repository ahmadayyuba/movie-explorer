import React from "react";
import { Hero } from "./components/section/Hero";
import { Header } from "./components/layout/Header";
import { ScrollButton } from "./components/ui/ScrollButton";
import { TrendingSection } from "./components/section/TrendingSection";
import { ExploreSection } from "./components/section/ExploreSection";

export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white relative">
      {/* 1. Render Header di paling atas (sebelum Hero) */}
      <Header />

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

export default App;