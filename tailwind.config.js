export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "450px"
    },
    extend: {
      animation: {
        marquee: "marquee 25s linear infinite",  
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(100%)" },  
          to: { transform: "translateX(-100%)" },  
        },
      },
    },
  },
  plugins: [],
}