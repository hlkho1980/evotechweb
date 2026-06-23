// app/page.tsx

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";
import HeroDashboard from "./HeroDashboard";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030712] text-white">
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}