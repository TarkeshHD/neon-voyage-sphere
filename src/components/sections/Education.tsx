import Reveal, { SectionHeading } from "../Reveal";
import { GraduationCap, Award, FileText } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="Education & Credentials" title="Learning & recognition" />

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 transition-all hover:glow-purple">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-purple to-neon-magenta text-white shadow-[var(--shadow-glow-magenta)]">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">B.Tech, Mechanical Engineering</h3>
              <p className="mt-1 text-sm text-muted-foreground">PES College of Engineering, Mandya</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6 transition-all hover:glow-cyan">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-cyan to-neon-blue text-white shadow-[var(--shadow-glow-cyan)]">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Certifications</h3>
              <ul className="mt-2 space-y-1.5 text-sm text-foreground/85">
                <li>· Unity VR Development</li>
                <li>· Unity Junior Programmer</li>
                <li>· Unity Game Development (EDspire)</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="glass h-full rounded-2xl p-6 transition-all hover:glow-magenta">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-neon-magenta to-neon-purple text-white shadow-[var(--shadow-glow-magenta)]">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold">Publication</h3>
              <p className="mt-2 text-sm text-foreground/85">
                "Design and Evaluation of Hexa-ring Hand-Referenced Menu UI for Immersive VR"
              </p>
              <span className="mt-3 inline-block rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-2.5 py-0.5 text-xs font-semibold text-neon-cyan">
                Under Review
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
