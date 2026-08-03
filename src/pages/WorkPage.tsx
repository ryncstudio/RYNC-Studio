import { motion, useScroll, useTransform } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import workHero from "@/assets/work-hero.jpg";
import { projects } from "@/data/projects";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";

function ProjectCard({
  project,
  i,
}: {
  project: (typeof projects)[0];
  i: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08, duration: 0.5 }}
      className="group"
    >
      <Link href={`/work/${project.slug}`}>
        <div className="h-full bg-card border border-border/50 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
          {/* Image */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating category badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/95 dark:bg-black/80 text-foreground hover:bg-white dark:hover:bg-black px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                {project.category}
              </Badge>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div className="bg-white/95 dark:bg-black/80 rounded-full p-2 shadow-lg backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-colors">
                  <ExternalLink className="h-4 w-4 text-foreground" />
                </div>
              </a>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3 className="font-display font-bold text-xl md:text-2xl mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5 line-clamp-2">
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="rounded-full px-3 py-1 text-xs font-normal border-border/80"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                View
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function WorkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.15], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative flex items-start justify-center overflow-hidden pb-16 md:pb-24">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img
            src={workHero}
            alt="Abstract Workspace"
            className="w-full h-full object-cover opacity-30 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1400px] text-center md:text-left pt-32 md:pt-48 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-5xl leading-[1.1]"
          >
            Our <span className="text-primary font-light italic">work.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            A curated selection of our most impactful work across creative arts, commerce, and enterprise software.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container px-4 md:px-6 w-full max-w-[1400px] mx-auto">
          {/* All projects in uniform grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} i={i} />
            ))}
          </div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 md:mt-28 pt-12 border-t border-border/50"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  7+
                </p>
                <p className="text-sm text-muted-foreground">
                  Projects Delivered
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  5+
                </p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  98%
                </p>
                <p className="text-sm text-muted-foreground">
                  Client Satisfaction
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-3xl md:text-4xl text-foreground mb-1">
                  2+
                </p>
                <p className="text-sm text-muted-foreground">
                  Years Building
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
