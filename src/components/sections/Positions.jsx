import { motion } from 'framer-motion';
import { FaUsers, FaLaptopCode } from 'react-icons/fa';

const Positions = () => {
  const positions = [
    {
      title: "Software Product Design Mentor",
      organization: "Centre for Intelligent Product Development",
      description: "Responsible for mentoring and nourishing student ideas in software product design and development.",
      icon: <FaLaptopCode className="text-primary dark:text-dark-primary" size={24} />
    },
    {
      title: "Head of Content and Social Media",
      organization: "E-Cell, IIIT Delhi",
      description: "Leading a team of 30 members under operations, managing content and social media strategy.",
      icon: <FaUsers className="text-primary dark:text-dark-primary" size={24} />
    },
    {
      title: "Head, Organising Committee (Social Media & Coverage)",
      organization: "E-Summit 2024, IIIT Delhi",
      description: "Responsible for social media reach of 150k+ and coverage for E-Summit 2024.",
      icon: <FaUsers className="text-primary dark:text-dark-primary" size={24} />
    },
    {
      title: "Student Mentor",
      organization: "Tribal Youth Exchange Program, Ministry of Youth Affairs",
      description: "Mentored students as part of the Tribal Youth Exchange Program. (Aug 2024)",
      icon: <FaUsers className="text-primary dark:text-dark-primary" size={24} />
    },
    {
      title: "Volunteer",
      organization: "TiE Delhi IID 2023",
      description: "Volunteered at TiE Delhi's Innovation and Investment Day 2023.",
      icon: <FaUsers className="text-primary dark:text-dark-primary" size={24} />
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
    <section id="positions" className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor dark:text-dark-text mb-4">Positions of Responsibility</h2>
          <div className="w-24 h-1 bg-primary dark:bg-dark-primary mx-auto"></div>
          <p className="mt-6 text-lightText dark:text-dark-light-text max-w-3xl mx-auto">
            Leadership roles and responsibilities I've undertaken during my academic journey.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {positions.map((position, index) => (
            <motion.div 
              key={index} 
              className="bg-cardBg dark:bg-dark-card rounded-lg p-6 shadow-md dark:shadow-dark-surface/50 flex items-start mb-6 hover:shadow-lg dark:hover:shadow-dark-card/50 transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mr-4 mt-1">{position.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-textColor dark:text-dark-text mb-1">{position.title}</h3>
                <h4 className="text-md text-primary dark:text-dark-primary mb-2">{position.organization}</h4>
                <p className="text-lightText dark:text-dark-light-text">{position.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Positions;
