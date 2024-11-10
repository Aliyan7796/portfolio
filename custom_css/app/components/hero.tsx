import { motion } from "framer-motion";
import Image from 'next/image';
import profileImage from '@/public/profile.webp';

const Hero = () => {
  return (
    <div id="home" className="hero-container">
      <div className="hero-content">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={profileImage}
            alt="Profile Image"
            width={450}
            height={450}
            className="hero-image"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-text"
        >
          <h1 className="hero-title">
            Aliyan Ahmed Qazi
          </h1>
          <h3 className="hero-subtitle">
            Web Developer
          </h3>
          <p className="hero-description">
            As a passionate designer and web developer, my expertise lies in transforming creative ideas into interactive, visually compelling digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
