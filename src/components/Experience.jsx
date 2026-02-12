import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: '2023 - Present',
    description: 'Leading the development of a microservices-based architecture and mentoring junior developers.',
    skills: ['Next.js', 'Go', 'Kubernetes', 'AWS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Creative Solutions',
    period: '2021 - 2023',
    description: 'Developed and maintained various client projects ranging from e-commerce to social platforms.',
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2019 - 2021',
    description: 'Focused on front-end development and building responsive user interfaces.',
    skills: ['JavaScript', 'CSS', 'HTML', 'Vue.js'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Work Experience</h2>
          <p className="text-slate-600 dark:text-slate-400">My professional journey in the tech industry.</p>
        </div>

        <div className="relative border-l-2 border-primary-200 dark:border-primary-900 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 max-w-4xl mx-auto pl-8 md:pl-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'
              }`}
            >
              {/* Dot on the timeline */}
              <div className="absolute top-0 -left-[41px] md:left-auto md:right-auto w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-slate-900 shadow-sm z-10 md:translate-x-[calc(50%+1px)]" 
                   style={{ left: index % 2 === 0 ? '-41px' : 'auto', right: index % 2 === 0 ? 'auto' : '-41px' }}>
              </div>

              <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className={`flex items-center gap-2 text-primary-600 font-bold mb-2 ${index % 2 !== 0 && 'md:justify-end'}`}>
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{exp.role}</h3>
                <div className={`flex items-center gap-2 text-slate-500 dark:text-slate-400 mb-4 ${index % 2 !== 0 && 'md:justify-end'}`}>
                  <Briefcase size={16} />
                  <span>{exp.company}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
                  {exp.description}
                </p>
                <div className={`flex flex-wrap gap-2 ${index % 2 !== 0 && 'md:justify-end'}`}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
