export type EventCategoryId =
  | "all"
  | "hackathon"
  | "competition"
  | "workshop"
  | "expo"
  | "talk-entertainment";

export interface EventCategory {
  id: EventCategoryId;
  label: string;
  description: string;
}

export interface EventCoordinator {
  name: string;
  role: string;
  phone?: string;
  email?: string;
}

export interface FestivalEvent {
  slug: string;
  title: string;
  shortTitle?: string;
  category: Exclude<EventCategoryId, "all">;
  categoryLabel: string;
  tagline?: string;
  description: string;
  longDescription?: string[];
  day?: "Day 1" | "Day 2" | "Day 1 & 2";
  dateLabel?: string;
  dateConfirmed?: boolean;
  duration?: string;
  venue?: string;
  teamSize?: string;
  eligibility?: string;
  deadline?: string;
  feeLabel?: string;
  feeConfirmed?: boolean;
  prizePoolLabel?: string;
  prizeConfirmed?: boolean;
  posterImage?: string;
  highlights?: string[];
  rules?: string[];
  registrationUrl?: string | null;
  registrationStatus: "open" | "coming-soon" | "closed" | "demo";
  isDemo?: boolean;
  featured?: boolean;
  published?: boolean;
  coordinators?: EventCoordinator[];
}

export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  venue?: string;
  category: "ceremony" | "hackathon" | "competition" | "workshop" | "expo" | "entertainment";
  eventSlug?: string;
  published?: boolean;
}

export interface ScheduleDay {
  id: string;
  label: string;
  shortLabel: string;
  date: string;
  theme?: string;
  items: ScheduleItem[];
}

export type SponsorTier = "institutional" | "title" | "gold" | "silver" | "community";

export interface Sponsor {
  id: string;
  name: string;
  tier: SponsorTier;
  tierLabel: string;
  logo?: string;
  website?: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface SponsorshipTierPackage {
  id: SponsorTier;
  name: string;
  tagline: string;
  slots: string;
  deliverables: string[];
  idealFor: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  group: "faculty" | "core" | "leads";
  department?: string;
  phone?: string;
  email?: string;
  initials: string;
  linkedin?: string;
  isPlaceholder?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  edition: string;
  category: "Hackathon" | "Robotics" | "Workshops" | "Expos" | "Stage & Culture";
  caption: string;
  image: string;
  aspect?: "landscape" | "portrait" | "wide";
  published?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Registration" | "Events" | "Travel & Campus";
}

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  handle: string;
}

export interface PreviousHighlight {
  id: string;
  edition: string;
  title: string;
  metric: string;
  description: string;
}
