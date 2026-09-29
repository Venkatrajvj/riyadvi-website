export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  relatedServices: string[];
};

export const projects: Project[] = [
  {
    slug: "puratap",
    title: "Puratap",
    client: "Puratap",
    industry: "Water Solutions",
    challenge:
      "Create a modern digital experience that clearly communicates products and services to customers.",
    solution:
      "A responsive digital platform focused on clear product presentation, usability and business communication.",
    technologies: ["Next.js", "React", "JavaScript", "CSS"],
    results: [
      "Improved digital presentation",
      "Responsive user experience",
      "Clear product communication",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "wanaromah-perfumers",
    title: "Wanaromah Perfumers",
    client: "Wanaromah Perfumers",
    industry: "E-commerce",
    challenge:
      "Present a premium fragrance brand through a visually engaging digital experience.",
    solution:
      "A modern product-focused interface designed around brand presentation and user experience.",
    technologies: ["React", "JavaScript", "UI/UX", "Responsive Design"],
    results: [
      "Premium product presentation",
      "Improved browsing experience",
      "Mobile-friendly interface",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "laxmi-astro-ai",
    title: "Laxmi Astro AI",
    client: "Laxmi Astro AI",
    industry: "AI / Technology",
    challenge:
      "Create an accessible digital platform for presenting AI-powered astrology services.",
    solution:
      "A modern interface combining technology, content and user-focused interaction.",
    technologies: ["Next.js", "React", "AI", "JavaScript"],
    results: [
      "Modern AI-focused experience",
      "Clear service presentation",
      "Responsive interface",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "tony-and-guy",
    title: "Tony & Guy",
    client: "Tony & Guy",
    industry: "Beauty & Lifestyle",
    challenge:
      "Build a polished digital experience aligned with a premium beauty brand.",
    solution:
      "A visually refined website experience focused on services, brand identity and usability.",
    technologies: ["React", "JavaScript", "UI/UX", "Responsive Design"],
    results: [
      "Premium brand experience",
      "Improved service visibility",
      "Responsive design",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "studio11",
    title: "Studio11",
    client: "Studio11",
    industry: "Beauty & Lifestyle",
    challenge: "Create an engaging online presence for a modern salon brand.",
    solution:
      "A responsive digital experience highlighting services, brand identity and customer engagement.",
    technologies: ["React", "JavaScript", "CSS", "UI/UX"],
    results: [
      "Improved online presence",
      "Clear service discovery",
      "Responsive experience",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "sivam-physio-care",
    title: "Sivam Physio Care",
    client: "Sivam Physio Care",
    industry: "Healthcare",
    challenge:
      "Present healthcare services in a clear and trustworthy digital experience.",
    solution:
      "A user-focused website architecture designed around service information and accessibility.",
    technologies: ["Next.js", "React", "JavaScript", "Responsive Design"],
    results: [
      "Clear healthcare information",
      "Improved service discovery",
      "Mobile-friendly experience",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "pearl-housing",
    title: "Pearl Housing",
    client: "Pearl Housing",
    industry: "Real Estate",
    challenge:
      "Showcase property offerings through an engaging and easy-to-navigate digital platform.",
    solution:
      "A property-focused experience designed for visual presentation and customer discovery.",
    technologies: ["React", "Next.js", "JavaScript", "UI/UX"],
    results: [
      "Better property presentation",
      "Improved navigation",
      "Responsive experience",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "nugenica-biotech-lab",
    title: "Nugenica Biotech Lab",
    client: "Nugenica Biotech Lab",
    industry: "Biotechnology",
    challenge:
      "Communicate technical biotechnology information through a professional digital presence.",
    solution:
      "A structured website experience balancing scientific information with modern visual design.",
    technologies: ["Next.js", "React", "JavaScript", "UI/UX"],
    results: [
      "Professional digital presence",
      "Structured information",
      "Responsive experience",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "visdoc",
    title: "VisDoc",
    client: "VisDoc",
    industry: "Healthcare Technology",
    challenge:
      "Create an accessible digital platform for healthcare-related information and services.",
    solution:
      "A clean interface focused on usability, information architecture and responsive design.",
    technologies: ["React", "Next.js", "JavaScript", "UI/UX"],
    results: [
      "Improved information accessibility",
      "Clear user journeys",
      "Responsive interface",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },

  {
    slug: "cube-dental",
    title: "Cube Dental",
    client: "Cube Dental",
    industry: "Healthcare",
    challenge: "Create a modern digital presence for a dental care brand.",
    solution:
      "A responsive website experience focused on services, trust and easy information discovery.",
    technologies: ["React", "JavaScript", "CSS", "UI/UX"],
    results: [
      "Modern digital presence",
      "Clear service presentation",
      "Mobile-friendly experience",
    ],
    relatedServices: ["Web Development", "UI/UX Design"],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
