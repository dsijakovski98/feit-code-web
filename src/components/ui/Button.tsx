import type { ComponentProps, PropsWithChildren } from 'react'

import { Button as NextUiButton } from '@nextui-org/button'
import { extendVariants } from '@nextui-org/react'

const Btn = extendVariants(NextUiButton, {
  defaultVariants: {
    variant: 'shadow',
    color: 'primary',
    radius: 'md',
  },
  variants: {
    variant: {
      shadow: 'shadow-[0px_3px_2px_-3px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_0px_0px_rgba(0,0,0,0.12)]',
    },
  },
})

const Button = ({ children, ...rest }: PropsWithChildren & ComponentProps<typeof Btn>) => (
  <Btn {...rest}>
    <span className="sr-only">{children}</span>
    {children}
  </Btn>
)

export default Button
