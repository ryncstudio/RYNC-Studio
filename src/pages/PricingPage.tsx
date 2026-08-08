import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Info, Plus, ArrowRight, Check, X, Gift } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingTiers = [
  {
    id: "starter",
    name: "STARTER WEBSITE",
    price: "₱10,000",
    priceSuffix: "/ project",
    description: "A simple website for individuals, startups, and small businesses that only need a clean and professional online presence.",
    isPopular: false,
    bonus: false,
    cta: "Get Started",
    inclusionsTitle: "",
    inclusions: [
      "Up to 3 standard website pages",
      "Clean template-based website design",
      "Business logo and brand color customization",
      "Mobile, tablet, and desktop responsive design",
      "Basic navigation",
      "1 basic contact or inquiry form",
      "Click-to-call and click-to-email",
      "Social media links",
      "Client-provided content upload",
      "Basic image optimization",
      "SSL setup",
      "1 revision round",
      "14 days limited post-launch technical support"
    ],
    limitations: "This package does NOT include SEO, Google Maps, Google Analytics, Google Search Console, Google Business Profile, CMS, Blog system, Product catalog, Booking, E-commerce, Payment gateway, Customer accounts, Admin dashboard, Advanced animations, Custom integrations, Domain, or Hosting."
  },
  {
    id: "business-growth",
    name: "BUSINESS GROWTH WEBSITE",
    price: "₱30,000",
    priceSuffix: "/ project",
    description: "For growing businesses that need a more customized website, stronger online presence, and better tools for customer engagement.",
    isPopular: true,
    bonus: false,
    cta: "Grow Your Business",
    inclusionsTitle: "Everything in Starter, plus:",
    inclusions: [
      "Up to 8 website pages",
      "More customized UI/UX design",
      "Customized homepage sections",
      "CMS for selected website sections",
      "Product or service showcase — up to 15 entries",
      "Gallery, portfolio, projects, news, or blog section",
      "Testimonials section",
      "FAQ section",
      "Up to 2 inquiry forms",
      "Quotation or consultation request form",
      "Google Maps integration",
      "Messaging integration",
      "Newsletter subscription form",
      "Basic spam protection",
      "Website backup setup",
      "Google Analytics integration",
      "Google Search Console setup",
      "Basic keyword research",
      "Basic on-page SEO setup",
      "Local business SEO setup",
      "Basic structured data/schema",
      "Enhanced website optimization",
      "3 revision rounds",
      "60 days limited post-launch support",
      "1 website management training session"
    ],
  },
  {
    id: "premium-business",
    name: "PREMIUM BUSINESS WEBSITE",
    price: "₱75,000",
    priceSuffix: "/ project",
    description: "A fully customized and conversion-focused website for established businesses and brands ready to build a stronger digital presence.",
    isPopular: false,
    bonus: true,
    cta: "Build Your Premium Website",
    inclusionsTitle: "Everything in Business Growth, plus:",
    inclusions: [
      "Up to 10–12 website pages",
      "Fully customized UI/UX design",
      "Wireframes for major pages",
      "Conversion-focused website structure",
      "Custom landing page layouts",
      "Advanced but controlled animations",
      "Interactive website elements",
      "Advanced CMS capabilities",
      "Product/service showcase — up to 30 entries",
      "Category organization and filtering",
      "Advanced inquiry or quotation forms",
      "Conditional form fields",
      "File upload functionality",
      "Automated inquiry confirmation emails",
      "Blog, resources, news, or case studies",
      "Careers/application page",
      "Multiple business location support",
      "Up to 2 third-party integrations",
      "Google Analytics",
      "Google Search Console",
      "Basic conversion tracking",
      "Advanced on-page SEO",
      "Keyword mapping",
      "Internal linking setup",
      "Local business/service schema",
      "Advanced image optimization",
      "Advanced speed optimization",
      "Enhanced security setup",
      "Website backups",
      "Basic uptime monitoring",
      "Cross-browser testing",
      "Mobile/tablet/desktop testing",
      "Pre-launch QA",
      "4 revision rounds",
      "90 days priority post-launch support",
      "2 website management training sessions",
      "Website management documentation"
    ],
    advancedModule: "Includes ONE standard advanced module of your choice (e.g., Appointment / consultation booking, Advanced quotation request, Product/service catalog, Event registration, Careers/job application, Property/business listing directory, Restaurant menu/service catalog, Lead-generation landing page system).",
    bonusInclusions: [
      "Free standard .com domain for the first year",
      "Free standard website hosting for the first year",
      "Free Google Business Profile setup",
      "3 free branded website-launch social media graphics"
    ]
  },
  {
    id: "custom-solution",
    name: "CUSTOM WEBSITE SOLUTION",
    price: "Starting at",
    priceSuffix: "₱100,000",
    pricePrefix: true,
    description: "For businesses that require specialized systems, unique workflows, custom integrations, or web application functionality.",
    isPopular: false,
    bonus: false,
    cta: "Request a Custom Quote",
    inclusionsTitle: "Possible Custom Features:",
    inclusions: [
      "E-commerce",
      "Shopping cart and checkout",
      "GCash / Maya / card / PayMongo integration",
      "Customer registration",
      "Member portals",
      "Subscription systems",
      "Advanced booking systems",
      "Restaurant ordering",
      "Inventory & Order management",
      "Customer / Vendor / Admin dashboards",
      "Employee portal",
      "Learning management system (LMS)",
      "Property listing platforms & Marketplaces",
      "Multilingual websites",
      "Custom calculators",
      "Custom forms/workflows",
      "Custom databases & API integrations",
      "CRM integration",
      "Email/SMS automation",
      "AI chatbot & AI-assisted features",
      "Business workflow automation",
      "Mobile app integration"
    ],
    limitations: "₱100,000 is the starting price only. Final pricing depends on the approved features, pages, integrations, workflows, user roles, database requirements, and overall project complexity."
  }
];

