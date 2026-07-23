import React from "react";
import { Logo } from "./components/layout/Logo";
import { Badge } from "./components/ui/Badge";
import { SocialMedia } from "./components/ui/SocialMedia";
import { Toast } from "./components/ui/Toast";
import { FavoriteButton } from "./components/ui/FavoriteButton";
import { ScrollButton } from "./components/ui/ScrollButton";
import { Button } from "./components/ui/Button";
import { VideoIcon } from "./components/icons/icons";
import { CastCard } from "./components/card/CastCard";
import { MovieCard } from "./components/card/MovieCard";
import { FavoriteCard } from "./components/card/FavoriteCard";
import { Footer} from "./components/layout/Footer";


export default function App() {
  return (
    <div className="p-10 bg-neutral-950 min-h-screen text-white flex flex-col gap-8">
      {/*PREVIEW LOGO */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3 w-80">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 ">
          <Logo />
        </div>
      </section>

      {/* PREVIEW BADGE */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3 w-80">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 flex gap-5 flex-wrap">
          <Badge>⭐ 8.5</Badge>
          <Badge>Action</Badge>
          <Badge>Sci-Fi</Badge>
        </div>
      </section>

      {/* PREVIEW SOCIAL MEDIA */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800">
          <SocialMedia />
        </div>
      </section>  

      {/* PREVIEW Toast */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800">
        <Toast/>
        </div>
      </section>

      {/* PREVIEW Favorite Button */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <div className="p-4 bg-neutral-900 rounded-lg border border-neutral-800">
        <FavoriteButton/>
        </div>
      </section>  

      
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 w-fit">

          <ScrollButton direction="up" />
        </div>
      </section>

      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">10. Component: Primary & Secondary Buttons</h2>
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 flex flex-wrap gap-4 w-fit items-center">

      <Button variant="primary" icon={VideoIcon}>
        Watch Trailer
      </Button>

    {/* Varian Primary */}
      <Button variant="primary">
        Button Primary
      </Button>

    {/* Varian Secondary */}
      <Button variant="secondary">
        See Detail
      </Button>
      </div>
      </section>  

    <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
    <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">11. Component: Cast Card</h2>
    <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 w-fit">
    <CastCard 
      name="Anthony Mackie"
      role="Sam Wilson / Captain America"
      imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    />
    </div>
    </section>

    <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">12. Component: Movie Card</h2>
      <div className="flex gap-4 w-fit">
    <MovieCard 
      rank={1}
      title="Captain America: Brave New World"
      rating="6.2/10"
      posterUrl="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80"
    />
      </div>
    </section>
  
{/* 👈 SECTION BARU: PREVIEW FAVORITE CARD */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          13. Component: Favorite Card
        </h2>
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 w-full">
          <FavoriteCard 
            title="Captain America: Brave New World"
            rating="6.2/10"
            description="After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before t..."
            posterUrl="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&auto=format&fit=crop&q=80"
            onWatchTrailer={() => alert("Watch Trailer Clicked!")}
            onFavoriteClick={() => alert("Favorite Clicked!")}
          />
        </div>
      </section>

{/* PREVIEW FOOTER DESKTOP */}
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
          15. Component: Footer Desktop
        </h2>
        <div className="w-full">
          <Footer />
        </div>
      </section>
    </div>
  );  
};