import { type Locale, getLocale } from 'i18n:astro'
import { useTransition } from 'react'

import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'
import type { Selection } from '@nextui-org/react'

import { useNavContext } from '@components/Nav/Context'

import { LOCALES } from '@config/i18n'

// TODO: Finish component

const LanguageSwitch = () => {
  const slots = useNavContext<Locale>()
  const [isPending, startTransition] = useTransition()

  const currentLocale = getLocale()

  const switchLanguage = (selection: Selection) => {
    const locale = [...selection][0] as Locale
    //   TODO: Implement language switching
  }

  return (
    <Dropdown
      isDisabled={isPending}
      classNames={{
        content: ['md:min-w-fit'],
      }}
    >
      <DropdownTrigger>
        <Button
          size="sm"
          radius="full"
          variant="bordered"
          endContent={<div className="h-4 w-4">{slots[currentLocale]}</div>}
          className="min-w-fit capitalize sm:p-4"
        >
          <span className="md:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        variant="flat"
        selectionMode="single"
        disallowEmptySelection
        // aria-label={t('LABEL')}
        selectedKeys={[currentLocale]}
        onSelectionChange={switchLanguage}
      >
        {LOCALES.map((locale) => (
          <DropdownItem
            key={locale}
            // aria-label={t(locale.toUpperCase() as TKey<typeof t>)}
            startContent={<div className="h-4 w-4">{slots[locale]}</div>}
          >
            <span className="md:hidden">{locale.toUpperCase()}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageSwitch
