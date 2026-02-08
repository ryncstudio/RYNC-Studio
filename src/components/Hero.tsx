import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, MoveDown, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroAbstract from "@/assets/hero-abstract.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
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
            className="w-full h-full object-cover opacity-60 dark:opacity-40 scale-105"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent z-20" />
      </div>

      <div className="container relative z-30 px-6 pt-20 flex flex-col items-center text-center">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium tracking-wide uppercase text-foreground/80">Available for new projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-9xl tracking-tighter leading-[0.9] mb-8"
          >
            Engineering the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-violet-500 animate-gradient-x">
              Next Generation
            </span> <br/>
            of Digital Products.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10"
          >
            We help ambitious brands build high-performance websites, apps, and digital systems that scale with their vision. 
            <span className="block mt-2 text-foreground font-medium">Crafted in Cebu. Shipped Globally.</span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
              <Link href="/contact">Start a Project <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full backdrop-blur-sm bg-background/10 border-foreground/10 hover:bg-background/20 transition-all">
              <Link href="/work">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>


    </section>
  );
}
