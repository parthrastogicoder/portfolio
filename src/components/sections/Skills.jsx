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
        { name: "React.js", level: 65 },
        { name: "Node.js", level: 70 },
        { name: "FastAPI", level: 80 },
        { name: "Tailwind CSS", level: 50 },
        { name: "Flask", level: 70 },
        { name: "Express.js", level: 50 },
        { name: "HTML/CSS", level: 50 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "AWS Services", level: 85 },
        { name: "Linux/Bash", level: 75 },
        { name: "MySQL/DynamoDB", level: 80 },
        { name: "Docker", level: 55 },
        { name: "RESTful APIs", level: 80 },
        { name: "Maven/Slurm", level: 65 }
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
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lightText max-w-3xl mx-auto">
            I've developed a diverse skill set that allows me to work across various domains in computer science,
            with a special focus on machine learning and software development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="bg-white p-6 rounded-lg shadow-md"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-textColor mb-6 border-b border-gray-200 pb-2">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} variants={itemVariants}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-textColor">{skill.name}</span>
                      <span className="text-lightText">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-primary h-2.5 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
