export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "xs": "320px",
      "sm": "600px",
      "md": "800px",
      "lg": "1024px",
      "xl": "1440px",
      "2xl": "1640px"
      
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