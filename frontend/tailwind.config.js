/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'neumorphic': '12px 12px 24px #050404, -12px -12px 24px #13100e',
        'neumorphic-sm': '6px 6px 12px #050404, -6px -6px 12px #13100e',
        'neumorphic-inset': 'inset 6px 6px 12px #050404, inset -6px -6px 12px #13100e',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow': '0 0 20px rgba(234, 88, 12, 0.3)',
      },
      dropShadow: {
        'glow': '0 0 15px rgba(234, 88, 12, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'slow-spin': 'spin 20s linear infinite',
        'spotlight': 'spotlight 2s ease .75s 1 forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spotlight: {
          '0%': { opacity: 0, transform: 'translate(-72%, -62%) scale(0.5)' },
          '100%': { opacity: 1, transform: 'translate(-50%,-40%) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}
