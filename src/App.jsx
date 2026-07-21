import React from "react";
import { Logo } from "./components/layout/Logo";
import { Badge } from "./components/ui/Badge";
import { SocialMedia } from "./components/ui/SocialMedia";
import { Toast } from "./components/ui/Toast";
import { FavoriteButton } from "./components/ui/FavoriteButton";
import { ScrollButton } from "./components/ui/ScrollButton";
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
        <div className="p-4 bg-white rounded-lg border border-neutral-800">
        <FavoriteButton/>
        </div>
      </section>  

      
      <section className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col gap-3">
        <div className="p-4 bg-neutral-950 rounded-lg border border-neutral-800 w-fit">

          <ScrollButton direction="up" />
        </div>
      </section>

      {/* 2. PANGGIL SCROLL BUTTON DI PALING BAWAH (Melayang di pojok kanan bawah) */}
      
    </div>
  );
};