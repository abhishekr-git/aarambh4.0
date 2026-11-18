import type { Sponsor } from "@/types";

export const SPONSORS: Sponsor[] = [
  {
    id: "ksum-iedc",
    name: "Kerala Startup Mission — IEDC",
    tier: "institutional",
    tierLabel: "Ecosystem Partner",
    logo: "/images/ksum-iedc-logo-light.svg",
    website: "https://startupmission.kerala.gov.in",
    description:
      "State-level nodal agency fostering student innovation and entrepreneurship across Kerala campuses.",
  },
  {
    id: "iedc-cek",
    name: "IEDC CEKNPY — College of Engineering Karunagappally",
    tier: "institutional",
    tierLabel: "Host & Organizer",
    logo: "/images/iedc-logo-light.svg",
    website: "https://college-iedc-website.vercel.app/",
    description:
      "Official Innovation & Entrepreneurship Development Centre chapter of College of Engineering Karunagappally.",
  },
  {
    id: "title-slot",
    name: "Title Partner — Slot Open",
    tier: "title",
    tierLabel: "Title Sponsor",
    description:
      "Lead festival branding across main stage, competition arenas, digital media, and campus installations.",
    isPlaceholder: true,
  },
  {
    id: "gold-slot-1",
    name: "Gold Partner — Slot Open",
    tier: "gold",
    tierLabel: "Gold Sponsor",
    description:
      "Track co-branding, dedicated campus expo booth, and direct talent engagement with 1,000+ students.",
    isPlaceholder: true,
  },
  {
    id: "gold-slot-2",
    name: "Gold Partner — Slot Open",
    tier: "gold",
    tierLabel: "Gold Sponsor",
    description:
      "Workshop or competition partnership with jury representation and prominent festival visibility.",
    isPlaceholder: true,
  },
  {
    id: "silver-slot-1",
    name: "Silver Partner — Slot Open",
    tier: "silver",
    tierLabel: "Silver Sponsor",
    description:
      "Brand presence across festival collaterals, website, and exhibition zones.",
    isPlaceholder: true,
  },
  {
    id: "silver-slot-2",
    name: "Silver Partner — Slot Open",
    tier: "silver",
    tierLabel: "Silver Sponsor",
    description:
      "Ideal for regional tech companies, academies, and developer tool providers.",
    isPlaceholder: true,
  },
  {
    id: "community-slot-1",
    name: "Community & Campus Partners",
    tier: "community",
    tierLabel: "Community Partner",
    description:
      "Student developer clubs, design communities, and IEDC chapters collaborating across Kerala.",
    isPlaceholder: true,
  },
];

export const SPONSORSHIP_CONTACTS = [
  {
    name: "Nodal Officer — Renjith S R",
    role: "Faculty Nodal Officer, IEDC CEKNPY",
    phone: "+91 98954 21367",
  },
  {
    name: "IEDC CEKNPY Partnerships Desk",
    role: "Sponsorships & Stalls Coordination",
    email: "iedc@ceknpy.ac.in",
  },
];
