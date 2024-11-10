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
      "Web Developer (PHP/Laraval).Full Stack Web Developer, FRONTEND Developer/Responsive Website Developer",
    technologies: ["Office Automation", "Html","Css","JS","BootStrap","PHP"],
  },
  {
    year: "2023-2024",
    role: "Student",
    company: "governor sindh initiative for artificial intelligence",
    description:
      "The Governor Sindh Initiative for Artificial Intelligence is a major program launched with the aim of equipping the youth of Sindh with modern technical skills, particularly in the fields of AI and related technologies. This initiative includes free IT training courses, such as AI, web development, data science, and programming, designed to help young individuals gain practical skills to meet the demands of the rapidly growing tech industry",
    technologies: ["Artificial Intelligence","Pyhton","Html","Tailwind Css","TS","Next.js"],
  },
];

const Experience: FC = () => {
  return (
    <div
      id="experience"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24 border-b border-neutral-900 pb-4"
    >
      <h1 className="text-4xl font-light text-gray-500 md:text-6xl">Educations</h1>
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
              className="mb-8 flex flex-wrap justify-center"
            >
              <div className="w-full lg:w-1/4 text-center">
                <p className="mb-2 text-sm text-gray-500">{experience.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold text-gray-500 text-xl">
                  {experience.role} -{" "}
                  <span className="text-lg text-blue-500">{experience.company}</span>
                </h6>
                <p className="mb-4 text-gray-500">{experience.description}</p>
                <div className="flex flex-wrap gap-5">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="border text-white border-blue-500 rounded-lg bg-black/50 px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* <Testimonials/> */}
    </div>
  );
};

export default Experience;
