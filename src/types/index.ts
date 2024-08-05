import type { t } from 'i18n:astro'
import type { ReactNode } from 'react'

export type Slots<T extends string = any> = Record<T, ReactNode>

export type TKey = Parameters<typeof t>[0][0]
