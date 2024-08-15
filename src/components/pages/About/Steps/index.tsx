import { t } from 'i18n:astro'
import { Fragment, cloneElement, useMemo } from 'react'
import type { Slots } from 'types/index'

import { Switch } from '@nextui-org/switch'

import StepsItems from '@components/pages/About/Steps/StepsItems'
import TextBlock from '@components/ui/TextBlock'

import { useToggle } from '@hooks/useToggle'

type Props = {}

const Steps = ({}: Props) => {
  const { open, toggle } = useToggle(true)
  const userType = useMemo(() => (open ? t('about:STUDENT') : t('about:TEACHER')), [open])
  const steps = useMemo(
    () =>
      open ? t('about:STEPS.LIST.STUDENT', { returnObjects: true }) : t('about:STEPS.LIST.TEACHER', { returnObjects: true }),
    [open],
  )

  return (
    <Fragment>
      <div className="flex items-baseline gap-2 mb-20">
        <TextBlock
          as="h2"
          title={t('about:STEPS.HEADING')}
          paragraph={
            <Switch
              classNames={{ base: 'flex-row-reverse items-end gap-4', label: 'text-2xl' }}
              color="secondary"
              isSelected={open}
              onValueChange={toggle}
            >
              {t('about:I_AM', { type: '' })} <span className="underline">{userType}</span>
            </Switch>
          }
        />
      </div>

      <StepsItems steps={steps} />
    </Fragment>
  )
}

export default Steps
