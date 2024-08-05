import type { getSwitcherData } from 'i18n:astro'
import { createContext, useContext } from 'react'
import type { Slots } from 'types/index'

type NavContextType = {
  slots: Slots
  localeData: ReturnType<typeof getSwitcherData>
}
export const NavContext = createContext<NavContextType | null>(null)

export const useNavContext = <T extends string>() => {
  const value = useContext(NavContext)

  if (!value) {
    throw new Error('Please add NavContextProvider!')
  }

  return value as { slots: Slots<T>; localeData: NavContextType['localeData'] }
}
