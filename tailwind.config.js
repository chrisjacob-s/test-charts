/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '144': '36rem',
        '160': '40rem',
      },
      height: {
        '120': '30rem',
        '128': '32rem',
        '140': '35rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
  },
  plugins: [],
}

