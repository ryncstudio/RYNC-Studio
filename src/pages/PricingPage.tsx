import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Info, Plus, ArrowRight, Check } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    id: "starter",
    name: "STARTER WEBSITE",
    price: "₱10,000",
    description: "Best for: Startups, freelancers, professionals, and small businesses that need a simple and credible online presence.",
    estimatedCompletion: "7–14 business days",
    isPopular: false,
    sections: [
      {
        title: "Package Inclusions",
        features: [
          "Up to 4 standard website pages (Home, About, Services or Products, Contact)",
          "Clean, professional, template-based website design",
          "Customization using your business colors, logo, and branding",
          "Mobile, tablet, and desktop responsive design",
          "Basic navigation menu",
          "Contact form connected to one email address",
          "Click-to-call and click-to-email buttons",
          "Social media links",
          "Google Maps location integration",
          "Basic image optimization",
          "Website favicon",
          "SSL security setup",
          "Basic website speed optimization",
          "Basic website security setup",
          "Website deployment and launch assistance"
        ]
      },
      {
        title: "Basic SEO Setup",
        features: [
          "SEO-friendly page structure",
          "Page titles and meta descriptions",
          "Proper heading structure",
          "Image alternative text",
          "Search-engine-friendly page links",
          "XML sitemap setup",
          "Basic Google Search Console submission"
        ]
      },
      {
        title: "Content and Revisions",
        features: [
          "Client provides the final logo, text, images, and business information",
          "Uploading and formatting of client-provided content",
          "Up to 1 major revision round",
          "Minor corrections before launch"
        ]
      }
    ],
    bonus: [
      "30 days of post-launch technical support",
      "1 branded website-launch social media graphic"
    ],
    limitations: "This package does not include an online store, payment system, booking system, member accounts, custom dashboards, advanced animations, database features, or custom business systems."
  },
  {
    id: "business-growth",
    name: "BUSINESS GROWTH WEBSITE",
    price: "₱30,000",
    description: "Best for: Growing businesses that need a more complete website, stronger branding, better customer engagement, and the ability to manage website content.",
    estimatedCompletion: "3–5 weeks",
    isPopular: true,
    sections: [
      {
        title: "Everything in Starter, Plus:",
        features: [
          "Up to 8 standard website pages",
          "More customized and polished website design",
          "Improved visual hierarchy and brand presentation",
          "Custom homepage sections based on the business",
          "Content management system for selected website sections",
          "Ability to update basic text, images, services, or posts",
          "Services or product showcase with up to 15 entries",
          "Testimonials section",
          "Frequently Asked Questions section",
          "Gallery, portfolio, projects, or blog section",
          "Up to 2 contact or inquiry forms",
          "Quotation or consultation request form",
          "Messenger, WhatsApp, Viber, or preferred messaging button",
          "Newsletter subscription form",
          "Basic spam protection",
          "Enhanced website speed optimization",
          "Website backup setup",
          "Improved security configuration"
        ]
      },
      {
        title: "Enhanced SEO Setup",
        features: [
          "Basic keyword research",
          "Keyword placement for up to 5 important pages",
          "SEO-friendly page titles and descriptions",
          "Image alternative-text optimization",
          "Local business information optimization",
          "Basic structured data or schema setup",
          "Google Search Console setup",
          "Google Analytics 4 setup",
          "Google Business Profile setup or optimization",
          "Sitemap submission and indexing check"
        ]
      },
      {
        title: "Content and Revisions",
        features: [
          "Basic polishing of client-provided text",
          "Formatting of website content for readability",
          "Uploading of client-provided images and materials",
          "Up to 3 major revision rounds",
          "One website-management training session",
          "Basic website documentation or user guide"
        ]
      }
    ],
    bonus: [
      "Free .com domain registration for the first year (subject to availability)",
      "60 days of post-launch technical support",
      "2 branded website-launch social media graphics"
    ],
    limitations: "This package does not include full e-commerce functionality, complex booking systems, customer accounts, custom dashboards, payment-gateway integration, inventory management, or advanced web-application features."
  },
  {
    id: "premium-business",
    name: "PREMIUM BUSINESS WEBSITE",
    price: "₱60,000",
    description: "Best for: Established businesses, companies, organizations, and brands that need a fully customized, conversion-focused website with advanced functionality.",
    estimatedCompletion: "5–8 weeks",
    isPopular: false,
    sections: [
      {
        title: "Everything in Business Growth, Plus:",
        features: [
          "Up to 12–15 website pages",
          "Fully customized website design",
          "Custom user-interface and user-experience planning",
          "Wireframe or page-layout planning for major pages",
          "Conversion-focused homepage and landing-page structure",
          "Custom visual sections and layouts",
          "More advanced animations and interactive elements",
          "Advanced content management capabilities",
          "Services or product showcase with up to 30 entries",
          "Custom filtering or category organization",
          "Advanced inquiry and quotation forms (Conditional fields, File upload, Automated confirmation)",
          "Professional blog, resources, news, or case-study section",
          "Careers or application page",
          "Multiple business-location presentation",
          "Up to 3 third-party integrations (CRM, Email marketing, Calendar, Chat, Social media, etc.)"
        ]
      },
      {
        title: "One Advanced Website Module Included:",
        features: [
          "Appointment-request system",
          "Consultation-booking system",
          "Advanced quotation-request system",
          "Product catalog without online payment",
          "Property or listing directory",
          "Event-registration system",
          "Careers and job-application system",
          "Restaurant menu or service catalog",
          "Lead-generation landing-page system"
        ]
      },
      {
        title: "Enhanced On-Page & Local SEO",
        features: [
          "Keyword mapping for major website pages",
          "Optimization for up to 12 pages",
          "SEO-friendly page and content structure",
          "Meta-title and meta-description optimization",
          "Image and media optimization",
          "Internal-linking setup",
          "Local business schema",
          "Service schema or other applicable structured data",
          "Google Search Console setup",
          "Google Analytics 4 setup",
          "Basic conversion-event tracking",
          "Sitemap and indexing configuration",
          "Basic broken-link and redirect checking",
          "Google Business Profile setup or optimization"
        ]
      },
      {
        title: "Performance, Security & Content",
        features: [
          "Advanced website speed optimization & Mobile-performance checking",
          "Image compression and modern image formatting",
          "Website backup configuration",
          "Security and spam-protection setup",
          "SSL security configuration & Basic uptime-monitoring setup",
          "Pre-launch website testing & Browser/device compatibility testing",
          "Content structure recommendations",
          "Professional polishing of client-provided website copy",
          "Uploading and formatting of provided content",
          "Up to 5 major revision rounds",
          "Two website-management training sessions",
          "Basic website documentation & Priority launch assistance"
        ]
      }
    ],
    bonus: [
      "Free .com domain registration for the first year (subject to availability)",
      "Free standard website hosting for the first year",
      "90 days of priority post-launch support",
      "3 branded website-launch social media graphics",
      "Free Google Business Profile setup"
    ],
    limitations: "More complex modules not listed may require a customized quotation."
  }
];

