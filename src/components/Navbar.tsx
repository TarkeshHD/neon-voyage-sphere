import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#hero" className="font-display text-xl font-bold text-gradient">
          PRAJWAL.XR
        </a>
        <ul className="hidden gap-1 md:flex">
          {links.map((l) => {
            const id = l.href.slice(1);
            const isActive = active === id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navpill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple/30 to-neon-cyan/30 glow-purple"
                      transition={{ type: "spring", stiffness: 300, damping: 28 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="flex flex-col gap-1 px-6 pb-4 md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
