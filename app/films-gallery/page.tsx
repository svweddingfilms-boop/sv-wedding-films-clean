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
    video: "https://www.youtube.com/embed/EZrTdiO-v30?si=-Uq1pF7oEd7MNPv1",
  },
  {
    video: "https://www.youtube.com/embed/ny5R3-nKOFk?si=dUVVPKavRHXDZ97A",
  },
  {
    video: "https://www.youtube.com/embed/cuPeWgn2f28?si=ulfszC796xnEHnlw",
  },
];

export default function FilmsGalleryPage() {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <section className="min-h-screen bg-white px-8 md:px-16 py-28">
      
      {/* TITLE */}
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-5xl md:text-7xl tracking-[0.2em] text-[#8B6F5A]`}
        >
          FILMS
        </h1>
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">
        {films.slice(0, visible).map((film, index) => (
          <Reveal key={index}>
            <iframe
  src={film.video}
  className="w-full aspect-video rounded-md"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
          </Reveal>
        ))}
      </div>

      {/* LOAD MORE */}
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