const customFeatures = [
  "E-commerce website", "Online shopping cart", "GCash, Maya, card, or payment-gateway integration", 
  "Cash-on-delivery setup", "Customer registration and login", "Member portal", 
  "Subscription or membership system", "Advanced appointment booking", "Hotel or accommodation booking", 
  "Restaurant ordering system", "Inventory management", "Order tracking", "Customer dashboard", 
  "Merchant or vendor dashboard", "Admin dashboard", "Employee portal", "Learning-management system", 
  "Property-listing website", "Marketplace platform", "Multilingual website", "Custom calculator", 
  "Custom database", "API integration", "Email and SMS automation", "CRM integration", 
  "AI chatbot or AI-assisted website features", "Business workflow automation", 
  "Mobile-application integration", "Other specialized business requirements"
];

const customProcess = [
  "Initial requirements discussion", "Feature and page assessment", "Recommended website solution",
  "Formal project proposal", "Detailed inclusions and exclusions", "Project cost and payment schedule",
  "Development timeline", "Approval and project commencement"
];

const optionalAddons = [
  "Additional website pages", "Full professional copywriting", "Logo and brand-identity design",
  "Product photography", "Professional business photography", "Additional products or service entries",
  "Blog-article writing", "Monthly website maintenance", "Monthly SEO services", "Social media content creation",
  "Social media management", "Business email accounts", "Additional domain names", "Premium website plugins",
  "Premium stock photos", "Additional language versions", "Advanced animations", "Payment integration",
  "Booking-system integration", "Website automation", "Email-marketing automation", "Rush development"
];

