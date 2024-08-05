import { t } from 'i18n:astro'
import type { PropsWithChildren } from 'react'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

const Testimonials = ({ children }: PropsWithChildren) => {
  return (
    <section className="space-y-16">
      <TextBlock
        as="h2"
        centered
        title={t('landing:TESTIMONIALS.HEADING')}
        paragraph={
          <Trans
            tKey={['landing:TESTIMONIALS.PARAGRAPH']}
            components={{
              students: <GradientText className="font-semibold" />,
            }}
          />
        }
      />

      <div>{children}</div>
    </section>
  )
}

export default Testimonials
