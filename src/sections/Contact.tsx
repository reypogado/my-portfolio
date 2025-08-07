import { motion } from 'framer-motion';
import { Mail, Send, User } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#1b0b08] text-white min-h-screen flex items-center px-6 md:px-10 lg:px-24 overflow-hidden 
      bg-[radial-gradient(#c2a17810_1px,transparent_1px)] bg-[size:20px_20px]"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c2a17855] to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-[#cfcfcf] max-w-xl mx-auto text-lg">
            Let's bring your ideas to life! Feel free to reach out for collaborations, projects, or consultations.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#2a1b18] rounded-2xl shadow-md p-8 space-y-6"
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-sm text-[#f3e9df] flex items-center gap-2">
              <User className="w-4 h-4" /> Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="bg-[#1b0b08] border border-[#c2a17855] rounded-xl p-3 text-white placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#c2a178]"
              placeholder="Your name"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-sm text-[#f3e9df] flex items-center gap-2">
              <Mail className="w-4 h-4" /> Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="bg-[#1b0b08] border border-[#c2a17855] rounded-xl p-3 text-white placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#c2a178]"
              placeholder="you@example.com"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-sm text-[#f3e9df] flex items-center gap-2">
              <Send className="w-4 h-4" /> Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="bg-[#1b0b08] border border-[#c2a17855] rounded-xl p-3 text-white placeholder:text-[#888] focus:outline-none focus:ring-2 focus:ring-[#c2a178]"
              placeholder="Your message"
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-[#c2a178] text-[#1b0b08] font-semibold hover:bg-[#e2c6a0] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#c2a17855] to-transparent" />
    </section>
  );
};

export default Contact;
