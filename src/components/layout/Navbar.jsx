import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from '../ui/ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Experience', path: '#experience' },
    { name: 'Projects', path: '#projects' },
    { name: 'Awards', path: '#awards' },
    { name: 'Positions', path: '#positions' },
    { name: 'Contact', path: '#contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-dark-surface shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-bold text-primary dark:text-dark-primary">Parth Rastogi</div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.path}
                  className="text-textColor dark:text-dark-light-text hover:text-primary dark:hover:text-dark-primary transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button 
            className="text-textColor dark:text-dark-light-text focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden fixed top-0 right-0 h-screen w-2/3 bg-white dark:bg-dark-surface shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMenu}
            className="text-textColor dark:text-dark-light-text focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="flex flex-col space-y-4 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                className="block py-2 text-lg text-textColor dark:text-dark-light-text hover:text-primary dark:hover:text-dark-primary transition-colors"
                onClick={closeMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
