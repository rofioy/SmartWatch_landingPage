/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      body: ['Quicksand'],
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

