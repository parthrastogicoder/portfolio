import { motion } from 'framer-motion';
import { FaUsers, FaLaptopCode } from 'react-icons/fa';

const Positions = () => {
  const positions = [
    {
      title: "Software Product Design Mentor",
      organization: "Centre for Intelligent Product Development",
      description: "Responsible for mentoring and nourishing student ideas in software product design and development.",
      icon: <FaLaptopCode className="text-primary" size={24} />
    },
    {
      title: "Student Mentor",
      organization: "IIIT Delhi",
      description: "Guided first-year students in academic and non-academic matters, helping them adapt to university life and curriculum.",
      icon: <FaUsers className="text-primary" size={24} />
    },
    {
      title: "Teaching Assistant",
      organization: "Department of Computer Science, IIIT Delhi",
      description: "Served as a TA for multiple courses including Machine Learning, Deep Learning, and Data Structures & Algorithms, providing academic support to students.",
      icon: <FaLaptopCode className="text-primary" size={24} />
    },
    {
      title: "Technical Team Member",
      organization: "Google Developer Student Club (GDSC)",
      description: "Contributed to technical events, workshops, and hackathons organized by GDSC at IIIT Delhi.",
      icon: <FaUsers className="text-primary" size={24} />
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
    <section id="positions" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">Positions of Responsibility</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lightText max-w-3xl mx-auto">
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
              className="bg-cardBg rounded-lg p-6 shadow-md flex items-start mb-6"
              variants={itemVariants}
            >
              <div className="mr-4 mt-1">{position.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-textColor mb-1">{position.title}</h3>
                <h4 className="text-md text-primary mb-2">{position.organization}</h4>
                <p className="text-lightText">{position.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Positions;
