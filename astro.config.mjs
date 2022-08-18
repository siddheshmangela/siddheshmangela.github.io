import { defineConfig } from 'astro/config';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://astro.build/config
export default defineConfig({
  site: 'https://siddheshmangela.github.io',
  base: '/foto',
  vite: {
    // Example: Add custom vite plugins directly to your Astro project
    plugins: [tsconfigPaths()],
  },
});
