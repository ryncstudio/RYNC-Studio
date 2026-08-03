import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Map, Palette, Code2, ClipboardCheck, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Consultation",
    icon: Search,
    description: "Understand goals, needs, target users, and project direction. We sit down with you to learn everything about your business and what you want to achieve online.",
    details: ["Stakeholder Interviews", "Goal Setting", "Target Audience Research", "Project Direction"]
  },
  {
    id: "02",
    title: "Strategy & Planning",
    icon: Map,
    description: "Define scope, structure, priorities, and the best solution path. We map out exactly what needs to be built, how it should work, and the timeline to get there.",
    details: ["Scope Definition", "Site Structure", "Priority Mapping", "Solution Roadmap"]
  },
  {
    id: "03",
    title: "Design & Prototyping",
    icon: Palette,
    description: "Create visual direction, user flow, and design systems. We design how everything looks and feels before any code is written — so you can see it and approve it first.",
    details: ["Visual Direction", "User Flow Design", "Design Systems", "Interactive Prototypes"]
  },
  {
    id: "04",
    title: "Development & Production",
    icon: Code2,
    description: "Build, integrate, and prepare the final digital solution. Our developers bring the approved designs to life with clean, fast, and reliable code.",
    details: ["Frontend Engineering", "Backend Integration", "Performance Optimization", "Responsive Build"]
  },
  {
    id: "05",
    title: "Review & Refinement",
    icon: ClipboardCheck,
    description: "Test, improve, and align the output with project requirements. We go through everything together — fixing issues, polishing details, and making sure it's exactly what you need.",
    details: ["Quality Assurance Testing", "Client Review Sessions", "Bug Fixes & Polish", "Requirement Alignment"]
  },
  {
    id: "06",
    title: "Launch & Support",
    icon: Rocket,
    description: "Deliver, launch, and provide ongoing guidance or support when needed. We handle the go-live process and make sure everything runs smoothly after launch.",
    details: ["Deployment & Go-Live", "Analytics Setup", "Client Training", "Ongoing Support"]
  }
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-16 md:py-32 bg-background relative overflow-hidden">
      <div className="container px-6 w-full max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-3xl md:text-5xl mb-4 md:mb-6">Our <span className="text-primary">Process.</span></h2>
            <p className="text-base md:text-xl text-muted-foreground">From concept to launch, we follow a proven 6-step workflow to deliver excellence.</p>
          </div>
        </div>

        {/* Mobile: Accordion-style list */}
        <div className="lg:hidden space-y-3">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  activeStep === i
                    ? "bg-card border-primary/30 shadow-lg"
                    : "bg-card/50 border-border/50"
                )}
              >
                <button
                  onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                  className="w-full flex items-center gap-3 p-4 text-left"
                >
                  <div className={cn(
                    "h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                    activeStep === i ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"
                  )}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-mono text-xs font-bold text-muted-foreground">{step.id}</span>
                    <h3 className="font-display font-bold text-base leading-tight">{step.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeStep === i ? 180 : 0 }}
                    className="text-muted-foreground shrink-0"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeStep === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1">
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="space-y-2">
                          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Key Deliverables</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {step.details.map((detail) => (
                              <div key={detail} className="flex items-center gap-2 text-foreground/80 text-sm">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: Split layout with timeline */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Steps List */}
          <div className="flex flex-col gap-3 relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-border/50" />
            
            {steps.map((step, i) => (
              <div 
                key={step.id} 
                className={cn(
                  "group relative cursor-pointer transition-all duration-300 rounded-xl py-5 pr-5 pl-16",
                  activeStep === i ? "bg-accent/50" : "hover:bg-accent/20"
                )}
                onClick={() => setActiveStep(i)}
              >
                {/* Timeline Dot */}
                <div className={cn(
                  "absolute left-6 top-1/2 -translate-y-1/2 -translate-x-1/2 h-3 w-3 rounded-full border-2 transition-all duration-300 z-10",
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
                      "font-display text-xl font-bold transition-colors duration-300",
                      activeStep === i ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                    )}>
                      {step.title}
                    </h3>
                  </div>
                  
                  {activeStep === i && (
                    <motion.div layoutId="active-arrow" className="text-primary">
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
                key={activeStep === -1 ? 0 : activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-card border border-border/50 rounded-3xl p-12 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                  {(() => {
                    const Icon = steps[activeStep === -1 ? 0 : activeStep].icon;
                    return <Icon className="w-64 h-64" />;
                  })()}
                </div>

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    {(() => {
                      const Icon = steps[activeStep === -1 ? 0 : activeStep].icon;
                      return <Icon className="h-7 w-7 text-primary" />;
                    })()}
                  </div>
                  
                  <h3 className="font-display font-bold text-4xl mb-6">{steps[activeStep === -1 ? 0 : activeStep].title}</h3>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                    {steps[activeStep === -1 ? 0 : activeStep].description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Key Deliverables</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {steps[activeStep === -1 ? 0 : activeStep].details.map((detail) => (
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

