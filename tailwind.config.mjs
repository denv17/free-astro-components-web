/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: 'rgb(var(--ac-primary), <alpha-value>)',
      secondary: 'rgb(var(--ac-secondary), <alpha-value>)',
      white: 'rgb(var(--ac-white), <alpha-value>)',
      black: 'rgb(0, 0, 0)',
      dark: 'rgb(var(--ac-dark), <alpha-value>)',
      gray: {
        100: 'rgb(var(--ac-gray-100), <alpha-value>)',
        200: 'rgb(var(--ac-gray-200), <alpha-value>)',
        300: 'rgb(var(--ac-gray-300), <alpha-value>)',
        400: 'rgb(var(--ac-gray-400), <alpha-value>)',
        500: 'rgb(var(--ac-gray-500), <alpha-value>)',
      },
      neutral: {
        100: 'rgb(var(--ac-color-100), <alpha-value>)',
        200: 'rgb(var(--ac-color-200), <alpha-value>)',
        300: 'rgb(var(--ac-color-300), <alpha-value>)',
        400: 'rgb(var(--ac-color-400), <alpha-value>)',
        500: 'rgb(var(--ac-color-500), <alpha-value>)',
        600: 'rgb(var(--ac-color-600), <alpha-value>)',
        700: 'rgb(var(--ac-color-700), <alpha-value>)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        'move-circle': 'move-circle 10s linear infinite',
        'move-circle-reverse': 'move-circle-reverse 6s linear infinite',
      },
      blur: {
        '2.5xl': '50px',
        '4xl': '80px',
        '5xl': '96px',
        '6xl': '112px',
      },
      keyframes: {
        'move-circle': {
          '0%': {
            transform: 'rotate(0deg) translateY(10%) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg) translateY(10%) rotate(-360deg)',
          },
        },
        'move-circle-reverse': {
          '0%': {
            transform: 'rotate(0deg) translateY(14%) rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(-360deg) translateY(15%) rotate(360deg)',
          },
        },
      },
    },
  },
  plugins: [],
}
