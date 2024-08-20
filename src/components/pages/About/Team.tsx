import { t } from 'i18n:astro'
import type { ReactElement } from 'react'
import type { Slots } from 'types/index'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

import { HREF } from '@constants/routes'

type Props = {}

const Team = ({ ...rest }: Props) => {
  const slots = rest as Slots<'image' | 'tdl' | 'jsCourse' | 'csCourse' | 'tdlSchool'>

  return (
    <section className="flex justify-between gap-36 lg:gap-20 md:flex-col-reverse md:items-center pb-20">
      <div className="bg-gradient-to-b from-transparent to-secondary-50 w-full max-w-[460px] md:max-w-[80%] sm:max-w-full overflow-hidden rounded-b-[50px] h-fit">
        {slots.image}
      </div>

      <div className="space-y-8 md:text-center">
        <TextBlock
          as="h2"
          title={
            <>
              👋{' '}
              <Trans
                tKey={['about:TEAM.HEADING']}
                components={{
                  gradient: <GradientText />,
                }}
              />
            </>
          }
          paragraph={
            <Trans
              tKey={['about:TEAM.DESCRIPTION']}
              components={{
                tdl: slots.tdl as ReactElement,
              }}
            />
          }
          titleClass="!text-5xl lg:!text-4xl mb-6"
        />

        <TextBlock
          as="h3"
          title={t('about:TEAM.SUBHEADING')}
          paragraph={t('about:TEAM.PARAGRAPH')}
          titleClass="!text-2xl"
          className="!space-y-2"
        />

        <TextBlock
          paragraph={
            <Trans
              tKey={['about:TEAM.COURSES']}
              components={{
                js: slots.jsCourse as ReactElement,
                cs: slots.csCourse as ReactElement,
                school: slots.tdlSchool as ReactElement,
              }}
            />
          }
        />
      </div>
    </section>
  )
}

export default Team
