import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";


const plans = [
  {
    name: "Starter",
    price: "₱10,000",
    usdRef: "Simple & Credible",
    description: "Best for startups, freelancers, and small businesses needing a credible online presence.",
    features: [
      "Up to 4 standard pages",
      "Mobile & Desktop Responsive",
      "Basic SEO Setup",
      "Contact Form Integration",
      "7–14 Business Days Delivery",
      "30 Days Tech Support"
    ],
  },
  {
    name: "Business Growth",
    price: "₱30,000",
    usdRef: "Most Popular Choice",
    description: "For growing businesses that need a complete website, CMS, and better engagement.",
    features: [
      "Up to 8 standard pages + CMS",
      "Custom Homepage Sections",
      "Services/Product Showcase",
      "Enhanced SEO Setup",
      "3–5 Weeks Delivery",
      "60 Days Tech Support"
    ],
    popular: true,
  },
  {
    name: "Premium Business",
    price: "₱60,000",
    usdRef: "Advanced Functionality",
    description: "For established brands needing a fully customized, conversion-focused website.",
    features: [
      "Up to 15 pages",
      "Fully Customized UI/UX",
      "1 Advanced Web Module",
      "Local & On-Page SEO",
      "5–8 Weeks Delivery",
      "90 Days Priority Support"
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display font-bold text-3xl md:text-5xl lg:text-6xl mb-4">
            Invest in your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Growth</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground">
            Transparent pricing packages designed to fit your unique business needs. No hidden fees.
          </p>
        </motion.div>

        {/* Cards: 1 col → 3 col at lg */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className={`relative p-6 md:p-8 h-full flex flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${plan.popular
                ? "border-primary shadow-2xl shadow-primary/10 bg-gradient-to-b from-primary/5 to-card ring-1 ring-primary/30"
                : "border-border/50 bg-card/50 hover:border-primary/30"
                }`}>
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-primary to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6 mt-2">
                  <h3 className="font-display font-bold text-xl md:text-2xl mb-3">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className={`text-3xl md:text-4xl font-bold break-all bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90`}>
                      {plan.price}
                    </span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {plan.usdRef}
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed text-sm md:text-base">
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
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
                      <span className="leading-snug">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full h-11 font-semibold ${plan.popular
                      ? "bg-gradient-to-r from-primary to-violet-500 hover:shadow-lg hover:shadow-primary/30 text-white"
                      : ""
                    }`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  <Link href="/pricing">
                    View Package Details
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Looking for something tailored exactly to your needs? We also offer custom solutions.
          </p>
          <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
            <Link href="/pricing">See Full Pricing & Add-ons</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
