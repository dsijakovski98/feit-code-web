import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import liciousI18n from '@astrolicious/i18n';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

import playformCompress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),

    icon(),

    playformCompress(),

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
