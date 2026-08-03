import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Lightbulb, Monitor, Target, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import aboutHero from "@/assets/rync-about-hero.png";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Lightbulb,
    title: "Creative",
    description: "We turn ideas into original, compelling digital experiences.",
    className: "md:col-span-2 bg-gradient-to-br from-card to-primary/5",
  },
  {
    icon: Monitor,
    title: "Modern",
    description: "We embrace clean design and the latest technology.",
    className: "md:col-span-1 bg-card",
  },
  {
    icon: Target,
    title: "Strategic",
    description: "We think ahead and design with purpose and direction.",
    className: "md:col-span-1 bg-card",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "We deliver with consistency, quality, and integrity.",
    className: "md:col-span-2 bg-gradient-to-tr from-card to-accent/50",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ryncRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: ryncScroll } = useScroll({
    target: ryncRef,
    offset: ["start end", "center center"],
  });

  // Hero Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // RYNC Cinematic Text Reveal
  const letterY1 = useTransform(ryncScroll, [0, 1], [100, 0]);
  const letterY2 = useTransform(ryncScroll, [0.2, 1], [100, 0]);
  const letterY3 = useTransform(ryncScroll, [0.4, 1], [100, 0]);
  const letterY4 = useTransform(ryncScroll, [0.6, 1], [100, 0]);
  const wordOpacity = useTransform(ryncScroll, [0.8, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative flex items-start justify-center overflow-hidden pb-20 md:pb-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={aboutHero} alt="Abstract Architecture" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1400px] text-center md:text-left pt-32 md:pt-48 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-5xl leading-[1.1]"
          >
            Strategy, design, and <br className="hidden md:block" />
            <span className="text-primary font-light italic">elite engineering.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            RYNC Studio is a digital product team based in Cebu City. We help brands launch quickly—without sacrificing craft.
          </motion.p>
        </div>
      </section>

      {/* Brand Meaning Section - Cinematic Typography */}
      <section className="py-24 md:py-48 relative overflow-hidden" ref={ryncRef}>
        <div className="container px-6 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
            
            {/* The Acronym Reveal */}
            <div className="flex flex-col gap-2">
              <div className="overflow-hidden flex items-baseline gap-4">
                <motion.span style={{ y: letterY1 }} className="font-display font-black text-6xl md:text-8xl lg:text-[140px] leading-none text-primary">R</motion.span>
                <motion.span style={{ opacity: wordOpacity }} className="font-display text-2xl md:text-4xl text-muted-foreground">eimagine</motion.span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4">
                <motion.span style={{ y: letterY2 }} className="font-display font-black text-6xl md:text-8xl lg:text-[140px] leading-none text-primary">Y</motion.span>
                <motion.span style={{ opacity: wordOpacity }} className="font-display text-2xl md:text-4xl text-muted-foreground">our</motion.span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4">
                <motion.span style={{ y: letterY3 }} className="font-display font-black text-6xl md:text-8xl lg:text-[140px] leading-none text-primary">N</motion.span>
                <motion.span style={{ opacity: wordOpacity }} className="font-display text-2xl md:text-4xl text-muted-foreground">ext</motion.span>
              </div>
              <div className="overflow-hidden flex items-baseline gap-4">
                <motion.span style={{ y: letterY4 }} className="font-display font-black text-6xl md:text-8xl lg:text-[140px] leading-none text-primary">C</motion.span>
                <motion.span style={{ opacity: wordOpacity }} className="font-display text-2xl md:text-4xl text-muted-foreground">reation</motion.span>
              </div>
            </div>

            <motion.div
              style={{ opacity: wordOpacity }}
              className="max-w-md relative p-8 md:p-12 rounded-[2rem] bg-card border border-border/50 shadow-2xl"
            >
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-40 h-40 bg-primary/20 blur-[50px] rounded-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-40 h-40 bg-purple-500/20 blur-[50px] rounded-full pointer-events-none" />

              <h3 className="text-xl font-bold mb-4 font-mono uppercase tracking-widest text-muted-foreground">Our Tagline</h3>
              <p className="text-2xl md:text-3xl leading-relaxed font-light text-foreground relative z-10">
                "It’s our reminder to question defaults, design intentionally, and build with momentum."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Immersive Dark Section */}
      <section className="relative py-24 md:py-48 bg-[#050505] text-white overflow-hidden">
        {/* Floating Ambient Orbs */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

        <div className="container px-6 relative z-10 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-widest uppercase border border-white/20 backdrop-blur-md">
                Our Vision
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.1] text-white">
                To help teams everywhere build digital products that feel effortless.
              </h2>
              <p className="text-xl text-white/60 leading-relaxed font-light max-w-lg">
                We envision a web where elite performance and stunning aesthetics coexist without compromise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 lg:pt-20"
            >
              <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-semibold tracking-widest uppercase border border-white/20 backdrop-blur-md">
                Our Mission
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 leading-tight text-white/90">
                We partner with ambitious brands to design and engineer high‑performance digital products through:
              </h2>

              <ul className="space-y-8">
                {[
                  "Clear strategy and honest collaboration",
                  "Human‑centered design and strong visual systems",
                  "Modern engineering practices that scale"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <div className="mt-1 h-8 w-8 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-500">
                      <ArrowRight className="h-4 w-4 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-lg sm:text-2xl text-white/80 group-hover:text-white transition-colors duration-500 font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values - Bento Box */}
      <section className="py-24 md:py-40">
        <div className="container px-6 max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="font-display font-bold text-4xl md:text-6xl mb-6">Core Values</h2>
            <p className="text-xl md:text-2xl text-muted-foreground">The principles that guide our decisions, define our culture, and shape our code.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "group relative p-8 md:p-12 rounded-[2rem] border border-border/50 hover:border-primary/30 transition-all duration-500 overflow-hidden",
                  value.className
                )}
              >
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-12 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 border border-white/5">
                    <value.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{value.title}</h3>
                    <p className="text-muted-foreground md:text-lg leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
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
