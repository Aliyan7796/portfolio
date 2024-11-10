import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    image: "/1.webp",
    title: "Portfolio",
    description: "Created this personal web portfolio to showcase a variety of projects, skills, and experiences in web development.",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    link: "#home"
  },
  {
    image: "/2.webp",
    title: "Resume Builder",
    description: "Resume Builder webpage that allows users to create, customize, and download professional resumes.",
    technologies: ["HTML", "CSS", "TypeScript"],
    link: "https://resume-builder-seven-virid.vercel.app/"
  },
  {
    image: "/3.webp",
    title: "E-Commerce",
    description: "Working on it Full Stack E-Commerce WebSite",
    technologies: ["React", "Next.js", "TypeScript", "TailWind Css"],
    link: "https://text-util-nu.vercel.app/"
  }
];

interface ScrollRevealProps {
  children: React.ReactNode;
}

const ScrollReveal = ({ children }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <ScrollReveal>
      <div className="project-card">
        <img
          src={project.image}
          alt={project.title}
          width={500} // Image width (adjust as needed)
          height={300} // Image height (adjust as needed)
          className="project-image"
          onClick={() => window.open(project.link, "_blank")}
        />
        <div className="project-details">
          <div className="project-title-description">
            <div className="project-title">{project.title}</div>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id="project" className="projects-container">
      <ScrollReveal>
        <h1 className="projects-title">My Projects</h1>
      </ScrollReveal>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
