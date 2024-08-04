import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

import NavSubLink from '@components/Nav/NavSubLink'
import UnderlineText from '@components/ui/UnderlineText'

import type { NavRoute } from '@constants/routes'

type Props = {
  href: string
  labelKey: NavRoute['key']
  subLinks?: NavRoute['subLinks']
  variant?: 'mobile' | 'desktop'
  className?: string
} & PropsWithChildren

const NavLink = ({ href, labelKey, subLinks, variant, className = '', children }: Props) => {
  if (subLinks) {
    return (
      <NavSubLink labelKey={labelKey} variant={variant} subLinks={subLinks}>
        {children}
      </NavSubLink>
    )
  }

  return (
    <a href={href} className={clsx('flex items-center self-stretch', className)}>
      <UnderlineText>{children}</UnderlineText>
    </a>
  )
}

export default NavLink
