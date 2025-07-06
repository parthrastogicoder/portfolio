import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot, FaUser } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const PersonalChatbot = ({ onToggle }) => {
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

  useEffect(() => {
    if (onToggle) {
      onToggle(isOpen);
    }
  }, [isOpen, onToggle]);

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
      {/* Chat Icon with Tooltip */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 group"
        initial={{ scale: 0 }}
        animate={{ scale: isOpen ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-800 dark:bg-gray-700 text-white text-sm px-4 py-2 rounded-xl shadow-lg whitespace-nowrap">
            Want to learn more about Parth?
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800 dark:border-t-gray-700"></div>
          </div>
        </div>
        
        {/* Chat Button with Sunglasses */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="relative p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ring-4 ring-white dark:ring-dark-surface"
          whileHover={{ scale: 1.05, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Chat with Parth's AI assistant"
        >
          {/* Online indicator */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse shadow-md">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          
          <span className="text-3xl">😎</span>
          
          {/* Animated dots */}
          <div className="absolute -top-3 -left-3 flex space-x-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0s' }}></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce shadow-sm" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </motion.button>
      </motion.div>

      {/* Chat Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="fixed top-20 right-4 w-80 max-w-[calc(100vw-2rem)] h-[calc(100vh-6rem)] bg-white dark:bg-dark-surface shadow-2xl z-40 flex flex-col rounded-lg border border-gray-200 dark:border-dark-border overflow-hidden md:w-96 md:right-6"
            >
            {/* Header */}
            <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-dark-border flex items-center justify-between bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-dark-primary/10 dark:to-dark-secondary/10">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg">
                    <span className="text-xl">😎</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-dark-surface animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-semibold text-textColor dark:text-dark-text">Parth's AI Assistant</h3>
                  <p className="text-sm text-lightText dark:text-dark-light-text flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                    Online & Ready to Help
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-dark-card rounded-full transition-all duration-200 hover:scale-110"
              >
                <FaTimes className="text-lightText dark:text-dark-light-text" size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-2 ${
                    message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                >
                  <div className={`p-2 rounded-full shadow-sm ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-br from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary' 
                      : 'bg-gradient-to-br from-blue-500 to-purple-600'
                  }`}>
                    {message.role === 'user' ? (
                      <FaUser className="text-white" size={12} />
                    ) : (
                      <span className="text-sm">😎</span>
                    )}
                  </div>
                  <div className={`max-w-[calc(100%-3rem)] p-3 rounded-lg shadow-sm ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-primary to-secondary dark:from-dark-primary dark:to-dark-secondary text-white'
                      : 'bg-gray-100 dark:bg-dark-card text-textColor dark:text-dark-text border border-gray-200 dark:border-dark-border'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex items-start space-x-2">
                  <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-sm">
                    <span className="text-sm">😎</span>
                  </div>
                  <div className="bg-gray-100 dark:bg-dark-card p-3 rounded-lg shadow-sm border border-gray-200 dark:border-dark-border">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary dark:bg-dark-primary rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-primary dark:bg-dark-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-primary dark:bg-dark-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-surface">
              <div className="flex gap-3 items-end max-w-full">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Parth's experience, skills, projects..."
                  className="flex-1 min-w-0 px-4 py-3 border border-gray-300 dark:border-dark-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-dark-primary focus:border-transparent bg-white dark:bg-dark-card text-textColor dark:text-dark-text text-sm transition-all duration-200 shadow-sm"
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 shadow-sm"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <span className="text-white text-lg">✈️</span>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default PersonalChatbot;
