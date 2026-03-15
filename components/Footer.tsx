"use client";

import AnimatedSection from "./AnimatedSection";
import WarpBackground from "./WarpBackground";

function BookingEmbed() {
  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white" style={{ minHeight: "500px" }}>
      <iframe
        src="https://northway.youcanbook.me/?noframe=true&skipHeaderFooter=true"
        style={{ width: "100%", height: "100%", minHeight: "500px", border: "none" }}
        title="Book a call with Northway"
      />
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="px-6 pb-6">
      <div className="relative overflow-hidden rounded-3xl">
        <WarpBackground />

        <div className="relative z-10 px-8 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-6xl grid items-start gap-12 sm:grid-cols-2 sm:gap-16">
            <div>
              <AnimatedSection>
                <h2 className="text-4xl font-medium leading-[1.1] tracking-[-2px] text-white sm:text-5xl md:text-5xl lg:text-[64px] lg:leading-[1.05]">
                  See if Northway is the right fit for you{" "}
                  <br className="hidden sm:block" />
                  (
                  <span className="font-pacifico font-normal">
                    it absolutely is
                  </span>
                  )
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                <p className="mt-8 max-w-md text-lg text-white/80">
                  Schedule a quick 30 minute guided tour and see how Northway
                  works.
                </p>
              </AnimatedSection>

              <div className="mt-12 flex flex-col gap-2">
                <p className="text-sm text-white">
                  Headquartered in St. Louis, Missouri
                </p>
                <a
                  href="/terms-of-service"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/privacy-policy"
                  className="text-sm text-white/50 transition-colors hover:text-white/80"
                >
                  Privacy Policy
                </a>
              </div>
            </div>

            <AnimatedSection delay={0.3}>
              <BookingEmbed />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </footer>
  );
}
