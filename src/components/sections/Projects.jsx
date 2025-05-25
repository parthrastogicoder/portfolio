import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Deception Detection with NLP",
      description: "A machine learning system that identifies deceptive statements in text using transformer-based models with 86% accuracy. Implemented BERT, RoBERTa, and T5 architectures with careful feature selection.",
      technologies: ["Python", "PyTorch", "Transformers", "NLP", "Scikit-learn"],
      github: "https://github.com/parthrastogicoder/deception-detection",
      live: "https://huggingface.co/parth0908/deception-detection",
      image: "project-deception.jpg"
    },
    {
      title: "ERP System for Educational Institutions",
      description: "A comprehensive enterprise resource planning system designed for schools and colleges, featuring modules for student management, attendance tracking, fee collection, and academic performance analysis.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      github: "https://github.com/parthrastogicoder/school-erp",
      live: "",
      image: "project-erp.jpg"
    },
    {
      title: "Shell Scheduler",
      description: "A custom UNIX shell scheduler implementing various CPU scheduling algorithms including FCFS, SJF, Round Robin, and Priority Scheduling with interactive visualization of process execution.",
      technologies: ["C++", "POSIX", "Data Structures", "Algorithms"],
      github: "https://github.com/parthrastogicoder/shell-scheduler",
      live: "",
      image: "project-shell.jpg"
    },
    {
      title: "Sentiment Analysis for Product Reviews",
      description: "A machine learning system that analyzes customer reviews to determine sentiment and extract key insights. Utilizes BERT for classification and aspect-based sentiment analysis.",
      technologies: ["Python", "NLP", "BERT", "Flask", "React"],
      github: "https://github.com/parthrastogicoder/sentiment-analysis",
      live: "https://sentiment-analysis-demo.herokuapp.com",
      image: "project-sentiment.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lightText max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in machine learning,
            software development, and problem-solving.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              variants={itemVariants}
            >
              <div className="h-48 bg-gray-300 relative">
                {/* Replace with actual project images when available */}
                <div className="absolute inset-0 flex items-center justify-center text-white text-xl font-semibold bg-gray-700 bg-opacity-50">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-textColor mb-2">{project.title}</h3>
                <p className="text-lightText mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-primary text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-textColor hover:text-primary transition-colors flex items-center"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <FaGithub className="mr-2" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-textColor hover:text-primary transition-colors flex items-center"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
