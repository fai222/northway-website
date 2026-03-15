"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "How fast will I receive my designs?",
    answer:
      "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Subscribe to a plan and we'll quickly add you to your very own Trello board. This process usually takes about an hour to complete from the time you subscribe. Once you accept the invite to Trello, you're ready to rock. Further instructions on how to use the Trello board to request designs can be found on the board itself.",
  },
  {
    question: "Who are the designers?",
    answer:
      "Northway is a one-man agency, ran by Filip Iversen. Northway does not employ other designers or project managers. You'll work directly with me through the entirety of your experience.",
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer:
      "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "Pausing your subscription comes in handy if you do not have enough design work to fill up an entire month. Billing cycles are based on 31-day periods. Let's say you sign up and use the service for 21 days, and then decide to pause your subscription. This means that the billing cycle will be paused and you'll have 10 days of service remaining to be used anytime in the future.",
  },
  {
    question: "How do you handle larger requests?",
    answer:
      "Larger requests are broken down on Northway's end. This applies to full-scale website or mobile app designs, UI/UX work, etc. You should expect to receive a reasonable amount of progress every 24-48 hours until the entire request is completed.",
  },
  {
    question: "What programs do you design in?",
    answer: "Most requests are designed using Figma.",
  },
  {
    question: "How will I request designs?",
    answer:
      "Northway offers a ton of flexibility in how you request designs using Trello. Some common ways clients request designs is directly via Trello, sharing Google docs or wireframes, or even recording a brief Loom video (for those who prefer not to write their briefs out). Basically, if it can be linked to or shared in Trello, it's fair game.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "No worries! We'll continue to revise the design until you're 100% satisfied.",
  },
  {
    question: "Are there any requests you don't support?",
    answer:
      "Absolutely. Northway does not cover the following design work: 3D modeling, animated graphics (GIFS, etc.), document design (medical forms, etc.), complex packaging, extensive print design (magazines, books, etc.).",
  },
  {
    question: "What if I only have a single request?",
    answer:
      "That's fine. You can pause your subscription when finished and return when you have additional design needs. There's no need to let the remainder of your subscription go to waste.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "Due to the high quality nature of the work, there will be no refunds issued past the first week of service. However, no refunds will be issued for completed work.",
  },
  {
    question: "Can I use Northway for just a month?",
    answer:
      "For sure. Whether you need Northway for a month or a year, the choice is yours. Just feel free to come back when you have additional design needs.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-4 text-left"
      >
        <span className="pr-8 text-[15px] font-medium text-text">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className={`shrink-0 text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[15px] leading-relaxed text-text-secondary">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <AnimatedSection>
          <h2 className="text-center text-3xl font-medium leading-tight tracking-[-1.5px] text-text md:text-4xl">
            Frequently asked questions
          </h2>
        </AnimatedSection>
        <div className="mt-12 flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.04}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
