/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      'mono': ['Fira Code', 'monospace'],
      'jetbrains': ['JetBrains Mono', 'monospace'],
      'source-code': ['Source Code Pro', 'monospace'],
        'inconsolata': ['Inconsolata', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
        'terminus': ['Terminus', 'monospace'],
        'ocr': ['OCR A Std', 'monospace'],
      // Add more fonts as needed
    },
   
  },
  plugins: [
    daisyui,
    
  ],
}

