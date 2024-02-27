import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://otranto.pages.github.io',
  fonts: {
    roboto: ['fonts/Roboto-Regular.ttf', 'fonts/Roboto-Bold.ttf', 'fonts/Roboto-Italic.ttf', 'fonts/Roboto-BoldItalic.ttf']
  },
  integrations: []
});