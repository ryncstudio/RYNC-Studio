import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { teamMembers } from "@/data/team";

export function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Meet the <span className="text-primary">Minds.</span></h2>
            <p className="text-lg md:text-xl text-muted-foreground">The visionaries and builders behind RYNC Studio.</p>
          </div>
          
          <Button asChild variant="ghost" className="rounded-full text-lg group hidden md:inline-flex">
            <Link href="/team">
              Meet Everyone 
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.slice(0, 4).map((member, i) => (
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
        
        <div className="flex justify-center md:hidden mt-12">
          <Button asChild variant="outline" className="rounded-full w-full">
            <Link href="/team">Meet Everyone</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
