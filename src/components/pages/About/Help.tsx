import { t } from 'i18n:astro'
import type { PropsWithChildren } from 'react'

import Trans from '@components/Trans'
import GradientText from '@components/ui/GradientText'
import TextBlock from '@components/ui/TextBlock'

const Help = ({ children }: PropsWithChildren) => {
  return (
    <section className="space-y-10">
      <TextBlock
        as="h2"
        centered
        title={
          <Trans
            tKey={['about:HELP.HEADING']}
            components={{
              gradient: <GradientText />,
            }}
          />
        }
        paragraph={t('about:HELP.PARAGRAPH')}
      />

      <div>{children}</div>
    </section>
  )
}

export default Help
