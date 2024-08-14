import { t } from 'i18n:astro'
import type { Slots } from 'types/index'

import { Accordion, AccordionItem } from '@nextui-org/accordion'

import Trans from '@components/Trans'

type Props = any

const HelpAccordion = ({ ...rest }: Props) => {
  const slots = rest as Slots<'student' | 'teacher'>

  return (
    <Accordion
      variant="bordered"
      className="border-[0.5px] border-slate-500"
      dividerProps={{
        className: 'h-[0.5px] bg-slate-500',
      }}
      itemClasses={{
        title: 'text-xl sm:text-lg',
        content: 'font-extralight text-lg pt-0 pb-5 pr-5 sm:text-base',
        indicator: 'text-slate-50 sm:scale-[0.8]',
      }}
    >
      <AccordionItem
        key="student"
        startContent={slots.student}
        title={t('about:I_AM', { type: t('about:STUDENT') })}
        aria-label={t('about:I_AM', { type: t('about:STUDENT') })}
      >
        <Trans tKey={['about:HELP.STUDENT']} components={{ b: <b className="font-bold" /> }} />
      </AccordionItem>

      <AccordionItem
        key="teacher"
        startContent={slots.teacher}
        title={t('about:I_AM', { type: t('about:TEACHER') })}
        aria-label={t('about:I_AM', { type: t('about:TEACHER') })}
      >
        <Trans tKey={['about:HELP.TEACHER']} components={{ b: <b className="font-bold" /> }} />
      </AccordionItem>
    </Accordion>
  )
}

export default HelpAccordion
