import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Server, Database, Smartphone, Search } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, high-performance web applications using modern frameworks like React and Next.js.',
    icon: <Layout className="w-8 h-8" />,
    color: 'bg-blue-500',
  },
  {
    title: 'Backend Development',
    description: 'Creating scalable server-side logic, RESTful APIs, and microservices using Node.js and Go.',
    icon: <Server className="w-8 h-8" />,
    color: 'bg-green-500',
  },
  {
    title: 'Database Design',
    description: 'Designing and optimizing database schemas with PostgreSQL, MongoDB, and Redis.',
    icon: <Database className="w-8 h-8" />,
    color: 'bg-purple-500',
  },
  {
    title: 'Mobile-First Design',
    description: 'Ensuring applications look and function perfectly across all devices and screen sizes.',
    icon: <Smartphone className="w-8 h-8" />,
    color: 'bg-orange-500',
  },
  {
    title: 'API Integration',
    description: 'Seamlessly connecting third-party services and internal systems for enhanced functionality.',
    icon: <Code className="w-8 h-8" />,
    color: 'bg-red-500',
  },
  {
    title: 'SEO Optimization',
    description: 'Implementing best practices to improve search engine visibility and organic reach.',
    icon: <Search className="w-8 h-8" />,
    color: 'bg-yellow-500',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">What I Offer</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive full-stack solutions tailored to modern business needs and user expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="p-8 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-16 h-16 ${service.color} text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
