import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const Scene3D = lazy(() => import("../Scene3D"));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<div className="h-full w-full bg-background" />}>
          <Scene3D />
        </Suspense>
      </div>

      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-neon-cyan"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Available for immersive XR opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-display text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
        >
          <span className="text-gradient text-glow">Prajwal K S</span>
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
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
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
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
