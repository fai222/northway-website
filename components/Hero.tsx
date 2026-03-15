"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import WarpBackground from "./WarpBackground";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 w-full">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#"
          className="font-manrope text-[22px] font-extrabold leading-tight text-white md:text-[25px]"
        >
          northway.agency
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#footer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#0055ff] hover:text-white"
          >
            <span>Book Call</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="hidden h-4 w-4 fill-current md:block"
            >
              <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
            </svg>
          </a>
          <a
            href="#pricing"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-[#0055ff] hover:text-white"
          >
            <span>See Pricing</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="hidden h-4 w-4 fill-current md:block"
            >
              <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
            </svg>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden bg-black/30 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              <a
                href="#footer"
                onClick={() => setMenuOpen(false)}
                className="text-sm text-white/80"
              >
                Book Call
              </a>
              <a
                href="#pricing"
                onClick={() => setMenuOpen(false)}
                className="inline-flex w-fit rounded-full bg-white px-5 py-2 text-sm font-medium text-black"
              >
                See Pricing
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default function Hero() {
  return (
    <div className="p-6">
      <section className="relative flex h-[65vh] flex-col overflow-hidden rounded-2xl">
        <WarpBackground />

        <Navbar />

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 text-center">
          <AnimatedSection delay={0.2}>
            <h1 className="mx-auto max-w-4xl text-5xl font-medium leading-[0.95] tracking-[-3px] text-white sm:text-6xl md:text-7xl lg:text-[82px] lg:leading-[78px]">
              Design & engineering for{" "}
              <span className="font-pacifico font-normal">everyone</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.6}>
            <h3 className="mt-8 text-lg font-medium text-white md:text-xl">
              Pause or cancel anytime.
            </h3>
          </AnimatedSection>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={1} className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2">
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-black/80 p-1.5">
            <div className="h-2.5 w-0.5 animate-bounce rounded-full bg-black" />
          </div>
        </AnimatedSection>
      </section>
    </div>
  );
}
