import { motion } from "framer-motion";
import Image from 'next/image'; // For optimized image rendering
import profileImage from '@/public/profile.webp'; // Adjust the import path

const Hero = () => {
  return (
    <div id="home" className="px-10 flex min-h-screen w-full items-center justify-center  py-28 md:px-32">
      <div className="flex gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image 
            src={profileImage} // This can directly use the imported StaticImageData object
            alt="Profile Image"
            width={450} // Specify width for image
            height={450} // Specify height for image
            className="w-[400px] cursor-pointer rounded-full shadow-xl shadow-blue-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600 md:w-[550px]"
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to bg-gray-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
            Aliyan Ahmed Qazi
          </h1>
          <h3 className="bg-gradient-to-r from-gray-500 to bg-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            Web Developor
          </h3>
          <p className="md:text-base text-pretty text-sm text-gray-500">
          As a passionate designer and web developer, my expertise lies in transforming creative ideas into interactive, visually compelling digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
