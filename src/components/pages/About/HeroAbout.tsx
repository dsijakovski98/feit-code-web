import { t } from 'i18n:astro'
import type { Slots } from 'types/index'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

type Props = any

const HeroAbout = ({ ...rest }: Props) => {
  const slots = rest as Slots<'cta'>

  return (
    <section className="space-y-16">
      <TextBlock
        as="h1"
        centered
        title={t('about:HERO.HEADING')}
        paragraph={t('about:HERO.QUESTIONS')}
        titleClass="text-6xl sm:text-4xl !mb-6"
      />

      <div className="space-y-8 text-xl sm:text-lg font-light rounded-lg bg-gradient-to-b from-primary/20 to-transparent shadow-lg px-14 py-7 text-center md:px-7 md:py-5">
        <p>
          <Trans
            tKey={['about:HERO.PARAGRAPH']}
            components={{
              gradient: <GradientText className="font-bold" />,
              b: <b className="font-bold" />,
            }}
          />
        </p>

        <div>{slots.cta}</div>
      </div>
    </section>
  )
}

export default HeroAbout
