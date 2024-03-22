// tailwind.config.js
import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFAF45'
      },
      FontFamily: {
        body: ['"Stalinist One", sans-serif']
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
}
