"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = ["home", "about", "portfolio", "films"];

    const handleScroll = () => {
      let current = "home";

      sections.forEach((section) => {
        const el = document.getElementById(section);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Films", id: "films" },
    { label: "SV Cuddles", route: "/sv-cuddles" },
    { label: "Contact", route: "/contact" },
  ];

  const handleClick = (item: any) => {
  setMobileOpen(false);

  // if it's a page route (like SV Cuddles / Contact)
  if (item.route) {
    router.push(item.route);
    return;
  }

  // ALWAYS go home first for section scroll
  router.push("/");

  setTimeout(() => {
    const el = document.getElementById(item.id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 100); // small delay ensures DOM is ready
};
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="flex justify-between items-center px-4 md:px-16 py-4 md:py-6">
        
        {/* Logo */}
        <div className="text-white tracking-[0.2em] md:tracking-[0.3em] font-light text-xs md:text-sm">
          SV WEDDING FILMS
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10">
          {items.map((item: any) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
              className={`text-[12px] tracking-[0.25em] uppercase transition-all duration-300 ${
                active === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
         className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          {items.map((item: any) => (
            <button
              key={item.label}
              onClick={() => handleClick(item)}
             className={`${cormorant.className} block w-full py-4 text-center text-black text-lg uppercase tracking-[0.08em]`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}