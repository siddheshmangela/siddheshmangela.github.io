import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
  site: 'https://siddheshmangela.com',
  vite: {
    ssr: {
      external: ['svgo'],
    },
  },
  integrations: [image(), sitemap(), svelte()],
});
