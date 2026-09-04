/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FAF9F5',
        surface: '#FFFFFF',
        'surface-subtle': '#F4F3EF',
        primary: '#121212',
        'primary-hover': '#262626',
        secondary: '#52525B',
        muted: '#71717A',
        border: '#E7E5E0',
        'border-strong': '#D4D0C8',
        accent: '#18181B',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        normal: '0em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.14em',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      maxWidth: {
        'site': '1280px',
      }
    },
  },
  plugins: [],
}
