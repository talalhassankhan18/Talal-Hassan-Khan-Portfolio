import telentum from "@/assets/project-telentum.png";
import pennymart from "@/assets/project-pennymart.png";
import opernexa from "@/assets/project-opernexa.png";
import arcus from "@/assets/project-arcus.png";
import pslpa from "@/assets/project-pslpa.png";
import sportskpk from "@/assets/Sports App KPK.png";
import quicklift from "@/assets/Quicklift.png";
import trackpro from "@/assets/project-trackpro.png";
import turkish from "@/assets/project-turkish.png";
import salonsphere from "@/assets/SalonSphere.jpeg";
import mmgc from "@/assets/MMGC.jpeg";
import snapleads from "@/assets/Snapleads.png";
import akhunzada from "@/assets/project-akhunzada.png";
import crypt2call from "@/assets/Crypt2Call.png";
import crypt2callUpdates from "@/assets/project-crypt2call-updates.png";
import carrycare from "@/assets/CarryCare.png";
import pregnancy from "@/assets/PregnancyApp.png";
import tenant from "@/assets/KTVS.png";
import cultural from "@/assets/CEC.png";
import lagotto from "@/assets/project-lagotto.png";
import ceramind from "@/assets/Ceramind.png";
import muckdogs from "@/assets/MuckDogs Baseball.png";
import baltimore from "@/assets/Baltimore sports.png";
import euroway from "@/assets/Eurosports.png";

export type Category = "SaaS" | "Website" | "Mobile" | "Redesign";

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: Category;
  image: string;
  gallery?: string[];
  tags: string[];
  featured?: boolean;
  caseStudy: {
    overview: string;
    challenge: string;
    solution: string;
    impact: string[];
    role: string;
    timeline: string;
  };
}

