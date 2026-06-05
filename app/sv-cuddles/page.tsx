"use client";

import { useState } from "react";
import { Cormorant_Garamond,  Montserrat, } from "next/font/google";
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export default function SVCuddlesPage() {

  const [visibleVideos, setVisibleVideos] = useState(1);

  const celebrationVideos = [
    "/sv-cuddles/celebrations/celebration1.mp4",
    "/sv-cuddles/celebrations/celebration2.mp4",
    "/sv-cuddles/celebrations/celebration3.mp4",
    "/sv-cuddles/celebrations/celebration4.mp4",
  ];

  return (
    <main className="w-full bg-white">

      {/* =========================
          MATERNITY (START SCROLL)
      ========================== */}
      <section className="px-6 py-16 md:py-32 md:px-20">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}>
            Motherhood in Bloom
          </h2>

          <p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
            A celebration of strength, softness, and the beautiful journey before arrival.
            Elegant maternity storytelling filled with emotion.
          </p>

          <div className="mt-12">
            <img
  src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780684716/m-cover.jpg"
  alt="Maternity"
  className="w-full aspect-video object-cover"
/>
          </div>

          <a href="/sv-cuddles/maternity">
  <button className="mt-10 border border-[#6E5442] text-[#6E5442] px-8 py-3 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-[#6E5442] hover:text-white">
    View Maternity Gallery
  </button>
</a>
        </div>
      </section>

      {/* =========================
          NEWBORN
      ========================== */}
      <section className="px-6 py-32 md:px-20 bg-gray-50">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}>
            First Days of Love
          </h2>

          <p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
            Tiny hands, sleepy smiles, and the purest beginnings of life.
            Capturing newborns in their most natural moments.
          </p>

          <div className="mt-12">
            <img
  src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780684373/ncover.jpg"
  alt="Newborn"
  className="w-full aspect-video object-cover"
/>

          </div>

          <a href="/sv-cuddles/newborn">
  <button
    className="mt-10 border border-[#6E5442] text-[#6E5442] px-8 py-3 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-[#6E5442] hover:text-white"
  >
    View Newborn Gallery
  </button>
</a>

        </div>
      </section>

      {/* =========================
          MILESTONES
      ========================== */}
      <section className="px-6 py-16 md:py-32 md:px-20">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}>
            Growing Memories
          </h2>

<p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
            From first steps to first smiles — every milestone deserves to be remembered beautifully.
          </p>

          <div className="mt-12">
            <img
    src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780681661/ms-cover.jpg"
    alt="Milestones"
    className="w-full aspect-video object-cover"
  />
          </div>

          <a href="/sv-cuddles/milestones">
  <button className="mt-10 border border-[#6E5442] text-[#6E5442] px-8 py-3 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-[#6E5442] hover:text-white">
    View Milestones Gallery
  </button>
</a>

        </div>
      </section>

      {/* =========================
          BIRTHDAY
      ========================== */}
      <section className="px-6 py-16 md:py-32 md:px-20 bg-gray-50">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}>
            One Year of Magic
          </h2>

       <p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
            A full year of love, laughter, and celebration captured in timeless frames.
          </p>

          <div className="mt-12">
            <img
  src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780681463/b-cover.jpg"
  alt="Birthday"
  className="w-full aspect-video object-cover"
/>
          </div>

          <a href="/sv-cuddles/birthday">
  <button className="mt-10 border border-[#6E5442] text-[#6E5442] px-8 py-3 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-[#6E5442] hover:text-white">
    View Birthday Gallery
  </button>
</a>

        </div>
      </section>

      {/* =========================
          SAREE / TRADITIONAL
      ========================== */}
      <section className="px-6 py-16 md:py-32 md:px-20">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}>
            Traditions & Grace
          </h2>

         <p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
            Timeless rituals, cultural beauty, and elegant portraits that celebrate heritage.
          </p>

          <div className="mt-12">
<img
  src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780680454/cover.jpg"
  alt="Saree Ceremony"
  className="w-full aspect-video object-cover"
/>
          </div>

          <a href="/sv-cuddles/saree-ceremony">
  <button className="mt-10 border border-[#6E5442] text-[#6E5442] px-8 py-3 text-sm uppercase tracking-[0.15em] transition duration-300 hover:bg-[#6E5442] hover:text-white">
    View Saree Ceremony Gallery
  </button>
</a>

        </div>
      </section>
{/* ===== CELEBRATION STORIES ===== */}
<section className="w-full bg-[#EFE7E2] px-6 py-28 md:px-20 mt-24 text-black">

  {/* TITLE */}
  <div className="text-center">
    <h2
      className={`${cormorant.className} text-[34px] md:text-[70px] uppercase tracking-[0.12em] text-[#8B6F5A]`}
    >
      Celebration Stories
    </h2>

    <div className="mx-auto mt-5 h-[1px] w-10 bg-black/30" />

    <p
      className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
    >
      Birthday celebrations, saree ceremonies, and family events captured beautifully.
    </p>
  </div>

  {/* PREVIEW VIDEO */}
  <div className="mt-16 flex justify-center">
    <div className="w-full max-w-4xl">
      <video
        autoPlay
        muted
        loop
        controls
        playsInline
        className="aspect-video w-full object-cover shadow-md"
      >
        <source
          src="/sv-cuddles/celebrations/celebration1.mp4"
          type="video/mp4"
        />
      </video>

      {/* BUTTON */}
      <div className="text-center mt-10">
        <a href="/sv-cuddles/celebrations">
          <button className="border border-black px-8 py-3 uppercase tracking-[0.15em] hover:bg-black hover:text-white transition">
            View Celebration Films
          </button>
        </a>
      </div>
    </div>
  </div>
</section>
<section className="bg-[#F4E1D2] px-8 py-24">

  <div className="mx-auto max-w-4xl">

    {/* TITLE */}
    <div className="text-center mb-16">
      <h2
       className={`${cormorant.className} text-[28px] md:text-[70px] uppercase tracking-[0.08em] text-[#8B6F5A]`}
      >
        Contact
      </h2>

      <div className="mx-auto mt-4 h-[1px] w-10 bg-[#7A5F4B]/30" />
    </div>

    {/* CONTACT INFO */}
    <div className="grid gap-16 text-center md:grid-cols-3">

      {/* PHONE */}
      <div>
        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#7A5F4B]`}
        >
          Phone
        </h3>

        <p
          className={`${montserrat.className} text-[15px] tracking-[0.5px] text-[#6A5F58]`}
        >
          +91 7672090811
        </p>
      </div>

      {/* EMAIL */}
      <div>
        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#7A5F4B]`}
        >
          Email
        </h3>

        <a
          href="mailto:svcuddles@gmail.com"
          className={`${montserrat.className} text-[15px] tracking-[0.5px] text-[#6A5F58] hover:text-[#7A5F4B] transition`}
        >
          svcuddles@gmail.com
        </a>
      </div>

      {/* INSTAGRAM */}
      <div>
        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#7A5F4B]`}
        >
          Instagram
        </h3>

        <a
          href="https://instagram.com/sv_cuddles"
          target="_blank"
          rel="noopener noreferrer"
          className={`${montserrat.className} text-[15px] tracking-[0.5px] text-[#6A5F58] hover:text-[#7A5F4B] transition`}
        >
          @sv_cuddles
        </a>
      </div>

    </div>

  </div>

</section>
    </main>
  );
}