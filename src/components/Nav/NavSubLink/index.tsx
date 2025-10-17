import { type PropsWithChildren } from 'react'

import type { PropsOf } from '@heroui/react'

import type NavLink from '@components/Nav/NavLink'
import SubLinkDesktop from '@components/Nav/NavSubLink/SubLinkDesktop'
import SubLinkMobile from '@components/Nav/NavSubLink/SubLinkMobile'

type Props = Pick<PropsOf<typeof NavLink>, 'variant' | 'subLinks'> & PropsWithChildren

const NavSubLink = ({ variant = 'desktop', subLinks, children }: Props) => {
  if (variant === 'desktop') {
    return <SubLinkDesktop subLinks={subLinks}>{children}</SubLinkDesktop>
  }

  return <SubLinkMobile subLinks={subLinks}>{children}</SubLinkMobile>
}

export default NavSubLink
