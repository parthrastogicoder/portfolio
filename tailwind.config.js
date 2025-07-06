/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
        secondary: '#1e40af',
        background: '#f8fafc',
        textColor: '#1e293b',
        lightText: '#64748b',
        borderColor: '#e2e8f0',
        cardBg: '#ffffff',
        hoverColor: '#3b82f6',
        successColor: '#10b981',
        errorColor: '#ef4444',
        // Dark mode colors
        'dark-bg': '#0f172a',
        'dark-surface': '#1e293b',
        'dark-card': '#334155',
        'dark-text': '#f1f5f9',
        'dark-light-text': '#cbd5e1',
        'dark-border': '#475569',
        'dark-primary': '#60a5fa',
        'dark-secondary': '#3b82f6',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'theme-transition': 'theme-transition 0.3s ease-in-out',
      },
      keyframes: {
        'theme-transition': {
          '0%': { opacity: '0.8' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
