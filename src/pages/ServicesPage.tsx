import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Monitor, Smartphone, Palette, Video, Layers, Share2, Megaphone, Wrench, CheckCircle2, ChevronDown } from "lucide-react";
import { Footer } from "@/components/Footer";
import servicesHero from "@/assets/services-hero.jpg";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "web",
    icon: Monitor,
    title: "Web & Software Development",
    subtitle: "Your business, online — done right.",
    description: "We build websites and web apps that look great, load fast, and help your business grow.",
    longDescription: "Think of us as your digital builders. We create websites and online tools that make it easy for your customers to find you, learn about your business, and take action — like booking a service, buying a product, or sending you a message. Everything we build is designed to work perfectly on phones, tablets, and computers.",
    features: ["Professional business websites", "Online stores where customers can buy directly", "Fast-loading pages that keep visitors engaged", "Easy-to-update content — no coding needed"],
    idealFor: "Shops, restaurants, startups & freelancers",
    color: "from-blue-500/20 to-purple-500/20",
    iconColor: "text-blue-500"
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile App Development",
    subtitle: "Put your business in your customers' pockets.",
    description: "We create mobile apps for iPhone and Android that your customers will love using.",
    longDescription: "Want your own app? We build apps that work on both iPhone and Android, so you can reach all your customers. Whether it's a booking app, an online shop, or a tool to stay connected with your audience — we make it simple and beautiful.",
    features: ["Apps for both iPhone & Android", "Simple, easy-to-use design", "Works even with slow internet", "Help getting your app on the App Store & Play Store"],
    idealFor: "Businesses needing a booking, delivery or loyalty app",
    color: "from-violet-500/20 to-indigo-500/20",
    iconColor: "text-violet-500"
  },
  {
    id: "uiux",
    icon: Layers,
    title: "UI/UX Design",
    subtitle: "Making your website or app easy and enjoyable to use.",
    description: "We design how your website or app looks and feels — making sure it's beautiful and intuitive.",
    longDescription: "UI/UX Design is all about creating a great experience for the people using your website or app. We research what your customers need, then design something that feels natural and helps them do what they came to do.",
    features: ["Beautiful, modern-looking layouts", "Easy navigation your customers will love", "We test with real users before launching", "Consistent look and feel across every page"],
    idealFor: "Anyone building a website or app",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-500"
  },
  {
    id: "brand",
    icon: Palette,
    title: "Brand Identity",
    subtitle: "Give your business a look people remember.",
    description: "We create the complete visual identity for your business — from your logo and colors to brand guidelines.",
    longDescription: "Your brand is how people recognize and remember your business. We help you create a professional, consistent look that builds trust with your customers. This includes your logo, the colors you use, the fonts on your website, and guidelines so everything always looks polished.",
    features: ["Custom logo design", "Color scheme & fonts that match your personality", "Brand guidelines so everything stays consistent", "Business cards, letterheads & marketing materials"],
    idealFor: "New businesses & brands ready for a fresh look",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500"
  },
  {
    id: "motion",
    icon: Video,
    title: "Motion Content",
    subtitle: "Bring your ideas to life with video and animation.",
    description: "Eye-catching animated videos and graphics that explain your business and grab attention.",
    longDescription: "Sometimes a picture isn't enough — you need movement. We create animated videos, moving graphics, and visual effects that help explain what your business does in a fun, engaging way. Perfect for social media, presentations, or your website.",
    features: ["Animated explainer videos", "Eye-catching motion graphics", "Smooth website animations", "Video content for social media"],
    idealFor: "Brands wanting video ads, reels & presentations",
    color: "from-orange-500/20 to-red-500/20",
    iconColor: "text-orange-500"
  },
  {
    id: "social",
    icon: Share2,
    title: "Social Media Visual Design",
    subtitle: "Stand out on every platform.",
    description: "We design scroll-stopping social media posts, stories, and ads that make people notice your brand.",
    longDescription: "Your social media is often the first place customers discover your business. We create professional, eye-catching designs for your posts, stories, reels, and ads — tailored for every platform. The goal? Make people stop scrolling and pay attention to you.",
    features: ["Ready-to-post designs for all platforms", "Story & Reel templates you can reuse", "Ad designs that drive clicks and engagement", "Consistent brand look across all your socials"],
    idealFor: "Brands growing on Instagram, TikTok & Facebook",
    color: "from-cyan-500/20 to-blue-500/20",
    iconColor: "text-cyan-500"
  },
  {
    id: "ads",
    icon: Megaphone,
    title: "Social Media Ads",
    subtitle: "Get more eyes on your business — with ads that actually work.",
    description: "We design scroll-stopping ad creatives and help you set up campaigns that bring in real customers.",
    longDescription: "Running ads online can feel confusing — but it doesn't have to be. We handle the creative side (designing the images and videos for your ads) and help you set up campaigns that target the right people. You focus on your business, we'll handle the ads.",
    features: ["Eye-catching ad images & videos", "Campaign setup on Facebook, Instagram & TikTok", "Audience targeting so the right people see your ads", "Performance tracking & tweaks to improve results"],
    idealFor: "Businesses ready to grow with online advertising",
    color: "from-fuchsia-500/20 to-purple-500/20",
    iconColor: "text-fuchsia-500"
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Website Maintenance",
    subtitle: "Keep your website running smoothly.",
    description: "We take care of your website after launch — handling SEO monitoring, updates, backups, and security.",
    longDescription: "Launching a website is just the beginning. Over time, things need updating — software patches, security fixes, content changes, speed improvements, and ongoing SEO checks. We offer ongoing maintenance so your website stays fast, secure, and always online.",
    features: ["Regular software & plugin updates", "SEO monitoring & performance optimization", "Daily backups & security from hackers", "Bug fixes & content updates whenever you need them"],
    idealFor: "Any business with a live website that wants to stay visible",
    color: "from-teal-500/20 to-cyan-500/20",
    iconColor: "text-teal-500"
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(services[0].id);
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
      <section className="relative flex items-start justify-center overflow-hidden pb-20 md:pb-32">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <img src={servicesHero} alt="Abstract Ecosystem" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </motion.div>

        <div className="container relative z-10 px-6 max-w-[1400px] text-center md:text-left pt-32 md:pt-48 pb-12">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight md:tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 max-w-5xl leading-[1.1]"
          >
            Digital capabilities <br className="hidden md:block" />
            <span className="text-primary font-light italic">without limits.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto md:mx-0"
          >
            We blend strategy, design, and engineering to build digital products that launch brands and scale businesses.
          </motion.p>
        </div>
      </section>

      {/* Interactive Typography Services List */}
      <section className="pb-24 md:pb-40 relative z-10 -mt-10 md:-mt-20">
        <div className="container px-6 max-w-[1400px]">
          <div className="border-t border-border/40">
            {services.map((service, i) => {
              const isActive = activeService === service.id;
              
              return (
                <div 
                  key={service.id} 
                  className={cn(
                    "border-b border-border/40 transition-colors duration-500 group",
                    isActive ? "bg-card/30" : "hover:bg-accent/20"
                  )}
                >
                  <button
                    onClick={() => setActiveService(isActive ? null : service.id)}
                    className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between text-left gap-6 group cursor-pointer"
                  >
                    <div className="flex items-center gap-6 md:gap-12 w-full md:w-2/3">
                      <span className="font-mono text-sm md:text-lg font-bold tracking-widest text-muted-foreground/50 w-8">
                        0{i + 1}
                      </span>
                      <h2 className={cn(
                        "font-display font-bold text-3xl md:text-5xl lg:text-6xl tracking-tight transition-all duration-500",
                        isActive ? "text-primary translate-x-2 md:translate-x-4" : "text-foreground group-hover:text-foreground/80"
                      )}>
                        {service.title}
                      </h2>
                    </div>
                    
                    <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-1/3 pl-14 md:pl-0">
                      <p className={cn(
                        "text-sm md:text-base font-medium transition-opacity duration-300 max-w-[200px]",
                        isActive ? "text-primary opacity-100" : "text-muted-foreground opacity-0 group-hover:opacity-100 hidden md:block"
                      )}>
                        {service.subtitle}
                      </p>
                      
                      <div className={cn(
                        "h-12 w-12 rounded-full border flex items-center justify-center transition-all duration-500 shrink-0",
                        isActive ? "border-primary bg-primary text-primary-foreground rotate-180" : "border-border/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary"
                      )}>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pb-12 md:pb-16 pl-0 md:pl-28 grid md:grid-cols-12 gap-8 md:gap-16 pt-4">
                          
                          {/* Description Col */}
                          <div className="md:col-span-7 space-y-8">
                            <div className={cn("inline-flex p-4 rounded-2xl bg-gradient-to-br", service.color)}>
                              <service.icon className={cn("h-8 w-8", service.iconColor)} />
                            </div>
                            
                            <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                              {service.longDescription}
                            </p>
                            
                            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-accent border border-border/50">
                              <span className="text-primary text-sm font-bold uppercase tracking-widest">Ideal For</span>
                              <div className="w-px h-4 bg-border" />
                              <span className="text-foreground/80 text-sm font-medium">{service.idealFor}</span>
                            </div>
                          </div>

                          {/* Features Col */}
                          <div className="md:col-span-5 bg-background border border-border/50 rounded-3xl p-8 shadow-xl">
                            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground mb-6">
                              What's Included
                            </h4>
                            <ul className="space-y-4">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <span className="text-foreground/80 font-medium">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
