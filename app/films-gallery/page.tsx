"use client";

import { useState } from "react";
import Reveal from "../components/Reveal";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const films = [
  {
    video: "/videos/film1.mp4",
    poster: "/videos/film1-thumb.jpg",
  },
  {
    video: "/videos/film2.mp4",
    poster: "/videos/film2-thumb.jpg",
  },
  {
    video: "/videos/film3.mp4",
    poster: "/videos/film3-thumb.jpg",
  },
];

export default function FilmsGalleryPage() {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <section className="min-h-screen bg-white px-8 md:px-12 lg:px-6 md:px-16 py-28">
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-5xl md:text-7xl tracking-[0.2em] text-[#8B6F5A]`}
        >
          FILMS
        </h1>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {films.slice(0, visible).map((film, index) => (
  <Reveal key={index}>
    <video
      controls
      preload="metadata"
      poster={film.poster}
      className="w-full aspect-video object-cover"
    >
      <source src={film.video} type="video/mp4" />
    </video>
  </Reveal>
))}
      </div>

      {visible < films.length && (
        <div className="flex justify-center mt-16">
          <button
            onClick={loadMore}
            className="border border-black px-8 py-3 text-sm uppercase tracking-[0.15em] text-black transition hover:bg-black hover:text-white"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}