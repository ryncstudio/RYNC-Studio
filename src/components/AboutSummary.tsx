import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import aboutHero from "@/assets/about-hero.jpg";

export function AboutSummary() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Image with Overlay - ensure sufficient contrast in all modes */}
      <div className="absolute inset-0 z-0">
        {/* Dark mode opacity reduced, light mode opacity reduced to avoid visual noise */}
        <img src={aboutHero} alt="About Background" className="w-full h-full object-cover opacity-10 dark:opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
      </div>

      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-primary font-mono text-sm tracking-widest uppercase font-bold mb-4 block">Who We Are</span>
              <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground">
                We blend strategy, <br />
                <span className="text-primary">design,</span> and <br />
                engineering.
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              RYNC Studio is a digital product engineering team based in Cebu City. We help brands launch quickly—without sacrificing craft or performance.
            </p>

            <Button asChild size="lg" className="rounded-full h-12 px-8 text-base shadow-md">
              <Link href="/about">
                Read Our Story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative hidden md:block h-[500px] rounded-3xl overflow-hidden border border-border/50 shadow-2xl"
          >
            <img src={aboutHero} alt="RYNC Studio Abstract" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
