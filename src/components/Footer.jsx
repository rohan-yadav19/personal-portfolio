import React from "react";
import { Github, Linkedin, Mail, Heart, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <div className="font-bold text-2xl bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent mb-2">
              Portfolio
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/rohan-yadav19"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/rohanyadav981533/"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/rohanyadav1544/?__pwa=1"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:yadavrohan98040@gmail.com"
              className="text-slate-600 dark:text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
            © 2026 Rohan Yadav. Made with{" "}
            <Heart size={14} className="text-red-500 fill-current" /> in Nepal.
          </p>
          <div className="flex gap-8 text-sm text-slate-500 dark:text-slate-400">
            <a href="#" className="hover:text-primary-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
