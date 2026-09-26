// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://dynamic-croquembouche-91eea9.netlify.app',
  integrations: [preact()]
});