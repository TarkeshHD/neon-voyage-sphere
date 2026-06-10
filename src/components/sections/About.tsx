import Reveal, { SectionHeading } from "../Reveal";
import { Cpu, Headset, Sparkles, Boxes } from "lucide-react";

const highlights = [
  { icon: Headset, label: "Enterprise XR Training", value: "Bosch · JSW · UltraTech" },
  { icon: Cpu, label: "Unity & C#", value: "2.5+ years shipping" },
  { icon: Sparkles, label: "VRseBuilder", value: "AI-powered no-code XR" },
  { icon: Boxes, label: "Surgical VR Sim", value: "with IIT Guwahati" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About" title="Engineering immersive worlds" />

        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-neon-purple/30 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-neon-cyan/30 blur-3xl" />

            <div className="relative grid gap-10 md:grid-cols-5">
              <div className="md:col-span-3">
                <p className="text-lg leading-relaxed text-foreground/90">
                  I'm a <span className="text-neon-cyan font-semibold">Unity XR Developer</span> with
                  2.5+ years of experience crafting enterprise-grade VR & MR training applications,
                  real-time simulations and scalable XR workflows.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  My toolkit centers on Unity, C#, Meta XR SDKs and proprietary XR frameworks.
                  At AutoVRse I engineer features for{" "}
                  <span className="text-neon-magenta font-medium">VRseBuilder</span> — an
                  AI-powered no-code XR design system — and previously built VR surgical
                  simulations with IIT Guwahati. I obsess over physics-based interaction,
                  modular architecture and 60fps experiences.
                </p>
              </div>

              <div className="grid gap-3 md:col-span-2">
                {highlights.map((h, i) => (
                  <Reveal key={h.label} delay={i * 0.08}>
                    <div className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-neon-cyan/40 hover:bg-white/10">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-cyan text-white shadow-[var(--shadow-glow-cyan)]">
                        <h.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                          {h.label}
                        </p>
                        <p className="text-sm font-semibold">{h.value}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
