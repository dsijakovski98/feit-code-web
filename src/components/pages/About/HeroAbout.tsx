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
    <section className="text-center px-40">
      <TextBlock
        as="h1"
        centered
        title={t('about:HERO.HEADING')}
        paragraph={t('about:HERO.QUESTIONS')}
        titleClass="text-6xl sm:text-4xl !mb-6"
        className="mb-7"
      />

      <a href={HREF.feitCode.home} target="_blank" className="flex group flex-col items-center gap-1 isolate">
        <div className="group-hover:opacity-100 opacity-0 transition-transform-opacity group-hover:translate-y-[1px] translate-y-[100%] duration-300">
          {slots.light}
        </div>

        <div className="space-y-4 text-xl sm:text-lg font-light transition-shadow duration-300 shadow-transparent rounded-full z-10 group-hover:shadow-success bg-gradient-to-b from-slate-800 from-10% to-slate-100/5 shadow-lg px-14 py-5 text-center">
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
            radius="full"
            color="default"
            variant="bordered"
            className="-space-x-2 text-slate-500 pointer-events-none group-hover:pointer-events-auto group-hover:text-success px-12 "
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