const comparisonTableRows = [
  { feature: "Price", starter: "₱10,000", business: "₱30,000", premium: "₱75,000", custom: "From ₱100,000" },
  { feature: "Recommended For", starter: "Individuals & Startups", business: "Growing Businesses", premium: "Established Brands", custom: "Specialized Systems" },
  { feature: "Website Pages", starter: "Up to 3", business: "Up to 8", premium: "Up to 12", custom: "Custom" },
  { feature: "Responsive Design", starter: true, business: true, premium: true, custom: true },
  { feature: "Design Level", starter: "Template-based", business: "Customized", premium: "Fully Custom", custom: "Fully Custom" },
  { feature: "Custom UI/UX", starter: false, business: true, premium: true, custom: true },
  { feature: "Wireframes", starter: false, business: false, premium: true, custom: true },
  { feature: "CMS", starter: false, business: "Selected Sections", premium: "Advanced", custom: "Custom" },
  { feature: "Product/Service Entries", starter: "-", business: "Up to 15", premium: "Up to 30", custom: "Unlimited/Custom" },
  { feature: "Contact Forms", starter: "1 Basic", business: "Up to 2", premium: "Advanced + Conditional", custom: "Custom Workflows" },
  { feature: "Blog/Gallery/Portfolio", starter: false, business: true, premium: true, custom: true },
  { feature: "Google Maps", starter: "Not Included", business: true, premium: true, custom: true },
  { feature: "Google Analytics", starter: "Not Included", business: true, premium: true, custom: true },
  { feature: "Google Search Console", starter: "Not Included", business: true, premium: true, custom: true },
  { feature: "SEO", starter: "Not Included", business: "Basic On-page & Local", premium: "Advanced & Keyword Mapping", custom: "Advanced Custom SEO" },
  { feature: "Conversion Tracking", starter: false, business: false, premium: true, custom: true },
  { feature: "Messaging Integration", starter: false, business: true, premium: true, custom: true },
  { feature: "Third-Party Integrations", starter: false, business: false, premium: "Up to 2", custom: "Unlimited" },
  { feature: "Advanced Animations", starter: false, business: false, premium: true, custom: true },
  { feature: "Advanced Module", starter: false, business: false, premium: "1 Included", custom: "Fully Custom" },
  { feature: "E-commerce", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Payment Gateway", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Customer Accounts", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Member Portal", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Admin Dashboard", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Inventory Management", starter: false, business: false, premium: "Quoted Separately", custom: true },
  { feature: "Revision Rounds", starter: "1 Round", business: "3 Rounds", premium: "4 Rounds", custom: "Custom" },
  { feature: "Website Training", starter: false, business: "1 Session", premium: "2 Sessions", custom: "Custom" },
  { feature: "Post-Launch Support", starter: "14 Days Limited", business: "60 Days Limited", premium: "90 Days Priority", custom: "Custom Retainer" },
  { feature: "Free Domain (1st Yr)", starter: false, business: false, premium: true, custom: "Depends on scope" },
  { feature: "Free Hosting (1st Yr)", starter: false, business: false, premium: true, custom: "Depends on scope" },
  { feature: "Free Launch Graphics", starter: false, business: false, premium: "3 Graphics", custom: "Custom" },
  { feature: "Estimated Timeline", starter: "7–14 days", business: "3–5 weeks", premium: "5–8 weeks", custom: "Based on scope" },
];

const addons = {
  design: [
    "Additional pages", "Additional sections", "Additional landing pages", "Additional revision rounds", 
    "Major design changes", "Copywriting", "Blog writing", "Product descriptions", "Logo design", 
    "Brand identity", "Photography", "Video production", "Illustrations", "Premium stock assets", 
    "Additional content entries", "Content migration", "Additional languages"
  ],
  features: [
    "Google Maps for Starter", "Google Analytics for Starter", "Google Search Console for Starter", 
    "E-commerce", "Payment gateway", "Booking", "Reservations", "Customer accounts", "Member portals", 
    "Subscriptions", "Admin dashboards", "Customer dashboards", "Vendor dashboards", "Inventory", 
    "Order management", "Advanced search/filtering", "Custom calculators", "Custom forms", "File uploads", 
    "Event registration", "Custom databases"
  ],
  integrations: [
    "CRM", "Email marketing", "SMS", "Messaging platforms", "Calendar", "Accounting software", "APIs", 
    "AI chatbot", "Workflow automation", "Automated notifications", "Mobile app integrations", "Third-party systems"
  ],
  hosting: [
    "Domain", "Hosting", "Renewals", "Hosting upgrades", "Website migration", "Business email", 
    "Advanced security", "Advanced backups", "Performance optimization", "Website recovery", 
    "Emergency repair", "Technical consultation", "Rush development"
  ],
  marketing: [
    "Monthly maintenance", "Monthly SEO", "Keyword tracking", "SEO reports", "Blog content", 
    "Google Business Profile management", "Social media content", "Social media management", 
    "Email marketing", "Advertising setup", "Conversion optimization", "Analytics reporting"
  ]
};

const policies = [
  {
    title: "Additional Charges Policy",
    content: (
      <div className="space-y-4">
        <p className="font-semibold text-lg text-foreground">Additional services are not free.</p>
        <p>Package prices only cover the pages, features, revisions, services, and deliverables specifically stated under the selected package.</p>
        <p>Anything outside the approved package scope must be:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Assessed</li>
          <li>Quoted separately</li>
          <li>Approved by the client</li>
          <li>Paid according to the agreed terms before or during implementation</li>
        </ol>
        <p className="font-medium">No additional work should begin automatically.</p>
      </div>
    )
  },
  {
    title: "Third-Party Fees Policy",
    content: (
      <div className="space-y-4">
        <p>Premium plugins, paid applications, payment-gateway charges, SMS fees, email-platform subscriptions, custom APIs, and other third-party costs are not included in standard packages unless explicitly stated in the proposal.</p>
        <p>Clients are responsible for creating their own accounts and providing payment methods for third-party services requiring ongoing subscriptions.</p>
      </div>
    )
  },
  {
    title: "Revision Policy",
    content: (
      <div className="space-y-4">
        <p>A revision round means one consolidated set of feedback provided by the client after reviewing the drafted website or a major section.</p>
        <p>Please note that adding the following is <strong>NOT</strong> considered a normal revision:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>New pages</li>
          <li>New functionality or logic</li>
          <li>New integrations</li>
          <li>New user roles</li>
          <li>Major redesigns or shifting layout fundamentally</li>
          <li>Rebuilding sections that were already approved</li>
        </ul>
        <p>Such changes require a separate assessment and quotation.</p>
      </div>
    )
  },
  {
    title: "Domain & Hosting Policy",
    content: (
      <div className="space-y-4">
        <p>If your package includes free domain and hosting (e.g., Premium Business Package), it is valid for the first year only. Standard renewals apply thereafter.</p>
        <p>Domain and hosting renewals after the first year, premium domains (e.g., .tech, .io, short domains), dedicated hosting upgrades, additional server resources, and third-party infrastructure fees are charged separately.</p>
      </div>
    )
  },
  {
    title: "SEO Policy",
    content: (
      <div className="space-y-4">
        <p>SEO (Search Engine Optimization) setup helps make the website search-engine friendly, indexable, and technically sound, but it does not guarantee a specific Google ranking.</p>
        <p>Search algorithms change constantly. Continuous SEO campaigns, content writing, backlink building, and monthly ranking reports require a separate monthly marketing or SEO retainer plan.</p>
      </div>
    )
  },
  {
    title: "Client Responsibilities",
    content: (
      <div className="space-y-4">
        <p>The client is responsible for providing accurate business information, final texts/copy (unless copywriting is purchased), high-resolution images, logos, policies (Terms & Conditions, Privacy Policy), and other required materials in a timely manner.</p>
        <p>Delays in providing content will directly affect the project development timeline.</p>
      </div>
    )
  },
  {
    title: "Project Timeline Policy",
    content: (
      <div className="space-y-4">
        <p>The estimated timelines provided in the packages (e.g., 3–5 weeks) commence only when the initial payment is cleared and all required content, branding assets, and necessary access details have been provided by the client.</p>
        <p>Extended delays in client feedback or content submission may result in project pausing and rescheduling.</p>
      </div>
    )
  },
  {
    title: "Website Ownership & Handover",
    content: (
      <div className="space-y-4">
        <p>Upon full completion of the project and full clearance of all payments, the website ownership is officially handed over to the client.</p>
        <p>The website will be launched and administrator access will be provided only after the project balance and required approvals have been completed.</p>
      </div>
    )
  },
  {
    title: "Post-Launch Support Policy",
    content: (
      <div className="space-y-4">
        <p>Packages include a limited period of post-launch technical support (e.g., 14 days for Starter, 60 days for Business Growth) for bug fixes, technical issues, or minor corrections directly related to the delivered work.</p>
        <p>Post-launch support does NOT cover creating new pages, designing new assets, implementing new features, or fixing issues caused by third-party plugins installed by the client after handover.</p>
      </div>
    )
  },
  {
    title: "Payment Terms",
    content: (
      <div className="space-y-6">
        <div>
          <h4 className="font-bold text-foreground">Starter — ₱10,000</h4>
          <ul className="list-disc pl-5">
            <li>50% initial payment</li>
            <li>50% before website launch</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground">Business Growth — ₱30,000</h4>
          <ul className="list-disc pl-5">
            <li>50% initial payment</li>
            <li>30% after design approval</li>
            <li>20% before website launch</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground">Premium — ₱75,000</h4>
          <ul className="list-disc pl-5">
            <li>40% initial payment</li>
            <li>30% after design approval</li>
            <li>30% before website launch</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-foreground">Custom — Starting at ₱100,000</h4>
          <ul className="list-disc pl-5">
            <li>Milestone-based payment schedule depending on project scope.</li>
          </ul>
        </div>
      </div>
    )
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30">
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none -z-10" />
        <div className="container max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-mono text-sm font-bold tracking-widest rounded-full mb-6 uppercase">
              Pricing Plans
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
              Websites engineered for <br className="hidden sm:block" />
              performance and growth.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              From a simple online presence to a fully customized business platform, choose a package that fits where your business is today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Tiers Grid */}
      <section className="pb-24 px-4 md:px-6 relative z-10">
        <div className="container max-w-7xl mx-auto">
          {/* Main 4 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "relative flex flex-col rounded-3xl border bg-card p-6 md:p-8 shadow-sm transition-all duration-300",
                  tier.isPopular ? "border-primary shadow-xl shadow-primary/10 ring-1 ring-primary/20 scale-100 xl:scale-105 z-10" : "border-border/50 hover:shadow-lg"
                )}
              >
                {tier.isPopular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-gradient-to-r from-primary to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-lg font-display font-bold tracking-tight mb-2">{tier.name}</h3>
                  <div className="flex flex-col gap-1 min-h-[4rem] justify-center mb-4">
                    {tier.pricePrefix ? (
                      <>
                        <span className="text-sm font-medium text-muted-foreground">{tier.price}</span>
                        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                          {tier.priceSuffix}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-3xl md:text-4xl font-display font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/80">
                          {tier.price}
                        </span>
                        {tier.priceSuffix && (
                          <span className="text-sm font-medium text-muted-foreground">{tier.priceSuffix}</span>
                        )}
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[4.5rem]">
                    {tier.description}
                  </p>
                </div>

                <div className="flex-1 space-y-6">
                  {tier.inclusionsTitle && (
                    <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 pb-2 border-b border-border/50">
                      {tier.inclusionsTitle}
                    </h4>
                  )}
                  <ul className="space-y-3">
                    {tier.inclusions.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary/80 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Premium Advanced Module */}
                  {tier.advancedModule && (
                    <div className="mt-4 p-4 rounded-xl bg-accent/30 border border-accent">
                      <p className="text-sm text-foreground font-medium mb-1 flex items-center gap-2">
                        <Plus className="h-4 w-4 text-primary" /> Included Module
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {tier.advancedModule}
                        <br/><br/>
                        <span className="italic">Note: Complex workflows require a separate quotation.</span>
                      </p>
                    </div>
                  )}

                  {/* Free Bonuses for Premium */}
                  {tier.bonus && tier.bonusInclusions && (
                    <div className="mt-6 p-4 rounded-xl bg-gradient-to-b from-emerald-500/10 to-transparent border border-emerald-500/20">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3 flex items-center gap-2">
                        <Gift className="h-4 w-4" /> FREE BONUSES INCLUDED
                      </h4>
                      <ul className="space-y-2">
                        {tier.bonusInclusions.map((bonus, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2 text-xs text-foreground/80 font-medium">
                            <Check className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="leading-snug">{bonus}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[10px] text-muted-foreground mt-4 leading-relaxed opacity-80">
                        *Domain and hosting renewals after the first year, premium domains, hosting upgrades, additional resources, and third-party fees are charged separately.
                      </p>
                    </div>
                  )}

                  {/* Limitations (Starter / Custom) */}
                  {tier.limitations && (
                    <div className="mt-6 p-4 rounded-xl bg-muted/40 text-xs text-muted-foreground">
                      <span className="font-semibold block mb-1 text-foreground/70">Important Note:</span>
                      <span className="leading-relaxed block">{tier.limitations}</span>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                  <Button asChild size="lg" className={cn("w-full rounded-full", tier.isPopular ? "bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-white border-0 shadow-lg" : "bg-accent text-accent-foreground hover:bg-accent/80")}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Global Notice */}
          <div className="mt-12 text-center max-w-4xl mx-auto pt-6">
            <p className="text-sm text-muted-foreground leading-relaxed bg-accent/30 p-4 rounded-xl inline-block border border-border/40">
              <strong className="text-foreground font-semibold">Additional services are not free.</strong> Pages, features, revisions, integrations, content, and other requirements not listed in the selected package will be quoted and charged separately.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-accent/10 border-y border-border/40 px-4 md:px-6 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4">Package Comparison</h2>
            <p className="text-muted-foreground">A detailed breakdown of features across all our website packages.</p>
          </div>
          
          <div className="w-full overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0">
            <div className="min-w-[800px] lg:min-w-full inline-block align-middle">
              <div className="overflow-hidden border border-border/50 rounded-2xl bg-card">
                <table className="min-w-full divide-y divide-border/50">
                  <thead className="bg-muted/50">
                    <tr>
                      <th scope="col" className="sticky left-0 bg-muted/50 z-10 py-5 pl-6 pr-3 text-left text-sm font-bold text-foreground uppercase tracking-wider w-1/4 min-w-[200px] border-r border-border/50">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-foreground uppercase tracking-wider w-[18%]">
                        Starter
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-primary uppercase tracking-wider w-[18%] relative overflow-hidden">
                        <div className="absolute inset-0 bg-primary/5 -z-10"></div>
                        Business Growth
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-foreground uppercase tracking-wider w-[18%]">
                        Premium
                      </th>
                      <th scope="col" className="px-6 py-5 text-center text-sm font-bold text-foreground uppercase tracking-wider w-[18%]">
                        Custom
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50 bg-card">
                    {comparisonTableRows.map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/30 transition-colors">
                        <td className="sticky left-0 bg-card z-10 whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-foreground border-r border-border/50 shadow-[1px_0_0_0_rgba(0,0,0,0.05)] dark:shadow-[1px_0_0_0_rgba(255,255,255,0.05)] group-hover:bg-muted/30">
                          {row.feature}
                        </td>
                        
                        {['starter', 'business', 'premium', 'custom'].map((tier) => {
                          const val = row[tier as keyof typeof row];
                          const isBool = typeof val === 'boolean';
                          const isNotIncluded = val === "Not Included";
                          
                          return (
                            <td key={tier} className={cn(
                              "whitespace-nowrap px-6 py-4 text-sm text-center",
                              tier === 'business' ? "bg-primary/[0.02]" : "",
                              isNotIncluded ? "text-muted-foreground/60" : "text-muted-foreground"
                            )}>
                              {isBool ? (
                                val ? (
                                  <Check className={cn("h-5 w-5 mx-auto", tier === 'business' ? "text-primary" : "text-foreground")} />
                                ) : (
                                  <X className="h-4 w-4 mx-auto text-muted-foreground/30" />
                                )
                              ) : (
                                <span className={cn(
                                  isNotIncluded && "italic text-xs",
                                  val === "Advanced" || val === "Fully Custom" ? "font-medium text-foreground" : ""
                                )}>
                                  {val}
                                </span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services & Add-ons */}
      <section className="py-24 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">Additional Services & Add-ons</h2>
            <p className="text-muted-foreground">Enhance your chosen package with specific add-ons and services tailored to your exact needs. All items here are quoted separately.</p>
          </div>
          
          <Tabs defaultValue="features" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="flex-wrap h-auto bg-muted/50 justify-center gap-1 p-1">
                <TabsTrigger value="design" className="rounded-full px-4 py-2">Design & Content</TabsTrigger>
                <TabsTrigger value="features" className="rounded-full px-4 py-2">Features</TabsTrigger>
                <TabsTrigger value="integrations" className="rounded-full px-4 py-2">Integrations</TabsTrigger>
                <TabsTrigger value="hosting" className="rounded-full px-4 py-2">Hosting & Tech</TabsTrigger>
                <TabsTrigger value="marketing" className="rounded-full px-4 py-2">Marketing</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(addons).map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border border-border/50 rounded-3xl p-8 md:p-12 shadow-sm"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                    {items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Plus className="h-4 w-4 text-primary shrink-0 mt-0.5 opacity-70" />
                        <span className="text-sm text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Policies / FAQ */}
      <section className="py-24 bg-accent/5 border-t border-border/40 px-4 md:px-6">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-3xl md:text-4xl tracking-tight mb-4">Policies & Project Guidelines</h2>
            <p className="text-muted-foreground">Important information regarding how we handle projects, revisions, and ongoing support.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {policies.map((policy, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border/50 rounded-2xl px-2 shadow-sm overflow-hidden data-[state=open]:border-primary/30">
                <AccordionTrigger className="px-4 py-5 hover:no-underline font-semibold text-left">
                  {policy.title}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-6 text-muted-foreground leading-relaxed text-sm">
                  {policy.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-violet-500/10 pointer-events-none -z-10" />
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6">
                Ready to build your new website?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Contact us today to request a quotation, schedule a consultation, or ask any questions about our packages.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-violet-500 text-white border-0 shadow-lg hover:shadow-xl hover:opacity-90 h-14 px-8 text-base">
                  <Link href="/contact">Get Started Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-background/50 backdrop-blur-sm">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
