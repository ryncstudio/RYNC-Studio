import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Mitchell",
    role: "Owner",
    company: "PawVita Pet Care",
    quote: "Working with Rync Studio was honestly the best decision I made for my business. They took my messy ideas and turned them into a beautiful, easy-to-navigate site. My customers actually comment on how professional it looks now. Sales have gone up, and I'm finally confident sending people to my website!",
  },
  {
    name: "Miguel Rodriguez",
    role: "Founder",
    company: "PorbEduAksyon",
    quote: "I needed a platform that could reach people in rural areas with slow internet. The team didn't just build something pretty—they made sure it loaded fast even on 3G connections. We've already helped over 2,000 students access courses they couldn't before. That's real impact.",
  },
  {
    name: "James Owen",
    role: "Managing Partner",
    company: "Owen & Associates",
    quote: "In the financial services industry, trust is everything. Rync Studio understood that from day one. They redesigned our entire digital presence to feel modern but still professional. Our client acquisition has increased by 60% in just three months. These guys know what they're doing.",
  },
  {
    name: "Kathryn Wilking",
    role: "Interior Designer",
    company: "Wilking Design Studio",
    quote: "As someone who works in design, I'm picky about everything. The Rync team really listened to my vision and executed it perfectly. My portfolio site now reflects the quality of my work, and I've landed three high-value residential projects directly from the website. Worth every penny.",
  },
];

export function Testimonials() {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useIsMobile();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: "-70% 0px -70% 0px"  // Cards stay stacked until you scroll deep into section (both directions)
  });

  // Auto-spread on mobile when in view
  const shouldSpread = isMobile ? isInView : isHovered;

  // Define exact transforms for each card matching the original
  const getCardTransform = (index: number) => {
    if (shouldSpread) {
      return "translateZ(0) translateY(0)";
    }

    switch (index) {
      case 0:
        return "translateZ(-75px) translateY(20px)";
      case 1:
        return "translateZ(0) translateY(0)";
      case 2:
        return "translateZ(65px) translateY(-30px)";
      case 3:
        return "translateZ(125px) translateY(-68px)";
      default:
        return "translateZ(0) translateY(0)";
    }
  };

  const getCardFilter = (index: number) => {
    // Disable blur on mobile for better text rendering
    if (isMobile) return "blur(0)";
    if (shouldSpread) return "blur(0)";

    switch (index) {
      case 0:
        return "blur(4px)";
      case 1:
        return "blur(2px)";
      case 2:
        return "blur(0)";
      case 3:
        return "blur(1px)";
      default:
        return "blur(0)";
    }
  };

  const getCardOpacity = (index: number) => {
    if (shouldSpread) return 1;

    switch (index) {
      case 0:
        return 0.6;
      case 1:
        return 0.8;
      default:
        return 1;
    }
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 relative overflow-hidden bg-background" ref={sectionRef}>
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-5xl mb-6"
            >
              Loved by <span className="text-primary">Businesses</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-muted-foreground"
            >
              See what our clients say about working with us.
            </motion.p>
          </div>

          {/* 3D Stacking Cards Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div
              className="relative"
              style={{
                perspective: "500px",
                perspectiveOrigin: "center center",
              }}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              <ul
                className="relative flex flex-col transition-all duration-500 ease-out"
                style={{
                  gap: shouldSpread ? "20px" : "0",
                  transformStyle: "preserve-3d",
                }}
              >
                {testimonials.map((testimonial, index) => {
                  return (
                    <li
                      key={index}
                      className="bg-card border border-border/50 rounded-xl p-5 md:p-6 transition-all duration-500 ease-out relative cursor-pointer w-full max-w-[520px]"
                      style={{
                        minHeight: "140px",
                        transformStyle: "preserve-3d",
                        WebkitTransformStyle: "preserve-3d",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        transform: getCardTransform(index),
                        WebkitTransform: getCardTransform(index),
                        filter: getCardFilter(index),
                        WebkitFilter: getCardFilter(index),
                        opacity: getCardOpacity(index),
                        transitionDelay: `${index * 50}ms`,
                        boxShadow: "0 0 12px rgba(0,0,0,0.12)",
                        willChange: "transform, filter, opacity",
                        ["--i" as any]: index + 1,
                      }}
                    >
                      {/* Quote Icon */}
                      <div className="flex items-start gap-3 mb-3">
                        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Quote className="h-4 w-4 text-primary" />
                        </div>
                      </div>

                      {/* Testimonial Quote */}
                      <blockquote className="text-foreground/90 text-sm leading-relaxed mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Author Info */}
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {testimonial.name}
                          </h3>
                          <p className="text-xs text-muted-foreground leading-tight opacity-60">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Hint Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: shouldSpread ? 0 : 1 }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-center text-sm text-muted-foreground transition-opacity duration-300 whitespace-nowrap"
            >
              {isMobile ? "Scroll to view all" : "Hover to view all"}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
