"use client";

import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Subscribe",
    description:
      "It is as easy as swiping your card, and you will be good to go to make requests the following morning.",
  },
  {
    number: "02",
    title: "Request",
    description:
      "You can ask for whatever your company needs. From product design to websites and logos.",
  },
  {
    number: "03",
    title: "Receive",
    description:
      "Receive the requested work within two business days on average. Large projects get updates daily.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl lg:text-[44px]">
            The way design and engineering should have been done in the first
            place
          </h2>
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
