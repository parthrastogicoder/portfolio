import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const PersonalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Parth's personal assistant. Ask me anything about his background, skills, projects, or experience!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const { isDark } = useTheme();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Personal information about Parth
  const personalInfo = `
  Name: Parth Sandeep Rastogi
  Location: Delhi, India
  Education: BTech in Computer Science Engineering at IIIT Delhi (GPA: 9.21/10)
  Email: parthofficial0908@gmail.com
  Phone: +91 9819484105
  
  EXPERIENCE:
  - Data Science Intern at Laika AI (May 2025 - Present): Designing backend for multi-agent chatbot, implementing 20+ production-ready tools for crypto analytics
  - ML Intern at Heydo Tech (Jan 2025 - Apr 2025): Developed ML pipeline for sales forecasting, achieved MAE of 4.5
  - Undergraduate Researcher at Infosys Center for AI (Aug 2024 - May 2025): Fine-tuning models for concurrent data structures
  - Research Intern at Czech University of Technology (May 2024 - Aug 2024): Worked on Empirical Bayes for Dynamic Bayesian Networks
  
  SKILLS:
  Programming Languages: Python (95%), C++ (90%), JavaScript (65%), Java (75%), R (75%), C (80%), SQL (85%), TypeScript (70%)
  ML & AI: PyTorch (90%), Transformers (85%), Pandas/Numpy (90%), NLP (85%), Langchain (70%), Scikit-learn (80%)
  Web Development: React (80%), Node.js (75%), HTML/CSS (85%)
  Tools: Git (90%), Docker (70%), AWS (75%), Linux (85%)
  
  PROJECTS:
  - ERP System Modules for Aero Armour
  - HiS-Attention: Deception Detection in Diplomacy (57.38% Macro F1)
  - Shell-Scheduler: Linux shell with IPC mechanisms
  - NetSafe: Network Intrusion Detection (83% accuracy)
  - Ground Water Quality Analysis using R
  - Stick Hero Game Clone in Java
  
  AWARDS:
  - KVPY Fellowship 2020 (Rank 467)
  - JEE Mains Top 1%
  - Dean's List Award 2023-24 and 2024-25
  - HackJNU 3.0 Finalist
  - Competitive Programming: 850+ problems solved, Codeforces Specialist (1400)
  
  POSITIONS:
  - Software Product Design Mentor at Centre for Intelligent Product Development
  - Head of Content and Social Media at E-Cell, IIIT Delhi
  - Head, Organising Committee (Social Media & Coverage) at E-Summit 2024
  - Student Mentor at Tribal Youth Exchange Program
  `;

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('https://api.together.xyz/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`
        },
        body: JSON.stringify({
          model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free',
          messages: [
            {
              role: 'system',
              content: `You are Parth Rastogi's personal assistant chatbot. You can only answer questions about Parth based on the following information. If asked about anything not related to Parth, politely redirect the conversation back to Parth. Keep responses concise and friendly.

${personalInfo}

Always respond in a helpful, professional tone as if you're representing Parth's portfolio.`
            },
            ...messages.slice(-5), // Keep last 5 messages for context
            userMessage
          ],
          max_tokens: 300,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.choices[0].message.content
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: "I'm sorry, I'm having trouble connecting right now. Please try again later or contact Parth directly at parthofficial0908@gmail.com"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-primary dark:bg-dark-primary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open chat"
      >
        <FaRobot size={24} />
      </motion.button>

      {/* Chat Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-dark-surface shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-dark-border flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary dark:bg-dark-primary rounded-full">
                  <FaRobot className="text-white" size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-textColor dark:text-dark-text">Parth's Assistant</h3>
                  <p className="text-sm text-lightText dark:text-dark-light-text">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full transition-colors"
              >
                <FaTimes className="text-lightText dark:text-dark-light-text" size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-2 ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-full ${
                    message.role === 'user' 
                      ? 'bg-primary dark:bg-dark-primary' 
                      : 'bg-gray-200 dark:bg-dark-card'
                  }`}>
                    {message.role === 'user' ? (
                      <FaUser className="text-white" size={12} />
                    ) : (
                      <FaRobot className="text-primary dark:text-dark-primary" size={12} />
                    )}
                  </div>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-primary dark:bg-dark-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-card text-textColor dark:text-dark-text'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start space-x-2">
                  <div className="p-2 bg-gray-200 dark:bg-dark-card rounded-full">
                    <FaRobot className="text-primary dark:text-dark-primary" size={12} />
                  </div>
                  <div className="bg-gray-100 dark:bg-dark-card p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-dark-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Parth's experience, skills, projects..."
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-dark-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary bg-white dark:bg-dark-card text-textColor dark:text-dark-text"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading || !input.trim()}
                  className="p-2 bg-primary dark:bg-dark-primary text-white rounded-lg hover:bg-secondary dark:hover:bg-dark-secondary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PersonalChatbot;
