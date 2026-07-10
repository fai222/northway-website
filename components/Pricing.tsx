"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  "Unlimited design & development requests",
  "One request at a time, avg. 48 hour delivery",
  "Unlimited revisions until you're happy",
  "Unlimited brands & stock photos",
  "Up to 2 users on your board",
  "Pause anytime — unused days roll over",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl lg:text-[44px]">
            One flat rate. No contracts, no hourly billing.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[15px] text-text-secondary">
            A senior designer-engineer costs $150,000+ a year to hire &mdash;
            if you can find one. Get the same output for a fraction of the
            cost, and only for the months you need it.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mx-auto mt-16 max-w-md rounded-3xl border border-border bg-surface p-10">
            <p className="text-sm font-medium text-text-muted">
              Monthly Subscription
            </p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-medium tracking-[-2px] text-text md:text-6xl">
                $4,995
              </span>
              <span className="text-lg text-text-secondary">/month</span>
            </div>
            <p className="mt-3 text-sm text-text-secondary">
              Pause or cancel anytime. No minimum commitment.
            </p>
            <ul className="mt-10 flex flex-col gap-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-[15px] text-text-secondary"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M15 4.5L6.75 12.75L3 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://buy.stripe.com/dRm5kFdwBe7R4dqdsx4ZG00" target="_blank"
              className="mt-10 flex w-full items-center justify-center rounded-full bg-text py-3.5 text-sm font-medium text-surface transition-opacity hover:opacity-80"
            >
              Start today
            </a>
            <p className="mt-4 text-center text-sm text-text-secondary">
              Not sure yet?{" "}
              <a href="#footer" className="underline underline-offset-2 transition-colors hover:text-text">
                Book a free 30-minute call
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
