import Reveal, { SectionHeading } from "../Reveal";
import { Mail, Phone, Linkedin, MapPin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "ks.prajwal21@gmail.com",
    href: "mailto:ks.prajwal21@gmail.com",
    color: "from-neon-magenta to-neon-purple",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-8296053748",
    href: "tel:+918296053748",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "prajwal-k-s-vrud",
    href: "https://linkedin.com/in/prajwal-k-s-vrud",
    color: "from-neon-purple to-neon-cyan",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something immersive"
          subtitle="Open to roles, collaborations and consulting on XR/VR training projects."
        />

        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-12">
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-neon-magenta/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-neon-cyan/30 blur-3xl" />

            <div className="relative grid gap-4 md:grid-cols-3">
              {links.map((l, i) => (
                <Reveal key={l.label} delay={i * 0.08}>
                  <a
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group relative flex h-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:-translate-y-1 hover:border-white/30"
                  >
                    <div
                      className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${l.color} text-white shadow-[var(--shadow-glow)] transition-transform group-hover:scale-110`}
                    >
                      <l.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {l.label}
                      </p>
                      <p className="mt-0.5 break-all text-sm font-semibold text-foreground transition-colors group-hover:text-neon-cyan">
                        {l.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>

            <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-neon-cyan" />
                Chamarajanagar, Karnataka · India
              </div>
              <p>© {new Date().getFullYear()} Prajwal K S — Crafted in the metaverse.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
