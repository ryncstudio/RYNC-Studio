import { motion, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, Palette, Video, Layers, Share2, CheckCircle2 } from "lucide-react";
import { Footer } from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceUiUx from "@/assets/service-uiux.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "web",
    icon: Monitor,
    title: "Web & Software Development",
    description: "Modern websites and custom digital solutions built with cutting-edge technology. Scalable, secure, and performance-driven.",
    longDescription: "We build pixel-perfect, high-performance web applications that drive business growth. From static sites to complex SaaS platforms, our engineering ensures speed, security, and scalability.",
    features: ["Next.js & React Applications", "Custom CMS & E-commerce", "API Integration & Cloud Architecture", "Performance Optimization"],
    image: serviceWeb,
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform iOS & Android applications designed for performance and scale.",
    longDescription: "Extend your reach with powerful mobile experiences. We develop native and cross-platform apps that feel fluid, intuitive, and responsive on every device.",
    features: ["React Native & Flutter", "iOS & Android Development", "App Store Optimization", "Offline-first Architecture"],
    image: serviceMobile,
    color: "from-violet-500/20 to-indigo-500/20"
  },
  {
    id: "uiux",
    icon: Layers,
    title: "UI/UX Design",
    description: "Interfaces designed around real users. Intentional, intuitive, impactful.",
    longDescription: "We don't just design screens; we craft user journeys. Our human-centered design approach ensures your product is not only beautiful but also intuitive and conversion-focused.",
    features: ["User Research & Prototyping", "Wireframing & User Flows", "Design Systems", "Usability Testing"],
    image: serviceUiUx,
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "brand",
    icon: Palette,
    title: "Brand Identity",
    description: "Visual systems designed for clarity and consistency.",
    longDescription: "A brand is more than a logo. We build comprehensive visual identity systems that communicate your values and distinguish you in the market across all touchpoints.",
    features: ["Logo Design & Typography", "Color Palettes & Visual Assets", "Brand Guidelines", "Marketing Collateral"],
    image: serviceBrand,
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: "motion",
    icon: Video,
    title: "Motion Content",
    description: "Dynamic storytelling for the digital age.",
    longDescription: "Bring your brand to life with motion. We create engaging animations and video content that explain complex ideas, delight users, and elevate your digital presence.",
    features: ["2D/3D Animation", "Explainer Videos", "Micro-interactions", "Social Media Motion Graphics"],
    image: serviceMotion,
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Visual Design",
    description: "Engaging social content and campaigns that stop the scroll.",
    longDescription: "Stand out in the feed. We design eye-catching social media assets and campaigns that capture attention, drive engagement, and build community around your brand.",
    features: ["Campaign Creative Direction", "Social Feed Curation", "Story & Reel Templates", "Ad Creative Production"],
    image: serviceSocial,
    color: "from-cyan-500/20 to-blue-500/20"
  }
];

export default function ServicesPage() {
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
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={servicesHero} alt="Abstract Ecosystem" className="w-full h-full object-cover opacity-30 dark:opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1000px] text-center">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium tracking-wide uppercase"
          >
            Our Services
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-7xl lg:text-8xl tracking-tighter mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50"
          >
            Comprehensive <span className="text-primary">solutions.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
          >
            From concept to code, we partner end‑to‑end—so your product looks sharp, works fast, and scales confidently.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-24 relative">
        <div className="container px-6 max-w-[1400px]">
          <div className="space-y-32">
            {services.map((service, i) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid lg:grid-cols-2 gap-12 lg:gap-24 items-center",
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                )}
              >
                {/* Content Side */}
                <div className={cn(i % 2 === 1 ? "lg:col-start-2" : "")}>
                  <div className={cn("inline-flex p-3 rounded-xl mb-6 bg-gradient-to-br", service.color)}>
                    <service.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{service.title}</h2>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    {service.longDescription}
                  </p>
                  
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground/80 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side */}
                <div className={cn(i % 2 === 1 ? "lg:col-start-1" : "")}>
                  <div className="relative group rounded-3xl overflow-hidden border border-border/50 shadow-2xl aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
