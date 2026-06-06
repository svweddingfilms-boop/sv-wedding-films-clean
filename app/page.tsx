"use client";

import PortfolioSection from "./PortfolioSection";
import TestimonialsPage from "./testimonials/page";
import FilmsPage from "./films/page";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Allura } from "next/font/google";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
});
import {
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

import {
  Cormorant_Garamond,
  Dancing_Script,
  Montserrat,
} from "next/font/google";

import Reveal from "./components/Reveal";

/* =========================
   FONTS
========================= */

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

/* =========================
   AUTO SCROLL GALLERY
========================= */ 
 function AutoScrollGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 0.4;

    const animate = () => {
      if (!container) return;

      if (!isPausedRef.current) {
        container.scrollLeft += speed;

        const maxScroll = container.scrollWidth - container.clientWidth;

container.scrollLeft += speed;

if (container.scrollLeft >= maxScroll) {
  container.scrollLeft = 1;
}
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    // pause on user interaction
    const pause = () => {
      isPausedRef.current = true;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, 2500);
    };

    container.addEventListener("wheel", pause);
    container.addEventListener("touchstart", pause);
    container.addEventListener("mousemove", pause);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      container.removeEventListener("wheel", pause);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("mousemove", pause);
    };
  }, []);

  return (
    <div ref={scrollRef} className="overflow-x-scroll scrollbar-hide">
      <div className="flex w-max pl-6 md:pl-0">

        {/* ================= SET 1 ================= */}
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646012/Jyosna_-_Kaushik_-1_gbaw4n.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646014/Jyosna_-_Kaushik_-3_riu19p.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646016/Jyosna_-_Kaushik_-4_ivfxc8.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646030/Jyosna_-_Kaushik_-9_rnoc1t.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646019/Jyosna_-_Kaushik_-5_nxwmmy.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646022/Jyosna_-_Kaushik_-6_dw2msu.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646036/Jyosna_-_Kaushik_-13_yj2pdu.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646032/Jyosna_-_Kaushik_-12_txp9hf.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646044/Jyosna_-_Kaushik_-17_jhfxn3.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646065/Jyosna_-_Kaushik_-21_j5pmci.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />

        {/* ================= SET 2 (DUPLICATE) ================= */}
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646012/Jyosna_-_Kaushik_-1_gbaw4n.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646014/Jyosna_-_Kaushik_-3_riu19p.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646016/Jyosna_-_Kaushik_-4_ivfxc8.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646030/Jyosna_-_Kaushik_-9_rnoc1t.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646019/Jyosna_-_Kaushik_-5_nxwmmy.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646022/Jyosna_-_Kaushik_-6_dw2msu.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646036/Jyosna_-_Kaushik_-13_yj2pdu.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646032/Jyosna_-_Kaushik_-12_txp9hf.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646044/Jyosna_-_Kaushik_-17_jhfxn3.jpg" className="h-[320px] md:h-[520px] w-[220px] md:w-[340px] object-cover" />
        <img src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780646065/Jyosna_-_Kaushik_-21_j5pmci.jpg" className="h-[320px] md:h-[520px] w-[380px] md:w-[620px] object-cover" />
 
      </div>
    </div>
  );
}

/* =========================
   HOME
========================= */

