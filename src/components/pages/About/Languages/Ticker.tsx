import { type ClassValue, clsx } from 'clsx'
import type { Slots } from 'types/index'

import { Tooltip } from '@nextui-org/tooltip'

import { SUPPORTED_LANGUAGES } from '@constants/content'

type Props = {
  className?: ClassValue
}

const LanguagesTicker = ({ className = '', ...rest }: Props) => {
  const slots = rest as Slots<(typeof SUPPORTED_LANGUAGES)[number]['label']>

  const renderLanguages = (config?: { hidden?: boolean }) => {
    const hidden = !!config?.hidden

    return (
      <ul className="flex gap-28 md:gap-12 animate-ticker items-center group-hover:animate-pause md:group-hover:animate-play">
        {SUPPORTED_LANGUAGES.map(({ label, href }) => (
          <li
            key={label}
            aria-label={label}
            aria-hidden={hidden}
            className="[&_svg]:w-full [&_svg]:h-full w-20 h-20 md:w-12 md:h-12 hover:-translate-y-2 md:hover:translate-y-0 transition-transform duration-250"
          >
            <Tooltip content={label} placement="bottom" size="lg" offset={20}>
              <a href={href} target="_blank" aria-hidden={hidden}>
                {slots[label]}
              </a>
            </Tooltip>
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
