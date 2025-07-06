import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "JavaScript", level: 65 },
        { name: "Java", level: 75 },
        { name: "R", level: 75 },
        { name: "C", level: 80 },
        { name: "SQL", level: 85 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "Transformers", level: 85 },
        { name: "Pandas/Numpy", level: 90 },
        { name: "NLP", level: 85 },
        { name: "Langchain", level: 70 },
        { name: "Scikit-learn", level: 80 },
        { name: "Time Series Analysis", level: 80 },
        { name: "NVIDIA CUDA", level: 65 }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 75 },
        { name: "Linux", level: 85 },
        { name: "Jupyter", level: 90 },
        { name: "VS Code", level: 95 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-surface transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor dark:text-dark-text mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-primary dark:bg-dark-primary mx-auto"></div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-dark-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-textColor dark:text-dark-text mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lightText dark:text-dark-light-text font-medium">{skill.name}</span>
                      <span className="text-primary dark:text-dark-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-border rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