export default function Home() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
  const portfolio = document.getElementById("portfolio");

  if (!portfolio) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      // show button ONLY when portfolio is NOT visible
      setShowTop(!entry.isIntersecting);
    },
    {
      threshold: 0.2, // adjust sensitivity
    }
  );

  observer.observe(portfolio);

  return () => observer.disconnect();
}, []);
  return (
   <main className="relative w-full min-h-screen overflow-x-hidden text-white">
  
  {/* BACKGROUND IMAGE */}
  <div className="fixed inset-0 -z-10">
    <img
      src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780643297/sunset_bnhk7q.jpg"
      alt="Sunset Background"
      className="h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40" />
  </div>

      {/* =========================
          FLOATING SOCIAL ICONS
      ========================= */}

      <motion.div
        className="hidden md:flex fixed right-12 top-1/2 z-50 -translate-y-1/2 flex-col gap-6 text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >

        <a
          href="https://instagram.com/svwedding.films"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-lg backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
        >
          <FaInstagram />
        </a>

        <a
          href="https://pinterest.com/svweddingfilms"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-lg backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
        >
          <FaPinterestP />
        </a>

        <a
          href="https://youtube.com/@SVWEDDINGFILMS"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/70 shadow-lg backdrop-blur-md transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
        >
          <FaYoutube />
        </a>

      </motion.div>

      {/* =========================
          HERO SECTION
      ========================= */}

      <motion.section
        id="home"
        className="relative z-10 flex h-[70vh] md:h-[88vh] items-start justify-between overflow-hidden px-6 md:px-16 pt-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >

       {/* DESKTOP VIDEO */}
<video
  autoPlay
  muted
  loop
  playsInline
  className="hidden md:block absolute left-0 top-0 h-full w-full object-cover"
>
  <iframe
  src="https://www.youtube.com/embed/BPMjys39NDA?si=6vlZp5VYS4oTW2RZ"
  title="YouTube video player"
  className="w-full aspect-video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
</video>

{/* MOBILE IMAGE */}
<img
  src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780643256/hero-mobile_s0oj6j.jpg"
  alt="Hero Mobile"
  className="block md:hidden absolute inset-0 w-full h-full object-cover scale-105"
/>
        {/* OVERLAY */}

        <div className="absolute inset-0 z-0 bg-black/45" />

        {/* HERO CONTENT */}

       <motion.div
  
  
  className="relative z-20 mt-56 md:mt-0"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <h1
    className={`${cormorant.className} text-2xl md:text-7xl font-light uppercase leading-none tracking-[0.06em]`}
  >
    SV WEDDING FILMS
  </h1>

  <motion.p
    className={`${allura.className} mt-1 text-right text-xs md:text-4xl text-gray-300`}
  >
    Every picture tells a story
  </motion.p>
</motion.div>

      </motion.section>

      {/* =========================
    ABOUT SECTION
========================= */}

<Reveal>
  <section
    id="about"
    className="w-full bg-[#f5f1ee] px-6 py-16 md:py-32 md:px-20"
  >

    {/* MOBILE TITLE */}
    <div className="block md:hidden text-center mb-8">
      <h2
        className={`${cormorant.className} text-[22px] font-light uppercase tracking-[0.04em] text-[#5f5a55]`}
      >
        About Us
      </h2>

      <div className="mx-auto mt-3 h-[1px] w-8 bg-[#8d8781]"></div>
    </div>

    <div className="mx-auto grid max-w-5xl items-center gap-10 md:gap-16 md:grid-cols-2">

      {/* IMAGE */}
      <div className="order-2 md:order-1 flex justify-center items-stretch">
        <img
          src="https://res.cloudinary.com/dzbomgzke/image/upload/v1780643153/about_vkbz1e.jpg"
          alt="About SV Photography"
        />
      </div>

      {/* CONTENT */}
      <div className="order-3 md:order-2 max-w-[470px] text-[#5f5a55]">

        {/* DESKTOP TITLE ONLY */}
        <h2
          className={`${cormorant.className} hidden md:block text-[48px] font-light uppercase tracking-[0.04em]`}
        >
          About Us
        </h2>

        <div className="hidden md:block mt-5 mb-8 h-[1px] w-8 bg-[#8d8781]"></div>

       <p
  className={`${montserrat.className} text-[11px] md:text-[15px] leading-[2] md:leading-[2.15] tracking-[0.01em] text-[#7e7872] font-light`}
>
  <span className="font-semibold uppercase">
    We are Vijay & team
  </span>

  <br />

  behind SV WEDDING FILMS and SV CUDDLES.

  Photography for us is not just about capturing pictures — it is about preserving emotions, expressions, and moments that will never come back again.

  From wedding celebrations to the pure innocence of children, we believe every frame has a story that deserves to be remembered forever.

  What started as a passion has now grown into a journey of creating timeless memories for our clients, where every smile, every tear, and every candid moment matters deeply to us.
   Our mission is to transform fleeting moments into timeless cinematic memories that you can cherish forever.
</p>

      </div>

    </div>

  </section>
</Reveal>

      {/* =========================
          CINEMATIC GALLERY
      ========================= */}

      <Reveal>

        <section className="w-full overflow-hidden bg-[#efe7df] py-28">

          {/* TOP TEXT */}

          <div className="mb-20 px-6 text-center">

            <h2
              className={`${dancingScript.className} text-[42px] leading-[1.3] text-[#726b65] md:text-[56px]`}
            >
              Experience the magic of your love story
              <br />
              through our lens!
            </h2>

          </div>

          {/* SCROLL GALLERY */}

          <AutoScrollGallery />

        </section>

      </Reveal>

     {/* =========================
    PORTFOLIO
========================= */}

<PortfolioSection />
{showTop && (
  <div className="fixed bottom-6 right-6 z-50 md:hidden">
    <button
      onClick={() =>
        document.getElementById("home")?.scrollIntoView({
          behavior: "smooth",
        })
      }
      className="w-10 h-10 rounded-full border border-black/40 flex items-center justify-center text-black/60 hover:text-black hover:border-black transition bg-white/30 backdrop-blur-md"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M6 15L12 9L18 15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  </div>
)}

{/* =========================
    FILMS PREVIEW
========================= */}

<FilmsPage />

      {/* =========================
          SV CUDDLES
========================= */}

<Reveal>
  <section
    id="cuddles"
     className="w-full bg-[#E9DED6] px-6 py-28 md:px-20"
  >
    {/* TITLE */}
    <div className="text-center">
      <h2
        className={`${cormorant.className} text-[22px] md:text-[48px] md:text-[70px] uppercase tracking-[0.08em] text-[#8B6F5A]`}
      >
        SV Cuddles
      </h2>

      <div className="mx-auto mt-5 h-[1px] w-10 bg-black/30" />
    </div>

    {/* IMAGE (CENTERED PREVIEW) */}
    <div className="mt-24 mx-auto max-w-5xl">
     <img
  src="/images/cuddles-preview.jpg"
  alt="SV Cuddles Preview"
  className="w-full aspect-video object-cover md:h-[520px]"
/>
    </div>

    {/* QUOTE */}
    <p
  className={`${montserrat.className} mt-6 text-[15px] leading-[2] tracking-[0.02em] text-gray-600 max-w-2xl mx-auto`}
>
       maternity,Newborn, milestones and family moments captured with love.
    </p>

    {/* BUTTON */}
    <div className="mt-16 text-center">
      <a href="/sv-cuddles">
        <button className="border border-black px-8 py-3 text-sm uppercase tracking-[0.15em] hover:bg-black hover:text-white transition">
          Explore Cuddles
        </button>
      </a>
    </div>
  </section>
</Reveal>

      {/* =========================
   TESTIMONIALS
========================= */}
<TestimonialsPage />

     {/* =========================
    CONTACT
========================= */}

<Reveal>
<section className="bg-[#EFE7E2] px-8 py-24">

  <div className="mx-auto max-w-4xl">

    <div className="grid gap-16 text-center md:grid-cols-3">

      {/* PHONE */}
      <div>

        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#4A403A]`}
        >
          Phone
        </h3>

        <p
          className={`${montserrat.className} text-[15px] tracking-[0.5px] text-[#6A5F58]`}
        >
          +91 9441414307
        </p>

      </div>

      {/* EMAIL */}
      <div>

        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#4A403A]`}
        >
          Email
        </h3>

        <a
          href="mailto:svweddingfilms@gmail.com"
          className={`${montserrat.className} text-[15px] tracking-[0.5px] text-[#6A5F58] hover:text-black transition`}
        >
          svweddingfilms@gmail.com
        </a>

      </div>

      {/* SOCIAL MEDIA */}
      <div>

        <h3
          className={`${cormorant.className} mb-4 text-[22px] text-[#4A403A]`}
        >
          Social Media
        </h3>

        <div className="flex justify-center gap-5 text-[#4A403A]">

          <a
            href="https://instagram.com/svwedding.films"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://youtube.com/@SVWEDDINGFILMS"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            <FaYoutube size={18} />
          </a>

          <a
            href="https://pinterest.com/svweddingfilms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-60 transition"
          >
            <FaPinterestP size={18} />
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
</Reveal>

</main>
  );
}