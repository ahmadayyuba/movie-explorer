import React from "react";
import { Hero } from "./components/section/Hero"; // Sesuaikan path jika lokasi foldernya berbeda

export function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white ">
      {/* Tampilkan Hero Banner di paling atas */}
      <Hero 
        onWatchTrailer={(movie) => console.log("Watch Trailer for:", movie.title)}
        onSeeDetail={(movieId) => console.log("See Detail for ID:", movieId)}
      />

      {/* Komponen preview/halaman lainnya di bawah sini */}
    </div>
  );
}

export default App;