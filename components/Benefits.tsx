"use client";

import AnimatedSection from "./AnimatedSection";

const benefits = [
  {
    number: "01",
    title: "Design board",
    description:
      "Easily manage your work queue and see what is being worked on.",
  },
  {
    number: "02",
    title: "Fixed monthly rate",
    description:
      "No surprise invoices! Pay the same fixed price each month.",
  },
  {
    number: "03",
    title: "Fast delivery",
    description:
      "Get your requests delivered one at a time in just a couple days on average.",
  },
  {
    number: "04",
    title: "Top-notch quality",
    description:
      "Senior-level design quality at your fingertips, whenever you need it.",
  },
  {
    number: "05",
    title: "Flexible and scalable",
    description:
      "Scale up or down as needed, and pause or cancel at any point.",
  },
  {
    number: "06",
    title: "Unique and all yours",
    description:
      "Every design is made especially for you and is 100% yours.",
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
              Staying focused, moving quickly, and always aiming for high-quality
              work.
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
