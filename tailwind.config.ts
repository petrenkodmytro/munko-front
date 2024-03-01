import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blackCustom: '#08080D',
        footer: '#7C9D96',
        subscribeBtn: '#161A30',
        grayBorder: '#B6BBC4',
        grayBG: '#B1B1B1',
        blueBorder: '#31304D',
        redError: '#D63F3F'
      },
    },
  },
  plugins: [],
};
export default config;
