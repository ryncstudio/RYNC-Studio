import { motion } from "framer-motion";
import partnerFilkart from "@/assets/partner-filkart.jpg";
import partnerTrt from "@/assets/partner-trt.png";

const partners = [
  { name: "Filkart", logo: partnerFilkart, darkBg: true },
  { name: "TRT Philippines", logo: partnerTrt, darkBg: false },
];

export function TechMarquee() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border/40 relative overflow-hidden">
      <div className="container px-6 max-w-[1400px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-muted-foreground tracking-widest uppercase mb-8"
        >
          Trusted by
        </motion.p>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div
                className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl overflow-hidden transition-all duration-300 flex items-center justify-center ${
                  partner.darkBg ? "bg-gray-900 p-1.5" : ""
                }`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-display font-bold text-lg md:text-xl text-foreground/80 group-hover:text-foreground transition-colors">
                {partner.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
