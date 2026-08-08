import { motion } from "framer-motion";
import { Check, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const plans = [
  {
    name: "Starter Website",
    price: "₱10,000",
    priceSuffix: "/ project",
    description: "A simple website for individuals, startups, and small businesses that only need a clean and professional online presence.",
    features: [
      "Up to 3 standard website pages",
      "Clean template-based design",
      "Mobile, tablet & desktop responsive",
      "1 basic contact form",
      "14 days limited post-launch support"
    ],
    popular: false,
    bonus: false,
    cta: "Get Started"
  },
  {
    name: "Business Growth",
    price: "₱30,000",
    priceSuffix: "/ project",
    description: "For growing businesses that need a more customized website, stronger online presence, and better tools for customer engagement.",
    features: [
      "Up to 8 website pages",
      "CMS for selected sections",
      "Product or service showcase",
      "Basic on-page & local SEO",
      "Google Analytics & Search Console",
      "60 days limited post-launch support"
    ],
    popular: true,
    bonus: false,
    cta: "Grow Your Business"
  },
  {
    name: "Premium Business",
    price: "₱75,000",
    priceSuffix: "/ project",
    description: "A fully customized and conversion-focused website for established businesses and brands ready to build a stronger digital presence.",
    features: [
      "Up to 10–12 website pages",
      "Fully customized UI/UX design",
      "Advanced CMS & 1 Advanced Module",
      "Advanced on-page SEO",
      "Up to 2 third-party integrations",
      "90 days priority post-launch support"
    ],
    popular: false,
    bonus: true,
    cta: "Build Your Premium Website"
  },
  {
    name: "Custom Solution",
    price: "Starting at",
    pricePrefix: true,
    priceValue: "₱100,000",
    description: "For businesses that require specialized systems, unique workflows, custom integrations, or web application functionality.",
    features: [
      "Advanced web application features",
      "Unique business workflows",
      "Custom dashboards & portals",
      "E-commerce or complex booking",
      "Specialized database requirements",
      "API & third-party integrations"
    ],
    popular: false,
    bonus: false,
    cta: "Request a Custom Quote"
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm font-bold tracking-widest rounded-full mb-6 uppercase">
            Website Packages
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
            Choose the right website for your business.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            From a simple online presence to a fully customized business platform, choose a package that fits where your business is today.
          </p>
        </motion.div>

        {/* Cards: 1 col (mobile), 2 col (tablet), 4 col (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="h-full"
            >
              <Card className={`relative p-6 md:p-8 h-full flex flex-col backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
                plan.popular
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
                  <h3 className="font-display font-bold text-xl mb-3">{plan.name}</h3>
                  <div className="flex flex-col gap-1 min-h-[5rem] justify-center">
                    {plan.pricePrefix ? (
                      <>
                        <span className="text-sm font-medium text-muted-foreground">{plan.price}</span>
                        <span className="text-3xl md:text-4xl font-bold break-all bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90">
                          {plan.priceValue}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-bold break-all bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/90">
                          {plan.price}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">{plan.priceSuffix}</span>
                      </>
                    )}
                  </div>
                </div>

                {plan.bonus && (
                  <div className="mb-4 inline-flex items-center gap-1.5 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-md">
                    <Gift className="w-3.5 h-3.5" />
                    FREE BONUSES INCLUDED
                  </div>
                )}

                <p className="text-muted-foreground mb-6 text-sm flex-grow">
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
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="h-2.5 w-2.5 text-primary" />
                      </div>
                      <span className="leading-snug">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <Button
                    asChild
                    className={`w-full h-11 font-semibold ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-violet-500 hover:shadow-lg hover:shadow-primary/30 text-white border-0"
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    <Link href="/pricing">{plan.cta}</Link>
                  </Button>
                  <div className="text-center">
                    <Link href="/pricing" className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors underline-offset-4 hover:underline">
                      View Full Details
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20 max-w-2xl mx-auto"
        >
          <h3 className="font-bold text-xl md:text-2xl mb-3">Need something more specific?</h3>
          <p className="text-muted-foreground mb-8">
            Explore our Custom Website Solution starting at ₱100,000 or contact us for a tailored quotation.
          </p>
          <Button asChild size="lg" className="rounded-full shadow-lg">
            <Link href="/pricing">View Full Package Comparison</Link>
          </Button>
        </motion.div>

        {/* Global Notice */}
        <div className="mt-16 text-center max-w-4xl mx-auto border-t border-border/50 pt-8">
          <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed">
            <strong className="text-foreground/70 font-semibold">Additional services are not free.</strong> Pages, features, revisions, integrations, content, and other requirements not listed in the selected package will be quoted and charged separately.
          </p>
        </div>
      </div>
    </section>
  );
}
