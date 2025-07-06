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

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      content: "parthofficial0908@gmail.com",
      link: "mailto:parthofficial0908@gmail.com"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      content: "Delhi, India",
      link: null
    },
    {
      icon: FaPhone,
      title: "Phone",
      content: "+91 9819484105",
      link: "tel:+919819484105"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-textColor dark:text-dark-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary dark:bg-dark-primary mx-auto mb-4"></div>
          <p className="text-lightText dark:text-dark-light-text max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, especially in the field of 
            Machine Learning and AI. Whether you have a project in mind or just want to chat, 
            feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-textColor dark:text-dark-text mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-primary dark:bg-dark-primary text-white p-3 rounded-lg">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-textColor dark:text-dark-text">{info.title}</h4>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        className="text-lightText dark:text-dark-light-text hover:text-primary dark:hover:text-dark-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-lightText dark:text-dark-light-text">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-50 dark:bg-dark-surface p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-textColor dark:text-dark-text mb-6">Send a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-400 dark:border-green-400/50 text-green-700 dark:text-green-400 rounded-md">
                  Thank you for your message! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-400 dark:border-red-400/50 text-red-700 dark:text-red-400 rounded-md">
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-textColor dark:text-dark-text mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-textColor dark:text-dark-text"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-textColor dark:text-dark-text mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-textColor dark:text-dark-text"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-textColor dark:text-dark-text mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-textColor dark:text-dark-text"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-textColor dark:text-dark-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary text-textColor dark:text-dark-text"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary dark:bg-dark-primary hover:bg-secondary dark:hover:bg-dark-secondary text-white font-semibold rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;