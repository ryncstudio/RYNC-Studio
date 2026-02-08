import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lightbulb, PenTool, Rocket, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import aboutHero from "@/assets/about-hero.jpg";
import aboutVision from "@/assets/about-vision.jpg";
import { useRef } from "react";

const values = [
  {
    icon: Lightbulb,
    title: "Clarity over complexity",
    description: "Simple beats clever. We strip away the non-essential to focus on what matters.",
  },
  {
    icon: PenTool,
    title: "Craft + Performance",
    description: "Design and engineering are inseparable. We care about how it looks and how it runs.",
  },
  {
    icon: Rocket,
    title: "Momentum",
    description: "Ship, learn, improve. We believe in getting real products into real hands fast.",
  },
  {
    icon: ShieldCheck,
    title: "Ownership",
    description: "We treat your product like our own. Your success is our reputation.",
  },
];

export default function About() {
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
          <img src={aboutHero} alt="Abstract Architecture" className="w-full h-full object-cover opacity-30 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1000px] text-center pt-40">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            About RYNC.
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
          >
            We blend strategy, design, and engineering.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            RYNC Studio is a digital product engineering team based in Cebu City. We help brands launch quickly—without sacrificing craft.
          </motion.p>
        </div>
      </section>

      {/* Brand Meaning Section - Large Typography */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="container px-6 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-4">
              {["Reimagine", "Your", "Next", "Creation"].map((word, i) => (
                <motion.div
                  key={word}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-8xl md:text-9xl font-display font-black text-primary/10 tracking-tighter leading-[0.8]">
                    {word[0]}
                  </span>
                  <span className="text-4xl md:text-6xl font-bold tracking-tight">
                    {word.slice(1)}<span className="text-primary">.</span>
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 md:p-16 rounded-3xl bg-muted/30 border border-border/50 backdrop-blur-sm"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 bg-purple-500/20 blur-3xl rounded-full" />

              <h3 className="text-3xl font-bold mb-6">Our Tagline</h3>
              <p className="text-2xl md:text-3xl leading-relaxed font-light text-muted-foreground">
                "It’s our reminder to question defaults, design intentionally, and build with momentum."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Dark/Immersive Section */}
      {/* Force dark mode style regardless of theme for this specific immersive section */}
      <section className="relative py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={aboutVision} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container px-6 relative z-10 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-primary font-medium tracking-wider uppercase">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                To help teams everywhere build digital products that feel effortless—beautiful, fast, and built to last.
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                We envision a web where performance and aesthetics coexist without compromise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8 lg:pt-16"
            >
              <span className="text-primary font-medium tracking-wider uppercase">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                We partner with ambitious brands to design and engineer high‑performance digital products through:
              </h2>

              <ul className="space-y-6">
                {[
                  "Clear strategy and honest collaboration",
                  "Human‑centered design and strong visual systems",
                  "Modern engineering practices that scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full border border-primary/50 flex items-center justify-center shrink-0">
                      <ArrowRight className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-xl text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32">
        <div className="container px-6 max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Core Values</h2>
            <p className="text-xl text-muted-foreground">The principles that guide our decisions and define our culture.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-card hover:shadow-xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <value.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Process />
      <Testimonials />

      <Footer />
    </div>
  );
}
