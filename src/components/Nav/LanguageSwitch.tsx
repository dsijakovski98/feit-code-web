import { type Locale, getLocale } from 'i18n:astro'

import { Button } from '@nextui-org/button'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/dropdown'

import { useNavContext } from '@components/Nav/Context'

const LanguageSwitch = () => {
  const { slots, localeData } = useNavContext<Locale>()

  const currentLocale = getLocale()

  return (
    <Dropdown classNames={{ content: ['md:min-w-fit'] }}>
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
      >
        {localeData.map(({ href, locale }) => (
          <DropdownItem
            as="a"
            key={locale}
            href={href}
            textValue={locale}
            // aria-label={t(locale.toUpperCase() as TKey<typeof t>)}
            startContent={<div className="h-4 w-4">{slots[locale as keyof typeof slots]}</div>}
          >
            <span className="md:hidden">{locale.toUpperCase()}</span>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LanguageSwitch
