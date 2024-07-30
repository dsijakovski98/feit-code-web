import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import liciousI18n from '@astrolicious/i18n';
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    icon(),
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
