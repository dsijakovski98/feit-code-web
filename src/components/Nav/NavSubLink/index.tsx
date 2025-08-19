import { type PropsWithChildren } from 'react'

import type { PropsOf } from '@heroui/react'

import type NavLink from '@components/Nav/NavLink'
import SubLinkDesktop from '@components/Nav/NavSubLink/SubLinkDesktop'
import SubLinkMobile from '@components/Nav/NavSubLink/SubLinkMobile'

type Props = Pick<PropsOf<typeof NavLink>, 'labelKey' | 'variant' | 'subLinks'> & PropsWithChildren

const NavSubLink = ({ variant = 'desktop', labelKey, subLinks, children }: Props) => {
  if (variant === 'desktop') {
    return (
      <SubLinkDesktop labelKey={labelKey} subLinks={subLinks}>
        {children}
      </SubLinkDesktop>
    )
  }

  return (
    <SubLinkMobile labelKey={labelKey} subLinks={subLinks}>
      {children}
    </SubLinkMobile>
  )
}

export default NavSubLink
