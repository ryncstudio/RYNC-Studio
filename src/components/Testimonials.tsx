import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-32 relative overflow-hidden bg-background">
      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 text-primary font-mono text-sm tracking-widest uppercase font-bold"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-6xl mb-6"
          >
            Loved by <span className="text-primary">Clients.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Real words from the businesses we've helped grow.
          </motion.p>
        </div>

        {/* Single Testimonial — centered, prominent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-12 transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5">
            {/* Quote icon */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary">
                <Quote className="h-7 w-7" />
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center justify-center gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-foreground/90 text-base md:text-xl leading-relaxed mb-8 md:mb-10 text-center">
              "I'm very satisfied with Rync Studio's work! You went the extra mile and delivered more than I expected. The structure feels intentional, and the developer clearly understands how to balance visual appeal with usability. Great job! Highly recommended. 👏"
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-3 pt-8 border-t border-border/50">
              <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-lg">
                M
              </div>
              <div className="text-center">
                <h4 className="font-semibold text-foreground text-base md:text-lg leading-tight">
                  Maui Lee Alvarez
                </h4>
                <p className="text-muted-foreground text-sm mt-1 flex items-center justify-center gap-2">
                  <span>via Facebook</span>
                  <span className="text-primary">★</span>
                  <span>Recommends Rync Studio</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
