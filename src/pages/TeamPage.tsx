import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/Footer";
import { teamMembers } from "@/data/team";
import { Github, Linkedin, Facebook } from "lucide-react";
import { useRef, useState } from "react";
import servicesHero from "@/assets/services-hero.jpg";

const CATEGORIES = ["All", "Founders", "Marketing", "Engineering"] as const;
type Category = typeof CATEGORIES[number];

export default function TeamPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const filtered = activeCategory === "All"
    ? teamMembers
    : teamMembers.filter((m) => m.category === activeCategory);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative flex items-start justify-center overflow-hidden pb-16 md:pb-28">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={servicesHero} alt="Abstract Team Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1400px] text-center md:text-left pt-32 md:pt-48 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-5xl leading-[1.1]"
          >
            Meet the <span className="text-primary font-light italic">minds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            The visionaries and builders behind RYNC Studio.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 md:py-20 relative">
        <div className="container px-4 md:px-6 max-w-[1400px]">

          {/* Filter Tabs — scrollable on very small screens */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-10"
          >
            <div className="flex items-center gap-1 bg-muted/50 border border-border rounded-full px-1.5 py-1.5 overflow-x-auto max-w-full">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 whitespace-nowrap ${activeCategory === cat
                    ? "text-primary-foreground dark:text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute inset-0 bg-foreground rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Members Grid: 1 col → 2 col (sm) → 3 col (lg) → 4 col (xl) */}
          <motion.div layout className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((member, i) => (
                <motion.div
                  key={member.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: i * 0.05 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-[3/4] mb-3 md:mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4 md:p-6">
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {member.bio}
                      </p>
                      <div className="flex gap-3 mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors"><Linkedin size={18} /></a>
                        {'facebook' in member.socials && member.socials.facebook && <a href={member.socials.facebook as string} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors"><Facebook size={18} /></a>}
                        {'github' in member.socials && member.socials.github && <a href={member.socials.github as string} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors"><Github size={18} /></a>}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-base md:text-xl font-bold font-display mb-0.5 leading-tight">{member.name}</h3>
                  <p className="text-primary font-medium text-xs md:text-sm">{member.role}</p>
                  <span className="inline-block mt-1.5 px-2 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    {member.category}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
