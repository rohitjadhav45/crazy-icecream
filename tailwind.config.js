/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Brand palette
        strawberry: {
          DEFAULT: '#FF4F8B',
          50: '#FFF0F5',
          100: '#FFDCE8',
          200: '#FFB8D1',
          300: '#FF8DB3',
          400: '#FF6A9C',
          500: '#FF4F8B',
          600: '#E8336F',
          700: '#C21F57',
        },
        cream: {
          DEFAULT: '#FFF6EC',
          50: '#FFFCF8',
          100: '#FFF6EC',
          200: '#FCEBD6',
          300: '#F7DCBC',
        },
        choco: {
          DEFAULT: '#3B1F1A',
          400: '#6E4A41',
          500: '#4E2C25',
          600: '#3B1F1A',
          700: '#2A1512',
          800: '#1E0F0C',
        },
        mango: { DEFAULT: '#FFC93C', 100: '#FFF1C7', 600: '#E9A800' },
        mint: { DEFAULT: '#7FE0C5', 100: '#DDF7EF', 600: '#3FB896' },
        pistachio: { DEFAULT: '#B8D982', 100: '#EDF6DE', 600: '#86AE45' },
      },
      fontFamily: {
        display: ['Fredoka', '"Baloo 2"', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        pink: '0 20px 45px -15px rgba(255, 79, 139, 0.45)',
        mango: '0 20px 45px -15px rgba(255, 201, 60, 0.55)',
        mint: '0 20px 45px -15px rgba(127, 224, 197, 0.6)',
        soft: '0 10px 40px -12px rgba(59, 31, 26, 0.18)',
        glow: '0 0 0 1px rgba(255,255,255,0.6), 0 25px 60px -20px rgba(255, 79, 139, 0.55)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -40px) scale(1.08)' },
          '66%': { transform: 'translate(-25px, 20px) scale(0.95)' },
        },
        bob: {
          '0%, 100%': { transform: 'translateY(0) rotate(-2deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        shine: {
          from: { transform: 'translateX(-120%) skewX(-20deg)' },
          to: { transform: 'translateX(220%) skewX(-20deg)' },
        },
        'scroll-dot': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '80%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
      },
      animation: {
        blob: 'blob 14s ease-in-out infinite',
        bob: 'bob 5s ease-in-out infinite',
        marquee: 'marquee 35s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        shine: 'shine 0.9s ease-out',
        'scroll-dot': 'scroll-dot 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
