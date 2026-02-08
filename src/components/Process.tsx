import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Map, Palette, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery",
    icon: Search,
    description: "We dive deep into your business goals, target audience, and technical requirements to build a solid foundation. This is where we listen, question, and understand your unique value proposition.",
    details: ["Stakeholder Interviews", "Market Analysis", "Technical Feasibility", "User Personas"]
  },
  {
    id: "02",
    title: "Strategy",
    icon: Map,
    description: "We craft a tailored roadmap and digital strategy to ensure every feature serves a clear purpose. We define the site structure, user flows, and content strategy.",
    details: ["Information Architecture", "Wireframing", "Content Strategy", "Tech Stack Selection"]
  },
  {
    id: "03",
    title: "Design",
    icon: Palette,
    description: "Our designers create stunning, intuitive interfaces that align with your brand identity. We iterate on high-fidelity mockups until every pixel communicates your brand's story perfectly.",
    details: ["UI Design System", "High-fidelity Prototypes", "Interaction Design", "Accessibility Check"]
  },
  {
    id: "04",
    title: "Development",
    icon: Code2,
    description: "We build your product using modern, scalable technologies. Our code is clean, documented, and optimized for performance, ensuring your site loads fast and ranks well.",
    details: ["Frontend Engineering", "CMS Integration", "Performance Optimization", "SEO Implementation"]
  },
  {
    id: "05",
    title: "Launch",
    icon: Rocket,
    description: "We handle the deployment, testing, and final polish to ensure a flawless go-live experience. We don't just launch and leave; we ensure you're ready to manage your new digital asset.",
    details: ["QA Testing", "Deployment", "Analytics Setup", "Client Training"]
  }
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 w-full max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Our <span className="text-primary">Process.</span></h2>
            <p className="text-xl text-muted-foreground">From concept to launch, we follow a proven workflow to deliver excellence.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Steps List */}
          <div className="flex flex-col gap-4 relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-border/50 hidden md:block" />
            
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={cn(
                  "group relative pl-0 md:pl-16 cursor-pointer transition-all duration-300 rounded-xl p-4 md:p-6",
                  activeStep === i ? "bg-accent/50" : "hover:bg-accent/20"
                )}
                onClick={() => setActiveStep(i)}
              >
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 transition-all duration-300 z-10 hidden md:block",
                  activeStep === i 
                    ? "bg-primary border-primary scale-125 shadow-[0_0_0_4px_rgba(var(--primary),0.2)]" 
                    : "bg-background border-muted-foreground/30 group-hover:border-primary/50"
                )} />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={cn(
                      "font-mono text-sm font-bold tracking-wider transition-colors duration-300",
                      activeStep === i ? "text-primary" : "text-muted-foreground/50"
                    )}>
                      {step.id}
                    </span>
                    <h3 className={cn(
                      "font-display text-2xl font-bold transition-colors duration-300",
                      activeStep === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                  
                  {activeStep === i && (
                    <motion.div layoutId="active-arrow" className="text-primary hidden md:block">
                      <step.icon className="h-5 w-5" />
                    </motion.div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Content */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  {(() => {
                    const Icon = steps[activeStep].icon;
                    return <Icon className="w-64 h-64" />;
                  })()}
                </div>

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    {(() => {
                      const Icon = steps[activeStep].icon;
                      return <Icon className="h-7 w-7 text-primary" />;
                    })()}
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl md:text-4xl mb-6">{steps[activeStep].title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                    {steps[activeStep].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Key Deliverables</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {steps[activeStep].details.map((detail) => (
                        <div key={detail} className="flex items-center gap-3 text-foreground/80">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
