/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
        background: '#f8fafc',
        textColor: '#1e293b',
        lightText: '#64748b',
        borderColor: '#e2e8f0',
        cardBg: '#ffffff',
        hoverColor: '#3b82f6',
        successColor: '#10b981',
        errorColor: '#ef4444',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
