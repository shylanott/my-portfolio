import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import typographyPlugin from '@tailwindcss/typography';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,json,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--aw-color-primary)',
        secondary: 'var(--aw-color-secondary)',
        accent: 'var(--aw-color-accent)',
        default: 'var(--aw-color-text-default)',
        muted: 'var(--aw-color-text-muted)',
        finlandia: {
          50: '#f2f7f4',
          100: '#e0ebe3',
          200: '#c3d7ca',
          300: '#9bbaa8',
          400: '#6f9881',
          500: '#476e59',
          600: '#3b604d',
          700: '#2f4d3e',
          800: '#273e32',
          900: '#21332a',
          950: '#121c18',
        },
        patina: {
          50: '#f4f9f7',
          100: '#dbece6',
          200: '#b7d8ce',
          300: '#8bbdaf',
          400: '#619c8d',
          500: '#498376',
          600: '#39685e',
          700: '#30554d',
          800: '#2a4540',
          900: '#263b37',
          950: '#12211f',
        },
      },
      fontFamily: {
        sans: ['var(--aw-font-sans, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--aw-font-serif, ui-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--aw-font-heading, ui-sans-serif)', ...defaultTheme.fontFamily.sans],
      },

      animation: {
        fade: 'fadeInUp 1s both',
      },

      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(2rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    typographyPlugin,
    plugin(({ addVariant }) => {
      addVariant('intersect', '&:not([no-intersect])');
    }),
  ],
  darkMode: 'class',
};
