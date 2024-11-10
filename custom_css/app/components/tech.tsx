import { BiLogoCss3, BiLogoFigma, BiLogoHtml5, BiLogoJavascript, BiLogoNodejs, BiLogoReact, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { motion } from "framer-motion";
import { RiNextjsFill } from "react-icons/ri";
import { SiAdobeillustrator, SiAdobephotoshop, SiCanva, SiFigma } from "react-icons/si";


interface TechProps {}

const Tech: React.FC<TechProps> = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div id="tech" className="tech-container">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="tech-title"
      >
        Technologies
      </motion.h1>
      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="tech-subtitle"
      >
        Web Technologies
      </motion.h2>

      <div className="tech-icons-container">
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoHtml5 className="tech-icon html-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoCss3 className="tech-icon css-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoJavascript className="tech-icon js-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoTypescript className="tech-icon ts-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoReact className="tech-icon react-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <RiNextjsFill className="tech-icon nextjs-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoTailwindCss className="tech-icon tailwind-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <BiLogoNodejs className="tech-icon nodejs-icon" />
        </motion.div>
      </div>

      <motion.h2
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="tech-subtitle"
      >
        Design Technologies
      </motion.h2>

      <div className="tech-icons-container">
        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiAdobeillustrator className="tech-icon illustrator-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiAdobephotoshop className="tech-icon photoshop-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiFigma className="tech-icon figma-icon" />
        </motion.div>

        <motion.div variants={variants} initial="hidden" whileInView="visible" transition={{ duration: 0.5 }}>
          <SiCanva className="tech-icon canva-icon" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
