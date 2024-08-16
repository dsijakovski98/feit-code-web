import { AnimatePresence, motion } from 'framer-motion'
import { t } from 'i18n:astro'
import { Fragment, useMemo } from 'react'

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
      <motion.div layout className="flex items-baseline gap-2 mb-20">
        <TextBlock
          as="h2"
          title={t('about:STEPS.HEADING')}
          paragraph={
            <Switch
              size="sm"
              classNames={{ base: 'flex-row-reverse items-end gap-4', label: 'text-2xl' }}
              isSelected={open}
              onValueChange={toggle}
            >
              {t('about:I_AM', { type: '' })}{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={userType}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.1 }}
                  className="underline"
                >
                  {userType}
                </motion.span>
              </AnimatePresence>
            </Switch>
          }
        />
      </motion.div>

      <StepsItems steps={steps} />
    </Fragment>
  )
}

export default Steps
