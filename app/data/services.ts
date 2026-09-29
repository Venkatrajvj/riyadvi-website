export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  problem: string;
  solution: string;
  features: string[];
  industries: string[];
  technologies: string[];
  process: string[];
  accent: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web",
    description:
      "High-performance websites and web applications designed to turn digital presence into business growth.",
    problem:
      "Businesses need fast, responsive and scalable digital platforms that work smoothly across devices.",
    solution:
      "We create modern web experiences using reusable components, responsive interfaces and scalable architecture.",
    features: [
      "Responsive web applications",
      "Business websites",
      "Custom web platforms",
      "API integration",
      "Performance optimization",
      "Scalable architecture",
    ],
    industries: [
      "E-commerce",
      "Healthcare",
      "Education",
      "Real Estate",
      "Professional Services",
    ],
    technologies: [
      "React",
      "Next.js",
      "JavaScript",
      "Node.js",
      "MySQL",
      "MongoDB",
    ],
    process: [
      "Discovery",
      "Strategy",
      "UI/UX Design",
      "Development",
      "Testing",
      "Launch",
    ],
    accent: "#38d9ff",
  },

  {
    slug: "app-development",
    title: "App Development",
    shortTitle: "Apps",
    description:
      "Engaging mobile experiences built around usability, performance and real business requirements.",
    problem:
      "Businesses need mobile experiences that are easy to use, reliable and connected to their digital ecosystem.",
    solution:
      "We design and develop mobile applications with intuitive interfaces and scalable backend integration.",
    features: [
      "Mobile application development",
      "Cross-platform experiences",
      "API integration",
      "User authentication",
      "Real-time features",
      "Performance optimization",
    ],
    industries: [
      "Healthcare",
      "Education",
      "E-commerce",
      "Finance",
      "Lifestyle",
    ],
    technologies: [
      "React",
      "Node.js",
      "JavaScript",
      "REST APIs",
      "MongoDB",
      "MySQL",
    ],
    process: [
      "Requirement Analysis",
      "UX Planning",
      "Design",
      "Development",
      "Testing",
      "Deployment",
    ],
    accent: "#7c5cff",
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Data-driven digital marketing experiences that help businesses reach, engage and convert their audience.",
    problem:
      "Businesses need a stronger digital presence and measurable ways to reach their target audience.",
    solution:
      "We combine digital strategy, content and performance-focused campaigns to improve online visibility.",
    features: [
      "Digital strategy",
      "Search optimization",
      "Social media campaigns",
      "Content strategy",
      "Performance tracking",
      "Conversion optimization",
    ],
    industries: [
      "E-commerce",
      "Healthcare",
      "Education",
      "Real Estate",
      "Startups",
    ],
    technologies: [
      "Google Analytics",
      "Search tools",
      "Social Platforms",
      "WordPress",
      "Marketing Automation",
    ],
    process: [
      "Research",
      "Audience Analysis",
      "Strategy",
      "Campaign Setup",
      "Optimization",
      "Reporting",
    ],
    accent: "#a78bfa",
  },

  {
    slug: "ar-vr",
    title: "AR / VR",
    shortTitle: "AR / VR",
    description:
      "Immersive digital experiences that help businesses present products, environments and ideas in new ways.",
    problem:
      "Traditional digital experiences can make complex products and environments difficult to visualize.",
    solution:
      "We create interactive AR and VR experiences that make digital content more immersive and engaging.",
    features: [
      "Interactive AR experiences",
      "VR environments",
      "3D product visualization",
      "Immersive presentations",
      "Interactive experiences",
      "Digital simulations",
    ],
    industries: [
      "Real Estate",
      "Education",
      "Retail",
      "Healthcare",
      "Entertainment",
    ],
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "3D Assets",
      "JavaScript",
    ],
    process: [
      "Concept",
      "3D Planning",
      "Experience Design",
      "Development",
      "Testing",
      "Launch",
    ],
    accent: "#38d9ff",
  },

  {
    slug: "3d-modeling",
    title: "3D Modeling",
    shortTitle: "3D",
    description:
      "Interactive 3D models and visual experiences created to communicate products, concepts and digital environments.",
    problem:
      "Static images cannot always communicate the structure, detail and experience of complex products.",
    solution:
      "We use interactive 3D visualization to make products and concepts easier to explore and understand.",
    features: [
      "Product modeling",
      "Interactive 3D objects",
      "Web-based 3D experiences",
      "3D visualization",
      "Digital environments",
      "Interactive presentations",
    ],
    industries: [
      "Architecture",
      "Real Estate",
      "Manufacturing",
      "Retail",
      "Technology",
    ],
    technologies: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "Blender",
      "3D Assets",
    ],
    process: [
      "Concept",
      "Modeling",
      "Texturing",
      "Interaction",
      "Optimization",
      "Deployment",
    ],
    accent: "#7c5cff",
  },

  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    description:
      "Premium interfaces and user experiences designed around clarity, usability and business goals.",
    problem:
      "Complex interfaces can make products difficult to understand and reduce user engagement.",
    solution:
      "We design intuitive user journeys and modern interfaces that balance usability with visual quality.",
    features: [
      "User research",
      "User journey design",
      "Wireframes",
      "Visual design",
      "Design systems",
      "Interactive prototypes",
    ],
    industries: ["SaaS", "E-commerce", "Healthcare", "Finance", "Technology"],
    technologies: [
      "Figma",
      "Design Systems",
      "Prototyping",
      "Responsive Design",
      "Interaction Design",
    ],
    process: [
      "Research",
      "User Flows",
      "Wireframes",
      "Visual Design",
      "Prototype",
      "Testing",
    ],
    accent: "#a78bfa",
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
