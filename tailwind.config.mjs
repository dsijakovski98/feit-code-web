import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        kanit: ['"Kanit"', ...defaultTheme.fontFamily.serif],
      },
    },
    screens: {
      '2xl': { max: '1535px' },
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '669px' },
      xs: { max: '378px' },
    },
    backgroundImage: {
      dots: "radial-gradient(circle, rgba(35, 80, 200, 0.3), rgba(255, 255, 255, 0)), url('/images/bg-dots.webp')",
    },
  },
  plugins: [],
};
