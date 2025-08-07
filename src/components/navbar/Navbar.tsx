import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Brand (optional) */}
        {/* <div className="text-[#ccc] font-extrabold text-2xl tracking-wide">REY</div> */}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-light">
          {['home', 'about', 'services', 'works', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollTo(section)}
              className="hover:text-white transition duration-300 capitalize"
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-[#ccc]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#1b0b08] text-gray-300 px-6 pb-6 shadow-md">
          <ul className="flex flex-col space-y-4 font-light text-2xl">
            {['home', 'about', 'services', 'works', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollTo(section)}
                  className="w-full text-left hover:text-white transition capitalize"
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
