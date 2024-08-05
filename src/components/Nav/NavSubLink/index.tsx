import { type PropsWithChildren, useContext } from 'react'

import type { PropsOf } from '@nextui-org/react'

import type NavLink from '@components/Nav/NavLink'
import SubLinkDesktop from '@components/Nav/NavSubLink/SubLinkDesktop'
import SubLinkMobile from '@components/Nav/NavSubLink/SubLinkMobile'

type Props = Pick<PropsOf<typeof NavLink>, 'labelKey' | 'variant' | 'subLinks'> & PropsWithChildren

const NavSubLink = ({ variant = 'desktop', labelKey, subLinks, children, ...rest }: Props) => {
  return variant === 'desktop' ? (
    <SubLinkDesktop labelKey={labelKey} subLinks={subLinks}>
      {children}
    </SubLinkDesktop>
  ) : (
    <SubLinkMobile labelKey={labelKey} subLinks={subLinks}>
      {children}
    </SubLinkMobile>
  )
}

export default NavSubLink
