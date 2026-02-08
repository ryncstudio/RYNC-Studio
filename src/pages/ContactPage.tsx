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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={contactHero} alt="Abstract Communication Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1000px] text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            Get in Touch
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
          >
            Let's start a <span className="text-primary">conversation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
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
