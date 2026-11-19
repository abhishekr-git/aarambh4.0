import type { Sponsor, SponsorshipTierPackage } from "@/types";

export const INSTITUTIONAL_PARTNERS: Sponsor[] = [
  {
    id: "ksum-iedc",
    name: "Kerala Startup Mission — IEDC",
    tier: "institutional",
    tierLabel: "Ecosystem Partner",
    logo: "/images/ksum-iedc-logo-light.svg",
    website: "https://startupmission.kerala.gov.in",
    description:
      "State nodal agency fostering student innovation, seed funding, and entrepreneurship culture across Kerala higher education institutions.",
  },
  {
    id: "iedc-cek",
    name: "IEDC CEKNPY — College of Engineering Karunagappally",
    tier: "institutional",
    tierLabel: "Host & Organizer",
    logo: "/images/iedc-logo-light.svg",
    website: "https://college-iedc-website.vercel.app/",
    description:
      "The student innovation chapter driving Aarambh 4.0, technical prototyping, pre-incubation, and startup mentoring at CEKNPY.",
  },
];

export const SPONSORSHIP_PACKAGES: SponsorshipTierPackage[] = [
  {
    id: "title",
    name: "Title Sponsor",
    tagline: "Exclusive headline partner of Aarambh 4.0",
    slots: "1 Slot Available",
    idealFor: "Industry leaders seeking top-tier visibility and campus recruitment dominance across Kerala.",
    deliverables: [
      "Headline branding: 'Aarambh 4.0 presented by [Your Brand]'",
      "Primary placement across main stage, entrance arches, badge lanyards, and festival merch",
      "Keynote speaking opportunity at the Inaugural Ceremony",
      "Dedicated prime expo space in the central campus quadrangle",
      "Direct outreach to 1,000+ student participants and verified participant talent pool access",
    ],
  },
  {
    id: "gold",
    name: "Gold Partner",
    tagline: "Track or competition headline partner",
    slots: "Limited Slots Available",
    idealFor: "Tech companies, product startups, and engineering firms seeking focused developer engagement.",
    deliverables: [
      "Exclusive co-branding for a marquee track (Hackathon, Robowar, or AI Challenge)",
      "Standard campus exhibition booth for product demos and talent interaction",
      "Seat on the official competition judging panel",
      "Prominent logo placement on festival collateral, website, and winner certificates",
      "Distribution of company swag and recruitment materials in participant kits",
    ],
  },
  {
    id: "silver",
    name: "Silver Partner",
    tagline: "Technical workshop & session supporter",
    slots: "Open",
    idealFor: "Regional businesses, edtech academies, and developer tool platforms.",
    deliverables: [
      "Co-hosting rights for one hands-on technical workshop or masterclass",
      "Logo branding on website partners wall, festival roll-ups, and screen backdrops",
      "Social media feature across official IEDC CEKNPY digital channels",
      "Festival delegate passes and networking access with student founders",
    ],
  },
  {
    id: "community",
    name: "Community & Media Partner",
    tagline: "Ecosystem collaboration & outreach",
    slots: "Open",
    idealFor: "Student developer clubs, open-source communities, and regional tech networks.",
    deliverables: [
      "Cross-promotional digital reach across 20+ college networks",
      "Community partner badge on the official festival website",
      "Reserved seats for community delegates at keynote talks and showcases",
    ],
  },
];

/**
 * Combined list kept for backwards-compatibility with existing sponsor components.
 */
export const SPONSORS: Sponsor[] = [
  ...INSTITUTIONAL_PARTNERS,
];

export const SPONSORSHIP_CONTACTS = [
  {
    name: "Renjith S R",
    role: "Faculty Nodal Officer, IEDC CEKNPY",
    phone: "+91 98954 21367",
    email: "iedc@ceknpy.ac.in",
  },
  {
    name: "IEDC CEKNPY Partnerships Desk",
    role: "Sponsorship, Stalls & Industry Alliances",
    email: "iedc@ceknpy.ac.in",
    notes: "Direct inquiries for tier decks, custom engagements, and student booth bookings.",
  },
];
