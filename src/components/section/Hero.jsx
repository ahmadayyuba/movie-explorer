import React, { useEffect, useState } from "react";

import { Button } from "../ui/Button";
import { PlayIcon, VideoIcon } from "../icons/icons";
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
      return  <div className="w-full flex justify-center items-center bg-neutral-950 text-neutral-500 h-[100svh] min-h-[1120px]">
        Loading Hero Banner
        </div>
  }

  if(!movie) return null;

  const backdropUrl = movie.backdrop_path
      ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
      : "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1600";

return (
  <section
    className="relative w-full min-h-[600px] h-[100svh] flex items-end justify-start select-none overflow-hidden"
    {...props}
  >
    {/* 1. Background Image */}
    <img
      src={backdropUrl}
      alt={movie.title || movie.name}
      className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
    />

    {/* 2. Overlays Gradasi Gelap */}
    <div className="absolute inset-0 bg-black/40 backdrop-contrast-125" />
    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/80 via-transparent to-transparent hidden md:block" />

    {/* 3. Container Konten Utama (Ditaruh di Bawah / items-end) */}
    <div className="relative z-10 flex items-end justify-between px-4 sm:px-6 sm:px-6 lg:px-8 sm:pb-20 gap-6 max-w-[1120px] mx-auto w-full">
      
      {/* Box Teks & Tombol */}
      <div className="flex flex-col gap-4 w-full items-start ">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
          {movie.title || movie.name}
        </h1>
        
        <p className=" hidden lg:block lg:line-clamp-1 mt-2 text-sm sm:text-base lg:text-lg text-neutral-400 sm:leading-7 leading-relaxed ">
          {movie.overview}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center flex-wrap gap-3 pt-2 w-full sm:w-auto">
          
            <Button
              variant="primary"
              icon={PlayIcon}
              iconPosition="right"
              className="w-full sm:w-auto flex-1"
              onClick={() => {
              if (onWatchTrailer) onWatchTrailer(movie);
              window.open("https://youtu.be/62bIsvRcPv0?si=GqPs9w3ymxjKfmDh", "_blank", "noopener,noreferrer");}}
          >
            Watch Trailer
          </Button>

          
          <Button
            variant="secondary"
            className="w-full sm:w-auto flex-1"
            onClick={() => onSeeDetail && onSeeDetail(movie.id)}
          >
            See Detail
          </Button>
        </div>
      </div>
    </div>
  </section>
);
};