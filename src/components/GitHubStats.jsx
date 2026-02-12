import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, Users, Code2 } from "lucide-react";

const stats = [
  {
    label: "Total Contributions",
    value: "470+",
    icon: <Code2 size={24} />,
    color: "text-green-500",
  },
  {
    label: "Repositories",
    value: "48",
    icon: <GitBranch size={24} />,
    color: "text-blue-500",
  },
  {
    label: "Stars Earned",
    value: "2",
    icon: <Star size={24} />,
    color: "text-yellow-500",
  },
  {
    label: "Open Source",
    value: "1",
    icon: <Users size={24} />,
    color: "text-purple-500",
  },
];

const GitHubStats = () => {
  return (
    <section
      id="github"
      className="py-20 px-4 bg-white dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            GitHub Activity
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Continuous learning and open-source contributions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 text-center"
            >
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Code2 className="text-primary-600" /> Current Tech Focus
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "TypeScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-medium border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full md:w-auto">
              <a
                href="https://github.com/rohan-yadav19"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-transform"
              >
                Follow on GitHub
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
