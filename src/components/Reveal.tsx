import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className,
  y = 30,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 text-center">
      <Reveal>
        <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-neon-cyan">
          {eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="font-display text-4xl font-bold md:text-5xl">
          <span className="text-gradient">{title}</span>
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
