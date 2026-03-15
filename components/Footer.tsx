"use client";

import AnimatedSection from "./AnimatedSection";
import WarpBackground from "./WarpBackground";

export default function Footer() {
  return (
    <footer id="footer" className="px-6 pb-6">
      <div className="relative overflow-hidden rounded-3xl">
        <WarpBackground />

        <div className="relative z-10 px-8 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-4xl">
            <AnimatedSection>
              <p className="text-center text-sm font-medium text-white/60">
                Want to learn more?
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <h2 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-medium leading-[1.1] tracking-[-2px] text-white sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[1.05]">
                See if Northway is the right fit for you{" "}
                <br className="hidden sm:block" />
                (
                <span className="font-pacifico font-normal">
                  it absolutely is
                </span>
                )
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mx-auto mt-8 max-w-md text-center text-lg text-white/80">
                Schedule a quick 30 minute guided tour and see how Northway
                works.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="mt-10 flex justify-center">
                <a
                  href="https://cal.com/northway"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-8 py-3.5 text-sm font-medium text-black transition-opacity hover:opacity-90"
                >
                  Book Call
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="mt-24 flex flex-col items-center gap-3 text-center md:mt-32">
            <p className="text-sm text-white">
              Headquartered in St. Louis, Missouri
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/privacy-policy"
                className="text-sm text-white/50 transition-colors hover:text-white/80"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-sm text-white/50 transition-colors hover:text-white/80"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
