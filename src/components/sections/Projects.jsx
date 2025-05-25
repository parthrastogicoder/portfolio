import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "ERP System Modules",
      description: "Developed an Enterprise Resource Planning application for Aero Armour to optimize employee-specific operations. Integrated Shopify for order data, automated production workflows, quality checks, delivery preparation, and return handling.",
      technologies: ["React.js", "Node.js", "DynamoDB", "Lambda", "AWS"],
      github: "",
      live: "",
      image: "project1.jpg"
    },
    {
      title: "Deception Detection in Diplomacy",
      description: "Built HiS-Attention, a transformer-based multimodal fusion model integrating BERT message embeddings, structured game-state features, and ten-turn context achieving a 57.38% Macro F1 (Higher than prior SOTA) and 21.9% Lie F1.",
      technologies: ["Python", "PyTorch", "NLTK", "Transformers", "NLP"],
      github: "https://github.com/parthrastogicoder/Deception_Detection/tree/main",
      live: "",
      image: "project2.jpg"
    },
    {
      title: "Shell-Scheduler",
      description: "Designed a Linux shell with prompt display, command execution, and command history tracking along with a scheduler. Implemented IPC mechanisms including signal handling, piping, and background process management.",
      technologies: ["C", "Linux", "Shell Scripting", "IPC", "Scheduling Algorithms"],
      github: "https://github.com/parthrastogicoder/shell-scheduler",
      live: "",
      image: "project3.jpg"
    },
    {
      title: "NetSafe-Network Intrusion Detection",
      description: "Built a scalable ML pipeline achieving 83% accuracy using ANNs, ensemble methods and classical methods for network intrusion detection, processing over 4M network connections from the KDD Cup '99 dataset. Optimized model performance through feature engineering and hyperparameter tuning, reducing false positives by 35% while maintaining detection rates across 23 attack types divided into 5 broad categories.",
      technologies: ["Python", "Scikit-Learn", "Machine Learning", "Data Processing", "Security"],
      github: "https://github.com/parthrastogicoder/ML-Project-Network_Intrusion_Detection",
      live: "",
      image: "project4.jpg"
    },
    {
      title: "Ground Water Quality Analysis",
      description: "Analyzed 5,212 district-year observations with OLS regression to quantify how State Domestic Product affects groundwater Quality; baseline achieved R² = 4.5% with SDP coefficient significant at p < 0.001. Enhanced the model by adding Kuznets-curve polynomial terms (SDP², SDP³), Gini index and 22 year/region dummy variables—boosting R² by 20% to 25.7%—and applied studentized-residual and DFBETA diagnostics to deal with outliers.",
      technologies: ["R", "Statistics", "Regression Analysis", "Data Visualization", "Environmental Science"],
      github: "https://github.com/parthrastogicoder/GroundWaterQualityAnalysis-ECO221",
      live: "",
      image: "project5.jpg"
    },
    {
      title: "Stick Hero Game Clone",
      description: "Developed a GUI-based game incorporating Object Oriented Programming concepts. Utilized UML diagrams for better ideation and project planning. Included good programming practices like Design Patterns, Serialization and JUnit Testing.",
      technologies: ["Java", "Apache-Maven", "JavaFX", "OOP", "Design Patterns"],
      github: "https://github.com/parthrastogicoder/Stick_Hero_Clone",
      live: "",
      image: "project6.jpg"
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
              <div className="h-48 bg-gray-300 relative overflow-hidden">
                <img 
                  src={`/portfolio/images/project${index + 1}.jpg`} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
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
