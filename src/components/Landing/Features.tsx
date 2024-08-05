import { t } from 'i18n:astro'
import type { PropsWithChildren } from 'react'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

const Features = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center gap-16">
      <TextBlock
        as="h2"
        centered
        title={
          <Trans
            tKey={['landing:FEATURES.HEADING']}
            components={{
              line: <GradientText className="underline block" />,
            }}
          />
        }
        paragraph={t('landing:FEATURES.PARAGRAPH')}
      />

      <ul className="grid grid-cols-4 grid-rows-1 gap-8 md:grid-cols-2 md:grid-rows-2 sm:block sm:space-y-10">{children}</ul>
    </section>
  )
}

export default Features
