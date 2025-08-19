import { t } from 'i18n:astro'
import { type PropsWithChildren } from 'react'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'
import type { PropsOf } from '@heroui/react'

import { useNavContext } from '@components/Nav/Context'
import type NavSubLink from '@components/Nav/NavSubLink'
import UnderlineText from '@components/ui/UnderlineText'

type Props = Pick<PropsOf<typeof NavSubLink>, 'labelKey' | 'subLinks'> & PropsWithChildren

const SubLinksNavLinkDesktop = ({ labelKey, subLinks, children }: Props) => {
  const { slots } = useNavContext<'external' | 'chevron'>()

  const tNav = (key: unknown) => t(`NAV.${key}` as any)

  return (
    <Dropdown triggerType="listbox" className="group sm:hidden">
      <DropdownTrigger>
        <button className="flex items-center self-stretch">
          <UnderlineText as="span">{children}</UnderlineText>
          {slots.chevron}
        </button>
      </DropdownTrigger>
      <DropdownMenu>
        {subLinks!.map(({ href, key, icon, descriptionKey, external }) => (
          <DropdownItem
            key={key as string}
            as="a"
            href={href}
            aria-label={tNav(key)}
            target={external ? '_blank' : '_self'}
            description={<span className="text-sm font-light text-default-800">{tNav(descriptionKey)}</span>}
            startContent={<div className="flex h-10 w-10 self-start *:h-full *:w-full">{slots[icon as keyof typeof slots]}</div>}
          >
            <div className="flex text-medium font-light [&_svg]:-translate-y-[6px] [&_svg]:scale-[0.6]">
              {tNav(key)}
              {external && slots.external}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default SubLinksNavLinkDesktop
