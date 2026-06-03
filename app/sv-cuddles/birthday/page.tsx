"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const photos = [
  "/sv-cuddles/birthday/1.jpg",
  "/sv-cuddles/birthday/2.jpg",
  "/sv-cuddles/birthday/3.jpg",
  "/sv-cuddles/birthday/4.jpg",
  "/sv-cuddles/birthday/5.jpg",
  "/sv-cuddles/birthday/6.jpg",
  "/sv-cuddles/birthday/7.jpg",
  "/sv-cuddles/birthday/8.jpg",
  "/sv-cuddles/birthday/9.jpg",
  "/sv-cuddles/birthday/10.jpg",
  "/sv-cuddles/birthday/11.jpg",
  "/sv-cuddles/birthday/12.jpg",
  "/sv-cuddles/birthday/13.jpg",
  "/sv-cuddles/birthday/14.jpg",
  "/sv-cuddles/birthday/15.jpg",
  "/sv-cuddles/birthday/16.jpg",
  "/sv-cuddles/birthday/17.jpg",
  "/sv-cuddles/birthday/18.jpg",
  "/sv-cuddles/birthday/19.jpg",
  "/sv-cuddles/birthday/20.jpg",
];

export default function BirthdayGallery() {
  const [visible, setVisible] = useState(20);

  return (
    <section className="min-h-screen bg-white px-1 md:px-6 lg:px-16 py-28">

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1
          className={`${cormorant.className} text-[48px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}
        >
          One Year Of Magic
        </h1>
      </div>

      {/* MASONRY GRID */}
      <div className="columns-2 md:columns-3 gap-0.5 space-y-0.5">

        {photos.slice(0, 20).map((photo, index) => {
          const isTall = index % 3 === 0 || index % 5 === 0;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-md"
              style={{
                gridRowEnd: `span ${isTall ? 18 : 12}`,
              }}
            >
              <img
                src={photo}
                alt={`birthday-${index}`}
                className="w-full h-full object-cover transition duration-500 hover:scale-105 hover:brightness-110"
              />
            </div>
          );
        })}

      </div>

      {/* LOAD MORE (optional, disabled since full 20 used) */}
      {visible < photos.length && (
        <div className="text-center mt-16">
          <button
            onClick={() => setVisible((prev) => prev + 3)}
            className="border border-black px-8 py-3 uppercase tracking-[0.15em] hover:bg-black hover:text-white transition"
          >
            Load More
          </button>
        </div>
      )}

    </section>
  );
}