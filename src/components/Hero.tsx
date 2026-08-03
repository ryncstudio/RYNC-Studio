import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-32 md:pb-40">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/30 z-10" />
        <motion.div
          style={{ y, opacity }}
          className="w-full h-[120%] -top-[10%] absolute"
        >
          <img
            src={heroBg}
            alt="Abstract Digital Landscape"
            className="w-full h-full object-cover opacity-30 dark:opacity-20 scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20 z-20" />
      </div>

      <div className="container relative z-30 px-6 max-w-[1400px]">
        <div className="text-center md:text-left">
          
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-8 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            RYNC Studio
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] tracking-tight md:tracking-tighter leading-[1.05] md:leading-[1.0] mb-8 max-w-6xl"
          >
            Digital product <br className="hidden md:block" />
            engineering <br className="hidden md:block" />
            <span className="text-primary font-light italic">without compromise.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10 mx-auto md:mx-0"
          >
            We help ambitious brands build high-performance websites, apps, and digital systems that scale with their vision.
            <span className="block mt-4 text-foreground font-medium">Crafted in Cebu. Shipped Globally.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all font-semibold">
              <Link href="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full backdrop-blur-md bg-background/30 border-border/50 hover:bg-accent/50 transition-all font-semibold">
              <Link href="/work">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Sleek Bottom Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-full z-40 border-t border-border/50 bg-background/40 backdrop-blur-xl"
      >
        <div className="container px-6 max-w-[1400px]">
          <div className="flex flex-col sm:flex-row justify-between items-center py-6 md:py-8 gap-6 sm:gap-0">
            {[
              { value: "5+", label: "Projects Shipped" },
              { value: "5+", label: "Happy Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "2+", label: "Years Building" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex flex-col md:flex-row items-center gap-3 w-full sm:w-auto border-b sm:border-b-0 border-border/30 pb-4 sm:pb-0 last:border-0 last:pb-0">
                <span className="font-display font-bold text-3xl md:text-4xl text-foreground">{stat.value}</span>
                <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider md:w-24 leading-tight text-center md:text-left">
                  {stat.label}
                </span>
                {/* Separator for desktop */}
                {i < 3 && <div className="hidden sm:block h-12 w-px bg-border/50 mx-4 lg:mx-10" />}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}
