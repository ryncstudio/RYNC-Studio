import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/TechMarquee";
import { Services } from "@/components/Services";
import { Pricing } from "@/components/Pricing";
import { Process } from "@/components/Process";
import { Work } from "@/components/Work";
import { AboutSummary } from "@/components/AboutSummary";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

interface HomeProps {
  targetSection?: string;
}

export default function Home({ targetSection }: HomeProps) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (targetSection) {
      setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [targetSection]);

  return (
    <div className="bg-background min-h-screen selection:bg-primary selection:text-primary-foreground">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-violet-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navbar is now handled globally in App.tsx */}

      <main>
        <Hero />
        <TechMarquee />
        <Services />
        <Process />
        <Work />
        <AboutSummary />
        <Team />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
