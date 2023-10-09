const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  } ,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors : {
      primaryDark :  "#03386E" ,
      primary : "#0956A3" ,
      secondary: "#FFA000" ,
      secondaryDark : "#B87504" ,
      whiteYellwed : "#ededbe" ,
      white : "#fff"  ,
      black : "#232220" ,
      grayLight : "#F5F5F5" ,
      pageBg  : "#fcf1e1" ,  
      grayDark : "#5E5B56" ,
      ...colors 
     }  ,
     screens: {
      
      'tablet': '640px',
      
      'laptop': '900px',
      
      'desktop': '1280px',
      
    } 
  },
  plugins: [],
}
