import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

import node from '@astrojs/node'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import liciousI18n from '@astrolicious/i18n'
import playformCompress from '@playform/compress'

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
      client: {
        data: true,
        paths: true,
        translations: true,
      },
    }),
  ],
  output: 'hybrid',
  adapter: node({
    mode: 'standalone',
  }),
})
