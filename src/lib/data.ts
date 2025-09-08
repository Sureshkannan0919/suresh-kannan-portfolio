import sureshKannan from "@/assests/png/suresh_kannan.png";
import beeZInovationLabs from "@/assests/png/beezlab.png";
import dataAssist from "@/assests/png/dataassist.png";
import customerSupport from "@/assests/png/customer_support_system.png";
import shoeRecommendation from "@/assests/png/shoe_recommendation_system.png";

export const PORTFOLIO_DATA = {
  name: "Suresh Kannan",
  title: "Software Engineer",
  email: "sureshdharma0916@gmail.com",
  profilePictureUrl: sureshKannan,
  socials: {
    linkedin: "https://www.linkedin.com/in/suresh-kannan-77913424a/",
    github: "https://github.com/Sureshkannan0919",
    twitter: "#",
  },
  bio: "B.Tech in AI & Data Science (2025) with expertise in developing production-ready AI systems and advanced data processing solutions. Proficient in building intelligent platforms, including RAG-powered recommendation engines and multi-agent architectures using LangGraph and Google Gemini. Skilled in Python, PyTorch, FAISS, Django, and modern AI frameworks, with hands-on experience in agentic AI, autonomous agent orchestration, and end-to-end solutions integrating NLP, real-time web applications, and seamless database systems. Passionate about harnessing cutting-edge AI to solve complex challenges and deliver scalable, impactful solutions.",
  roles: ["Agentic AI developer", "AI engineer", "Data scientist"],
};

export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Beez Inovation Labs.",
    logoUrl: beeZInovationLabs,
    dataAiHint: "technology company",
    title: "Software Trainee",
    period: "June 2024 - December 2024",
    description:
      "Worked as a Software Trainee in Beez Inovation Labs. I was part of the AI team and worked on various AI projects. I learned a lot about AI and how to use it to solve real-world problems.",
    tags: ["Natural Language Processing", "RAG", "Machine Learning", "AI", "LLM"],
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Multi Agent Customer Support System",
    imageUrl: customerSupport,
    dataAiHint: "project management",
    description:"Sophisticated AI customer service platform with hierarchical multi-agent architecture using LangGraph. Five specialized agents work collaboratively: Product Recommender (RAG-powered), Product Comparator (web scraping), Order Support (Firebase integration), Policy Support (semantic search), and Primary Assistant (routing). Delivers human-like customer interactions with intelligent agent handoffs and real-time data processing.",
    stack: ["Agentic AI", "Langchain", "Langgraph", "RAG", "LlamaIndex", "Fastapi", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sureshkannan0919/Multi-agent-customer-support-system-Langgraph.git",
  },
  {
    id: 2,
    title: "DataAssist - A Natural Language Query and Analysis tool",
    imageUrl: dataAssist,
    dataAiHint: "portfolio project",
    description:
      "Transform complex data queries into simple conversations! DataAssist is a Django web application that converts natural language into SQL/NoSQL queries using Google Gemini AI. Connect to multiple databases (MySQL, PostgreSQL, MongoDB), upload files (Excel, CSV, JSON), and get instant visualizations. Features include intelligent query generation, interactive charts, user authentication, and comprehensive query history tracking.",
    stack: ["NLP", "DDMS", "SQL", "Djanjo", "RestAPI", "Google Gemini","pandas"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sureshkannan0919/DataAssist.git",
  },
  
  {
    id: 3,
    title: "Advance shoe recommendation system",
    imageUrl: shoeRecommendation,
    dataAiHint: "project management",
    description:
      "Revolutionary e-commerce recommendation engine powered by Retrieval-Augmented Generation! Built with 46,879+ product dataset, this system understands natural language queries like 'Nike running shoes for men size 9 under $500' and delivers semantically relevant recommendations. Features GPU-accelerated FAISS vector search, sentence transformers embeddings, and Google Gemini integration for conversational AI responses.",
    stack: ["Python", "PyTorch", "FAISS", "Transformers", "Google Gemini", "Gradio", "CUDA"],
    liveUrl: "#",
    githubUrl: "https://github.com/Sureshkannan0919/Shoe_recommendation_system-RAG-.git",
  },
];

export const SKILLS_DATA = {
  aiAndDataScience: [
    "Agentic AI",
    "Natural Language Processing",
    "LLM",
    "Multi Agent Systems",
    "RAG",
    "Machine Learning",
    "Deep Learning",
    "Data analysis",
    "Data visualization",
    "Data engineering",
    "DBMS",
  ],
  programmingLanguages: ["Python", "JavaScript", "TypeScript", "SQL"],
  frameworks: [
    "Langgraph",
    "Langchain",
    "crewAI",
    "Sentence transformer",
    "Huggingface",
    "Llamaindex",
    "Pytorch",
    "Tensorflow",
    "pandas",
    "Matplotlib",
  ],
  toolsAndDatabases: [
    "CUDA",
    "Autogen",
    "Linux",
    "Docker",
    "AWS / GCP",
    "Github",
    "PostgreSQL",
    "MongoDB",
  ],
};

export const EDUCATION_DATA = [
  {
    id: 1,
    institution: "Prince Dr K Vasudevan college of engineering and technology Chennai",
    degree: "BTech in Artificial Intelligence and Data Science",
    period: "2021 - 2025",
    grade: "8.3 CGPA",
    description:
      "Graduated with honors. Focused on algorithms, data structures, and software engineering principles. Active member of the coding club.",
  },
  
];
