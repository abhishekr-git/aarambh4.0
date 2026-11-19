import type { SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Aarambh 4.0",
  shortName: "Aarambh 4.0",
  edition: "4th Edition",
  tagline: "Imagine. Innovate. Integrate.",
  heroSubtitle:
    "IEDC at College of Engineering Karunagappally.",
  datesDisplay: "January 15–16, 2027",
  datesShort: "Jan 15–16, 2027",
  startDateIso: "2027-01-15T09:00:00+05:30",
  endDateIso: "2027-01-16T20:00:00+05:30",
  siteUrl: "https://aarambh26.tech",
  organizer: "Innovation & Entrepreneurship Development Centre (IEDC CEKNPY)",
  collegeName: "College of Engineering Karunagappally",
  collegeShort: "CEKNPY",
  campusLabel: "CEK Campus, Karunagappally",
  addressLines: [
    "College of Engineering Karunagappally",
    "Thodiyoor P.O, Karunagappally, Kollam",
    "Kerala – 690523, India",
  ],
  mapsQueryUrl:
    "https://www.google.com/maps/search/?api=1&query=College+of+Engineering+Karunagappally+Thodiyoor+Kollam+Kerala+690523",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=College+of+Engineering+Karunagappally+Thodiyoor+Kollam+Kerala+690523&output=embed",
  collegeWebsite: "https://www.ceknpy.ac.in",
  iedcWebsite: "https://college-iedc-website.vercel.app/",
  primaryEmail: "iedc@ceknpy.ac.in",
  secondaryEmails: ["iedccek@gmail.com"],
  registration: {
    status: "coming-soon" as "open" | "coming-soon" | "closed",
    providerName: "Official Registration Portal",
    generalPassUrl: null as string | null,
    stallsFormUrl: null as string | null,
    note: "Event lineup and registration details will be announced here.",
  },
  assets: {
    logoFull: "/images/logo.png",
    logoMark: "/images/logo-mark.png",
    iedcKsumLogo: "/images/ksum-iedc-logo-light.svg",
    iedcLogo: "/images/iedc-logo-light.svg",
  },
};

export const IEDC_PROFILE = {
  chapterName: "IEDC CEKNPY",
  history:
    "Established under the aegis of Kerala Startup Mission (KSUM) and College of Engineering Karunagappally, IEDC CEKNPY has grown into a premier innovation hub in Kollam district. Over the past 8+ years, our chapter has incubated student startups, secured government seed grants, and fostered a vibrant maker culture.",
  mission:
    "To cultivate an entrepreneurial ecosystem within CEKNPY by encouraging innovation, providing prototype funding, offering expert mentorship, and transforming technical ideas into scalable, market-ready enterprises.",
  vision:
    "To be a benchmark institutional incubator in South India that produces ethical, technology-driven leaders and successful high-growth ventures solving global challenges.",
  achievements: [
    "₹15+ Lakh total seed grant funding disbursed to CEKNPY teams",
    "Best Emerging IEDC Chapter Award by Kerala Startup Mission (KSUM)",
    "18+ Registered Student Startups & 50+ Incubated Ideas",
    "100+ Active Student Members driving year-round innovation",
  ],
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/schedule", label: "Schedule" },
  { href: "/gallery", label: "Gallery" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/iedc_ceknpy",
    handle: "@iedc_ceknpy",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/company/iedc-ceknpy",
    handle: "IEDC CEKNPY",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/iedc-ceknpy",
    handle: "iedc-ceknpy",
  },
];

export const FESTIVAL_METRICS = [
  { value: 1000, suffix: "+", label: "Expected Footfall", context: "Aarambh 4.0 projection" },
  { value: 2, suffix: " Days", label: "Jan 15–16, 2027", context: "Festival duration" },
  { value: 18, suffix: "+", label: "Startups Incubated", context: "IEDC CEKNPY track record" },
  { value: 15, suffix: "+ Lakhs", label: "Grants Disbursed", context: "Student seed funding" },
] as const;

export const TRAVEL_ROUTES = {
  bus: [
    {
      origin: "From Karunagappally Town",
      options: [
        {
          title: "Via Driver Junction",
          steps: [
            "Karunagappally KSRTC / Bus Stand → Driver Junction: 2.7 km (~10 min)",
            "Driver Junction → CEK Campus: 1.5 km (Auto: 5 min | Walk: 15 min)",
          ],
        },
        {
          title: "Via Veluthamanal",
          badge: "Direct Route",
          steps: [
            "Karunagappally → Veluthamanal: 3.5 km (~15 min)",
            "Veluthamanal → CEK Campus: 1 km (Walk: 5–8 min)",
          ],
        },
      ],
    },
    {
      origin: "From Bharanikkavu / Kayamkulam",
      options: [
        {
          title: "Via Driver Junction",
          steps: [
            "Bharanikkavu → Driver Junction: 14 km (~40 min by bus)",
            "Driver Junction → CEK Campus: 1.5 km (Auto: 5 min)",
          ],
        },
        {
          title: "Via Veluthamanal",
          steps: [
            "Bharanikkavu → Veluthamanal: 13 km (~45 min)",
            "Veluthamanal → CEK Campus: 1 km (Walk: 5 min)",
          ],
        },
      ],
    },
  ],
  train: {
    stationName: "Karunagappally Railway Station (KPY)",
    distance: "Approx. 2 km from CEK Campus",
    options: [
      {
        title: "Direct Auto-Rickshaw from Station",
        badge: "Recommended",
        steps: ["Railway Station auto stand → CEK Campus gate: ~2 km (5–7 min, standard fare)"],
      },
      {
        title: "Via Veluthamanal Junction",
        steps: [
          "Station → Veluthamanal Junction: 1 km (~3 min auto)",
          "Veluthamanal → CEK Campus: 1 km (Walk: 5–8 min)",
        ],
      },
    ],
  },
};