const importantNotes = [
  "The packages cover the features specifically listed under each tier.",
  "The client must provide accurate business information, images, logos, product details, policies, and other required materials.",
  "Domain and hosting renewal fees after the free period are billed separately.",
  "Premium plugins, paid applications, payment-gateway charges, SMS fees, email-platform subscriptions, and other third-party costs are not included unless stated in the proposal.",
  "SEO setup helps make the website search-engine friendly but does not guarantee a specific Google ranking.",
  "Continuous SEO campaigns, content writing, backlink building, and monthly ranking reports require a separate SEO plan.",
  "Revision requests must remain within the originally approved project scope.",
  "New pages, major redesigns, and additional functions requested after approval may require an additional quotation.",
  "The website will be launched after the project balance and required approvals have been completed.",
  "Final inclusions, payment terms, ownership, support coverage, and responsibilities will be stated in the service agreement."
];

const paymentTerms = [
  { tier: "Starter Website", terms: ["50% initial payment", "50% before website launch"] },
  { tier: "Business Growth Website", terms: ["50% initial payment", "30% after design approval", "20% before website launch"] },
  { tier: "Premium Business Website", terms: ["40% initial payment", "30% after design approval", "30% before website launch"] },
  { tier: "Custom Website Solution", terms: ["A milestone-based payment schedule will be included in the approved project proposal."] }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Website Design & <br className="hidden sm:block" />
              Development Packages
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Build a professional online presence that helps customers discover your business, understand your services, and easily contact you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="pb-24 px-6 relative z-10">
        <div className="container max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-8 md:p-10 shadow-sm transition-all duration-300 hover:shadow-xl",
                  tier.isPopular ? "border-primary shadow-primary/10 ring-1 ring-primary/20 scale-100 md:scale-105 z-10" : "border-border/50"
                )}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold tracking-tight mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl md:text-5xl font-display font-bold tracking-tighter">{tier.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1 space-y-8">
                  {tier.sections.map((section, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4 border-b border-border/50 pb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-primary/70 shrink-0" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-2">
                      <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs">FREE BONUS</span>
                    </h4>
                    <ul className="space-y-2">
                      {tier.bonus.map((bonus, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 text-sm text-foreground/80 font-medium">
                          <Check className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{bonus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-semibold text-foreground">Estimated Completion:</span>
                    <span className="text-muted-foreground">{tier.estimatedCompletion}</span>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-xl text-xs text-muted-foreground">
                    <span className="font-semibold block mb-1 text-foreground/70">Limitations:</span>
                    {tier.limitations}
                  </div>

                  <Button asChild size="lg" className={cn("w-full mt-4", tier.isPopular ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-accent text-accent-foreground hover:bg-accent/80")}>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution */}
      <section className="py-20 md:py-32 bg-accent/20 border-y border-border/40 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm font-bold tracking-widest rounded-full mb-6">CUSTOM SOLUTION</span>
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6">
                Built exactly for your unique business needs.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Best for businesses with unique requirements that do not fit within the standard packages. Clients may choose their preferred features, pages, integrations, and business functions.
              </p>
              
              <div className="mb-8">
                <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Custom Package Process</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {customProcess.map((step, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-muted-foreground bg-background rounded-lg p-3 border border-border/50 shadow-sm">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">{idx + 1}</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild size="lg" className="rounded-full">
                <Link href="/contact">Request Custom Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-3xl p-8 border border-border/50 shadow-xl"
            >
              <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                Available Custom Features
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                {customFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Plus className="h-4 w-4 text-primary/60 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-ons & Notes */}
      <section className="py-24 md:py-32 px-6">
        <div className="container max-w-6xl mx-auto space-y-24">
          
          {/* Optional Add-ons */}
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-6">Optional Add-ons</h2>
              <p className="text-muted-foreground mb-12">The following services may be added to any eligible package and will be quoted separately.</p>
              <div className="flex flex-wrap justify-center gap-3">
                {optionalAddons.map((addon, idx) => (
                  <span key={idx} className="px-4 py-2 bg-accent/50 text-foreground text-sm rounded-full border border-border/50">
                    {addon}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            {/* Payment Terms */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-display font-bold text-2xl tracking-tight mb-8">Recommended Payment Terms</h3>
              <div className="space-y-6">
                {paymentTerms.map((term, idx) => (
                  <div key={idx} className="bg-card border border-border/50 rounded-2xl p-6 shadow-sm">
                    <h4 className="font-bold text-lg mb-4">{term.tier}</h4>
                    <ul className="space-y-2">
                      {term.terms.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                          <ChevronRight className="h-4 w-4 text-primary/50 shrink-0 mt-0.5" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-display font-bold text-2xl tracking-tight mb-8">Important Package Notes</h3>
              <ul className="space-y-4">
                {importantNotes.map((note, idx) => (
                  <li key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/30 transition-colors">
                    <Info className="h-5 w-5 text-primary/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{note}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
