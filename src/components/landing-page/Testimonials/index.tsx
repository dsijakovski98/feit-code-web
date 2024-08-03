import { t } from 'i18n:astro'
import type { PropsWithChildren } from 'react'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'

const Testimonials = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex items-start justify-between gap-8 lg:flex-col lg:items-center lg:text-center lg:gap-16">
      <div className="space-y-1">
        <h2 className="text-5xl font-medium sm:text-4xl">{t('landing:TESTIMONIALS.HEADING')}</h2>

        <p className="text-2xl font-extralight sm:text-xl">
          <Trans
            tKey={['landing:TESTIMONIALS.PARAGRAPH']}
            components={{
              students: <GradientText className="font-semibold" />,
            }}
          />
        </p>
      </div>

      {children}
    </div>
  )
}

export default Testimonials
