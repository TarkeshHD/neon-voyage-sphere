import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeadsetModel = lazy(() => import("../HeadsetModel"));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Interactive 3D headset background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-full w-full bg-background" />}>
          <HeadsetModel />
        </Suspense>
      </div>

      {/* Soft glow halo behind model */}
      <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
        <div className="h-[55vmin] w-[55vmin] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.35),rgba(34,211,238,0.15)_40%,transparent_70%)] blur-3xl" />
      </div>

      {/* Vignette so text stays readable; allow pointer events to pass through to canvas */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/50 via-transparent to-background" />

      <div className="pointer-events-none relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="pointer-events-auto"
        >
          <span className="rounded-full glass px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground/80">
            Enterprise XR Platform
          </span>
        </motion.div>

        <div className="flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            <span className="text-gradient text-glow">PRAJWAL KS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 max-w-2xl text-lg font-medium text-foreground/90 md:text-2xl"
          >
            Unity XR Developer · VR Simulation Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-4 max-w-xl text-sm text-muted-foreground md:text-base"
          >
            Building immersive enterprise VR/MR training worlds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan px-8 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 animate-pulse-glow"
            >
              Enter the Experience
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="rounded-full glass px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-white/10 hover:glow-cyan"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="mt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70"
          >
            Drag the headset to explore · 360°
          </motion.p>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.div>
      </div>
    </section>
  );
}
