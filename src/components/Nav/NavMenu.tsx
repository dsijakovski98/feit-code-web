import { t } from 'i18n:astro'
import { useMemo } from 'react'

import { NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'

import LanguageSwitch from '@components/Nav/LanguageSwitch'
import NavLink from '@components/Nav/NavLink'
import Button from '@components/ui/Button'

import { HREF, NAV_ROUTES } from '@constants/routes'
import type { UseToggle } from '@hooks/useToggle'

type Props = {
  menu: UseToggle
}

const NavMenu = ({ menu }: Props) => {
  const menuTitle = useMemo(() => `${t('NAV.LOGO.FEIT')} ${t('NAV.LOGO.CODE')}`, [t])

  return (
    <NavbarContent justify="end" className="hidden md:flex">
      <NavbarMenuToggle as="li" />

      <NavbarMenu title={menuTitle} className="!max-h-[calc(100dvh-64px)] !items-start py-8 pl-10">
        <div className="mb-10 flex w-full -translate-x-2 items-center justify-between">
          <h2 className="text-4xl font-extralight">{menuTitle}</h2>
          <LanguageSwitch />
        </div>

        {NAV_ROUTES.map(({ key, href, subLinks }) => (
          <NavbarMenuItem key={key as string} onClick={() => !subLinks && menu.set(false)} className="mb-2 text-2xl font-light">
            <NavLink href={href} labelKey={key} subLinks={subLinks} variant="mobile">
              {t(`NAV.${key}` as any)}
            </NavLink>
          </NavbarMenuItem>
        ))}

        <div className="mt-auto w-full space-y-4">
          <Button
            as="a"
            fullWidth
            size="lg"
            color="default"
            radius="full"
            variant="bordered"
            href={HREF.feitCode.signIn}
            target="_blank"
          >
            {t('NAV.LOG_IN')}
          </Button>

          <Button
            as="a"
            fullWidth
            size="lg"
            color="primary"
            radius="full"
            variant="shadow"
            href={HREF.feitCode.signUp}
            target="_blank"
          >
            {t('NAV.SIGN_UP')}
          </Button>
        </div>
      </NavbarMenu>
    </NavbarContent>
  )
}

export default NavMenu
