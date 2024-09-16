import { _purple } from '#tailwind-config/theme/accentColor';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './slices/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    colors: {
      purple:'#7C00DD',
      green: '#03A600'

    },
    // fontFamily: {
    //   serif: ['Mercure', 'Times New Roman', 'Times', 'serif'],
    //   mono: ['Mercure Transcript', 'Times New Roman', 'Times', 'serif']
    // }
  },
}


