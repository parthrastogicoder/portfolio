import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Laika AI",
      duration: "May 2025 - Present",
      description: [
        "Designing the backend for Laika AI's multi-agent chatbot using modular design patterns (Factory, Strategy) for scalable tool orchestration and robust agent control flows.",
        "Implemented, and tested 20+ production-ready tools for crypto analytics, live/historical pricing, NFT and wallet tracking, transaction management, search, document retrieval, and social media fetching.",
        "Currently integrating tools with in-house streaming pipelines; leveraging FastAPI and AWS (Lambda, S3, DynamoDB) to enable persistent, real-time multi-agent hallucination free interactions."
      ]
    },
    {
      title: "ML Intern",
      company: "Heydo Tech",
      duration: "Jan 2025 - Apr 2025",
      description: [
        "Developed an end-to-end ML pipeline for the Apni Mandi project, modeling weekly sales trends using 3+ years of time series data covering 10,000+ SKUs across multiple stores.",
        "Benchmarked LSTM, GRU, and Transformer architectures for multivariate forecasting; best model achieved a mean absolute error (MAE) of 4.5 on weekly prediction.",
        "Performed seasonality decomposition and feature engineering (e.g., rolling statistics, calendar effects) over 3M data points to enhance signal quality and model performance."
      ]
    },
    {
      title: "Undergraduate Researcher",
      company: "Infosys Center for AI",
      duration: "Aug 2024 - May 2025",
      description: [
        "Engineering Generative AI Solution for Concurrent Data Structures(CDS) where we are Fine Tuning models like Qwen, Starcoderbase, Deepseek R1 distills for producing code and testing on Pass@K test specifically designed for CDS.",
        "Performing techniques like LoRA, 8bit for optimization and GRPO for reasoning.",
        "Scraped data from 60+ repositories for creation of comprehensive dataset with 5M+ Tokens across several languages.",
        "Contributed in the development of a comprehensive library for Dynamic Bayesian Networks(DBNs) for causal learning for a global research collaboration named Codiet."
      ]
    },
    {
      title: "Research Intern",
      company: "Czech University of Technology at Prague (Remote)",
      duration: "May 2024 - Aug 2024",
      description: [
        "Collaborated on Empirical Bayes pipeline code implementation along with production and analysis of numerical results for paper titled 'Empirical Bayes for Dynamic Bayesian Networks'.",
        "Contributed to the development of a library for Dynamic Bayesian Networks (DBNs) for causal learning for a global research collaboration named Codiet."
      ]
    },

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
