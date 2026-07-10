"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Subscribe",
    description:
      "Pick your plan and check out in minutes. You'll get access to your own request board within hours — no contracts, no proposals, no kickoff meetings.",
  },
  {
    number: "02",
    title: "Request",
    description:
      "Add as many requests as you like to your queue — product design, websites, landing pages, logos, or front-end code. Written brief, Google doc, or a quick Loom video all work.",
  },
  {
    number: "03",
    title: "Receive",
    description:
      "Get each request back within two business days on average, revised until you're 100% happy. Larger projects ship in daily increments so you always see progress.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl lg:text-[44px]">
            Skip the hiring, the scoping, and the surprise invoices
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-[15px] text-text-secondary">
            No interviews, no proposals, no hourly billing. Subscribe once and
            start requesting work the same day.
          </p>
        </AnimatedSection>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8">
                <div>
                  <h3 className="text-xl font-medium text-text">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </div>
                <p className="mt-8 text-xs font-medium text-text-muted">
                  {step.number}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
