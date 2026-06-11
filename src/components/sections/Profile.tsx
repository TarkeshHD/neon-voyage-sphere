import Reveal from "../Reveal";
import prajwalPhoto from "@/assets/prajwal-photo.png.asset.json";

export default function Profile() {
  return (
    <section id="profile" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="grid items-center gap-10 md:grid-cols-5">
            <div className="md:col-span-2">
              <div className="group relative mx-auto w-full max-w-[340px]">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-neon-magenta via-neon-purple to-neon-cyan opacity-60 blur-2xl transition-opacity group-hover:opacity-90" />
                <div className="relative overflow-hidden rounded-3xl border border-white/15 glass-strong">
                  <img
                    src={prajwalPhoto.url}
                    alt="Prajwal K S"
                    className="block h-full w-full object-cover mix-blend-luminosity contrast-110 saturate-110 transition-all duration-700 group-hover:mix-blend-normal"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-neon-purple/30 via-transparent to-neon-cyan/20" />
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="glass-strong relative overflow-hidden rounded-3xl p-8 md:p-10">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-neon-magenta/30 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-neon-cyan/30 blur-3xl" />
                <span className="relative font-display text-5xl leading-none text-neon-magenta/70">“</span>
                <blockquote className="relative -mt-4 text-base leading-relaxed text-foreground/90 md:text-lg">
                  I believe technology creates its greatest value when it solves real-world
                  problems and improves the way people learn, work, and live. My mission is
                  to build innovative solutions that create meaningful impact for people,
                  businesses, and industries by making experiences more efficient, intuitive,
                  and user-centered.
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-gradient-to-r from-neon-magenta via-neon-purple to-neon-cyan" />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">
                    Prajwal K S
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
