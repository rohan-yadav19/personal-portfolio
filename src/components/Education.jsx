import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "High School",
    institution: "Sagarmatha Secondary School",
    period: "2020 - 2022",
    description: "Completed +2 with a focus on Science and Mathematics.",
    achievements: ["GPA: 3.58/4.0"],
  },
  {
    degree: "Bachelor of Technology and Engineering",
    institution: "Jain University",
    period: "2023 - Present",
    description: "Specialized in Computer Science and Engineering",
    achievements: ["Present CGPA: 9.0/10"],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            My academic foundation and certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 dark:opacity-5">
                <GraduationCap size={120} />
              </div>

              <div className="flex items-center gap-3 text-primary-600 font-bold mb-4">
                <BookOpen size={20} />
                <span>{edu.period}</span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {edu.degree}
              </h3>
              <p className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">
                {edu.institution}
              </p>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {edu.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award size={18} className="text-primary-600" /> Key
                  Achievements
                </h4>
                <ul className="space-y-2">
                  {edu.achievements.map((item, i) => (
                    <li
                      key={i}
                      className="text-slate-600 dark:text-slate-400 text-sm flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
