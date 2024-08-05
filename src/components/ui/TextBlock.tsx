import clsx from 'clsx'
import type { ReactNode } from 'react'

type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  title?: ReactNode
  titleClass?: string
  paragraph?: ReactNode
  paragraphClass?: string

  className?: string
  centered?: boolean
}

const TextBlock = ({
  as: As = 'h3',
  title,
  paragraph,
  className = '',
  titleClass = '',
  paragraphClass = '',
  centered = false,
}: Props) => {
  return (
    <div className={clsx('space-y-3', { 'text-center': centered }, className)}>
      <As className={clsx('text-4xl font-medium sm:text-3xl', titleClass)}>{title}</As>

      <p className={clsx('text-xl font-extralight sm:text-lg', paragraphClass)}>{paragraph}</p>
    </div>
  )
}

export default TextBlock
