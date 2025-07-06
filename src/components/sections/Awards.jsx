import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';

const Awards = () => {
  const awards = [
    {
      title: "KVPY Fellowship 2020",
      description: "Secured KVPY Fellowship 2020 by achieving rank 467 all across India.",
      icon: <FaTrophy className="text-yellow-500" size={24} />
    },
    {
      title: "JEE Mains Top 1%",
      description: "Ranked among the top 1% of over 1 million applicants in JEE Mains.",
      icon: <FaMedal className="text-yellow-500" size={24} />
    },
    {
      title: "Dean's List Award",
      description: "Achieved Dean's list Award for year 2023-24 and 2024-25 by showcasing outstanding academic performance.",
      icon: <FaStar className="text-yellow-500" size={24} />
    },
    {
      title: "HackJNU 3.0 Finalist",
      description: "Ranked among the Finalist in \"HackJNU 3.0, 2024,\" a hackathon focused on global sustainable goals.",
      icon: <FaTrophy className="text-yellow-500" size={24} />
    },
    {
      title: "Competitive Programming",
      description: "Solved 850+ algorithm problems combined over LeetCode and Codeforces. Reached Specialist (Max. 1400) on Codeforces.",
      icon: <FaStar className="text-yellow-500" size={24} />
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
    <section id="awards" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor dark:text-dark-text mb-4">Awards & Achievements</h2>
          <div className="w-24 h-1 bg-primary dark:bg-dark-primary mx-auto"></div>
          <p className="mt-6 text-lightText dark:text-dark-light-text max-w-3xl mx-auto">
            Recognition for academic excellence and technical achievements throughout my academic journey.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {awards.map((award, index) => (
            <motion.div 
              key={index} 
              className="bg-cardBg dark:bg-dark-surface rounded-lg p-6 shadow-md dark:shadow-dark-surface/50 flex items-start hover:shadow-lg dark:hover:shadow-dark-card/50 transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="mr-4 mt-1">{award.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-textColor dark:text-dark-text mb-2">{award.title}</h3>
                <p className="text-lightText dark:text-dark-light-text">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
