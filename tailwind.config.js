// @ts-check
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,tsx}',
    './components/**/*.{js,ts,tsx}',
    './layouts/**/*.{js,ts,tsx}',
    './data/**/*.mdx',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        serif: ['B612', ...fontFamily.serif],
        sans: ['B612', ...fontFamily.sans],
      },
      colors: {
        primary: colors.cyan,
        gray: colors.gray,
      },
      typography: () => ({
        DEFAULT: {
          css: {
            a: {
              color: '#996699',
              '&:hover': {
                color: '#993399',
              },
            },
            'h1,h3,h4,h5,h6': {
              color: '#6699cc',
            },
            h2: {
              color: '#6666cc',
            },
            code: {
              color: '#FFABAB',
            },
            body: {
              color: '#cdd6f4',
            },
            blockquote: {
              color: '#f5e0dc',
            },
            strong: {
              color: '##74c7ec',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@catppuccin/tailwindcss'),
  ],
}
