import type { EventCategory, FestivalEvent } from "@/types";

export const EVENT_CATEGORIES: EventCategory[] = [
  { id: "all", label: "All Events", description: "All Aarambh 4.0 festival events." },
  { id: "hackathon", label: "Hackathons", description: "Prototypes and builder challenges." },
  { id: "competition", label: "Competitions", description: "Robotics, design, and pitch battles." },
  { id: "workshop", label: "Workshops", description: "Hands-on engineering masterclasses." },
  { id: "expo", label: "Expos", description: "Project exhibitions and startup product demos." },
  { id: "talk-entertainment", label: "Talks & Shows", description: "Keynotes and stage showcases." },
];

/**
 * Shared Aarambh 4.0 Events Registry.
 * Powers the homepage preview lineup, /events catalog, and individual event detail pages.
 */
export const EVENTS: FestivalEvent[] = [
  {
    slug: "build-sprint",
    title: "Build Sprint",
    category: "hackathon",
    categoryLabel: "Hackathon",
    tagline: "Everyday campus problem solving",
    description: "Build a working prototype that solves an everyday campus problem.",
    longDescription: [
      "Build Sprint challenges multidisciplinary student teams to prototype practical software, IoT, or automation solutions for daily challenges faced across campus communities.",
      "Work with mentors, test your build with real campus users, and pitch a functioning demo to our panel of engineering leads.",
    ],
    eligibility: "Open to all enrolled undergraduate and polytechnic students from any recognised institution.",
    teamSize: "1–4 members per team",
    deadline: "Demo open · Official registration closes prior to festival kickoff",
    rules: [
      "All prototypes must be designed and built during the sprint window.",
      "Open-source libraries, public APIs, and foundational AI models are allowed with documentation.",
      "Teams must present a functioning live demonstration during final judging.",
      "Projects will be evaluated on technical execution, user utility, and problem relevance.",
    ],
    isDemo: true,
    registrationStatus: "demo",
    published: true,
    featured: true,
  },
  {
    slug: "line-follower-challenge",
    title: "Line Follower Challenge",
    category: "competition",
    categoryLabel: "Robotics",
    tagline: "Autonomous navigation & precision tuning",
    description: "Build and tune a robot to follow a marked course.",
    longDescription: [
      "Design, fabricate, and calibrate an autonomous wheeled robot capable of tracking a high-contrast course with sharp bends, loops, and intersections in the shortest time.",
      "Tune your sensor thresholds and motor PID controllers for optimal speed, stability, and zero track departure.",
    ],
    eligibility: "Open to student robotics makers, engineers, and enthusiasts.",
    teamSize: "1–3 members per robot",
    deadline: "Demo open · Official track inspections begin on festival day",
    rules: [
      "Robots must operate completely autonomously without remote telemetry or external human control.",
      "Maximum robot footprint: 25cm × 25cm × 25cm at race start.",
      "Standard track: 3cm black line on white surface with variable turn angles.",
      "Scoring based on lowest lap time; minor course deviations incur timed penalties.",
    ],
    isDemo: true,
    registrationStatus: "demo",
    published: true,
    featured: true,
  },
  {
    slug: "interface-jam",
    title: "Interface Jam",
    category: "competition",
    categoryLabel: "UI/UX Design",
    tagline: "Rapid product design sprint",
    description: "Turn a design brief into a clickable app prototype.",
    longDescription: [
      "Interface Jam is a fast-paced UI/UX design challenge where participants transform an unexpected user challenge into an intuitive, polished mobile or web prototype.",
      "Focus on information architecture, typography, micro-interactions, and accessible interface hierarchy.",
    ],
    eligibility: "Open to individual student designers and collaborative pairs.",
    teamSize: "1–2 designers per team",
    deadline: "Demo open · Brief unveiled at event start",
    rules: [
      "Design brief and user constraints are revealed at the start of the jam.",
      "Submissions must include a clickable Figma, Penpot, or web-based interactive prototype.",
      "Designers must include basic user persona notes and design rationale.",
      "Evaluated on visual polish, accessibility compliance (WCAG contrast), and flow clarity.",
    ],
    isDemo: true,
    registrationStatus: "demo",
    published: true,
    featured: true,
  },
  {
    slug: "prototype-pitch",
    title: "Prototype Pitch",
    category: "competition",
    categoryLabel: "Entrepreneurship",
    tagline: "Early-stage venture showcase",
    description: "Present a product idea and show how it helps its users.",
    longDescription: [
      "Prototype Pitch gives student inventors and early founders a launchpad to present their technical product concept, user problem, and commercial viability to founders and incubation mentors.",
      "Bring either a working prototype, a digital MVP, or validated user feedback to demonstrate clear proof of concept.",
    ],
    eligibility: "Open to all student innovators and early-stage campus startup teams.",
    teamSize: "1–3 presenters per team",
    deadline: "Demo open · Deck submission deadline announced with official schedule",
    rules: [
      "5-minute pitch followed by 3 minutes of interactive Q&A from the jury panel.",
      "Decks should cover problem statement, product demonstration, target users, and next steps.",
      "Working prototypes or tangible proof of concept earn bonus technical points.",
      "Judged on problem relevance, technical feasibility, and presentation clarity.",
    ],
    isDemo: true,
    registrationStatus: "demo",
    published: true,
    featured: true,
  },
];

export function getPublishedEvents(): FestivalEvent[] {
  return EVENTS.filter((event) => event.published !== false);
}

export const PUBLISHED_EVENTS = getPublishedEvents();
export const HAS_PUBLISHED_EVENTS = PUBLISHED_EVENTS.length > 0;

export function getEventBySlug(slug: string): FestivalEvent | undefined {
  return getPublishedEvents().find((event) => event.slug === slug);
}
