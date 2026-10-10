/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Nigerian national green, extended into a full brand scale.
        green: {
          50: '#f0f9f4',
          100: '#dcf1e4',
          200: '#b8e3ca',
          300: '#86cfa5',
          400: '#4eb37a',
          500: '#289658',
          600: '#177945',
          700: '#146139',
          800: '#134d31',
          900: '#113f2a',
          950: '#072318',
        },
        // Party tricolour accent — used sparingly for emphasis.
        crimson: {
          50: '#fdf3f3',
          100: '#fbe5e5',
          200: '#f8d0d0',
          300: '#f2a9a9',
          400: '#e87676',
          500: '#d94c4c',
          600: '#c22f2f',
          700: '#a12727',
          800: '#862323',
          900: '#722121',
        },
        ink: {
          50: '#f6f7f6',
          100: '#eceeec',
          200: '#d5d9d5',
          300: '#b0b8b1',
          400: '#859189',
          500: '#677269',
          600: '#525b53',
          700: '#424942',
          800: '#39403a',
          900: '#161c17',
          950: '#0d110e',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '80rem',
      },
      boxShadow: {
        lift: '0 1px 2px 0 rgb(13 17 14 / 0.04), 0 12px 32px -8px rgb(13 17 14 / 0.16)',
        'lift-lg': '0 2px 4px 0 rgb(13 17 14 / 0.04), 0 24px 56px -12px rgb(13 17 14 / 0.24)',
        seal: 'inset 0 0 0 1px rgb(255 255 255 / 0.12), 0 8px 24px -6px rgb(0 0 0 / 0.4)',
      },
      keyframes: {
        'fade-rise': {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'sway': {
          '0%, 100%': { transform: 'rotate(-1.5deg)' },
          '50%': { transform: 'rotate(1.5deg)' },
        },
        'marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-rise': 'fade-rise 0.6s cubic-bezier(0.16, 1, 0.3, 1) both',
        sway: 'sway 6s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
