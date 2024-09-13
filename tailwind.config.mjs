/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        guerrilla: ['Protest Guerrilla', 'system-ui'],
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(280px, 1fr))',
      },
      colors: {
        primary: '#A98947',
      },
      backgroundSize: {
        double: '200% 200%',
      },
      keyframes: {
        show: {
          to: {
            opacity: '1',
          },
        },
        gradientAnimation: {
          '0%': { 'background-position': '0% 0%' },
          '100%': { 'background-position': '50% 100%' },
        },
      },
      animation: {
        show: 'show .5s .2s forwards',
        moveGradient: 'gradientAnimation .2s forwards',
      },
    },
  },
  plugins: [],
}
