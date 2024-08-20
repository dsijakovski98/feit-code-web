import { t } from 'i18n:astro'
import { type PropsWithChildren } from 'react'

import Banner from '@components/ui/Banner'
import GradientText from '@components/ui/GradientText'

const LanguagesBanner = ({ children }: PropsWithChildren) => {
  return (
    <Banner
      container={false}
      title={
        <>
          <GradientText>{'< '}</GradientText>
          <span className="!text-white">{t('about:LANGUAGES.HEADING')}</span>
          <GradientText>{' />'}</GradientText>
        </>
      }
      subtitle={t('about:LANGUAGES.PARAGRAPH')}
      className="bg-gradient-to-b from-secondary-100 to-transparent !px-0 pb-0 md:pt-12"
    >
      {children}

      <span className="inline-block md:mt-4 rounded-xl px-4 py-[2px] bg-secondary">{t('about:LANGUAGES.MORE')}</span>
    </Banner>
  )
}

export default LanguagesBanner
