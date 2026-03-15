"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduce ? undefined : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.28, 0.41, 0.56, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
