import { t } from 'i18n:astro'
import { type PropsWithChildren } from 'react'

import type { PropsOf } from '@nextui-org/react'

import { useNavContext } from '@components/Nav/Context'
import type NavSubLink from '@components/Nav/NavSubLink'
import UnderlineText from '@components/ui/UnderlineText'

type Props = Pick<PropsOf<typeof NavSubLink>, 'labelKey' | 'subLinks'> & PropsWithChildren

const SubLinkMobile = ({ subLinks, children }: Props) => {
  const slots = useNavContext<'external'>()

  return (
    <div className="space-y-2">
      <span>{children}</span>

      <ul className="space-y-1 pl-4">
        {subLinks!.map(({ href, key, external }) => (
          <li key={key as string}>
            <a
              href={href}
              target={external ? '_blank' : '_self'}
              className="flex text-xl font-light [&_svg]:-translate-y-[2px] [&_svg]:scale-[0.7]"
            >
              <UnderlineText>{t(`NAV.${key}` as any)}</UnderlineText>
              {external && slots.external}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubLinkMobile
