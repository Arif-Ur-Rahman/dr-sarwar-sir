import {
  BrainCircuit,
  Database,
  Dna,
  LineChart,
  Network,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/**
 * Single source of truth for every piece of text on this site.
 * Edit this file to update the page — the components read from it.
 *
 * Sections whose data is empty are hidden from the page entirely, so it is
 * safe to ship with `publications` or `teaching` still empty. Fill them in
 * and the section (and its nav link) appears automatically.
 */

export const profile = {
  name: "Sarwar Kamal",
  /** The hero sets the name over two lines; these control the break. */
  givenName: "Sarwar",
  familyName: "Kamal",
  honorific: "Dr.",
  credentials: "PhD",
  role: "Associate Professor",
  department: "Department of Computer Science and Engineering",
  institution: "East West University",
  location: "Dhaka, Bangladesh",
  field: "Data Mining · Machine Learning · Data Analytics",
  photo: "/profiles/DrSarwarSir.jpg",

  /** Short line under the name in the header and hero. */
  tagline: "Data mining, machine learning, and applied data analytics.",

  /** Hero paragraph. */
  intro:
    "I have worked in data mining and machine learning since 2012, spanning business data analysis, social network analysis, and large-scale biological data mining. My interest lies in applying information technology across disciplines — biology, business, and social networks — to address the problems those fields actually face.",

  /** Longer biography shown in the About section, one paragraph per entry. */
  biography: [
    "My research sits at the intersection of data mining, machine learning, and the disciplines that generate data faster than they can interpret it. Since 2012 I have built and applied analytical methods to business data, social network data, and large-scale biological datasets, with a consistent focus on results that hold up outside the lab.",
    "Alongside academic work I have spent time in industry, developing gaming software at a commercial software firm. That experience shapes how I teach and supervise: computing is most valuable when it is grounded in a real problem, built to run, and explained clearly to the people who depend on it.",
    "I welcome collaboration with researchers and organisations working on interdisciplinary data problems, and I supervise students interested in applied machine learning and data-driven research.",
  ],
} as const;

/** Set to a file placed in /public (e.g. "/cv-sarwar-kamal.pdf") to show the CV button. */
export const cvUrl: string | null = null; // TODO: add the CV PDF to /public and set this path.

type Contact = {
  email: string;
  phone: string;
  office: string;
  lead: string;
};

export const contact: Contact = {
  /** TODO: set a verified address — the contact form and email link stay disabled until this is filled in. */
  email: "",
  /** TODO: optional. Leave empty to hide. */
  phone: "",
  /** Office / postal address. Leave empty to hide. */
  office: "East West University\nAftabnagar, Dhaka 1212, Bangladesh",
  /** Intro copy above the contact form. */
  lead: "For research collaboration, supervision enquiries, speaking invitations, or consultancy, please get in touch.",
};

export type SocialLink = { label: string; href: string };

/** Profile links. Leave the array empty, or delete individual entries, to hide them. */
export const socials: SocialLink[] = [
  // TODO: replace the placeholder URLs below with the real profiles, or delete the entries.
  // { label: "Google Scholar", href: "https://scholar.google.com/citations?user=..." },
  // { label: "ORCID", href: "https://orcid.org/0000-0000-0000-0000" },
  // { label: "ResearchGate", href: "https://www.researchgate.net/profile/..." },
  // { label: "LinkedIn", href: "https://www.linkedin.com/in/..." },
];

export type ResearchArea = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const researchAreas: ResearchArea[] = [
  {
    title: "Data Mining",
    description:
      "Extracting structure and meaning from large, noisy, and heterogeneous datasets — the throughline of my work since 2012.",
    icon: Database,
  },
  {
    title: "Machine Learning",
    description:
      "Designing and evaluating learning methods that generalise beyond the dataset they were trained on.",
    icon: BrainCircuit,
  },
  {
    title: "Business Data Analytics",
    description:
      "Turning operational and commercial data into decisions, with attention to what an organisation can actually act on.",
    icon: LineChart,
  },
  {
    title: "Social Network Analysis",
    description:
      "Studying structure, influence, and information flow across social networks at scale.",
    icon: Network,
  },
  {
    title: "Biological Data Mining",
    description:
      "Applying computational methods to large biological datasets, where volume and complexity outpace manual analysis.",
    icon: Dna,
  },
  {
    title: "Interdisciplinary Computing",
    description:
      "Connecting information technology to biology, business, and the social sciences to support the demands of each field.",
    icon: Workflow,
  },
];

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  href?: string;
};

/**
 * TODO: add real publications here, newest first. The Publications section and
 * its nav link stay hidden while this array is empty.
 *
 * Example:
 * {
 *   title: "Title of the paper",
 *   authors: "S. Kamal, A. Author, B. Author",
 *   venue: "Journal or Conference Name, vol. 12, no. 3",
 *   year: "2024",
 *   href: "https://doi.org/...",
 * },
 */
export const publications: Publication[] = [];

export type Course = {
  code: string;
  title: string;
  level: string;
  description?: string;
};

/**
 * TODO: add courses taught. The Teaching section and its nav link stay hidden
 * while this array is empty.
 *
 * Example:
 * { code: "CSE 412", title: "Data Mining", level: "Undergraduate", description: "..." },
 */
export const courses: Course[] = [];

export const fullName = `${profile.honorific} ${profile.name}`;

export const navItems = [
  { href: "#about", label: "About", show: true },
  { href: "#research", label: "Research", show: researchAreas.length > 0 },
  { href: "#publications", label: "Publications", show: publications.length > 0 },
  { href: "#teaching", label: "Teaching", show: courses.length > 0 },
  { href: "#contact", label: "Contact", show: true },
].filter((item) => item.show);
