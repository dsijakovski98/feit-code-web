import liciousI18n from '@astrolicious/i18n';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    liciousI18n({
      locales: ['en', 'mk'],
      defaultLocale: 'en',
      strategy: 'prefixExceptDefault',
      client: { data: true },
    }),
  ],
});
