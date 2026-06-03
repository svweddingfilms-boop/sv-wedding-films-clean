"use client";

import { Cormorant_Garamond } from "next/font/google";
import { useState } from "react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function PortfolioSection() {
  const portfolioImages = [
  "/portfolio-preview/p1.jpg",
  "/portfolio-preview/p2.jpg",
  "/portfolio-preview/p3.jpg",
  "/portfolio-preview/p4.jpg",
  "/portfolio-preview/p5.jpg",
  "/portfolio-preview/p6.jpg",
];
  
  return (
    <section
      id="portfolio"
      className="w-full bg-[#f5f1ee] px-6 py-16 md:py-32 md:px-20"
    >
      {/* TITLE */}
{/* TITLE */}
<div className="text-center">
  <h2
    className={`${cormorant.className} text-[22px] md:text-[48px] uppercase tracking-[0.08em] text-[#5f5a55] md:text-[58px]`}
  >
    Portfolio
  </h2>

  <div className="mx-auto mt-3 h-[1px] w-10 bg-[#8c8681]" />
</div>

      {/* GRID */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-1">
       {portfolioImages.slice(0, 6).map((img, index) => (
          <div
            key={index}
            className=" break-inside-avoid group relative overflow-hidden  shadow-sm transition duration-500 hover:shadow-2xl hover:shadow-black/20"
          >
            <img
              src={img}
              alt={`portfolio-${index}`}
              className="aspect-[3/4] w-full object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
            />

            <div className="absolute inset-0 bg-black/10 opacity-0 transition duration-700 group-hover:opacity-100" />
          </div>
        ))}
      </div>

      {/* BUTTON */}
<div className="mt-16 text-center">
  <button
    onClick={() => window.location.href = "/portfolio"}
    className="border border-[#5f5a55] px-8 py-3 text-sm uppercase tracking-[0.15em] text-[#5f5a55] transition duration-300 hover:bg-[#5f5a55] hover:text-white"
  >
    View More
  </button>
</div>
      
    </section>
  );
}