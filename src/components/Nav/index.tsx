import { getSwitcherData, t } from 'i18n:astro'
import { useEffect } from 'react'
import type { Slots } from 'types/index'

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle } from '@heroui/navbar'

import { NavContext } from '@components/Nav/Context'
import LanguageSwitch from '@components/Nav/LanguageSwitch'
import NavLink from '@components/Nav/NavLink'
import NavMenu from '@components/Nav/NavMenu'
import Button from '@components/ui/Button'

import { NAV_MENU } from '@constants/index'
import { HREF, NAV_ROUTES } from '@constants/routes'
import { useToggle } from '@hooks/useToggle'

type Props = {
  pathname: string
  localeData: ReturnType<typeof getSwitcherData>
}

const Nav = ({ pathname, localeData, ...rest }: Props) => {
  const slots = rest as Slots<'logo'>

  const menu = useToggle()

  useEffect(() => {
    const handleCloseMenu = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return

      const menuOpen = document.getElementById('navbar')?.getAttribute('data-menu-open') === 'true'
      if (!menuOpen) return

      menu.toggleOff()

      const toggle = document.getElementById(NAV_MENU.toggle)!
      toggle.focus()
    }

    window.addEventListener('keydown', handleCloseMenu)

    return () => {
      window.removeEventListener('keydown', handleCloseMenu)
    }
  }, [])

  const handleMenuOpenChange = (isOpen: boolean) => {
    const mainContent = document.querySelector('main')!
    const footer = document.querySelector('footer')!

    if (isOpen) {
      mainContent.setAttribute('inert', '')
      footer.setAttribute('inert', '')
    } else {
      mainContent.removeAttribute('inert')
      footer.removeAttribute('inert')
    }

    menu.set(isOpen)
  }
  return (
    <NavContext.Provider value={{ slots, localeData }}>
      <Navbar
        disableAnimation
        maxWidth="xl"
        position="sticky"
        classNames={{
          wrapper: ['md:gap-0'],
          item: ['font-light data-[active=true]:text-primary-600 data-[active=true]:font-bold'],
        }}
        className="top-0 bg-dots bg-bottom py-1 shadow-lg"
        id="navbar"
        isMenuOpen={menu.open}
        onMenuOpenChange={handleMenuOpenChange}
      >
        <NavbarBrand className="md:flex-initial">{slots.logo}</NavbarBrand>

        <NavbarContent className="flex-1 gap-8 md:gap-4 md:hidden" justify="center">
          {NAV_ROUTES.map(({ key, href, subLinks }) => (
            <NavbarItem key={key as string} isActive={href === pathname} className="flex items-center self-stretch">
              <NavLink href={href} subLinks={subLinks} labelKey={key}>
                {t(`NAV.${key}` as any)}
              </NavLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="-space-x-2 md:data-[justify=end]:grow-0 md:hidden">
          <NavbarItem>
            <LanguageSwitch />
          </NavbarItem>

          <NavbarItem>
            <Button
              as="a"
              color="default"
              radius="full"
              variant="light"
              href={HREF.feitCode.signIn}
              target="_blank"
              className="px-4 md:min-w-min md:px-2"
            >
              {t('NAV.LOG_IN')}
            </Button>
          </NavbarItem>

          <NavbarItem>
            <Button
              as="a"
              color="primary"
              radius="full"
              variant="shadow"
              href={HREF.feitCode.signUp}
              target="_blank"
              className="px-6"
            >
              {t('NAV.SIGN_UP')}
            </Button>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" justify="end" className="hidden md:flex">
          <NavbarMenuToggle id={NAV_MENU.toggle} />
        </NavbarContent>

        <NavMenu menu={menu} />
      </Navbar>
    </NavContext.Provider>
  )
}

export default Nav
