import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";


const plans = [
  {
    name: "Starter",
    price: "$1,950",
    localPrice: "₱110,000",
    description: "Launch your professional presence fast. Perfect for startups and small businesses.",
    features: [
      "5-Page Website",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form Integration",
      "2 Weeks Delivery",
      "30 Days Support"
    ],
  },
  {
    name: "Growth",
    price: "$4,500",
    localPrice: "₱255,000",
    description: "Scale with systems that convert. Ideal for growing businesses ready to scale.",
    features: [
      "Everything in Starter",
      "Custom UI/UX Design",
      "CMS Integration",
      "Advanced Animations",
      "E-commerce Ready",
      "Analytics Integration",
      "Social Media Graphics (5 designs)",
      "Priority Support"
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    localPrice: "/tailored",
    description: "Enterprise-grade digital transformation for established organizations.",
    features: [
      "Custom Web/Mobile Apps",
      "Complete Brand Identity",
      "Full Design System",
      "Motion Graphics & Video",
      "Ongoing Development",
      "Dedicated Team",
      "SLA & 24/7 Support",
      "Security & Compliance"
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Transparent pricing with no hidden fees. We build value that lasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className={`relative p-8 h-full flex flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${plan.popular
                ? "border-primary shadow-2xl shadow-primary/10 bg-gradient-to-b from-primary/5 to-card scale-105"
                : "border-border/50 bg-card/50 hover:border-primary/30"
                }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="font-display font-bold text-2xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                      {plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground text-sm">/project</span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1 font-medium">
                    {plan.localPrice}
                  </div>
                </div>

                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + idx * 0.05 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="leading-tight">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full h-12 font-semibold ${plan.popular
                    ? "bg-gradient-to-r from-primary to-violet-500 hover:shadow-lg hover:shadow-primary/30"
                    : ""
                    }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          All plans include free consultation. <Link href="/contact" className="text-primary hover:underline">Contact us</Link> to discuss your project.
        </motion.p>
      </div>
    </section>
  );
}
