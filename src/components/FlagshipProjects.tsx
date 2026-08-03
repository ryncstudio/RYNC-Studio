import { motion } from "framer-motion";
import { Sparkles, MapPin, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FlagshipProject {
  title: string;
  tagline: string;
  category: string;
  icon: React.ElementType;
  gradient: string;
  glowColor: string;
  accentColor: string;
  features: string[];
}

const flagshipProjects: FlagshipProject[] = [
  {
    title: "Sugbo Ta!",
    tagline: "Your ultimate guide to exploring Cebu",
    category: "Travel & Tourism Platform",
    icon: MapPin,
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    glowColor: "rgba(20, 184, 166, 0.15)",
    accentColor: "text-emerald-400",
    features: ["Destination Discovery", "Local Experiences", "Trip Planning", "Community Reviews"],
  },
  {
    title: "SUKI",
    tagline: "The smarter way to shop local",
    category: "E-Commerce App",
    icon: ShoppingBag,
    gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
    glowColor: "rgba(139, 92, 246, 0.15)",
    accentColor: "text-violet-400",
    features: ["Local Marketplace", "Smart Discovery", "Secure Payments", "Seller Dashboard"],
  },
];

function FlagshipCard({ project, index }: { project: FlagshipProject; index: number }) {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-border/30 bg-card transition-all duration-700 hover:border-primary/20 hover:shadow-2xl"
        style={{ boxShadow: `0 0 80px ${project.glowColor}` }}
      >
        {/* Animated grain texture background */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Gradient accent top bar */}
        <div className={`h-1 w-full bg-gradient-to-r ${project.gradient}`} />

        <div className="relative z-10 p-8 md:p-12">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg`}>
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <Badge className="bg-white/10 dark:bg-white/5 text-foreground/70 hover:bg-white/15 border-border/30 text-[10px] font-mono tracking-wider uppercase mb-1">
                  {project.category}
                </Badge>
              </div>
            </div>

            {/* Coming Soon badge */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
              <Badge className="relative bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 px-4 py-1.5 text-xs font-semibold tracking-wide">
                <Sparkles className="h-3 w-3 mr-1.5" />
                Coming Soon
              </Badge>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-3xl md:text-5xl mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">
            {project.title}
          </h3>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-md">
            {project.tagline}
          </p>

          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
              <span className="font-mono tracking-wider uppercase">In Development</span>
              <span className={project.accentColor}>Building...</span>
            </div>
            <div className="h-1.5 w-full bg-border/30 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.15, duration: 1.5, ease: "easeOut" }}
                className={`h-full bg-gradient-to-r ${project.gradient} rounded-full relative`}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-md" />
              </motion.div>
            </div>
          </div>

          {/* Feature chips */}
          <div className="flex flex-wrap gap-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="px-3 py-1.5 rounded-full text-xs font-medium bg-foreground/5 text-muted-foreground border border-border/30 transition-colors duration-300 hover:border-primary/30 hover:text-foreground"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Large background text */}
        <div className="absolute -bottom-6 -right-4 opacity-[0.03] pointer-events-none select-none">
          <span className="font-display font-black text-[10rem] md:text-[14rem] leading-none whitespace-nowrap">
            {project.title}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function FlagshipProjects() {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-primary font-mono text-sm tracking-widest uppercase font-bold"
          >
            Flagship Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6"
          >
            What's <span className="text-primary">Next.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground"
          >
            Flagship products we're building from the ground up. Built by RYNC. Made for Cebu.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {flagshipProjects.map((project, i) => (
            <FlagshipCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
