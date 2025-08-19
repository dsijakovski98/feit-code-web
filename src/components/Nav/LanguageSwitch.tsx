import { type Locale, getLocale, t } from 'i18n:astro'

import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@heroui/dropdown'

import { useNavContext } from '@components/Nav/Context'
import Button from '@components/ui/Button'

const LanguageSwitch = () => {
  const { slots, localeData } = useNavContext<Locale>()

  const currentLocale = getLocale()

  return (
    <Dropdown classNames={{ content: ['md:min-w-fit'] }}>
      <DropdownTrigger>
        <Button
          size="sm"
          radius="full"
          color="default"
          variant="bordered"
          aria-label={t('common:NAV.LANGUAGES.LABEL')}
          endContent={<div className="h-4 w-4">{slots[currentLocale]}</div>}
          className="min-w-fit capitalize sm:p-4"
        >
          <span className="md:hidden">{currentLocale.toUpperCase()}</span>
        </Button>
      </DropdownTrigger>

      <DropdownMenu variant="flat" selectionMode="single" disallowEmptySelection selectedKeys={[currentLocale]}>
        {localeData.map(({ href, locale }) => (
          <DropdownItem
            key={locale}
            textValue={locale}
            onPress={() => (location.href = href)}
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
