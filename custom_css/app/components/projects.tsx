import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Project {
  image: StaticImageData;
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

const projectsData: Project[] = [
  {
    image: image3,
    title: "Portfolio",
    description: "Created this personal web portfolio to showcase a variety of projects, skills, and experiences in web development.",
    technologies: ["Next.js", "React.js", "Tailwind CSS"],
    link: "#home"
  },
  {
    image: image2,
    title: "Resume Builder",
    description: "Resume Builder webpage that allows users to create, customize, and download professional resumes.",
    technologies: ["HTML", "CSS", "TypeScript"],
    link: "https://resume-builder-seven-virid.vercel.app/"
  },
  {
    image: image1,
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
          src={project.image.src}
          alt="project-image"
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
