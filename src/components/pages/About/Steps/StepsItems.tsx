import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import TextBlock from '@components/ui/TextBlock'

export type StepItem = {
  TITLE: string
  DESCRIPTION: string
}

type Props = {
  steps: StepItem[]
}

const StepsItems = ({ steps }: Props) => {
  return (
    <ol className={clsx('grid gap-4 min-h-60 md:min-h-auto', `grid-cols-${steps.length} md:block md:space-y-4`)}>
      {steps.map(({ TITLE, DESCRIPTION }, index) => (
        <div key={TITLE} className="space-y-8 group md:flex md:gap-4 md:space-y-0 md:!h-40 md:items-stretch">
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-4">
            <span className="bg-default flex items-center justify-center p-1 w-6 h-6 text-sm aspect-square group-hover:bg-primary transition-background duration-400 rounded-full">
              {index + 1}
            </span>
            <div className="grow h-[0.1px] md:h-full md:min-h-10 md:self-center md:w-[0.1px] md:rotate-180 group-hover:bg-primary bg-default transition-colors duration-400" />
          </div>

          <TextBlock
            as="h3"
            title={
              <AnimatePresence mode="wait">
                <motion.span
                  layout
                  key={TITLE}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {TITLE}
                </motion.span>
              </AnimatePresence>
            }
            paragraph={
              <AnimatePresence mode="wait">
                <motion.span
                  layout
                  key={DESCRIPTION}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {DESCRIPTION}
                </motion.span>
              </AnimatePresence>
            }
            className="md:!space-y-1 pr-4 md:pr-0 md:pb-6 md:-translate-y-1"
            titleClass="text-[1.5rem] text-xl leading-[1.2] md:!text-[1.5rem]"
            paragraphClass="!text-slate-300 !text-lg"
          />
        </div>
      ))}
    </ol>
  )
}

export default StepsItems
