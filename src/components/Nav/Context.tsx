import { createContext, useContext } from 'react'
import type { Slots } from 'types/index'

export const NavContext = createContext<Slots | null>(null)

export const useNavContext = <T extends string>() => {
  const value = useContext(NavContext)

  if (!value) {
    throw new Error('Please add NavContextProvider!')
  }

  return value as Slots<T>
}
