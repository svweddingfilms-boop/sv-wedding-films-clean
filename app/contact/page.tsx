"use client";

import { FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function ContactPage() {
  return (
    <main className="w-full bg-white">

      {/* =========================
          IMAGE SECTION
      ========================== */}
     <section className="pt-10">
        <div className="w-full bg-[#E9DED6] py-16">

          <div className="flex justify-center px-6 md:px-0">
  <img
    src="/images/contact.jpg"
    alt="SV Wedding Films"
    className="w-full max-w-[420px] h-auto md:h-[620px] object-cover"
  />
</div>

        </div>
      </section>

      {/* =========================
          CONTACT DETAILS
      ========================== */}
      <section className="px-6 py-24 md:px-20">

        <div className="max-w-4xl mx-auto">

          <h2
            className={`${cormorant.className} text-[42px] md:text-[52px] text-black`}
          >
            Contact Details
          </h2>

          <div className="mt-5 h-[1px] w-10 bg-black/30" />

          <div className="mt-16 grid md:grid-cols-2 gap-20">

            {/* LEFT SIDE */}
            <div>

              <h3
                className={`${cormorant.className} text-[22px] text-[#4A403A]`}
              >
                Phone
              </h3>

              <p
                className={`${montserrat.className} mt-2 text-gray-700`}
              >
                +91 9441414307
              </p>

              <div className="mt-10">

                <h3
                  className={`${cormorant.className} text-[22px] text-[#4A403A]`}
                >
                  Email
                </h3>

                <a
                  href="mailto:svweddingfilms@gmail.com"
                  className={`${montserrat.className} mt-2 block text-gray-700 hover:text-black transition`}
                >
                  svweddingfilms@gmail.com
                </a>

              </div>

              <div className="mt-10">

                <h3
                  className={`${cormorant.className} text-[22px] text-[#4A403A]`}
                >
                  Address
                </h3>

                <p
                  className={`${montserrat.className} mt-2 text-gray-700 leading-8`}
                >
                  Kohinoor Apartments,
                  <br />
                  Prakashnagar, Begumpet,
                  <br />
                  Hyderabad
                  <br />
                  Telangana, 500016
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <h3
                className={`${cormorant.className} text-[22px] text-[#4A403A]`}
              >
                Social Media
              </h3>

              <div className="flex gap-8 mt-6 items-center">

                <a
                  href="https://instagram.com/svwedding.films"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A403A] hover:opacity-60 transition"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="https://youtube.com/@SVWEDDINGFILMS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A403A] hover:opacity-60 transition"
                >
                  <FaYoutube size={28} />
                </a>

                <a
                  href="https://pinterest.com/svweddingfilms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4A403A] hover:opacity-60 transition"
                >
                  <FaPinterestP size={28} />
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}