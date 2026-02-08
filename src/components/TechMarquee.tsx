import { motion } from "framer-motion";
import { 
  Code2, Cpu, Globe, Database, Smartphone, Cloud, 
  Zap, Shield, Layers, Box, Terminal, Command 
} from "lucide-react";

const techs = [
  { icon: Code2, name: "React" },
  { icon: Globe, name: "Next.js" },
  { icon: Database, name: "PostgreSQL" },
  { icon: Smartphone, name: "React Native" },
  { icon: Cloud, name: "AWS" },
  { icon: Cpu, name: "TypeScript" },
  { icon: Zap, name: "Vite" },
  { icon: Shield, name: "Auth0" },
  { icon: Layers, name: "Framer Motion" },
  { icon: Box, name: "Three.js" },
  { icon: Terminal, name: "Node.js" },
  { icon: Command, name: "GraphQL" },
];

export function TechMarquee() {
  return (
    <div className="py-10 bg-background border-y border-border/40 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex">
        <motion.div 
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-16 pr-16 whitespace-nowrap"
        >
          {[...techs, ...techs].map((tech, i) => (
            <div key={i} className="flex items-center gap-3 text-muted-foreground/60 hover:text-primary transition-colors cursor-default">
              <tech.icon className="h-6 w-6" />
              <span className="font-display font-semibold text-xl tracking-tight">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
