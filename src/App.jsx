import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackToTop from './components/layout/BackToTop';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Awards from './components/sections/Awards';
import Positions from './components/sections/Positions';
import Contact from './components/sections/Contact';

function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for fixed navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background dark:bg-dark-bg transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Awards />
            <Positions />
            <Contact />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
