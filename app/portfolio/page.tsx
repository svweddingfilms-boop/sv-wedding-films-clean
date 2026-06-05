"use client";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function PortfolioPage() {

  const portfolioImages = [
  "https://res.cloudinary.com/dzbomgzke/image/upload/v1780674611/p64.jpg"
];

  const heights = [
    30, 40, 35, 50, 45, 38, 60, 42, 55, 33,
    48, 37, 52, 44, 39, 58, 41, 36, 53, 47
  ];

  return (
    <main className="min-h-screen bg-[#f5f1ee] px-1 md:px-20 py-24">

      {/* TITLE */}
      <h1
        className={`${cormorant.className} mb-12 md:mb-20 text-center text-[22px] md:text-[48px] uppercase tracking-[0.1em] text-[#5f5a55]`}
      >
        Portfolio

        <div className="mx-auto mt-3 h-[1px] w-10 bg-[#8c8681]" />
      </h1>

      {/* MASONRY GRID */}
     <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
  {portfolioImages.map((img, index) => {

    // only portrait-style variation
    const heights = [
      65, 75, 70, 85, 78, 72, 90, 68, 80, 74
    ];

    return (
      <div
  key={index}
  className="break-inside-avoid mb-0.5 group relative overflow-hidden rounded-sm md:rounded-md"
>
        <img
          src={img}
          alt={`portfolio-${index}`}
          className="w-full h-auto object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
      </div>
    );
  })}

</div>

    </main>
  );
}