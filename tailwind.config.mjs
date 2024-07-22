/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      primary: 'rgb(3, 103, 252)',
      secondary: 'rgb(210, 248, 1)',
      dark: 'rgb(22, 22, 22)',
      gray: {
        100: 'rgb(232, 232, 232)',
        200: 'rgb(185, 185, 185)',
        300: 'rgb(139, 139, 139)',
        400: 'rgb(92, 92, 92)',
        500: 'rgb(45, 45, 45)',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
