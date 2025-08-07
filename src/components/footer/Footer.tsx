import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1b0b08] border-t border-[#c2a17833] px-6 md:px-10 lg:px-24 py-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Name or Logo */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-[#f3e9df]">Rey Gabrielle Pogado</h3>
          <p className="text-[#aaa] text-sm mt-1">Software Developer</p>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:your.email@example.com"
            className="hover:text-[#c2a178] transition-colors flex items-center gap-2"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c2a178] transition-colors flex items-center gap-2"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#c2a178] transition-colors flex items-center gap-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="mt-6 text-center text-sm text-[#777]">
        &copy; {new Date().getFullYear()} Rey Gabrielle E. Pogado. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
