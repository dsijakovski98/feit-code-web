import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import liciousI18n from '@astrolicious/i18n';
import playformCompress from '@playform/compress';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://feit-code.com',
  integrations: [
    react(),
    icon(),
    playformCompress(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    liciousI18n({
      locales: ['en', 'mk'],
      defaultLocale: 'en',
      strategy: 'prefixExceptDefault',
      client: {
        data: true,
      },
    }),
  ],
});
