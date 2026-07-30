import React from "react";
import { Hero } from "./components/section/Hero";
import { Header } from "./components/layout/Header";
import { ScrollButton } from "./components/ui/ScrollButton";

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
      </main>
      <ScrollButton />
    </div>
  );
}

export default App;