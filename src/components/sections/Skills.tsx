import Reveal, { SectionHeading } from "../Reveal";
import { motion } from "framer-motion";

const groups = [
  {
    title: "XR & Simulation",
    color: "from-neon-magenta to-neon-purple",
    items: ["Unity (2021.3+)", "XR Interaction Toolkit", "Meta XR SDKs", "Auto Hand Plugin", "VR/MR Development"],
  },
  {
    title: "Programming",
    color: "from-neon-purple to-neon-blue",
    items: ["C#", "OOP", "Modular System Design", "Event-Driven Architecture", "Runtime Systems"],
  },
  {
    title: "Interaction Engineering",
    color: "from-neon-cyan to-neon-purple",
    items: ["Physics-Based Interactions", "Haptics", "Procedural Workflows"],
  },
  {
    title: "Product / Framework",
    color: "from-neon-magenta to-neon-cyan",
    items: ["SDK Integration", "Localization Tooling", "HarfBuzz", "Cross-Platform XR"],
  },
  {
    title: "Optimization",
    color: "from-neon-blue to-neon-cyan",
    items: ["Scene Optimization", "Performance Profiling", "Runtime Debugging"],
  },
  {
    title: "Tools",
    color: "from-neon-purple to-neon-magenta",
    items: ["Figma", "ShapesXR", "Bezi", "Git", "GitHub"],
  },
  {
    title: "AI-Assisted",
    color: "from-neon-cyan to-neon-magenta",
    items: ["ChatGPT", "Copilot", "Cursor AI", "Claude"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="The XR Stack"
          subtitle="Tools, frameworks and patterns I use to ship immersive experiences."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-neon-cyan/40">
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${g.color}`}
                />
                <h3 className="mb-4 font-display text-lg font-bold">
                  <span className={`bg-gradient-to-r ${g.color} bg-clip-text text-transparent`}>
                    {g.title}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.08, y: -3 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className={`cursor-default rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/90 backdrop-blur transition-all hover:border-transparent hover:bg-gradient-to-r hover:${g.color} hover:text-white hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]`}
                      style={{ animationDelay: `${j * 50}ms` }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
