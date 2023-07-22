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
          'conic-gradient(from 46deg at 50% 50%, var(--tw-gradient-stops))',
        'home': 'linear-gradient(#353536 .08rem, transparent .08rem),linear-gradient(to right, #353536 .08rem, #000000 .08rem)',

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
