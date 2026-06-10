import Reveal, { SectionHeading } from "../Reveal";
import Tilt from "react-parallax-tilt";
import { ExternalLink } from "lucide-react";
import warzoneImg from "@/assets/project-warzone.jpg";
import solarImg from "@/assets/project-solar.jpg";
import nexgenImg from "@/assets/project-nexgen.jpg";
import tour360Img from "@/assets/project-tour360.jpg";
import learningImg from "@/assets/project-learning.jpg";
import snakeImg from "@/assets/project-snake.jpg";

const projects = [
  {
    title: "Warzone Inventory — VR Simulation",
    desc: "Stackable & consumable inventory system for Meta Quest 2 with spatial audio and haptic feedback.",
    tags: ["Meta Quest 2", "Inventory", "Haptics", "Spatial Audio"],
    image: warzoneImg,
    demo: "https://youtu.be/Aq44fjYC2Zk?si=GBtk13EUFP9cPOp5",
  },
  {
    title: "Solar Panel Installation & Wiring",
    desc: "Guided VR training: step-by-step interactions, voice guidance and haptic feedback.",
    tags: ["VR Training", "Voice-Guided", "Haptics"],
    image: solarImg,
    demo: "https://youtu.be/3_XPZH6o8mE?si=iXJqfb5BdjHGBfVT",
  },
  {
    title: "Nex Gen VR Room",
    desc: "Immersive VR environment with XR Interaction Toolkit, teleportation and full spatial audio.",
    tags: ["XR Toolkit", "Teleport", "Spatial Audio"],
    image: nexgenImg,
    demo: "https://youtu.be/95waGzj0epk?si=LLxaopgujmXHau4E",
  },
  {
    title: "360° Virtual Tour",
    desc: "Browser-friendly immersive tour built with stitched panoramic scenes and hotspots.",
    tags: ["360°", "WebXR", "Interactive"],
    image: tour360Img,
    demo: "https://youtu.be/ImM30_FN6cg?si=DF_oT9VE1PmYv9Si",
  },
  {
    title: "Virtual 3D Learning Platform",
    desc: "An interactive 3D classroom for STEM concepts — built during EDspire research.",
    tags: ["Education", "3D", "Unity"],
    image: learningImg,
    demo: "https://youtu.be/ew4Q6IVt9Mk?si=JtAraw4HpwJmY5Lu",
  },
  {
    title: "Snake Quest",
    desc: "Modern reimagining of the classic with smooth gameplay, particle FX and progression.",
    tags: ["Game", "Unity", "Particles"],
    image: snakeImg,
    demo: "https://youtu.be/kqTQSLz1HP0?si=SdboCrQV_c43y05D",
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
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
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

                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan transition-all hover:text-neon-magenta"
                    >
                      View Demo
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </a>
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
