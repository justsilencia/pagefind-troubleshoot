module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    fontFamily: {
      'sans': ['roboto, ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}