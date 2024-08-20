import clsx from 'clsx'
import type { PropsWithChildren, ReactNode } from 'react'

type Props = {
  className?: string
  container?: boolean
  title?: string | ReactNode
  subtitle?: string | ReactNode
} & PropsWithChildren

const Banner = ({ className = '', container = true, title, subtitle, children }: Props) => {
  return (
    <div className={clsx('px-10 py-24 pt-20 sm:px-0', className)}>
      <div className={clsx('flex flex-col items-center gap-14 sm:gap-10', { container })}>
        <div className="space-y-3 text-center">
          {title && <h2 className="text-4xl font-medium sm:text-3xl">{title}</h2>}
          {subtitle && <p className="text-xl font-extralight sm:text-lg">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  )
}

export default Banner
