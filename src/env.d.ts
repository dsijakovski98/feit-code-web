/// <reference types="astro/client" />
/// <reference types="../.astro/astro-i18n.d.ts" />
/// <reference types="../.astro/i18next.d.ts" />
/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAILJS_KEY: string
  readonly PUBLIC_APP_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
