"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const maternityImages = Array.from(
  { length: 21 },
  (_, i) =>
    `https://res.cloudinary.com/dzbomgzke/image/upload/v1780678541/${i + 1}.jpg`
);

// portrait-focused height pattern (same idea as your portfolio)
const heights = [
  40, 45, 42, 50, 48, 44, 55, 43, 47, 46
];

export default function MaternityGallery() {
  return (
    <section className="min-h-screen bg-white px-1 md:px-6 md:px-16 py-28">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-[48px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}
        >
          Motherhood In Bloom
        </h1>
      </div>

      {/* 🔥 PORTFOLIO-STYLE MASONRY GRID */}
      <div className="columns-2 md:columns-3 gap-0.5 space-y-0.5">

        {maternityImages.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-md"
           style={{
  gridRowEnd: `span ${Math.min(heights[index % heights.length], 48)}`
}}
          >
            <img
              src={photo}
              alt={`maternity-${index}`}
              className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
          </div>
        ))}

      </div>
    </section>
  );
}