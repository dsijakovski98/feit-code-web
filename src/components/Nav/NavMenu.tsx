import { t } from 'i18n:astro'
import { useEffect, useMemo } from 'react'

import { NavbarItem, NavbarMenu, NavbarMenuItem } from '@heroui/navbar'

import LanguageSwitch from '@components/Nav/LanguageSwitch'
import NavLink from '@components/Nav/NavLink'
import Button from '@components/ui/Button'

import { NAV_MENU } from '@constants/index'
import { HREF, NAV_ROUTES } from '@constants/routes'
import type { UseToggle } from '@hooks/useToggle'
import { getAllFocusableElements } from '@utils/index'

type Props = {
  menu: UseToggle
}

const NavMenu = ({ menu }: Props) => {
  const menuTitle = useMemo(() => `${t('NAV.LOGO.FEIT')} ${t('NAV.LOGO.CODE')}`, [t])

  useEffect(() => {
    const handleFocusTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const menuOpen = document.getElementById('navbar')?.getAttribute('data-menu-open') === 'true'
      if (!menuOpen) return

      const logo = document.getElementById(NAV_MENU.logo)!
      const toggle = document.getElementById(NAV_MENU.toggle)!
      const navMenu = document.getElementById(NAV_MENU.menu)!
      const navMenuElements = getAllFocusableElements(navMenu)

      const firstElement = logo
      const lastElement = navMenuElements.at(-1)!

      if (e.shiftKey) {
        // Going backwards
        if (document.activeElement === firstElement) {
          lastElement.focus()
          e.preventDefault()
        }

        if (document.activeElement === navMenuElements[0]) {
          toggle.focus()
          e.preventDefault()
        }
      } else {
        // Going forwards
        if (document.activeElement === lastElement) {
          firstElement.focus()
          e.preventDefault()
        }
      }
    }

    window.addEventListener('keydown', handleFocusTrap, { capture: true })

    return () => {
      window.removeEventListener('keydown', handleFocusTrap, { capture: true })
    }
  }, [])

  return (
    <>
      <NavbarMenu title={menuTitle} id={NAV_MENU.menu} className="!max-h-[calc(100dvh-64px)] !items-start py-8 pl-10">
        {NAV_ROUTES.map(({ key, href, subLinks }) => (
          <NavbarMenuItem key={key as string} onClick={() => !subLinks && menu.set(false)} className="text-2xl font-normal">
            <NavLink href={href} subLinks={subLinks} variant="mobile">
              {t(`NAV.${key}` as any)}
            </NavLink>
          </NavbarMenuItem>
        ))}

        <NavbarItem key="header" className="absolute right-5">
          <LanguageSwitch />
        </NavbarItem>

        <NavbarItem key="menu-sign-in" className="mt-auto w-full mb-4">
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
        </NavbarItem>

        <NavbarItem key="menu-sign-up" className="w-full">
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
        </NavbarItem>
      </NavbarMenu>
    </>
  )
}

export default NavMenu
