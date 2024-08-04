import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

import type { As } from '@nextui-org/react'

type Props = {
  as?: As
  reverse?: boolean
  className?: string
} & PropsWithChildren

const UnderlineText = ({ as: componentType = 'p', reverse = false, className = '', children }: Props) => {
  const Element = componentType

  return (
    <Element className="group transition-all duration-300 ease-soft-spring">
      <span
        className={clsx(
          'from-primary-500 to-primary-500 bg-[length:0%_1px] bg-no-repeat transition-all duration-300 ease-soft-spring group-hover:bg-[length:100%_1px] group-focus:bg-[length:100%_1px]',
          {
            'bg-gradient-to-r bg-left-bottom': !reverse,
            'bg-gradient-to-l bg-right-bottom': reverse,
          },
          className,
        )}
      >
        {children}
      </span>
    </Element>
  )
}

export default UnderlineText
