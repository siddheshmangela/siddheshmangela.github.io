import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://siddheshmangela.github.io',
  base: '/',
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [tsconfigPaths()],
    ssr: {
      external: ['svgo'],
    },
  },
  integrations: [image()],
});
