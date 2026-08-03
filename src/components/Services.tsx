import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Monitor, Smartphone, Palette, Video, Layers, Share2, Megaphone, Wrench, ArrowUpRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";

import sectionPattern from "@/assets/section-pattern.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceUiUx from "@/assets/service-uiux.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import serviceAds from "@/assets/service-ads.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";

const servicePillars = [
  {
    id: "engineering",
    title: "Engineering",
    description: "Robust, scalable, and high-performance technical solutions.",
    image: serviceWeb,
    items: [
      {
        icon: Monitor,
        title: "Web & Software Development",
        description: "Websites and web apps that look great, load fast, and help your business grow.",
        color: "from-blue-500 to-indigo-600",
      },
      {
        icon: Smartphone,
        title: "Mobile App Development",
        description: "iPhone & Android apps your customers will love — smooth, fast, and simple.",
        color: "from-violet-500 to-purple-600",
      },
      {
        icon: Wrench,
        title: "Website Maintenance & Support",
        description: "Ongoing SEO optimization, updates, backups, security & fixes — keeping your site fast and visible.",
        color: "from-teal-500 to-cyan-600",
      },
    ]
  },
  {
    id: "design",
    title: "Design",
    description: "Intuitive, beautiful, and user-centric visual experiences.",
    image: serviceUiUx,
    items: [
      {
        icon: Layers,
        title: "UI/UX Design",
        description: "Beautiful, intuitive designs that keep customers engaged and coming back.",
        color: "from-emerald-500 to-teal-600",
      },
      {
        icon: Palette,
        title: "Brand Identity",
        description: "Logos, colors, and visual identity that make your business memorable.",
        color: "from-pink-500 to-rose-600",
      },
      {
        icon: Video,
        title: "Motion Content",
        description: "Animated videos and graphics that explain your business and grab attention.",
        color: "from-orange-500 to-red-600",
      },
    ]
  },
  {
    id: "growth",
    title: "Growth",
    description: "Strategic creative and advertising to scale your audience.",
    image: serviceSocial,
    items: [
      {
        icon: Share2,
        title: "Social Media Design",
        description: "Scroll-stopping posts and visuals for Facebook, Instagram & TikTok.",
        color: "from-cyan-500 to-blue-600",
      },
      {
        icon: Megaphone,
        title: "Social Media Ads",
        description: "Ad creatives and campaign setup that bring real customers to your business.",
        color: "from-fuchsia-500 to-purple-600",
      },
    ]
  }
];

// Helper component for tracking visibility of sections
function PillarSection({ 
  pillar, 
  index, 
  setActiveSection 
}: { 
  pillar: typeof servicePillars[0]; 
  index: number;
  setActiveSection: (id: string) => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveSection(pillar.id);
    }
  }, [isInView, pillar.id, setActiveSection]);

  return (
    <div ref={ref} id={`pillar-${pillar.id}`} className="mb-24 last:mb-0 scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="lg:hidden mb-8">
          <h3 className="font-display font-bold text-3xl mb-2 text-foreground">{pillar.title}</h3>
          <p className="text-muted-foreground">{pillar.description}</p>
        </div>



        {/* Service Items List */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
          {pillar.items.map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card/50 hover:bg-card border border-border/50 hover:border-primary/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-5`}>
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-display font-bold text-lg mb-2 text-foreground">{item.title}</h5>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function Services() {
  const [activeSection, setActiveSection] = useState("engineering");

  const scrollToPillar = (id: string) => {
    const el = document.getElementById(`pillar-${id}`);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 md:py-32 relative bg-background">
      {/* Background Texture - Hidden on mobile to prevent scrolling glitches */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay hidden md:block">
        <img src={sectionPattern} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container px-6 relative z-10 w-full max-w-[1400px] mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Side: Sticky Navigation */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 mb-16 lg:mb-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block mb-4 text-primary font-mono text-sm tracking-widest uppercase font-bold"
            >
              Our Expertise
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-[1.1] text-foreground"
            >
              Everything you need <span className="text-primary">online.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 lg:mb-16"
            >
              We help you look professional, reach more customers, and grow — all without the tech headaches.
            </motion.p>

            {/* Sticky Navigation Menu (Desktop Only) */}
            <div className="hidden lg:flex flex-col gap-2 border-l-2 border-border/50 pl-6 relative">
              {/* Active Indicator Line */}
              <div 
                className="absolute left-[-2px] w-[2px] bg-primary transition-all duration-300 ease-out rounded-full"
                style={{
                  top: activeSection === "engineering" ? "0%" : activeSection === "design" ? "33.33%" : "66.66%",
                  height: "33.33%"
                }}
              />
              
              {servicePillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => scrollToPillar(pillar.id)}
                  className={`text-left py-4 transition-all duration-300 flex flex-col gap-1 ${
                    activeSection === pillar.id 
                      ? "opacity-100 translate-x-2" 
                      : "opacity-40 hover:opacity-70 hover:translate-x-1"
                  }`}
                >
                  <span className="font-display font-bold text-2xl tracking-tight text-foreground">{pillar.title}</span>
                  <span className="text-sm">{pillar.description}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-12 lg:mt-16 hidden lg:block">
              <Link href="/services" className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors">
                Explore full capabilities <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right Side: Scrolling Content */}
          <div className="lg:col-span-8 relative">
            {servicePillars.map((pillar, index) => (
              <PillarSection 
                key={pillar.id} 
                pillar={pillar} 
                index={index} 
                setActiveSection={setActiveSection} 
              />
            ))}

            <div className="mt-12 flex justify-center lg:hidden">
              <Link href="/services" className="inline-flex items-center justify-center bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:bg-primary/90 transition-colors w-full sm:w-auto shadow-md">
                View All Services <ArrowUpRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

