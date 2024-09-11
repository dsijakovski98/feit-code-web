import { type ClassValue, clsx } from 'clsx'
import type { Slots } from 'types/index'

import { SUPPORTED_LANGUAGES } from '@constants/content'

type Props = {
  className?: ClassValue
}

const LanguagesTicker = ({ className = '', ...rest }: Props) => {
  const slots = rest as Slots<(typeof SUPPORTED_LANGUAGES)[number]>

  const renderLanguages = (config?: { hidden?: boolean }) => {
    const hidden = !!config?.hidden

    return (
      <ul className="flex gap-28 md:gap-12 animate-ticker items-center group-hover:animate-pause md:group-hover:animate-play">
        {SUPPORTED_LANGUAGES.map((language) => (
          <li
            key={language}
            aria-label={language}
            aria-hidden={hidden}
            className="[&_svg]:w-full [&_svg]:h-full w-20 h-20 md:w-14 md:h-14"
          >
            {slots[language]}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div className={clsx('flex gap-28 md:gap-12 overflow h-fit self-start group', className)}>
      {renderLanguages()}
      {renderLanguages({ hidden: true })}
    </div>
  )
}

export default LanguagesTicker
