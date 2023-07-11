/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home': 'linear-gradient(#141414 .7px, transparent .7px),linear-gradient(to right, #141414 .7px, #000000 .7px)',

      },
      keyframes: {
        gradientTitle: {
          '0%': { backgroundPosition: "0% 50%" },
          '50%': { backgroundPosition: "100% 50%" },
          '100%': { backgroundPosition: "0% 50%" },
        },
        sliderScroll: {
          '0%': { transform: "translateX(0)" },
          '100%': { transform: "translateX(calc(-100px * 8))" },
        }
      },
      animation: {
        "gradientTitle": "gradientTitle 10s linear alternate infinite",
        "sliderScroll": "sliderScroll 20s linear infinite",
      }
    },
  },
  plugins: [],
}
