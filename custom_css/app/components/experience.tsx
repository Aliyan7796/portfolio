import { motion } from "framer-motion";
import { FC } from "react";


interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    year: "2024-PRESENT (Remote)",
    role: "Student",
    company: "Aptech",
    description:
      "Web Developer (PHP/Laraval). Full Stack Web Developer, FRONTEND Developer/Responsive Website Developer",
    technologies: ["Office Automation", "Html", "Css", "JS", "BootStrap", "PHP"],
  },
  {
    year: "2023-2024",
    role: "Student",
    company: "Governor Sindh Initiative for Artificial Intelligence",
    description:
      "The Governor Sindh Initiative for Artificial Intelligence is a major program launched with the aim of equipping the youth of Sindh with modern technical skills, particularly in the fields of AI and related technologies. This initiative includes free IT training courses, such as AI, web development, data science, and programming, designed to help young individuals gain practical skills to meet the demands of the rapidly growing tech industry",
    technologies: ["Artificial Intelligence", "Python", "Html", "Tailwind Css", "TS", "Next.js"],
  },
];

const Experience: FC = () => {
  return (
    <div id="experience" className="experience-container">
      <h1 className="experience-title">Educations</h1>
      <div>
        {EXPERIENCES.map((experience, index) => {
          const motionProps = {
            initial: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
          };

          return (
            <motion.div
              key={index}
              {...motionProps}
              className="experience-item"
            >
              <div className="experience-year">
                <p>{experience.year}</p>
              </div>
              <div className="experience-details">
                <h6 className="experience-role">
                  {experience.role} -{" "}
                  <span className="experience-company">{experience.company}</span>
                </h6>
                <p className="experience-description">{experience.description}</p>
                <div className="experience-tech-list">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="experience-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
