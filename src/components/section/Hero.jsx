import React, { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { VideoIcon } from "../icons/icons";
import { getTrendingMovies, IMAGE_BASE_URL } from "../../services/tmdb";

export const Hero = ({onWatchTrailer, onSeeDetail,...props}) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchHeroMovie = async () => {
        setLoading(true);
        const data = await getTrendingMovies();
        if (data && data.length > 0){
          setMovie(data[0]);
        }
        setLoading(false);
    };
    fetchHeroMovie();
  }, []);

  if (loading){
      return  <div className="w-full flex justify-center items-center bg-neutral-950 text-neutral-500 min-h-[1120px]">
        Loading Hero Banner
        </div>
  }

  if(!movie) return null;

  const backdropUrl = movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600";

return (
  <section
    className="relative w-full h-screen min-h-[600px] max-h-[900px] flex items-end justify-start select-none overflow-hidden"
    {...props}
  >
    {/* 1. Background Image */}
    <img
      src={backdropUrl}
      alt={movie.title || movie.name}
      className="absolute inset-0 w-full h-full object-cover object-center"
    />

    {/* 2. Overlays Gradasi Gelap */}
    <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden md:block" />

    {/* 3. Container Konten Utama (Ditaruh di Bawah / items-end) */}
    <div className="relative z-10 flex items-end justify-between px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 gap-6 max-w-7xl mx-auto w-full">
      
      {/* Box Teks & Tombol */}
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          {movie.title || movie.name}
        </h1>
        
        <p className="text-sm sm:text-base text-neutral-300 line-clamp-3 leading-relaxed drop-shadow max-w-xl">
          {movie.overview}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col items-center flex-wrap gap-4 pt-2">
          <Button
            variant="primary"
            icon={VideoIcon}
            onClick={() => onWatchTrailer && onWatchTrailer(movie)}
            className="px-10 gap-10"
          >
            Watch Trailer
          </Button>

          <Button
            variant="secondary"
            onClick={() => onSeeDetail && onSeeDetail(movie.id)}
            className="px-20 flex flex-col"
          >
            See Detail
          </Button>
        </div>
      </div>

    </div>
  </section>
);
};