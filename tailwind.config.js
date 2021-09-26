module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"PT Sans"', 'sans-serif']
    },
    extend: {
      spacing: {
        '1/1': '100%',
    },
      colors: {
        orange: {
          550: '#b52d00',
          570: '#992803',
          50: "#fff3e0",
          100: "#ffe0b2",
          150: "#ffcc80",
          200: "#ffb74d",
          400: "#ffa726",
          300: "#ff9800",
          600: "#fb8c00",
          400: "#f57c00",
          800: "#ef6c00",
          500: "#e65100",
          600: "#ff5722",
          650: "#fbe9e7",
          700: "#ffccbc",
          750: "#ffab91",
          800: "#ff8a65",
          850: "#ff7043",
          900: "#ff5722",
          940: "#f4511e",
          960: "#e64a19",
          980: "#d84315",
          900: "#bf360c",
          
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
