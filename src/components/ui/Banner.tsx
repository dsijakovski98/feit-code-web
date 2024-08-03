import clsx from 'clsx'
import type { PropsWithChildren, ReactNode } from 'react'

type Props = {
  className?: string
  title?: string | ReactNode
  subtitle?: string | ReactNode
} & PropsWithChildren

const Banner = ({ className = '', title, subtitle, children }: Props) => {
  return (
    <div className={clsx('px-10 py-24 pt-20 sm:px-0', className)}>
      <div className="container flex flex-col items-center gap-14 sm:gap-10">
        <div className="space-y-2 text-center">
          {title && <h3 className="text-4xl font-medium sm:text-3xl">{title}</h3>}
          {subtitle && <h4 className="text-xl font-extralight sm:text-lg">{subtitle}</h4>}
        </div>

        {children}
      </div>
    </div>
  )
}

export default Banner
