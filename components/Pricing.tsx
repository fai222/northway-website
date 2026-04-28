"use client";

import AnimatedSection from "./AnimatedSection";

const features = [
  "One request at a time",
  "Avg. 48 hour delivery",
  "Unlimited brands",
  "Unlimited stock photos",
  "Up to 2 users",
  "Pause or cancel anytime",
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl lg:text-[44px]">
            One subscription, endless possibilities
          </h2>
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
              Get started
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
