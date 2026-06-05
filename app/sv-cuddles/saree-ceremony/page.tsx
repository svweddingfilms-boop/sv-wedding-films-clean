"use client";

import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const photos = Array.from({ length: 20 }, (_, i) => {
  const name = i + 1;
  return `https://res.cloudinary.com/dzbomgzke/image/upload/v1780680445/${name}.jpg`;
});

// Premium portrait-focused masonry pattern
const heights = [
  65, 75, 70, 85, 78,
  72, 90, 68, 80, 74,
  88, 76, 82, 69, 84,
  73, 87, 71, 79, 77
];

export default function SareeCeremonyGallery() {
  return (
    <section className="min-h-screen bg-white px-8 md:px-1 md:px-16 py-28">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-[48px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}
        >
          Traditions & Grace
        </h1>
      </div>

      {/* PREMIUM MASONRY GRID */}
      <div className="columns-2 md:columns-3 gap-0.5 space-y-0.5">

        {photos.map((photo, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-md"
            style={{
              gridRowEnd: `span ${heights[index % heights.length]}`
            }}
          >
            <img
              src={photo}
              alt={`saree-${index}`}
              className="w-full h-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
          </div>
        ))}
      </div>

    </section>
  );
}