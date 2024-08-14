import { t } from 'i18n:astro'
import type { Slots } from 'types/index'

import Trans from '@components/Trans'
import Button from '@components/ui/Button'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

import { HREF } from '@constants/routes'

type Props = any

const HeroAbout = ({ ...rest }: Props) => {
  const slots = rest as Slots<'light' | 'external'>

  return (
    <section className="text-center">
      <TextBlock
        as="h1"
        centered
        title={t('about:HERO.HEADING')}
        paragraph={t('about:HERO.QUESTIONS')}
        titleClass="text-6xl sm:text-4xl !mb-6"
        className="mb-8"
      />

      <a
        href={HREF.feitCode.home}
        target="_blank"
        className="flex md:pointer-events-none group flex-col items-center gap-1 isolate"
      >
        <div className="group-hover:opacity-100 opacity-0 md:opacity-100 md:translate-y-[50%] transition-transform-opacity group-hover:translate-y-[1px] translate-y-[100%] duration-300">
          {slots.light}
        </div>

        <div className="space-y-4 text-xl sm:text-lg font-light rounded-lg md:shadow-primary transition-shadow duration-300 z-10 group-hover:shadow-primary-100 bg-gradient-to-b from-primary-50 group-hover:from-primary-100 from-10% to-transparent shadow-lg px-14 py-5 text-center">
          <p>
            <Trans
              tKey={['about:HERO.PARAGRAPH']}
              components={{
                gradient: <GradientText className="font-bold" />,
                b: <b className="font-bold" />,
              }}
            />
          </p>

          <Button
            size="lg"
            color="default"
            variant="bordered"
            className="-space-x-2 rounded-lg md:px-6 md:text-primary group-hover:border-primary-100 md:border-primary-100 md:pointer-events-auto pointer-events-none group-hover:pointer-events-auto group-hover:text-primary px-12 "
          >
            {t('about:HERO.CTA')}
            {slots.external}
          </Button>
        </div>
      </a>
    </section>
  )
}

export default HeroAbout
