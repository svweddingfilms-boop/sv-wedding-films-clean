"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const celebrationVideos = [
  {
    video: "https://res.cloudinary.com/dzbomgzke/video/upload/v1780648038/celebration3_k1wlom.mp4",
    poster: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780646602/thumb1_vx09vy.jpg",
  },
  {
    video: "https://res.cloudinary.com/dzbomgzke/video/upload/v1780647953/celebration2_ns9o9v.mp4",
    poster: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780646604/thumb2_otxahg.jpg",
  },
  {
    video: "https://res.cloudinary.com/dzbomgzke/video/upload/v1780648038/celebration3_k1wlom.mp4",
    poster: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780646607/thumb3_hdhylo.jpg",
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