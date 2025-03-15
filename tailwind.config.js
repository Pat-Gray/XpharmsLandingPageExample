/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        secondary: '#2563EB',
        tertiary: '#64748B',
        accent: '#F8FAFC',
        dark: '#1E293B',
        'text-primary': '#0F172A',
        'text-secondary': '#334155',
        'brand-blue': '#2563EB',
        'brand-gray': '#475569'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4rem', { lineHeight: '1.2' }],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'gradient-slow': 'gradient 15s ease infinite',
        'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
        'pulse-slow-reverse': 'pulse-slow 8s ease-in-out infinite reverse',
        'pulse-slow-2': 'pulse-slow-2 10s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite',
        'float-slow-reverse': 'float-reverse 25s ease-in-out infinite',
        'float-slow-2': 'float-2 30s ease-in-out infinite',
        'float-slow-3': 'float-3 35s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%'
          },
          '50%': {
            'background-position': '100% 50%'
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            opacity: 0.4,
            transform: 'translate(0, 0) scale(1)'
          },
          '50%': {
            opacity: 0.8,
            transform: 'translate(40px, 20px) scale(1.1)'
          },
        },
        'pulse-slow-2': {
          '0%, 100%': {
            opacity: 0.4,
            transform: 'translate(-50%, -50%) scale(1)'
          },
          '50%': {
            opacity: 0.8,
            transform: 'translate(-50%, -50%) scale(1.2)'
          },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(2%, 2%)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-2%, -2%)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(1%, -1%)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-1%, 1%)' },
        },
      }
    },
  },
  plugins: [],
};