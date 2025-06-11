import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaDownload } from 'react-icons/fa';
import { SiLeetcode, SiCodeforces, SiHuggingface } from 'react-icons/si';
import Typed from 'typed.js';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'ML Engineer',
        'Data Scientist', 
        'CS Researcher',
        'Backend Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-textColor">
            Hi, I'm <span className="text-primary">Parth Rastogi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-lightText">
            I'm a <span ref={typedRef} className="text-primary"></span>
          </h2>
          <p className="text-lg mb-8 text-lightText">
            CS student at IIIT Delhi with expertise in Machine Learning, Data Science, Research, 
            and Software Development. Currently working on generative AI solutions and multimodal
            machine learning models, aiming to develop technology that addresses real-world challenges.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <a 
              href="#projects" 
              className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-md transition-colors font-medium"
            >
              View My Work
            </a>
            <a 
              href="/portfolio/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-secondary hover:bg-primary text-white rounded-md transition-colors font-medium flex items-center gap-2"
              download="Parth_Rastogi_Resume.pdf"
            >
              <FaDownload size={16} />
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
          <div className="flex space-x-5">
            <a 
              href="https://github.com/parthrastogicoder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/parth-rastogi-151444258" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="https://huggingface.co/parth0908" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="Hugging Face"
            >
              <SiHuggingface size={24} />
            </a>
            <a 
              href="mailto:parthofficial0908@gmail.com"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
            <a 
              href="https://leetcode.com/u/Halogen98/"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode size={24} />
            </a>
            <a 
              href="https://codeforces.com/profile/parthhhhhhhhh"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lightText hover:text-primary transition-colors"
              aria-label="Codeforces"
            >
              <SiCodeforces size={24} />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary animate-bounce">
        <a href="#about" aria-label="Scroll down">
          <FaChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;