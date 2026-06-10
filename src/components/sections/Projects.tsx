import Reveal, { SectionHeading } from "../Reveal";
import Tilt from "react-parallax-tilt";
import { ExternalLink, Headset } from "lucide-react";

const projects = [
  {
    title: "Warzone Inventory — VR Simulation",
    desc: "Stackable & consumable inventory system for Meta Quest 2 with spatial audio and haptic feedback.",
    tags: ["Meta Quest 2", "Inventory", "Haptics", "Spatial Audio"],
    gradient: "from-neon-magenta via-neon-purple to-neon-blue",
  },
  {
    title: "Solar Panel Installation & Wiring",
    desc: "Guided VR training: step-by-step interactions, voice guidance and haptic feedback.",
    tags: ["VR Training", "Voice-Guided", "Haptics"],
    gradient: "from-neon-cyan via-neon-blue to-neon-purple",
  },
  {
    title: "Nex Gen VR Room",
    desc: "Immersive VR environment with XR Interaction Toolkit, teleportation and full spatial audio.",
    tags: ["XR Toolkit", "Teleport", "Spatial Audio"],
    gradient: "from-neon-purple via-neon-magenta to-neon-cyan",
  },
  {
    title: "360° Virtual Tour",
    desc: "Browser-friendly immersive tour built with stitched panoramic scenes and hotspots.",
    tags: ["360°", "WebXR", "Interactive"],
    gradient: "from-neon-blue via-neon-cyan to-neon-purple",
  },
  {
    title: "Virtual 3D Learning Platform",
    desc: "An interactive 3D classroom for STEM concepts — built during EDspire research.",
    tags: ["Education", "3D", "Unity"],
    gradient: "from-neon-magenta via-neon-cyan to-neon-purple",
  },
  {
    title: "Snake Quest",
    desc: "Modern reimagining of the classic with smooth gameplay, particle FX and progression.",
    tags: ["Game", "Unity", "Particles"],
    gradient: "from-neon-cyan via-neon-magenta to-neon-blue",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Works"
          subtitle="A snapshot of immersive simulations, training tools and experiments."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor="#ffffff"
                glarePosition="all"
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                transitionSpeed={1500}
                className="h-full"
              >
                <div className="group relative h-full overflow-hidden rounded-2xl glass-strong">
                  {/* gradient header */}
                  <div className={`relative h-40 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Headset className="h-16 w-16 text-white/80 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg font-bold leading-snug">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground/80"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan transition-all hover:text-neon-magenta"
                    >
                      View Demo
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
