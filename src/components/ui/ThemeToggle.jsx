import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-dark-surface hover:bg-gray-200 dark:hover:bg-dark-card transition-all duration-300 text-gray-700 dark:text-dark-light-text"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <FaSun className="w-5 h-5 text-yellow-500" />
      ) : (
        <FaMoon className="w-5 h-5 text-gray-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
