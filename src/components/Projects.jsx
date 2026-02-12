import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Employee-Management-System",
    description:
      "A Employee Task Management System where employers assign tasks and employees can accept, track, and mark tasks as completed. Uses localStorage for data persistence.",
    image: "images/projects/Employee-Management-System.png",
    tech: ["React.js", "Tailwind", "localStorage"],
    github: "https://github.com/rohan-yadav19/Employee-Management-System.git",
    live: "#",
  },
  {
    title: "Online Learning Platform",
    description:
      "A modern, responsive online learning platform built with React.js, Express.js, and MongoDB. Features a clean, professional EdTech design with bright colors, soft gradients, and rounded cards.",
    image: "images/projects/onlineLearning.jpg",
    tech: ["React", "Node.js", "Tailwind", "MongoDB"],
    github: "https://github.com/rohan-yadav19/Online-Learning-Platform.git",
    live: "https://online-learning-platform-chi-one.vercel.app/",
  },
  {
    title: "Expense Tracker",
    description:
      "Expense Tracker is a simple and user-friendly web application that helps users manage their daily finances by tracking income and expenses. It allows users to add, edit, and delete transactions, categorize them (like food, rent, travel), and view a real-time summary of their spending.",
    image: "images/projects/expense.png",
    tech: ["React", "Mongodb", "Tailwind", "Node.js"],
    github: "https://github.com/rohan-yadav19/Expense-Tracker.git",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work, showcasing my skills in fullstack
            development and UI/UX design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/40 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold rounded-full uppercase tracking-wider"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
