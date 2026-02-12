import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Next.js 15 is here! (Top 5 Features)",
    excerpt:
      "Explore the latest updates in Next.js 15, including improved caching, partial prereferencing, and the new compiler.",
    date: "Oct 24, 2024",
    author: "Javascript Mastery",
    image: "images/nextjs15.png",
    tags: ["Next.js", "React"],
    url: "https://youtu.be/Mfa9ah4Rvlo?si=ttJvViw8_qMOodEh",
  },
  {
    id: 2,
    title: "TailwindCSS v4 First Look - Better at Everything?!",
    excerpt:
      "A first look at the massive changes coming to Tailwind CSS v4, including the new lightning-fast engine.",
    date: "Mar 15, 2024",
    author: "Ariel Weinrger",
    image: "images/cssV4.png",
    tags: ["Tailwind", "CSS"],
    url: "https://youtu.be/ZbkARnRwVfk?si=6UhNHUG57Z3cYeSg",
  },
  {
    id: 3,
    title: "Top 17 New Technology Trends That Will Define 2026",
    excerpt:
      " top 17 breakthrough technology trends that are set to transform the way we work, live, think, and connect in the next two years. From AI-powered everything to quantum computing, brain-machine interfaces, green tech revolutions,",
    date: "Aug 12, 2025",
    author: "AI Uncovered",
    image: "images/ai.jpg",
    tags: ["New Technology", "AI"],
    url: "https://youtu.be/Otim2mDjsYM?si=stHkmZNHsv5tKAgQ",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Latest Insights
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Hand-picked videos and articles about modern software engineering.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@fireship"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium group"
          >
            View more on YouTube{" "}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => window.open(post.url, "_blank")}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} /> {post.author}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {post.excerpt}
                </p>

                <button
                  className="text-primary-600 font-semibold text-sm flex items-center gap-1 group/btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(post.url, "_blank");
                  }}
                >
                  Watch Video{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
