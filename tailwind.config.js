/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['"Space Mono"', 'cursive'],
        'roboto-mono': ['"Roboto Mono"']
      },
      boxShadow: {
        'offset-black': '4px 4px black'
      }
    },
  },
  plugins: [],
}
