import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeadsetModel = lazy(() => import("../HeadsetModel"));

function Badge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <span className="rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
        Enterprise XR Platform
      </span>
    </motion.div>
  );
}

function Name() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45, duration: 0.7 }}
      className="relative"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(168,85,247,0.45), rgba(34,211,238,0.28) 45%, transparent 75%)",
        }}
      />
      <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl"
          style={{ textShadow: "0 0 28px rgba(168,85,247,0.55), 0 0 60px rgba(34,211,238,0.35)" }}>
        PRAJWAL K S
      </h1>
    </motion.div>
  );
}

function Role() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="text-base font-medium text-foreground/90 md:text-2xl"
    >
      Unity XR Developer · VR Simulation Engineer
    </motion.p>
  );
}

function Description() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="max-w-xl text-sm text-muted-foreground md:text-base"
    >
      Building immersive solutions that solve real-world problems through XR, simulation, and innovation.
    </motion.p>
  );
}

function CTAs() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.05, duration: 0.6 }}
      className="flex flex-wrap items-center justify-center gap-4"
    >
      <a
        href="#projects"
        className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan px-7 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 animate-pulse-glow"
      >
        Enter the Experience
        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
      </a>
      <a
        href="#contact"
        className="rounded-full glass px-7 py-3 text-sm font-semibold text-foreground transition-all hover:bg-white/10 hover:glow-cyan"
      >
        Get in Touch
      </a>
    </motion.div>
  );
}

function DragHint() {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70"
    >
      Drag the headset to explore · 360°
    </motion.p>
  );
}

function HeadsetCanvas({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* glow halo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),rgba(34,211,238,0.18)_45%,transparent_72%)] blur-3xl" />
      </div>
      <Suspense fallback={<div className="h-full w-full" />}>
        <HeadsetModel />
      </Suspense>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:block">
        {/* Headset as background centerpiece */}
        <HeadsetCanvas className="absolute inset-0 z-0" />
        {/* readability vignette */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/60 via-background/10 to-background" />

        <div className="pointer-events-none relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 py-24 text-center">
          <div className="pointer-events-auto">
            <Badge />
          </div>

          <div className="flex flex-col items-center gap-6">
            <div className="pointer-events-auto"><Name /></div>
            <Role />
            <Description />
            <div className="pointer-events-auto"><CTAs /></div>
            <DragHint />
          </div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-muted-foreground"
          >
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT ===== */}
      <div className="relative z-0 flex min-h-screen flex-col items-center justify-start gap-6 px-5 pb-16 pt-24 text-center md:hidden">
        <Badge />
        <Name />
        <Role />

        <div className="relative my-2 h-[42vh] w-full">
          <HeadsetCanvas className="absolute inset-0" />
        </div>

        <Description />
        <CTAs />
        <DragHint />
      </div>
    </section>
  );
}
