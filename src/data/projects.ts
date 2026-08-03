import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import partnerFilkart from "@/assets/partner-filkart.jpg";
import partnerTrt from "@/assets/partner-trt.png";
import sukiMockup from "@/assets/suki-mockup.jpg";
import sugboTaMockup from "@/assets/sugbo-ta-mockup.jpg";
export interface Project {
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url?: string;
  isFlagship?: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    results: string[];
    stack: string[];
  };
}

export const projects: Project[] = [
  {
    title: "Sugbo Ta!",
    slug: "sugbo-ta",
    category: "Travel & Tourism Platform",
    description: "Your ultimate guide to exploring Cebu. A platform built by RYNC to discover local experiences, plan trips, and connect with the community.",
    image: sugboTaMockup,
    tags: ["RYNC Original"],
    isFlagship: true,
    caseStudy: {
      overview: "Coming soon.",
      challenge: "Coming soon.",
      solution: "Coming soon.",
      results: [],
      stack: [],
    },
  },
  {
    title: "SUKI",
    slug: "suki",
    category: "E-Commerce App",
    description: "The smarter way to shop local. A digital marketplace built by RYNC connecting local sellers with buyers seamlessly.",
    image: sukiMockup,
    tags: ["RYNC Original"],
    isFlagship: true,
    caseStudy: {
      overview: "Coming soon.",
      challenge: "Coming soon.",
      solution: "Coming soon.",
      results: [],
      stack: [],
    },
  },
  {
    title: "PorbEduAksyon",
    slug: "porbEduAksyon",
    category: "Education",
    description: "Accessible online learning platform empowering marginalized citizens with skills and opportunities—built with inclusivity and performance as core principles.",
    image: project2,
    tags: ["Personal"],
    caseStudy: {
      overview: "PorbEduAksyon is a civic tech initiative aimed at providing free skills education to Filipinos in rural and underserved areas, where internet connectivity is limited.",
      challenge: "The platform needed to work reliably on 3G connections with older Android devices — while still feeling modern and professional enough to attract educators willing to contribute content.",
      solution: "We built a lightweight, performance-first platform with lazy loading, compressed assets, and offline-ready lesson caching. The UI was designed with accessibility in mind — large touch targets, high contrast, and simple navigation.",
      results: [
        "Platform loads in under 2 seconds on 3G connections",
        "Over 2,000 students accessed courses in the first 3 months",
        "Zero-to-enrolled funnel completed in under 3 minutes on average",
        "Featured as a civic tech example at a regional education summit",
      ],
      stack: ["Next.js", "TypeScript", "Supabase", "PWA", "Vercel"],
    },
  },
  {
    title: "PawVita",
    slug: "pawvita",
    category: "Pet Care",
    description: "Premium pet essentials and trusted veterinary care—delivered through a friction-free e-commerce experience that prioritizes product discovery and checkout speed.",
    image: project3,
    tags: ["Personal"],
    caseStudy: {
      overview: "PawVita is a pet wellness brand offering curated pet products and veterinary consultations. They needed an e-commerce platform that communicated premium quality while remaining approachable to everyday pet owners.",
      challenge: "The founder had a clear brand vision but no website presence. She needed to launch fast, compete with established pet shops, and convert first-time visitors into paying customers.",
      solution: "We designed and built a warm, trust-forward e-commerce experience with product spotlights, testimonial highlights, and a frictionless checkout. The vet consultation booking feature was integrated directly into the product pages.",
      results: [
        "Launched within 3 weeks from project kickoff",
        "First sale within 48 hours of going live",
        "Average session duration of 3.5 minutes — well above e-commerce benchmarks",
        "Customers regularly comment on how professional the site looks vs. competitors",
      ],
      stack: ["React", "Shopify", "Tailwind CSS", "Stripe"],
    },
  },
  {
    title: "Southshore Tours",
    slug: "southshore-tours",
    category: "Travel & Tourism",
    description: "Travel and tour booking platform showcasing Cebu's best destinations with seamless user experience and stunning visual storytelling.",
    image: project4,
    tags: ["Client", "Ongoing"],
    caseStudy: {
      overview: "Southshore Tours is a Cebu-based travel company offering curated island tours and adventure packages. They were relying entirely on Facebook Messenger for bookings — a process that was slow, error-prone, and hard to scale.",
      challenge: "The business needed a proper booking system that could handle multiple tour packages, date availability, and group sizes — while keeping the experience simple enough for tourists unfamiliar with the brand.",
      solution: "We built a visually stunning booking platform with a custom tour catalog, real-time availability calendar, and automated confirmation emails. The design paired Cebu's natural beauty with clean, conversion-focused UI patterns.",
      results: [
        "Direct bookings via website reduced Facebook Messenger load by 70%",
        "Average booking time cut from 20+ minutes (manual) to under 5 minutes",
        "Tour packages now sell out faster due to urgency indicators on the site",
        "Ongoing: Adding review integration and a loyalty rewards program",
      ],
      stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    },
  },
  {
    title: "FilKart Online Shop",
    slug: "filkart",
    category: "E-Commerce",
    description: "A seamless and modern online shopping experience built for the local market.",
    image: partnerFilkart,
    tags: ["Client", "Ongoing"],
    caseStudy: {
      overview: "Coming soon.",
      challenge: "Coming soon.",
      solution: "Coming soon.",
      results: [],
      stack: [],
    },
  },
  {
    title: "TRT Philippines",
    slug: "trt-philippines",
    category: "Business",
    description: "Professional digital presence for TRT Philippines, showcasing their services and establishing brand authority.",
    image: partnerTrt,
    tags: ["Client", "Ongoing"],
    caseStudy: {
      overview: "Coming soon.",
      challenge: "Coming soon.",
      solution: "Coming soon.",
      results: [],
      stack: [],
    },
  },
];
