import { motion } from 'framer-motion';
import aboutImg from '../assets/about.png'; // Adjust as needed

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#1b0b08] text-white min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-24 relative overflow-hidden"
    >
      {/* 🌑 Background Decorations (Static Blobs + Grid) */}
      <div className="absolute top-[-60px] left-[-80px] w-[300px] h-[300px] bg-[#d9b7a3] opacity-10 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-[#fff3] opacity-15 rounded-full blur-[120px] z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_1px,_transparent_1px)] [background-size:20px_20px] z-0 pointer-events-none" />

      {/* 👉 Vertical Line Reveal (Bottom to Top, from the Right Edge) */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: '400px' }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.5 }} // triggers when 50% in view
        className="hidden md:block absolute bottom-[20%] right-6 w-[2px] bg-[#c2a178] z-10"
      />



      {/* Main Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-16 py-20">
        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-fit mx-auto md:mx-0"
        >
          <div className="absolute -top-5 -left-5 w-full h-full rounded-lg border-4 border-[#ccc] z-0" />
          <img
            src={aboutImg}
            alt="Rey Gabrielle Pogado"
            className="relative z-10 w-[300px] md:w-[400px] object-cover rounded-md shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">About Me</h2>
          <p className="text-[#d5d5d5] text-lg md:text-xl leading-relaxed">
            Hi! I'm Rey Gabrielle Pogado, a passionate Software Developer with over 5 years of hands-on experience in designing, building, and optimizing modern applications. My journey in tech began with a deep curiosity for how things work — and that curiosity quickly evolved into a career built on innovation and precision.
          </p>
          <p className="text-[#cfcfcf] text-base md:text-lg">
            I specialize in front-end development with a strong focus on creating visually compelling, user-centered interfaces for both web and mobile platforms. My toolbox includes React, JavaScript, Tailwind CSS, and more — and I love combining clean code with elegant UI/UX to deliver seamless user experiences.
          </p>
          <p className="text-[#cfcfcf] text-base md:text-lg">
            Beyond the code, I'm constantly learning, experimenting, and pushing boundaries. I believe that great software isn’t just functional — it's intuitive, performant, and beautiful. Whether working independently or as part of a team, I bring a strong sense of collaboration, creativity, and purpose to every project I work on.
          </p>
          <p className="text-[#cfcfcf] text-base md:text-lg">
            Outside development, you might find me exploring design trends, sharing knowledge with peers, or planning the next creative side project. Let’s build something amazing together.
          </p>
          <div className="mt-4 w-24 h-[2px] bg-[#444] mx-auto md:mx-0" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
