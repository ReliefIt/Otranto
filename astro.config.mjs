import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  fonts: {
    roboto: ['fonts/Roboto-Regular.ttf', 'fonts/Roboto-Bold.ttf', 'fonts/Roboto-Italic.ttf', 'fonts/Roboto-BoldItalic.ttf']
  },
  integrations: []
});