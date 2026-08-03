import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/Footer";
import contactHero from "@/assets/contact-hero.jpg";
import { Contact } from "@/components/Contact";
import { useRef } from "react";

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative flex items-start justify-center overflow-hidden pb-20 md:pb-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={contactHero} alt="Abstract Communication Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1400px] text-center md:text-left pt-32 md:pt-48 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-5xl leading-[1.1]"
          >
            Let's start a <br className="hidden md:block" />
            <span className="text-primary font-light italic">conversation.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            Whether you have a project in mind or just want to say hello, we're ready to listen.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section 
          - Removed negative margin to fix overlap
          - Passed showHeadings={false} to remove redundant text
      */}
      <div className="pb-24">
        <Contact showHeadings={false} />
      </div>

      <Footer />
    </div>
  );
}
