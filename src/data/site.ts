import type { PreviousHighlight, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "AARAMBH 4.0",
  shortName: "Aarambh 4.0",
  edition: "4th Edition",
  tagline: "Imagine. Innovate. Integrate.",
  heroSubtitle:
    "The flagship annual technology, entrepreneurship, and innovation festival organised by IEDC CEKNPY at College of Engineering Karunagappally, Kerala.",
  datesDisplay: "January 16–17, 2027",
  datesShort: "Jan 16–17, 2027",
  startDateIso: "2027-01-16T09:00:00+05:30",
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
    note: "Official Aarambh 4.0 registration portal and fee structure will be announced soon.",
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
    "Established under the aegis of Kerala Startup Mission (KSUM) and College of Engineering Karunagappally, IEDC CEKNPY has grown into a premier innovation hub in Kollam district. Over the past 8+ years, our chapter has incubated 18+ registered startups, secured government seed grants, and fostered a vibrant maker culture.",
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
  {
    id: "twitter",
    label: "X (Twitter)",
    href: "https://twitter.com/iedc_ceknpy",
    handle: "@iedc_ceknpy",
  },
];

export const FESTIVAL_METRICS = [
  { value: 1000, suffix: "+", label: "Expected Footfall" },
  { value: 50, suffix: "+", label: "Ideas Incubated by IEDC" },
  { value: 100, suffix: "+", label: "Active IEDC Builders" },
  { value: 2, suffix: " Days", label: "Jan 16–17, 2027" },
] as const;

export const PREVIOUS_EDITION_HIGHLIGHTS: PreviousHighlight[] = [
  {
    id: "highlight-1",
    edition: "Previous Edition",
    title: "Highlight 1",
    metric: "Coming Soon",
    description:
      "Placeholder for previous edition highlight. Replace with curated stats and photos from past Aarambh editions.",
  },
  {
    id: "highlight-2",
    edition: "Previous Edition",
    title: "Highlight 2",
    metric: "Coming Soon",
    description:
      "Placeholder for previous edition highlight. Replace with curated stats and photos from past Aarambh editions.",
  },
  {
    id: "highlight-3",
    edition: "Previous Edition",
    title: "Highlight 3",
    metric: "Coming Soon",
    description:
      "Placeholder for previous edition highlight. Replace with curated stats and photos from past Aarambh editions.",
  },
  {
    id: "highlight-4",
    edition: "Previous Edition",
    title: "Highlight 4",
    metric: "Coming Soon",
    description:
      "Placeholder for previous edition highlight. Replace with curated stats and photos from past Aarambh editions.",
  },
];

export const TRAVEL_ROUTES = {
  bus: [
    {
      origin: "From Karunagappally",
      options: [
        {
          title: "Via Driver Junction",
          steps: [
            "Karunagappally → Driver Junction: 2.7 km (~10 min)",
            "Driver Junction → CEK Campus: 1.5 km (Auto: 5 min | Walk: 15 min)",
          ],
        },
        {
          title: "Via Veluthamanal",
          badge: "Limited Buses",
          steps: [
            "Karunagappally → Veluthamanal: 3.5 km (~15 min)",
            "Veluthamanal → CEK Campus: 1 km (Walk: 5 min)",
          ],
        },
      ],
    },
    {
      origin: "From Bharanikkavu",
      options: [
        {
          title: "Via Driver Junction",
          steps: [
            "Bharanikkavu → Driver Junction: 14 km (~40 min)",
            "Driver Junction → CEK Campus: 1.5 km (Auto: 5 min | Walk: 15 min)",
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
        title: "Direct Auto-Rickshaw",
        steps: ["Railway Station → CEK Campus: 2 km (~5 min by auto)"],
      },
      {
        title: "Via Veluthamanal",
        steps: [
          "Station → Veluthamanal: 1 km (~3 min)",
          "Veluthamanal → CEK Campus: 1 km (Walk: 5 min)",
        ],
      },
    ],
  },
};
