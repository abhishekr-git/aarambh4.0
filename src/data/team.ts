import type { TeamMember } from "@/types";

/**
 * Current Executive Committee of IEDC CEKNPY
 * Sourced from https://college-iedc-website.vercel.app/team/current
 */
export const TEAM_MEMBERS: TeamMember[] = [
  // Faculty Nodal Officers
  {
    id: "renjith-sr",
    name: "Renjith S R",
    role: "Nodal Officer",
    group: "faculty",
    department: "IEDC CEKNPY • Dept. of CSE",
    phone: "+91 98954 21367",
    email: "iedc@ceknpy.ac.in",
    initials: "RS",
  },
  {
    id: "hridhya-j",
    name: "Hridhya J",
    role: "Nodal Officer",
    group: "faculty",
    department: "IEDC CEKNPY • Dept. of CSE",
    phone: "+91 79076 75129",
    email: "iedc@ceknpy.ac.in",
    initials: "HJ",
  },

  // Student Leads
  {
    id: "jagannadh-an",
    name: "Jagannadh A.N",
    role: "Student Lead I",
    group: "core",
    department: "IEDC CEKNPY Executive Committee",
    initials: "JA",
  },
  {
    id: "malavika-r",
    name: "Malavika R",
    role: "Student Lead II",
    group: "core",
    department: "IEDC CEKNPY Executive Committee",
    initials: "MR",
  },

  // Domain Leads
  {
    id: "aaron-m-sabu",
    name: "Aaron M Sabu",
    role: "Quality & Operations Lead",
    group: "leads",
    department: "Co-Lead: Niveditha S",
    initials: "AS",
  },
  {
    id: "abhishek-r",
    name: "Abhishek R",
    role: "Technology Lead",
    group: "leads",
    department: "Co-Lead: Athul Krishnan M",
    initials: "AR",
  },
  {
    id: "abla-hussain",
    name: "Abla Hussain",
    role: "Design Lead",
    group: "leads",
    department: "Co-Lead: Asif Muhammed",
    initials: "AH",
  },
  {
    id: "bassam-kattor",
    name: "Bassam Kattor",
    role: "Finance Lead",
    group: "leads",
    department: "Co-Lead: Sreya K",
    initials: "BK",
  },
  {
    id: "adwaith-k-rajeesh",
    name: "Adwaith K Rajeesh",
    role: "Branding & Marketing Lead",
    group: "leads",
    department: "Co-Lead: Thamanna V",
    initials: "AK",
  },
  {
    id: "thasleema-nazreen",
    name: "Thasleema Nazreen",
    role: "Women Innovation Lead",
    group: "leads",
    department: "Co-Lead: Souparnika A",
    initials: "TN",
  },
  {
    id: "amritha-s",
    name: "Amritha S",
    role: "Creative & Innovation Lead",
    group: "leads",
    department: "Co-Lead: Arya Soman",
    initials: "AS",
  },
  {
    id: "ananya-s-anil",
    name: "Ananya S Anil",
    role: "Inter College Lead",
    group: "leads",
    department: "Co-Lead: Abhisri M",
    initials: "AA",
  },
  {
    id: "fasina-u",
    name: "Fasina U",
    role: "Community Lead",
    group: "leads",
    department: "Co-Lead: Fibina S",
    initials: "FU",
  },
  {
    id: "thanha-sudheer",
    name: "Thanha Sudheer",
    role: "Content & Reporting",
    group: "leads",
    department: "Reporting Lead: Sumayya Bai Feroz",
    initials: "TS",
  },
];

export const FEATURED_TEAM_MEMBERS = TEAM_MEMBERS.slice(0, 6);
