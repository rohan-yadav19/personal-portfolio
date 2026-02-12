import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section id="about" className="pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
            Full Stack Developer
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-600">Rohan Yadav</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
            I build robust and scalable web applications using modern
            technologies. Passionate about creating seamless user experiences
            and solving complex technical challenges.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
            <a
              href="/resume/Resume.pdf"
              download
              className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/rohan-yadav19"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rohanyadav981533/"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.instagram.com/rohanyadav1544/?__pwa=1"
                className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 mx-auto bg-gradient-to-tr from-primary-600 to-primary-400 rounded-full overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl">
            {/* Placeholder image - in a real app, user would replace this */}
            <img
              src="images/profile/rohan.jpeg"
              alt="Rohan Yadav"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
