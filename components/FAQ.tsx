"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time designer or developer?",
    answer:
      "A senior designer or engineer costs $150,000+ per year plus benefits — and you may not have enough work to keep them busy year-round. With Northway you get senior-level design and engineering only when you need it, and you can pause your subscription when you don't. No recruiting, no onboarding, no payroll.",
  },
  {
    question: "What kind of work can I request?",
    answer:
      "Anything your company needs to look great and ship fast: product and UI/UX design, marketing websites, landing pages, logos and brand assets, pitch decks, social graphics — plus front-end engineering to bring designs to life in production-ready code.",
  },
  {
    question: "How fast will I receive my work?",
    answer:
      "Most requests are completed within two business days. Larger projects — like a full website or app design — are broken into milestones, and you'll see meaningful progress every 24-48 hours until it's done.",
  },
  {
    question: "Is there a limit to how many requests I can make?",
    answer:
      "No. Add as many requests to your queue as you'd like — they're worked on one at a time and delivered one by one, so quality never slips.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "We'll keep revising until you're 100% satisfied. Revisions are unlimited and included in your subscription — no extra fees, ever.",
  },
  {
    question: "Who does the work?",
    answer:
      "Northway is run by one person: Filip Iversen. There are no account managers, project managers, or junior designers between you and the work. You get direct access to the person actually designing and building for you — which is exactly why the quality stays consistent.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "Subscribe and you'll be invited to your own Trello board — usually within an hour. Accept the invite and you can start submitting requests immediately. Instructions for making requests live right on the board.",
  },
  {
    question: "How will I submit requests?",
    answer:
      "However works best for you. Write it directly in Trello, share a Google doc or wireframe, or record a quick Loom video if you'd rather talk than type. If it can be linked or shared in Trello, it works.",
  },
  {
    question: "How does the pause feature work?",
    answer:
      "Billing cycles are 31 days. Say you use the service for 21 days and then pause — you keep the remaining 10 days to use anytime in the future. Nothing goes to waste, and you're never paying for idle time.",
  },
  {
    question: "What if I only need a month, or a single project?",
    answer:
      "That's completely fine. Use Northway for a month, pause or cancel when the work is done, and come back whenever you need more. There's no minimum commitment and no penalty for leaving.",
  },
  {
    question: "Who owns the work?",
    answer:
      "You do — 100%. Every design and every line of code is created from scratch for you, and you receive full ownership and source files.",
  },
  {
    question: "What tools do you use?",
    answer:
      "Designs are created in Figma, so you can hand them to any developer or have them built here. Requests and communication run through Trello.",
  },
  {
    question: "Are there any requests you don't support?",
    answer:
      "A few. Northway doesn't cover 3D modeling, animated graphics (GIFs, etc.), document design (medical forms, etc.), complex packaging, or extensive print design (magazines, books, etc.). Not sure if your project fits? Book a call and ask.",
  },
  {
    question: "Are there any refunds?",
    answer:
      "If you're not happy within your first week, reach out and we'll make it right. After the first week, refunds aren't issued for completed work — but with unlimited revisions and the ability to pause or cancel anytime, you're always in control of what you pay for.",
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
          <p className="mx-auto mt-4 max-w-md text-center text-[15px] text-text-secondary">
            Everything you need to know before getting started. Still have a
            question?{" "}
            <a href="#footer" className="underline underline-offset-2 transition-colors hover:text-text">
              Book a quick call
            </a>
            .
          </p>
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
