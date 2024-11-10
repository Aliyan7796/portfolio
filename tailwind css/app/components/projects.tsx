import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image"; 


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
    technologies: ["Next.js", "React.js", "Tailwind CSS",],
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
    technologies: ["React", "Next.js","TypeScript","TailWind Css"],
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
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={project.image.src}  // Use project.image.src for image source
          alt="project-image"
          className="w-full cursor-pointer rounded transition-all duration-300 hover:scale-105 md:w-[300px]"
          onClick={() => window.open(project.link, "_blank")}
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold text-blue-500">{project.title}</div>
            <p className="text-gray-500">{project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {project.technologies.map((tech, index) => (
              <span key={index} className="border text-white border-blue-500 rounded-lg bg-black/50 px-2 py-1">
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
    <div id="project" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-gray-500 md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-gray-500">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
