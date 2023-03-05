const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        "sold-gray": {
          0: "#25282A",
          1: "#25282AB3",
          2: "#F5F8FA",
          3: "#4E4848",
          4: "#CCCCCC",
          5: "#EBEAED",
          6: "#CFCFCF",
        },
        "sold-orange": {
          0: "#F93822",
          1: "#E82418",
        },
        "sold-blue": {
          0: "#00A3E0",
        },
        "sold-green": {
          0: "#84AE2B",
        },
      },
    },
  },
  plugins: [],
};
