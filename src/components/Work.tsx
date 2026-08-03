import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/projects";
import { Link } from "wouter";

function ProjectCard({ project, i }: { project: typeof projects[0], i: number }) {
  const isFlagship = project.isFlagship;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      className={`group ${isFlagship ? "md:col-span-2" : ""}`}
    >
      <Link href={`/work/${project.slug}`}>
        <div className={`h-full bg-card border rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-1 ${isFlagship ? "border-primary/40 hover:shadow-2xl hover:shadow-primary/20 bg-gradient-to-br from-card to-primary/5" : "border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"}`}>
          {/* Image */}
          <div className={`relative ${isFlagship ? "aspect-video" : "aspect-[16/10]"} overflow-hidden bg-muted/20 flex items-center justify-center`}>
            {project.image === "coming-soon" ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-black/80 to-background">
                <Sparkles className="w-12 h-12 text-primary mb-4 opacity-50 animate-pulse" />
                <span className="font-display font-bold text-2xl md:text-4xl text-white/50 tracking-widest uppercase">Coming Soon</span>
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Floating category badge */}
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className="bg-white/95 dark:bg-black/80 text-foreground hover:bg-white dark:hover:bg-black px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                {project.category}
              </Badge>
              {isFlagship && (
                <Badge className="bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg">
                  <Sparkles className="w-3 h-3 mr-1" />
                  RYNC Original
                </Badge>
              )}
            </div>

            {project.url && (
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/95 dark:bg-black/80 rounded-full p-2 shadow-lg backdrop-blur-sm">
                  <ExternalLink className="h-4 w-4 text-foreground" />
                </div>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3 className={`font-display font-bold ${isFlagship ? "text-2xl md:text-4xl mb-4" : "text-xl md:text-2xl mb-3"} leading-tight group-hover:text-primary transition-colors duration-300`}>
              {project.title}
            </h3>

            <p className={`text-muted-foreground ${isFlagship ? "text-base md:text-lg mb-6 max-w-2xl" : "text-sm md:text-base mb-5 line-clamp-2"} leading-relaxed`}>
              {project.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="outline" className={`rounded-full px-3 py-1 text-xs font-normal ${isFlagship ? "border-primary/30 text-primary" : "border-border/80"}`}>
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

export function Work() {
  const displayedProjects = projects;

  return (
    <section id="work" className="py-16 md:py-32 bg-background">
      <div className="container px-6 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-primary font-mono text-sm tracking-widest uppercase font-bold"
            >
              Portfolio
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-6xl mb-4 md:mb-6"
            >
              Selected <span className="text-primary">Work.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground"
            >
              Digital experiences crafted to make an impact.
            </motion.p>
          </div>

          <Button asChild variant="ghost" className="rounded-full text-lg group hidden md:inline-flex">
            <Link href="/work">
              View All Projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 md:mt-16">
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
