
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8fa',
          100: '#faedf2',
          200: '#f5dbe6',
          300: '#edbdcf',
          400: '#e29cb3',
          500: '#d67a97',
          600: '#c65d7e',
          700: '#b04767',
          800: '#933c57',
          900: '#7a364a',
        },
        secondary: {
          50: '#f7fcfc',
          100: '#eef9f9',
          200: '#d8f3f3',
          300: '#b5e8e8',
          400: '#8ad8d8',
          500: '#5ec1c1',
          600: '#3ea1a1',
          700: '#317f7f',
          800: '#2d6868',
          900: '#295757',
        },
        accent: {
          pink: '#ffcce3',
          yellow: '#ffecb3',
          blue: '#d9f0ff',
          purple: '#e9ddff',
          orange: '#ffe3cc'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      boxShadow: {
        card: '0 4px 20px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
  