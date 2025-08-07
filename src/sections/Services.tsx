import { motion } from 'framer-motion';
import {
  Code,
  Smartphone,
  Server,
  UserCheck,
  ClipboardList,
} from 'lucide-react';
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiFlutter,
  SiNestjs,
  SiFirebase,
  SiExpress,
  SiVite,
  SiElectron,
  SiMysql,
  SiVercel,
  SiGithub,
} from 'react-icons/si';

const services = [
  {
    title: 'Web Development',
    icon: (
      <div className="flex items-center gap-2 justify-center">
        <Code className="w-6 h-6 text-[#c2a178]" />
        <SiReact className="w-6 h-6 text-[#61DBFB]" />
        <SiTailwindcss className="w-6 h-6 text-[#38BDF8]" />
        <SiVite className="w-6 h-6 text-[#646CFF]" />
        <SiElectron className="w-6 h-6 text-[#3C873A]" />
      </div>
    ),
    description:
      'Responsive, performant websites using React, Tailwind, Vite and Electron with focus on scalability and performance.',
  },
  {
    title: 'Mobile Development',
    icon: (
      <div className="flex items-center gap-2 justify-center">
        <Smartphone className="w-6 h-6 text-[#c2a178]" />
        <SiReact className="w-6 h-6 text-[#61DBFB]" />
        <SiFlutter className="w-6 h-6 text-[#02569B]" />
      </div>
    ),
    description:
      'Cross-platform mobile applications built using React Native and Flutter with native performance and elegant UI.',
  },
  {
    title: 'Backend Development',
    icon: (
      <div className="flex items-center gap-2 justify-center">
        <Server className="w-6 h-6 text-[#c2a178]" />
        <SiNestjs className="w-6 h-6 text-[#ea2845]" />
        <SiExpress className="w-6 h-6 text-white" />
        <SiNodedotjs className="w-6 h-6 text-[#3C873A]" />
        <SiFirebase className="w-6 h-6 text-[#FFA611]" />
        <SiMysql className="w-6 h-6 text-[#FFA611]" />
      </div>
    ),
    description:
      'Robust backend development using NestJS, Express.js, Node.js, and Firebase. Delivering secure APIs, database integration, and scalable cloud services.',
  },
  {
    title: 'Technical Consulting',
    icon: (
      <div className="flex items-center gap-2 justify-center">
        <UserCheck className="w-6 h-6 text-[#c2a178]" />
        <ClipboardList className="w-6 h-6 text-[#c2a178]" />
        <SiGithub className="w-6 h-6 text-white" />
        <SiVercel className="w-6 h-6 text-white" />
        <SiFirebase className="w-6 h-6 text-[#FFCA28]" />
      </div>
    ),
    description:
      'I assist businesses and developers in making the right technical decisions — from choosing the best tech stack and tools to structuring scalable architectures and improving code quality through review and planning.',
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-[#1b0b08] text-white min-h-screen flex items-center px-6 md:px-10 lg:px-24 overflow-hidden 
      bg-[radial-gradient(#c2a17810_1px,transparent_1px)] bg-[size:20px_20px]"
    >
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c2a17855] to-transparent" />

      {/* Section Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Services
          </h2>

          <p className="text-[#cfcfcf] max-w-2xl mx-auto text-lg">
            I provide high-quality development services to build reliable, scalable, and visually engaging applications across platforms.
          </p>

          {/* Tech Stack Icons */}
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            <SiReact className="w-9 h-9 text-[#61DBFB]" />
            <SiTailwindcss className="w-9 h-9 text-[#38BDF8]" />
            <SiNodedotjs className="w-9 h-9 text-[#3C873A]" />
            <SiNestjs className="w-9 h-9 text-[#ea2845]" />
            <SiFlutter className="w-9 h-9 text-[#02569B]" />
            <SiFirebase className="w-9 h-9 text-[#FFA611]" />
            <SiExpress className="w-9 h-9 text-white" />
          </div>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group bg-[#2a1b18] rounded-2xl p-6 min-h-[260px] flex flex-col items-center text-center shadow-md hover:shadow-[0_0_15px_#c2a17888] transition-all duration-300"
            >
              <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#f3e9df]">{service.title}</h3>
              <p className="text-[#ccc] text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Divider */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c2a17855] to-transparent" />
    </section>
  );
};

export default Services;
