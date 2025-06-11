import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xeokgjjz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`,
        })
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor mb-4">Contact Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lightText max-w-3xl mx-auto">
            Feel free to get in touch with me. I'm always open to discussing new projects,
            research opportunities, or potential collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-textColor mb-6">Get In Touch</h3>
            
            <motion.div 
              className="flex items-start mb-8"
              variants={itemVariants}
            >
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-semibold text-textColor">Phone</h4>
                <p className="text-lightText">+91 9819484105</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start mb-8"
              variants={itemVariants}
            >
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-textColor">Email</h4>
                <p className="text-lightText">parthofficial0908@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start mb-8"
              variants={itemVariants}
            >
              <div className="bg-primary text-white p-3 rounded-lg mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-textColor">Location</h4>
                <p className="text-lightText">Delhi, India</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
                  Your message has been sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
                  There was an error sending your message. Please try again.
                </div>
              )}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-textColor font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-textColor font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-textColor font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-textColor font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="px-6 py-3 bg-primary hover:bg-secondary text-white rounded-lg transition-colors flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;