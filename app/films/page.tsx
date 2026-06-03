"use client";

import Link from "next/link";
import Reveal from "../components/Reveal";
import { Cormorant_Garamond } from "next/font/google";
import { useState } from "react";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function FilmsGalleryPage() {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <section
      id="films"
      className="w-full bg-white px-6 py-28 md:px-20"
    >
      <Reveal>
        <div className="text-center mb-20">
          <h2
           className={`${cormorant.className} text-[22px] md:text-[48px] md:text-[70px] uppercase tracking-[0.08em] text-[#8B6F5A]`}
          >
            FILMS
          </h2>
        </div>
      </Reveal>

      <div className="max-w-5xl mx-auto">
       <video
  autoPlay
  muted
  loop
  playsInline
  controls
  className="w-full aspect-video object-cover"
>
  <source src="/videos/film1.mp4" type="video/mp4" />
</video>
      </div>

      <div className="flex justify-center mt-16">
        <Link href="/films-gallery">
          <button className="border border-black px-10 py-4 tracking-[0.2em] text-sm uppercase transition-all duration-300 hover:bg-black hover:text-white text-black">
          View More
          </button>
        </Link>
      </div>
    </section>
  );
}