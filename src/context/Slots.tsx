import { createContext, useContext } from 'react'
import type { Slots } from 'types/index'

type SlotsContextType = {
  slots: Slots
}
export const SlotsContext = createContext<SlotsContextType | null>(null)

export const useSlotsContext = <T extends string>() => {
  const value = useContext(SlotsContext)

  if (!value) {
    throw new Error('Please add SlotsContextProvider!')
  }

  return value as { slots: Slots<T> }
}
