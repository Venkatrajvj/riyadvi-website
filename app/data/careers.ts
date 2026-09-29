export type Career = {
  slug: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};

export const careers: Career[] = [
  {
    slug: "frontend-developer",
    title: "Frontend Developer",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Build responsive, interactive and high-quality digital experiences using modern frontend technologies.",
    responsibilities: [
      "Build responsive web interfaces",
      "Work with React and Next.js",
      "Create reusable UI components",
      "Collaborate with designers and developers",
      "Optimize performance and user experience",
    ],
    requirements: [
      "HTML, CSS and JavaScript",
      "Basic React knowledge",
      "Understanding of responsive design",
      "Problem-solving mindset",
      "Willingness to learn modern technologies",
    ],
  },

  {
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Work across frontend, backend and database systems to build complete software products.",
    responsibilities: [
      "Develop frontend and backend features",
      "Build REST APIs",
      "Work with databases",
      "Integrate frontend with backend services",
      "Test and improve application performance",
    ],
    requirements: [
      "JavaScript or TypeScript",
      "React or Next.js",
      "Backend development fundamentals",
      "SQL or NoSQL database knowledge",
      "Understanding of API development",
    ],
  },

  {
    slug: "ui-ux-designer",
    title: "UI/UX Designer",
    location: "Chennai / Remote",
    type: "Full-time",
    experience: "0–2 years",
    description:
      "Design intuitive, modern and engaging user experiences for web and digital products.",
    responsibilities: [
      "Create user interface designs",
      "Develop wireframes and user flows",
      "Collaborate with developers",
      "Improve usability and accessibility",
      "Create consistent design systems",
    ],
    requirements: [
      "Understanding of UI/UX principles",
      "Figma or similar design tools",
      "Typography and layout fundamentals",
      "Strong visual thinking",
      "Interest in digital products",
    ],
  },
];

export function getCareerBySlug(slug: string) {
  return careers.find((career) => career.slug === slug);
}
