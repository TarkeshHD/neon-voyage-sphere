import Reveal, { SectionHeading } from "../Reveal";
import { Briefcase } from "lucide-react";

const jobs = [
  {
    company: "AutoVRse",
    role: "SDE-1 · Unity XR Developer",
    location: "Bangalore",
    period: "Sep 2025 — Present",
    bullets: [
      "Building enterprise XR training apps for Bosch, JSW and UltraTech.",
      "Engineering features for VRseBuilder — an AI-powered no-code XR design system.",
      "Designed modular interaction systems and runtime debugging tooling.",
      "Shipped localization across 8+ languages via HarfBuzz integration.",
    ],
  },
  {
    company: "MadVR Solutions · IIT Guwahati",
    role: "Associate Unity VR Developer",
    location: "Bangalore / IIT Guwahati",
    period: "Mar 2024 — Jul 2025",
    bullets: [
      "Built VR surgical simulation with research collaboration at IIT Guwahati.",
      "Promoted from Junior → Associate Developer in 3 months.",
      "Engineered Auto Hand-based physics interactions and grabbable tools.",
      "Onsite at IIT Guwahati for 6 months coordinating with surgeons.",
    ],
  },
  {
    company: "EDspire Research",
    role: "Unity Developer Intern",
    location: "Mysore",
    period: "Jan — Feb 2024",
    bullets: [
      "Built a 3D learning platform and an immersive 360° virtual tour.",
      "Owned scene setup, scripting and interaction polish end-to-end.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading eyebrow="Experience" title="Journey through XR" />

        <div className="relative">
          {/* timeline spine */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-neon-magenta via-neon-purple to-neon-cyan md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {jobs.map((job) => {
              return (
                <Reveal key={job.company}>
                  <div className="relative grid gap-6 md:grid-cols-2 md:gap-12 md:[&>*:first-child]:order-2">
                    {/* node */}
                    <div className="absolute left-4 top-6 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-neon-magenta to-neon-cyan text-white shadow-[var(--shadow-glow)] animate-pulse-glow md:left-1/2">
                      <Briefcase className="h-3.5 w-3.5" />
                    </div>

                    {/* card */}
                    <div className="pl-14 md:pl-12">
                      <div className="glass rounded-2xl p-6 transition-all hover:glow-purple">
                        <div className="mb-1 text-xs font-semibold uppercase tracking-widest text-neon-cyan">
                          {job.period}
                        </div>
                        <h3 className="font-display text-xl font-bold">{job.company}</h3>
                        <p className="text-sm text-muted-foreground">
                          {job.role} · {job.location}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                          {job.bullets.map((b) => (
                            <li key={b} className="leading-relaxed">
                              <span className="mr-2 text-neon-magenta">▸</span>
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
