import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import workHero from "@/assets/work-hero.jpg";
import { projects } from "@/data/projects";
import { Footer } from "@/components/Footer";

function ProjectCard({ project, i }: { project: typeof projects[0], i: number }) {
  const ref = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: isMobile ? 1 : scale }}
      className={`group h-[500px] md:h-[600px] ${!isMobile ? "sticky top-32" : ""}`}
    >
      <div className="relative w-full h-full overflow-hidden rounded-2xl md:rounded-[2rem] shadow-2xl bg-card">
        {/* Full Background Image */}
        <div className="absolute inset-0">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Gradient Overlay for Text Visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-90" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-end items-start z-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 mb-3 md:mb-4"
          >
            <span className="h-px w-6 md:w-8 bg-primary" />
            <span className="text-primary font-mono text-xs md:text-sm tracking-widest uppercase font-bold">{project.category}</span>
          </motion.div>
          
          <h3 className="font-display font-bold text-3xl md:text-5xl mb-3 md:mb-4 text-white leading-tight">
            {project.title}
          </h3>
          
          <p className="text-base md:text-lg text-white/80 mb-6 md:mb-8 max-w-xl leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-3 items-center justify-between w-full">
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="rounded-full px-3 md:px-4 py-1 text-xs md:text-sm font-normal bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <Button size="lg" className="rounded-full h-10 md:h-12 px-5 md:px-6 bg-white text-black hover:bg-white/90 border-none transition-all group/btn text-sm md:text-base">
              View Case Study 
              <ArrowUpRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WorkPage() {
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
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={workHero} alt="Abstract Workspace" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1000px] text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            Selected Work
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
          >
            Digital experiences that define categories.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            A curated selection of our most impactful work across fintech, commerce, and enterprise software.
          </motion.p>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container px-6 w-full max-w-[1400px] mx-auto">
          <div className="flex flex-col gap-16 md:gap-32 pb-16 md:pb-32">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} i={i} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
