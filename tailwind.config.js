/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-accent-green',
    'bg-accent-green',
    'border-accent-green',
    'hover:text-accent-green',
    'hover:bg-accent-green',
    'hover:border-accent-green',
    'hover:border-accent-green/30',
    'hover:border-accent-green/40',
    'group-hover:text-accent-green',
    'group-hover:opacity-100',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          card: '#161616',
          cardHover: '#1a1a1a',
          border: '#222222',
        },
        text: {
          primary: '#ededed',
          secondary: '#888888',
          muted: '#666666',
        },
        accent: {
          green: '#00d68f',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
