
export const PORTFOLIO_DATA = {
  name: "Alex Doe",
  title: "Senior Software Engineer",
  email: "alex.doe@email.com",
  socials: {
    linkedin: "https://linkedin.com/in/alexdoe",
    github: "https://github.com/alexdoe",
    twitter: "https://twitter.com/alexdoe",
  },
  bio: "A passionate Senior Software Engineer with over 8 years of experience in building scalable web applications and leading high-performing teams. I thrive on solving complex problems and creating elegant, efficient solutions. My expertise lies in full-stack development with a focus on modern JavaScript frameworks and cloud infrastructure."
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Innovate Inc.",
    logoUrl: "https://placehold.co/100x100/5C6BC0/FFFFFF",
    dataAiHint: "technology company",
    title: "Senior Software Engineer",
    period: "Jan 2020 - Present",
    description: "Led the development of a new microservices-based architecture for the company's flagship product, improving scalability by 200% and reducing latency by 40%. Mentored a team of 5 junior engineers, fostering a culture of collaboration and continuous learning. Spearheaded the adoption of Next.js and TypeScript, modernizing the front-end stack and increasing developer productivity.",
    tags: ["React", "Node.js", "TypeScript", "AWS", "Microservices"],
  },
  {
    id: 2,
    company: "Tech Solutions",
    logoUrl: "https://placehold.co/100x100/AEEA00/000000",
    dataAiHint: "solution company",
    title: "Full Stack Developer",
    period: "Jun 2017 - Dec 2019",
    description: "Developed and maintained full-stack features for a large-scale e-commerce platform using Angular and Java Spring Boot. Collaborated with product managers and designers in an Agile environment to deliver high-quality software on time. Implemented a new CI/CD pipeline with Jenkins, reducing deployment time from hours to minutes.",
    tags: ["Angular", "Java", "Spring Boot", "Jenkins", "PostgreSQL"],
  },
  {
    id: 3,
    company: "Web Wizards",
    logoUrl: "https://placehold.co/100x100/37474F/FFFFFF",
    dataAiHint: "web development",
    title: "Junior Web Developer",
    period: "May 2015 - May 2017",
    description: "Built responsive websites and web applications for various clients using HTML, CSS, and JavaScript (jQuery). Gained foundational knowledge of back-end development with PHP and MySQL. Worked closely with clients to understand their needs and deliver tailored solutions.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "ProfolioFlow - AI Portfolio Builder",
    imageUrl: "https://placehold.co/600x400/5C6BC0/FFFFFF",
    dataAiHint: "portfolio project",
    description: "A dynamic portfolio application built with Next.js, featuring infinite scroll and AI-powered summarization for project and work descriptions. The platform is designed to be visually appealing and highly interactive, showcasing skills and experience in a modern, single-page format. It leverages server components for performance and Genkit for AI features.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Genkit", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "TaskMaster - Project Management Tool",
    imageUrl: "https://placehold.co/600x400/AEEA00/000000",
    dataAiHint: "project management",
    description: "A collaborative project management tool designed to help teams organize tasks, track progress, and meet deadlines. It features a drag-and-drop Kanban board, real-time updates with WebSockets, and user authentication. The back-end is built with Express.js and the front-end with React and Redux for state management.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "WebSockets"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const SKILLS_DATA = [
  {
    title: "Technologies",
    skills: [
      { name: "AI", color: "#5E4AE3", imageUrl: "" },
      { name: "Data Science", color: "#F05032", imageUrl: "" },
      { name: "NLP", color: "#4A90E2", imageUrl: "" },
      { name: "Machine Learning", color: "#FF6F61", imageUrl: "" },
      { name: "Deep Learning", color: "#6A0DAD", imageUrl: "" },
      { name: "Data Visualization", color: "#F4D03F", imageUrl: "" },
      { name: "Backend Development", color: "#2ECC71", imageUrl: "" },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", color: "#f0db4f", imageUrl: "" },
      { name: "TypeScript", color: "#007acc", imageUrl: "" },
      { name: "Python", color: "#306998", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjkWh_w2MlcY1Iajbcnf4ahqyiKsdfJtEpDA&s" },
      { name: "SQL", color: "#336791", imageUrl: "" },
      { name: "HTML5 & CSS3", color: "#e34f26", imageUrl: "" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "React", color: "#61DBFB", imageUrl: "" },
      { name: "Next.js", color: "#000000", imageUrl: "" },
      { name: "Node.js / Express", color: "#3C873A", imageUrl: "" },
      { name: "Tailwind CSS", color: "#38bdf8", imageUrl: "" },
      { name: "Django", color: "#092E20", imageUrl: "" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "MongoDB", color: "#4DB33D", imageUrl: "" },
      { name: "Docker / Kubernetes", color: "#0db7ed", imageUrl: "" },
      { name: "CI/CD (GitHub Actions)", color: "#1A1A1A", imageUrl: "" },
      { name: "AWS / GCP", color: "#FF9900", imageUrl: "" },
    ],
  },
];

export const EDUCATION_DATA = [
  {
    id: 1,
    institution: "State University",
    degree: "B.S. in Computer Science",
    period: "2011 - 2015",
    description: "Graduated with honors. Focused on algorithms, data structures, and software engineering principles. Active member of the coding club."
  },
  {
    id: 2,
    institution: "Certified Cloud Practitioner",
    degree: "AWS Certification",
    period: "2021",
    description: "Validated cloud fluency and foundational AWS knowledge across the four key areas: cloud concepts, security and compliance, technology, and billing and pricing."
  }
];
