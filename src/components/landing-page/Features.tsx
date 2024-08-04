import { t } from 'i18n:astro'
import type { PropsWithChildren } from 'react'

import Trans from '@components/Trans'

const Features = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center gap-16">
      <div className="space-y-4 text-center">
        <h2 className="text-4xl font-medium sm:text-3xl">
          <Trans
            tKey={['landing:FEATURES.HEADING']}
            components={{
              line: <span className="underline" />,
            }}
          />
        </h2>

        <p className="text-xl font-extralight sm:text-lg">{t('landing:FEATURES.PARAGRAPH')}</p>
      </div>

      <ul className="grid grid-cols-4 grid-rows-1 gap-8 md:grid-cols-2 md:grid-rows-2 sm:block sm:space-y-10">{children}</ul>
    </section>
  )
}

export default Features
