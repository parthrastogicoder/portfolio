import { FaUser, FaMapMarkerAlt, FaEnvelope, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-lg overflow-hidden shadow-lg">
              {/* Note: You should add your profile image to the assets folder */}
              <img 
                src="/path/to/profile-image.jpg" 
                alt="Parth Rastogi" 
                className="w-full h-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/500?text=Parth+Rastogi';
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-textColor mb-4">Who am I?</h3>
            <p className="text-lightText mb-4">
              I am a Computer Science student at Indraprastha Institute of Information Technology, Delhi 
              with a strong foundation in Machine Learning, Data Science, and Software Development. 
              I'm passionate about creating innovative solutions to complex problems and continuously 
              expanding my skills in AI and software engineering.
            </p>
            <p className="text-lightText mb-6">
              My expertise spans across Python, R, C++, and JavaScript, with proficiency in frameworks 
              like PyTorch, Transformers, and AWS services. I've worked on projects ranging from ML models 
              for deception detection to ERP systems and shell schedulers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <FaUser size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-textColor">Name</h4>
                  <p className="text-lightText">Parth Sandeep Rastogi</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-textColor">Location</h4>
                  <p className="text-lightText">Delhi, India</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-textColor">Email</h4>
                  <p className="text-lightText">parthofficial0908@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-textColor">Education</h4>
                  <p className="text-lightText">BTech in CSE, IIIT Delhi (GPA: 9.05/10)</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
