import { t } from 'i18n:astro'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'

const HeroMessage = () => {
  return (
    <div>
      <h1 className="text-balance text-8xl sm:text-[3.6rem] sm:leading-[1.7]">
        <Trans
          tKey={['landing:HERO.MAIN']}
          components={{
            strike: <span className="hero-faith" data-feit={t('landing:HERO.FEIT')} />,
          }}
        />
      </h1>

      <GradientText as="h2" className="text-balance !overflow-visible -mt-4 leading-[1.2] text-8xl sm:-mt-8 sm:text-[3.6rem]">
        {t('landing:HERO.SUB')}
      </GradientText>

      <p className="mb-12 mt-6 text-2xl font-light sm:px-4 sm:text-xl">{t('landing:HERO.PARAGRAPH')}</p>
    </div>
  )
}

export default HeroMessage
