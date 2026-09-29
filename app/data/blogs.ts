export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
};

export const blogs: Blog[] = [
  {
    slug: "how-to-plan-a-software-project",
    title: "How to Plan a Software Project Before Development",
    excerpt:
      "A practical approach to defining goals, requirements, technology and development phases before building a digital product.",
    category: "Software Development",
    readTime: "5 min read",
    date: "September 2026",
    content: [
      "A successful software project starts with a clear understanding of the problem it needs to solve.",
      "Before development begins, teams should define the target users, business goals, core features and project scope.",
      "Technology decisions should then be made based on the product requirements, scalability, maintainability and development needs.",
      "Breaking the project into discovery, design, development, testing and deployment phases helps create a realistic execution plan.",
      "Finally, continuous monitoring and future improvements help the product grow after launch.",
    ],
  },

  {
    slug: "why-modern-web-development-matters",
    title: "Why Modern Web Development Matters for Businesses",
    excerpt:
      "Explore how modern frontend technologies and thoughtful user experiences can create better digital products.",
    category: "Web Development",
    readTime: "4 min read",
    date: "September 2026",
    content: [
      "A business website is often one of the first digital touchpoints between a company and its customers.",
      "Modern web development combines performance, responsive design, accessibility and clear user journeys.",
      "Technologies such as React and Next.js can help teams build reusable and scalable interfaces.",
      "Good design should work together with reliable backend systems and data-driven functionality.",
      "The goal is not simply to create a website, but to build a useful digital experience.",
    ],
  },

  {
    slug: "3d-and-interactive-web-experiences",
    title: "3D and Interactive Experiences on the Modern Web",
    excerpt:
      "Understand how meaningful 3D interactions can make digital experiences more engaging without sacrificing usability.",
    category: "3D & Interactive",
    readTime: "6 min read",
    date: "September 2026",
    content: [
      "Interactive web experiences can help communicate complex ideas in a more visual and engaging way.",
      "3D technologies can be used for product showcases, immersive storytelling, visual demonstrations and interactive interfaces.",
      "The most effective experiences connect animation and interaction to a clear user purpose.",
      "Performance and responsive behavior are important when adding advanced visual experiences to a website.",
      "A thoughtful combination of 3D, UI design and frontend engineering can create memorable digital products.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}