export const projects: Project[] = [
  // SaaS
  {
    slug: "salonsphere",
    title: "SalonSphere",
    description:
      "Salon growth platform helping businesses, vendors and customers connect and book seamlessly.",
    category: "SaaS",
    image: salonsphere,
    tags: ["Booking", "Marketplace", "SaaS"],
    featured: true,
    caseStudy: {
      overview:
        "A 3-sided marketplace connecting salons, beauty product vendors and end customers in a single ecosystem.",
      challenge:
        "Existing salon booking tools handled appointments only — vendors and customers had no shared platform, fragmenting the experience.",
      solution:
        "Designed unified flows for salon onboarding, vendor product catalog, and customer booking with a premium pink/purple identity and clear role-based dashboards.",
      impact: [
        "3-sided marketplace shipped",
        "Cart, booking & loyalty in one app",
        "Brand-led product hero sections",
      ],
      role: "Lead UI/UX Designer",
      timeline: "8 weeks",
    },
  },
  {
    slug: "opernexa",
    title: "Opernexa",
    description:
      "Workplace management platform with project tracking, team collaboration and ERP modules.",
    category: "SaaS",
    image: opernexa,
    tags: ["Dashboard", "ERP", "SaaS"],
    featured: true,
    caseStudy: {
      overview:
        "All-in-one workplace OS combining project tracking, team collaboration, HR and finance ERP modules.",
      challenge:
        "Teams were juggling 5+ tools daily with no single source of truth for projects, people and finances.",
      solution:
        "Built a modular dashboard system with shared design tokens, role-based navigation, and data-rich widgets that scale across modules.",
      impact: [
        "Unified 5+ tools into one app",
        "Modular widget-based design system",
        "Used by ops, HR & finance teams",
      ],
      role: "Senior Product Designer",
      timeline: "12 weeks",
    },
  },
  {
    slug: "mmgc",
    title: "Medical Management & General Care",
    description:
      "Healthcare management platform for doctors, patients and admins — appointments, records & payments.",
    category: "SaaS",
    image: mmgc,
    tags: ["Healthcare", "Mobile", "SaaS"],
    caseStudy: {
      overview:
        "MMGC unifies doctor dashboards, patient records, appointment scheduling and payments across mobile and web.",
      challenge:
        "Doctors needed clinical info in seconds while patients expected a friendly, calm booking experience.",
      solution:
        "Created two distinct themes within one design system — high-density dashboards for doctors, calm card-based UI for patients.",
      impact: [
        "Designed 40+ screens",
        "Shipped doctor + patient apps",
        "Built medical design system",
      ],
      role: "Product Designer",
      timeline: "10 weeks",
    },
  },
  {
    slug: "snapleads",
    title: "SnapLeads",
    description: "Lead management dashboard with CRM, sales tracking and pipeline visualization.",
    category: "SaaS",
    image: snapleads,
    tags: ["CRM", "Dashboard", "SaaS"],
    caseStudy: {
      overview:
        "A lead intelligence dashboard giving sales teams a real-time view of every deal in the pipeline.",
      challenge:
        "Sales reps were exporting CSVs daily because their CRM hid the most important conversion signals.",
      solution:
        "Designed a kanban-first pipeline with inline analytics, lead scoring and automated stage progression.",
      impact: [
        "Reduced CSV exports by 80%",
        "Deal-stage clarity for reps",
        "Modern dark-mode CRM aesthetic",
      ],
      role: "Product Designer",
      timeline: "6 weeks",
    },
  },

  // Mobile
  {
    slug: "sports-kpk",
    title: "Sports App KPK",
    description:
      "Mobile experience for discovering venues, joining teams and tracking sports activity in KPK.",
    category: "Mobile",
    image: sportskpk,
    tags: ["iOS", "Sports", "Community"],
    featured: true,
    caseStudy: {
      overview:
        "Government-backed sports app helping citizens discover venues, join local teams and track activity.",
      challenge:
        "Sports facilities and youth programs across KPK had no central digital home, making participation hard.",
      solution:
        "Designed a vibrant, energetic mobile experience with map-first venue discovery and lightweight team-joining flows.",
      impact: [
        "Province-wide sports directory",
        "Map-first venue UX",
        "Teen-friendly visual language",
      ],
      role: "Mobile Designer",
      timeline: "5 weeks",
    },
  },
  {
    slug: "crypt2call",
    title: "Crypt2Call",
    description: "Encrypted messaging app with channels, status updates and secure calls.",
    category: "Mobile",
    image: crypt2call,
    gallery: [crypt2call, crypt2callUpdates],
    tags: ["Messaging", "iOS", "Privacy"],
    caseStudy: {
      overview:
        "Privacy-first messaging app blending WhatsApp-style chats with channels, communities and encrypted calls.",
      challenge:
        "Users wanted Telegram-grade features without sacrificing the simplicity of consumer messaging apps.",
      solution:
        "Designed a bold navy + orange identity with a 5-tab structure that balances chats, channels, communities and calls.",
      impact: [
        "Bold privacy-first identity",
        "5-tab IA covering all features",
        "Channel discovery built-in",
      ],
      role: "Lead Mobile Designer",
      timeline: "7 weeks",
    },
  },
  {
    slug: "quick-lift",
    title: "Quick Lift",
    description: "Ride-sharing app with route navigation, driver verification and trip ratings.",
    category: "Mobile",
    image: quicklift,
    tags: ["Ride", "Maps", "Mobile"],
    caseStudy: {
      overview:
        "A regional ride-sharing app focused on safety, transparent pricing and driver community.",
      challenge:
        "Drivers and riders wanted an alternative to global apps with local pricing and stronger safety verification.",
      solution:
        "Crafted a warm, human onboarding and trust-driven driver profiles with verification badges throughout.",
      impact: [
        "Trust-led driver profiles",
        "Transparent pricing UI",
        "Friendly brand storytelling",
      ],
      role: "Mobile Designer",
      timeline: "6 weeks",
    },
  },
  {
    slug: "carrycare",
    title: "CarryCare",
    description:
      "School child tracking app with live bus location, parent notifications and child profiles.",
    category: "Mobile",
    image: carrycare,
    tags: ["Mobile", "Family", "Tracking"],
    caseStudy: {
      overview:
        "A safety-first school-bus tracking app keeping parents informed about their child's commute.",
      challenge:
        "Parents had no real-time visibility into school bus delays, pickups or drop-offs.",
      solution:
        "Designed live-map tracking, child profile cards and gentle yellow/blue palette for a reassuring feel.",
      impact: ["Live-map peace of mind", "Parent + driver apps", "Friendly family-safe design"],
      role: "Product Designer",
      timeline: "5 weeks",
    },
  },
  {
    slug: "pregnancy-care",
    title: "Pregnancy Care",
    description: "Weekly pregnancy tracker with baby growth, health tips and doctor appointments.",
    category: "Mobile",
    image: pregnancy,
    tags: ["Health", "Mobile", "Wellness"],
    caseStudy: {
      overview:
        "Companion app for expecting mothers — weekly progress, baby growth visuals and doctor scheduling.",
      challenge: "New mothers wanted one calm space for tracking, education and professional care.",
      solution:
        "Built a soft pastel design system with weekly milestone cards and gentle illustration style.",
      impact: ["Calming, non-clinical UI", "Week-by-week journey", "Embedded telehealth booking"],
      role: "Product Designer",
      timeline: "4 weeks",
    },
  },
  {
    slug: "tenant-verification",
    title: "Tenant Verification",
    description: "Document verification app for landlords with ID scanning and approval workflow.",
    category: "Mobile",
    image: tenant,
    tags: ["Mobile", "PropTech", "Verification"],
    caseStudy: {
      overview:
        "Mobile tool letting landlords verify tenant identity through document scans and approval workflows.",
      challenge: "Manual paper-based tenant verification was slow, error-prone and unsafe.",
      solution:
        "Designed a quick scan → review → approve flow with status tracking and landlord dashboard.",
      impact: ["3-step verification flow", "Landlord dashboard", "Status tracking built-in"],
      role: "Product Designer",
      timeline: "4 weeks",
    },
  },

  // Website
  {
    slug: "turkish-furniture",
    title: "Turkish Furniture",
    description:
      "Premium furniture eCommerce platform with category browsing, weekly bestsellers and coupons.",
    category: "Website",
    image: turkish,
    tags: ["eCommerce", "Furniture", "Web"],
    featured: true,
    caseStudy: {
      overview:
        "A full eCommerce experience for a premium Turkish furniture brand — discovery, browsing and checkout.",
      challenge:
        "Existing site felt dated and didn't communicate the craftsmanship of authentic Turkish design.",
      solution:
        "Created a refined, magazine-style layout with curated collections, clean grid product pages and warm earth tones.",
      impact: [
        "Premium brand-led storytelling",
        "Conversion-focused product cards",
        "Bestsellers + coupon system",
      ],
      role: "Web Designer",
      timeline: "6 weeks",
    },
  },
  {
    slug: "telentum",
    title: "Telentum Consulting",
    description: "HR consultancy platform with services, podcasts, videos and lead capture flows.",
    category: "Website",
    image: telentum,
    tags: ["HR", "Consulting", "Web"],
    featured: true,
    caseStudy: {
      overview:
        "Digital home for an HR consultancy — services, thought leadership content and lead capture.",
      challenge: "Telentum needed a credible, premium presence to attract enterprise HR clients.",
      solution:
        "Designed a professional editorial layout with strong typography, podcast hub and contextual CTAs.",
      impact: [
        "Lead-capture conversion lift",
        "Podcast & video hub",
        "Premium consultancy positioning",
      ],
      role: "Web Designer",
      timeline: "5 weeks",
    },
  },
  {
    slug: "qtrack-pro",
    title: "QTrack Pro",
    description:
      "Vehicle tracking platform with transparent pricing, fleet insights and live monitoring.",
    category: "Website",
    image: trackpro,
    tags: ["Fleet", "SaaS", "Web"],
    caseStudy: {
      overview:
        "Marketing site + product showcase for a vehicle tracking and fleet management platform.",
      challenge:
        "Buyers needed clarity on pricing tiers and live capabilities before booking a demo.",
      solution:
        "Built transparent pricing comparison, animated product mockups and demo-booking flow.",
      impact: ["Transparent pricing tiers", "Animated product UI", "Higher demo-request rate"],
      role: "Web Designer",
      timeline: "4 weeks",
    },
  },
  {
    slug: "akhunzada",
    title: "Akhunzada Associates",
    description:
      "Civil & transport infrastructure engineering company website with project portfolio.",
    category: "Website",
    image: akhunzada,
    tags: ["Engineering", "Corporate", "Web"],
    caseStudy: {
      overview:
        "Premium engineering company site showcasing infrastructure work, capabilities and project history.",
      challenge:
        "Akhunzada needed to showcase decades of civil/transport work in a way that won large public tenders.",
      solution:
        "Designed a bold dark-themed site with cinematic hero, stats-led trust building and rich project case studies.",
      impact: [
        "Tender-winning credibility",
        "Cinematic hero presentation",
        "Project & stats storytelling",
      ],
      role: "Web Designer",
      timeline: "5 weeks",
    },
  },
  {
    slug: "pslpa",
    title: "PSLPA",
    description:
      "Pakistan Speech and Language Pathologist Association web platform with directory and gallery.",
    category: "Website",
    image: pslpa,
    tags: ["Healthcare", "Directory", "Web"],
    caseStudy: {
      overview:
        "Web platform for the Pakistan Speech and Language Pathologist Association — directory, gallery and member resources.",
      challenge:
        "Members and patients had no central place to discover certified pathologists or association events.",
      solution:
        "Built a searchable directory, event gallery and clean medical-trust design system.",
      impact: ["Central member directory", "Event & resource hub", "Trust-led healthcare design"],
      role: "Web Designer",
      timeline: "4 weeks",
    },
  },

  // Redesign
  {
    slug: "arcus",
    title: "Arcus Roof",
    description:
      "Premium roofing company landing page redesign focused on services and lead generation.",
    category: "Redesign",
    image: arcus,
    tags: ["Services", "Landing", "Redesign"],
    caseStudy: {
      overview: "Landing page redesign for a premium US roofing company driving inbound leads.",
      challenge: "Original site buried services and had a weak call-to-action, hurting conversion.",
      solution: "Redesigned with a service-first hero, project gallery and prominent quote CTA.",
      impact: [
        "Service-first information architecture",
        "Stronger lead conversion",
        "Project gallery showcase",
      ],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "penny-mart",
    title: "Penny Mart",
    description: "Grocery & lifestyle eCommerce redesign with fresh category browsing and offers.",
    category: "Redesign",
    image: pennymart,
    tags: ["eCommerce", "Grocery", "Redesign"],
    caseStudy: {
      overview: "Full landing page redesign for a grocery and lifestyle eCommerce brand.",
      challenge: "Site had cluttered category browsing and low offer visibility.",
      solution: "Reorganized into clean category cards, hero promotions and bold deal badges.",
      impact: ["Cleaner category browsing", "Higher deal visibility", "Modern grocery aesthetic"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "cultural-enrichment",
    title: "Cultural Enrichment Center",
    description: "Directory landing page for cultural programs, events and community offerings.",
    category: "Redesign",
    image: cultural,
    tags: ["Directory", "Community", "Redesign"],
    caseStudy: {
      overview: "Landing page redesign for a cultural enrichment center directory.",
      challenge: "Existing layout buried programs and events behind heavy navigation.",
      solution: "Surfaced featured programs, search-first hero and warm cultural color palette.",
      impact: ["Search-first discovery", "Featured program cards", "Warm cultural identity"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "lagotto-homes",
    title: "Lagotto Homes",
    description: "Luxury real estate landing page redesign with hero villa and curated listings.",
    category: "Redesign",
    image: lagotto,
    tags: ["Real Estate", "Luxury", "Redesign"],
    caseStudy: {
      overview: "Landing page redesign for a luxury real estate developer.",
      challenge: "Old site felt generic and didn't communicate luxury or craft.",
      solution:
        "Crafted an editorial hero, sophisticated cream + green palette and refined typography.",
      impact: ["Luxury editorial feel", "Curated listing layout", "Refined brand typography"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "ceramind",
    title: "Ceramind",
    description: "Premium ceramic tile and surfaces brand landing page redesign.",
    category: "Redesign",
    image: ceramind,
    tags: ["Brand", "Architecture", "Redesign"],
    caseStudy: {
      overview: "Landing page redesign for a premium ceramic tiles and surfaces brand.",
      challenge: "Brand needed a high-end, architecture-inspired digital identity.",
      solution:
        "Designed a minimal, gallery-first layout showcasing material textures with calm beige tones.",
      impact: ["Architecture-led visual story", "Material-first imagery", "Calm minimal palette"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "muckdogs",
    title: "Muckdogs Baseball Club",
    description: "Sports team landing page redesign with schedule, ticketing and team news.",
    category: "Redesign",
    image: muckdogs,
    tags: ["Sports", "Tickets", "Redesign"],
    caseStudy: {
      overview:
        "Landing page redesign for a baseball club, focused on game schedules and ticket sales.",
      challenge: "Fans struggled to find game times and buy tickets quickly.",
      solution: "Designed a bold sports identity with schedule-first hero and clear ticket CTAs.",
      impact: ["Faster ticket conversion", "Schedule-first hero", "Bold sports identity"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "baltimore-sports",
    title: "Baltimore Sports & Life",
    description: "Sports media landing page redesign with articles, podcasts and city lifestyle.",
    category: "Redesign",
    image: baltimore,
    tags: ["Media", "Sports", "Redesign"],
    caseStudy: {
      overview:
        "Landing page redesign for a Baltimore sports media brand combining articles and podcasts.",
      challenge: "Content discovery was poor and the brand felt outdated for younger fans.",
      solution: "Modern editorial grid with podcast hub and bold Baltimore-inspired palette.",
      impact: ["Modern editorial grid", "Podcast discovery", "Bold city-led identity"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
  {
    slug: "euroway",
    title: "Euroway Sports",
    description: "Sports apparel & equipment landing page redesign with category browsing.",
    category: "Redesign",
    image: euroway,
    tags: ["eCommerce", "Sports", "Redesign"],
    caseStudy: {
      overview: "Landing page redesign for a European sports apparel and equipment retailer.",
      challenge: "Original storefront felt generic — needed energy, motion and category clarity.",
      solution:
        "Designed a bold red/black identity with action-led hero and clear product category cards.",
      impact: ["Energetic action-led hero", "Category-first IA", "Higher add-to-cart rate"],
      role: "UI Designer",
      timeline: "2 weeks",
    },
  },
];

export const experience = [
  {
    company: "QuipSol",
    role: "Senior UI/UX Designer",
    period: "Jan 2026 – Present",
    points: [
      "Leading end-to-end product design",
      "Designing SaaS dashboards & scalable design systems",
      "Client requirements, dev collaboration & usability testing",
    ],
  },
  {
    company: "QuipSol",
    role: "UI/UX Designer",
    period: "Jul 2025 – Jan 2026",
    points: ["Website design, wireframing & prototyping", "UI improvements and developer handoffs"],
  },
  {
    company: "HiSkyTech",
    role: "UI/UX Designer",
    period: "Sep 2024 – Apr 2025",
    points: ["UI design, research and user testing", "Product design collaboration across teams"],
  },
];

export const skills = [
  "UI Design",
  "UX Design",
  "SaaS Product Design",
  "Mobile App Design",
  "Website Design",
  "Landing Page Design",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "User Research",
  "Responsive Design",
  "Interaction Design",
];

export const tools = [
  "Figma",
  "Adobe XD",
  "Sketch",
  "Illustrator",
  "Framer",
  "Webflow",
  "HTML/CSS",
  "React",
];

export const testimonials = [
  {
    name: "Rose Patric",
    role: "Verified Buyer",
    location: "United States",
    platform: "Fiverr",
    rating: 5,
    quote: "Great seller, very fast and reliable, will work with seller again.",
  },
  {
    name: "Daniel Hayes",
    role: "Product Owner",
    location: "United Kingdom",
    platform: "Direct Client",
    rating: 5,
    quote:
      "Talal redesigned our SaaS platform beautifully. The new dashboard feels modern, on-brand and finally easy for our team to use every day.",
  },
  {
    name: "Marcus Reed",
    role: "Startup CEO",
    location: "Canada",
    platform: "Upwork",
    rating: 5,
    quote:
      "Excellent communication and premium quality work. Delivered ahead of schedule, every single time. Easily one of the best designers I've worked with.",
  },
  {
    name: "Sophia Müller",
    role: "Marketing Lead",
    location: "Germany",
    platform: "LinkedIn",
    rating: 5,
    quote:
      "Talal turned our messy landing page into a high-converting experience. Clear thinking, sharp design, and a real partner through the whole process.",
  },
  {
    name: "Aisha Rahman",
    role: "Founder",
    location: "United Arab Emirates",
    platform: "Direct Client",
    rating: 5,
    quote:
      "He understood our brand from day one. The mobile app he designed for us looks premium and our users love how intuitive it feels.",
  },
];

export const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "40+", label: "Happy Clients" },
  { value: "2+", label: "Years Experience" },
  { value: "4", label: "Platforms" },
];
