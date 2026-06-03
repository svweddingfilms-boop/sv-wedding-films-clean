"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const celebrationVideos = [
  {
    video: "/sv-cuddles/celebrations/celebration1.mp4",
    poster: "/sv-cuddles/celebrations/thumb1.jpg",
  },
  {
    video: "/sv-cuddles/celebrations/celebration2.mp4",
    poster: "/sv-cuddles/celebrations/thumb2.jpg",
  },
  {
    video: "/sv-cuddles/celebrations/celebration3.mp4",
    poster: "/sv-cuddles/celebrations/thumb3.jpg",
  },
];

export default function CelebrationsPage() {
  return (
    <section className="min-h-screen bg-white px-8 md:px-6 md:px-16 py-28">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-[48px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}
        >
          Celebration Stories
        </h1>
      </div>

      {/* VIDEO GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {celebrationVideos.map((item, index) => (
  <video
    key={index}
    controls
    playsInline
    preload="metadata"
    poster={item.poster}
    className="aspect-video w-full object-cover shadow-md"
  >
    <source src={item.video} type="video/mp4" />
  </video>
))}

      </div>
s
    </section>
  );
}