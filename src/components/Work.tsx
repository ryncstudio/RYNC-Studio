import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { projects } from "@/data/projects";
import { Link } from "wouter";

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

export function Work() {
  // Only show first 3 projects on homepage
  const displayedProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-16 md:py-32 bg-background">
      <div className="container px-6 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-4 md:mb-6">Selected <span className="text-primary">Work.</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground">Digital experiences that define categories.</p>
          </div>
          
          <Button asChild variant="ghost" className="rounded-full text-lg group hidden md:inline-flex">
            <Link href="/work">
              View All Projects 
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <div className="flex flex-col gap-8 md:gap-12 pb-12 md:pb-24">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
        
        {/* Mobile Button and Extra Center Button */}
        <div className="flex justify-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base md:text-lg border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all">
            <Link href="/work">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
