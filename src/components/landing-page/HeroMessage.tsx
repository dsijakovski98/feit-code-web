import { t as T } from 'i18n:astro'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'

type Props = {
  t: typeof T
}

const Hero = ({ t }: Props) => {
  return (
    <>
      <h1 className="text-balance text-8xl leading-none sm:text-[3.6rem] sm:leading-[1.7]">
        <Trans
          tKey={['landing:HERO.MAIN']}
          components={{ strike: <span className="hero-faith" data-feit={t('landing:HERO.FEIT')} /> }}
        />
      </h1>

      <h2 className="text-balance text-8xl sm:-mt-3 sm:text-[3.6rem]">
        <Trans
          tKey={['landing:HERO.SUB']}
          components={{
            code: <GradientText />,
          }}
        />
      </h2>

      <p className="mb-12 mt-6 text-2xl font-light sm:px-4 sm:text-xl">
        <Trans
          tKey={['landing:HERO.PARAGRAPH']}
          components={{
            gradient: <GradientText />,
          }}
        />
      </p>
    </>
  )
}

export default Hero
