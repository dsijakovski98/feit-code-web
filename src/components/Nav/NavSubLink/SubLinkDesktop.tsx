import { t } from 'i18n:astro'
import { type PropsWithChildren, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import { Listbox, ListboxItem, ListboxSection } from '@nextui-org/listbox'
import type { PropsOf } from '@nextui-org/react'
import { Tooltip } from '@nextui-org/tooltip'

import { useNavContext } from '@components/Nav/Context'
import type NavSubLink from '@components/Nav/NavSubLink'
import UnderlineText from '@components/ui/UnderlineText'

type Props = Pick<PropsOf<typeof NavSubLink>, 'labelKey' | 'subLinks'> & PropsWithChildren

const SubLinksNavLinkDesktop = ({ labelKey, subLinks, children }: Props) => {
  const [mobileDevice, setMobileDevice] = useState<boolean>(false)

  const { slots } = useNavContext<'external' | 'chevron'>()

  const tNav = (key: unknown) => t(`NAV.${key}` as any)

  // Need to reassign the value on mount: https://github.com/duskload/react-device-detect/issues/196
  useEffect(() => {
    setMobileDevice(isMobile)
  }, [])

  const TriggerButton = (
    <button className="flex items-center self-stretch">
      {children} {slots.chevron}
    </button>
  )

  return mobileDevice ? (
    <Dropdown triggerType="listbox" className="group sm:hidden">
      <DropdownTrigger>{TriggerButton}</DropdownTrigger>
      <DropdownMenu>
        {subLinks!.map(({ href, key, icon, descriptionKey, external }) => (
          <DropdownItem
            key={key as string}
            as="a"
            href={href}
            aria-label={tNav(key)}
            target={external ? '_blank' : '_self'}
            description={<span className="text-xs font-light text-default-800">{tNav(descriptionKey)}</span>}
            startContent={<div className="flex h-10 w-10 self-start *:h-full *:w-full">{slots[icon as keyof typeof slots]}</div>}
          >
            <div className="flex text-medium font-light [&_svg]:-translate-y-[6px] [&_svg]:scale-[0.6]">
              <UnderlineText>{tNav(key)}</UnderlineText>
              {external && slots.external}
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  ) : (
    <Tooltip
      offset={-4}
      content={
        <Listbox aria-label={tNav(labelKey)}>
          <ListboxSection className="space-y-2 pt-1">
            {subLinks!.map(({ href, key, icon, descriptionKey, external }) => (
              <ListboxItem
                key={key as string}
                as="a"
                href={href}
                aria-label={tNav(key)}
                description={tNav(descriptionKey)}
                target={external ? '_blank' : '_self'}
                startContent={
                  <div className="flex h-10 w-10 self-start *:h-full *:w-full">{slots[icon as keyof typeof slots]}</div>
                }
                classNames={{
                  base: 'data-[hover=true]:bg-transparent pl-0',
                  description: 'text-default-800 text-xs font-light',
                }}
              >
                <div className="flex text-medium font-light [&_svg]:-translate-y-[6px] [&_svg]:scale-[0.6]">
                  <UnderlineText>{tNav(key)}</UnderlineText>
                  {external && slots.external}
                </div>
              </ListboxItem>
            ))}
          </ListboxSection>
        </Listbox>
      }
      closeDelay={0}
    >
      {TriggerButton}
    </Tooltip>
  )
}

export default SubLinksNavLinkDesktop
