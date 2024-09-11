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
    },
  },
  plugins: [],
}
