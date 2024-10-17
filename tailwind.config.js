/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '590px',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      letterSpacing: {
        snug: '-0.011em',
      },
      fontSize: {
        '2xs': '0.625rem',
        '3xl': '1.75rem',
        '4xl': '2.5rem',
      },
      lineHeight: {
        tighter: 1.1,
      },
      fontFamily: {
        sans: ['var(--font-urbanist)', 'Arial'],
      },
      typography: ({ theme }) => ({
        slate: {
          css: {
            '--tw-prose-bullets': theme('colors.slate[400]'),
            '--tw-prose-invert-bullets': theme('colors.slate[100]'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
