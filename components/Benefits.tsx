"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    number: "01",
    title: "One senior expert, zero handoffs",
    description:
      "You work directly with the person doing the work — no account managers, no juniors, nothing lost in translation.",
  },
  {
    number: "02",
    title: "One flat rate, no surprises",
    description:
      "The same fixed price every month, whether you make one request or twenty. No hourly billing, no change orders, no invoices to chase.",
  },
  {
    number: "03",
    title: "Delivered in about 48 hours",
    description:
      "Most requests come back within two business days. Bigger projects ship in daily increments, so you're never left wondering.",
  },
  {
    number: "04",
    title: "Unlimited requests & revisions",
    description:
      "Queue up as much work as you like, and every deliverable gets revised until you're 100% satisfied — at no extra cost.",
  },
  {
    number: "05",
    title: "Pause when things slow down",
    description:
      "Unused days roll over when you pause, so you only pay for time you actually use. Cancel anytime with a click.",
  },
  {
    number: "06",
    title: "You own everything",
    description:
      "Every design and line of code is built from scratch for you and is 100% yours — source files included.",
  },
];

export default function Benefits() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
              Benefits
            </p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl lg:text-[44px]">
              It&apos;s &ldquo;you&apos;ll never go back&rdquo; better
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-[15px] text-text-secondary">
              A senior designer-engineer on tap costs less than a single
              full-time hire &mdash; and there&apos;s no recruiting, onboarding,
              or overhead.
            </p>
          </div>
        </AnimatedSection>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={benefit.number} delay={i * 0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-8">
                <div>
                  <h3 className="text-xl font-medium text-text">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </div>
                <p className="mt-8 text-xs font-medium text-text-muted">
                  {benefit.number}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
