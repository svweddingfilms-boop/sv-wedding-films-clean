"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import { Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function TestimonialsPage() {
  const testimonials = [
    {
      image: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780642939/Jyosna_-_Kaushik_-64_mbxaii.jpg",
      name: "Priya & Family",
      review:
        "The photographs captured every emotion beautifully. We couldn't have asked for a better experience.",
    },
    {
      image: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780642938/Jyosna_-_Kaushik_-61_harfzb.jpg",
      name: "Ananya",
      review:
        "The newborn session was so comfortable and the final images were stunning.",
    },
    {
      image: "https://res.cloudinary.com/dzbomgzke/image/upload/v1780642937/Jyosna_-_Kaushik_-98_wmubw7.jpg",
      name: "Rahul & Swathi",
      review:
        "Professional, patient, and incredibly talented. Every photograph felt magical.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <main className="w-full bg-white px-4 py-32 md:px-20">

      {/* TITLE */}
<div className="text-center relative z-50">
  <h2
className={`${cormorant.className} text-[22px] md:text-[48px] uppercase tracking-[0.08em] text-[#8B6F5A]`}
  >
    Testimonials
  </h2>

  <div className="mx-auto mt-5 h-[1px] w-10 bg-black/30" />
</div>
    

      {/* TESTIMONIAL CARD */}
<div className="mt-20 max-w-7xl mx-auto relative">

  {/* LEFT ARROW */}
  <button
  onClick={prevTestimonial}
  className="absolute left-0 top-1/2 -translate-y-1/2 text-3xl md:text-5xl font-extralight text-black hover:scale-125 transition-all duration-300"
>
  ‹
</button>
  {/* RIGHT ARROW */}
  <button
  onClick={nextTestimonial}
  className="absolute right-0 top-1/2 -translate-y-1/2 text-3xl md:text-5xl font-extralight text-black hover:scale-125 transition-all duration-300"
>
  ›
</button>
 <AnimatePresence mode="wait">
  <motion.div
    key={current}
    initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
transition={{
  duration: 0.9,
  ease: "easeInOut",
}}
    className="grid md:grid-cols-2 gap-8 items-center px-4 md:px-16"
  >
    {/* LEFT SIDE IMAGE */}
    <div>
      <img
        src={testimonials[current].image}
        alt={testimonials[current].name}
        className="w-full max-w-[320px] md:max-w-[420px] h-auto md:h-[650px] object-cover mx-auto"
      />
    </div>

    {/* RIGHT SIDE TEXT */}
    <div>
      <p
        className={`${montserrat.className} text-base md:text-lg leading-[2] text-gray-600`}
      >
        "{testimonials[current].review}"
      </p>

      <h3
  className={`${cormorant.className} mt-8 text-[22px] md:text-[28px] tracking-[0.08em] text-[#8B6F5A]`}
>
        {testimonials[current].name}
      </h3>
    </div>
  </motion.div>
</AnimatePresence>
<div className="flex justify-center gap-3 mt-10">
  {testimonials.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrent(index)}
      className={`transition-all duration-300 rounded-full ${
        current === index
          ? "w-8 h-2 bg-[#8B6F5A]"
          : "w-2 h-2 bg-gray-300"
      }`}
    />
  ))}
</div>
</div>
    </main>
  );
}