import { useRef } from 'react';
import { Globe, Github, Package2, ChevronLeft, ChevronRight } from 'lucide-react';
import img from '../assets/image.png';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Domposer',
    image: img,
    description:
      "Domposer is a website builder with drag-and-drop UI to manage HTML/CSS. Includes login, download/upload, PWA install. Built with Laravel and vanilla JS.",
    links: { site: '#' },
  },
  {
    title: 'Bay.js',
    image: img,
    description:
      "A lightweight web component library with no dependencies and only 11kb minified. Ideal for reusable components. Available on NPM.",
    links: { site: '#', github: '#', npm: '#' },
  },
  {
    title: 'Cookiemunch',
    image: img,
    description:
      "Customizable cookie plugin with SCSS, vanilla JS, and Parcel. Fully themeable and available on NPM.",
    links: { site: '#', github: '#', npm: '#' },
  },
  {
    title: 'MyPortfolio',
    image: img,
    description:
      "A sleek developer portfolio with smooth scroll, dark theme, React, and Tailwind CSS. Responsive and animated.",
    links: { site: '#', github: '#' },
  },
  {
    title: 'AnalyticsDash',
    image: '/projects/analytics.png',
    description:
      "A dynamic admin dashboard for real-time analytics using React, Tailwind, Chart.js, and Firebase.",
    links: { site: '#' },
  },
];

export default function MyWorks() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.7;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="works"
      className="min-h-screen py-20 px-6 bg-[#1b0b08] text-white flex flex-col items-center justify-center"
    >
      {/* Animated Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-white mb-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Works
      </motion.h2>

      <div className="relative w-full max-w-7xl">
        {/* Arrows (hidden on small screens) */}
        <button
          onClick={() => scroll('left')}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#2a1512] p-2 rounded-full hover:bg-[#3b1e19] transition"
        >
          <ChevronLeft className="w-6 h-6 text-[#c2a178]" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#2a1512] p-2 rounded-full hover:bg-[#3b1e19] transition"
        >
          <ChevronRight className="w-6 h-6 text-[#c2a178]" />
        </button>

        {/* Scroll / Stack Container */}
        <div
          ref={scrollRef}
          className="flex flex-col sm:flex-row gap-6 sm:overflow-x-auto sm:px-10 scroll-smooth snap-x snap-mandatory hide-scrollbar"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="w-full sm:w-[400px] h-[460px] flex-shrink-0 snap-center rounded-2xl bg-[#1e0d0a] shadow-md p-4 hover:scale-[1.02] transition-transform duration-200 flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#1b0b08] via-[#1b0b0880] to-transparent" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-gray-300 flex-1">{project.description}</p>
              <div className="flex gap-4 mt-4">
                {project.links.site && (
                  <a href={project.links.site} target="_blank" rel="noopener noreferrer">
                    <Globe className="w-5 h-5 text-white hover:text-[#c2a178]" />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5 text-white hover:text-[#c2a178]" />
                  </a>
                )}
                {project.links.npm && (
                  <a href={project.links.npm} target="_blank" rel="noopener noreferrer">
                    <Package2 className="w-5 h-5 text-white hover:text-[#c2a178]" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
