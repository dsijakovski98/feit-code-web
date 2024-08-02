import clsx from 'clsx'
import { type Locale, t as T } from 'i18n:astro'

import Trans from '@components/Trans'

import { DEFAULT_LOCALE } from '@config/i18n'

type Props = {
  t: typeof T
  locale: Locale
}

const Hero = ({ t, locale }: Props) => {
  return (
    <section
      className={clsx(
        'flex flex-col items-center gap-0 pt-16 text-center sm:pt-36',
        locale === DEFAULT_LOCALE ? 'font-semibold' : 'font-bold',
      )}
    >
      <h1 className="text-balance text-8xl leading-none sm:text-[3.6rem] sm:leading-[1.7]">
        <Trans
          tKey={['landing:HERO.MAIN.CONTENT']}
          values={{ strike: t('landing:HERO.MAIN.STRIKE') }}
          components={[<span className="hero-faith" data-feit={t('landing:HERO.FEIT')} />]}
        />
      </h1>
    </section>
  )
}

export default Hero
