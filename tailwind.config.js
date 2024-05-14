/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      btnpink: "hsl(322, 100%, 66%)",
      palecyan: "hsl(193, 100%, 96%)",
      darkcyan: "hsl(192, 100%, 9%)",
      textcol: "hsl(208, 11%, 55%)",
      btnwhite: "hsl(0, 0%, 100%)",
      attributioncol: "hsl(228, 45%, 44%)",
      btnhover: "hsla(322, 90%, 55%, 0.571)",
      imgbg: "filter:hue-rotate(300deg)",
    },
    fontFamily: {
      myFont: ["Poppins"],
      myFont2: ["open sans"],
    },

    extend: {
      backgroundImage: {
        "bg-image": "url('/build/img/bg-hero-mobile.svg')",
        "sm-bg-image": "url('/build/img/bg-hero-desktop.svg')",
      },
      dropShadow: {
        "3xl": "0 0 3px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
