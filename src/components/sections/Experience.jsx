import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Research Intern",
      company: "Indian Institute of Technology, Ropar",
      duration: "May 2023 - Aug 2023",
      description: [
        "Collaborated on a novel research project focused on detecting deception in text using machine learning.",
        "Developed and trained NLP models to identify deceptive patterns in written statements with 86% accuracy.",
        "Employed transformer-based architectures including BERT, RoBERTa, and T5 models for feature extraction.",
        "Implemented and compared multiple classification techniques to optimize detection performance."
      ]
    },
    {
      title: "Software Development Intern",
      company: "Fintech Startup",
      duration: "Jan 2023 - Apr 2023",
      description: [
        "Contributed to the development of a web-based financial management application using React and Node.js.",
        "Implemented responsive UI components that improved user experience and accessibility.",
        "Created API endpoints for data processing and integration with third-party financial services.",
        "Collaborated with the design team to implement new features based on user feedback."
      ]
    },
    {
      title: "Research Assistant",
      company: "IIIT Delhi Machine Learning Lab",
      duration: "Aug 2022 - Dec 2022",
      description: [
        "Assisted in research projects related to computer vision and natural language processing.",
        "Collected and preprocessed large datasets for model training and evaluation.",
        "Implemented baseline models and conducted extensive literature reviews.",
        "Contributed to research papers documenting experimental findings and methodologies."
      ]
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
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lightText max-w-3xl mx-auto">
            My professional journey includes research and development roles where I've applied
            my technical skills to solve real-world problems.
          </p>
        </motion.div>

        <motion.div 
          className="relative border-l-2 border-primary pl-8 ml-4 md:ml-12 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute -left-[42px] bg-primary text-white p-2 rounded-full">
                <FaBriefcase />
              </div>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-textColor">{exp.title}</h3>
                <h4 className="text-lg font-semibold text-primary mb-2">{exp.company}</h4>
                <div className="flex items-center text-lightText mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{exp.duration}</span>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-lightText flex">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
