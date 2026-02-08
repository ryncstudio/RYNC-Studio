import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/Footer";
import { teamMembers } from "@/data/team";
import { Github, Linkedin, Twitter } from "lucide-react";
import { useRef } from "react";
import servicesHero from "@/assets/services-hero.jpg"; // Reuse services hero or generic abstract

export default function TeamPage() {
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
      <section className="relative h-[75vh] flex items-start justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={servicesHero} alt="Abstract Team Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1000px] text-center pt-40">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            Our Team
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
          >
            Meet the <span className="text-primary">Minds.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            The visionaries and builders behind RYNC Studio.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 relative">
        <div className="container px-6 max-w-[1400px]">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[3/4] mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="text-white/90 text-sm leading-relaxed translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {member.bio}
                    </p>
                    <div className="flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                      <a href={member.socials.linkedin} className="text-white hover:text-primary transition-colors"><Linkedin size={20} /></a>
                      {member.socials.twitter && <a href={member.socials.twitter} className="text-white hover:text-primary transition-colors"><Twitter size={20} /></a>}
                      {member.socials.github && <a href={member.socials.github} className="text-white hover:text-primary transition-colors"><Github size={20} /></a>}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display mb-1">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
