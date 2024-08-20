import defaultTheme from 'tailwindcss/defaultTheme'

import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['"Inter"', ...defaultTheme.fontFamily.sans],
        kanit: ['"Kanit"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        dots: "radial-gradient(circle, rgba(35, 80, 200, 0.3), rgba(255, 255, 255, 0)), url('/images/bg-dots.webp')",
      },
      animation: {
        ticker: 'tick linear infinite 60s',
      },
      keyframes: {
        tick: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 80px))' },
        },
      },
      aria: {
        current: 'current=page',
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
  },
  darkMode: 'class',
  plugins: [
    nextui({
      defaultTheme: 'dark',
      themes: {
        dark: {
          colors: {
            default: {
              50: '#131315',
              100: '#1e1e21',
              200: '#29292e',
              300: '#34343a',
              400: '#3f3f46',
              500: '#616166',
              600: '#828287',
              700: '#a4a4a7',
              800: '#c5c5c8',
              900: '#e7e7e8',
              foreground: '#fff',
              DEFAULT: '#3f3f46',
            },

            primary: {
              50: '#002147',
              100: '#003571',
              200: '#00489b',
              300: '#005cc4',
              400: '#006fee',
              500: '#2d88f1',
              600: '#59a1f4',
              700: '#86bbf7',
              800: '#b3d4fa',
              900: '#dfedfd',
              foreground: '#fff',
              DEFAULT: '#006fee',
            },

            secondary: {
              50: '#240c3c',
              100: '#39135f',
              200: '#4e1a82',
              300: '#6321a5',
              400: '#7828c8',
              500: '#904ed2',
              600: '#a773db',
              700: '#bf99e5',
              800: '#d7bfef',
              900: '#eee4f8',
              foreground: '#fff',
              DEFAULT: '#7828c8',
            },

            success: {
              50: '#073c1e',
              100: '#0b5f30',
              200: '#0f8341',
              300: '#13a653',
              400: '#17c964',
              500: '#40d27f',
              600: '#68dc9a',
              700: '#91e5b5',
              800: '#b9efd1',
              900: '#e2f8ec',
              foreground: '#000',
              DEFAULT: '#17c964',
            },

            warning: {
              50: '#4a320b',
              100: '#744e11',
              200: '#9f6b17',
              300: '#ca881e',
              400: '#f5a524',
              500: '#f7b54a',
              600: '#f9c571',
              700: '#fad497',
              800: '#fce4bd',
              900: '#fef4e4',
              foreground: '#000',
              DEFAULT: '#f5a524',
            },

            danger: {
              50: '#49051d',
              100: '#73092e',
              200: '#9e0c3e',
              300: '#c80f4f',
              400: '#f31260',
              500: '#f53b7c',
              600: '#f76598',
              700: '#f98eb3',
              800: '#fbb8cf',
              900: '#fee1eb',
              foreground: '#000',
              DEFAULT: '#f31260',
            },

            background: '#0c0c0e',

            foreground: {
              50: '#4d4d4d',
              100: '#797979',
              200: '#a6a6a6',
              300: '#d2d2d2',
              400: '#ffffff',
              500: '#ffffff',
              600: '#ffffff',
              700: '#ffffff',
              800: '#ffffff',
              900: '#ffffff',
              foreground: '#000',
              DEFAULT: '#ffffff',
            },
            content1: {
              DEFAULT: '#18181b',
              foreground: '#fff',
            },
            content2: {
              DEFAULT: '#27272a',
              foreground: '#fff',
            },
            content3: {
              DEFAULT: '#3f3f46',
              foreground: '#fff',
            },
            content4: {
              DEFAULT: '#52525b',
              foreground: '#fff',
            },
            focus: '#006FEE',
            overlay: '#ffffff',
            divider: '#ffffff',
          },
        },
      },
      layout: {
        fontSize: {
          tiny: '0.65rem',
          small: '0.85rem',
          medium: '1rem',
          large: '1.75rem',
        },
        lineHeight: {
          tiny: '1rem',
          small: '1rem',
          medium: '1rem',
          large: '1.125rem',
        },
        radius: {
          small: '0.2rem',
          medium: '0.4rem',
          large: '0.6rem',
        },
        borderWidth: {
          small: '1px',
          medium: '1.5px',
          large: '2px',
        },
        disabledOpacity: '0.5',
        dividerWeight: '1',
        hoverOpacity: '0.9',
      },
    }),
  ],
}
