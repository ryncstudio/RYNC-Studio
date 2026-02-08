import { motion } from "framer-motion";
import { Monitor, Smartphone, Palette, Video, Layers, ArrowUpRight, Share2 } from "lucide-react";
import sectionPattern from "@/assets/section-pattern.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceUiUx from "@/assets/service-uiux.jpg";
import serviceMotion from "@/assets/service-motion.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceSocial from "@/assets/service-social.jpg";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

const services = [
  {
    icon: Monitor,
    title: "Web & Software Development",
    description: "Modern websites and custom digital solutions built with cutting-edge technology. Scalable, secure, and performance-driven.",
    className: "md:col-span-2 md:row-span-2",
    image: serviceWeb,
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Visual systems designed for clarity and consistency.",
    className: "md:col-span-1 md:row-span-1",
    image: serviceBrand,
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Interfaces designed around real users. Intentional, intuitive, impactful.",
    className: "md:col-span-1 md:row-span-1",
    image: serviceUiUx,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform iOS & Android applications designed for performance and scale.",
    className: "md:col-span-1 md:row-span-1",
    image: serviceMobile,
  },
  {
    icon: Share2,
    title: "Social Media Visual Design",
    description: "Engaging social content and campaigns that stop the scroll.",
    className: "md:col-span-1 md:row-span-1",
    image: serviceSocial,
  },
  {
    icon: Video,
    title: "Motion Content",
    description: "Dynamic storytelling for the digital age.",
    className: "md:col-span-1 md:row-span-1",
    image: serviceMotion,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
        <img src={sectionPattern} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="container px-6 relative z-10 w-full max-w-[1400px]">
        <div className="max-w-3xl mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-bold text-4xl md:text-5xl mb-6"
          >
            Comprehensive <span className="text-primary">Solutions.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            From concept to code, we provide end-to-end services to bring your vision to life.
          </motion.p>
        </div>

        {/* Removed fixed height and fixed rows to prevent clipping. 
            Using auto-rows to maintain grid structure without cutting content. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative p-0 rounded-3xl border border-border/50 bg-card overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-primary/50 flex flex-col justify-between cursor-pointer",
                service.className
              )}
            >
              <Link href="/services" className="flex flex-col h-full w-full p-8">
                {/* Hover Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out z-0">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  {/* Dark overlay to ensure text readability on top of images */}
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                
                <div className="relative z-10">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  {/* Force text to white on hover because we have a dark overlay */}
                  <h3 className="font-display font-bold text-2xl mb-3 group-hover:text-white transition-colors duration-300">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                </div>

                <div className="relative z-10 flex justify-end mt-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="h-10 w-10 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm text-white">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
