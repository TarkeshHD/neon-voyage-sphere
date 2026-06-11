import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Particles from "@/components/Particles";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prajwal K S · Unity XR Developer & VR Simulation Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Prajwal K S — Unity XR Developer building immersive enterprise VR/MR training worlds with Unity, C# and Meta XR SDKs.",
      },
      { property: "og:title", content: "Prajwal K S · Unity XR Developer" },
      {
        property: "og:description",
        content: "Immersive VR/MR training, XR simulations and scalable Unity XR workflows.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Particles />
      <Navbar />
      <Hero />
      <Profile />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
