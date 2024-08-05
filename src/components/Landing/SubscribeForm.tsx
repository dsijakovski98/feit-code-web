import clsx from 'clsx'
import { t } from 'i18n:astro'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import type { Slots } from 'types/index'

import { Input } from '@nextui-org/input'
import { CircularProgress } from '@nextui-org/react'

import Button from '@components/ui/Button'

import { EMAILJS } from '@constants/email'
import emailjs from '@emailjs/browser'
import { valibotResolver } from '@hookform/resolvers/valibot'
import { SubscribeEmailSchema, type SubscribeEmailType } from '@utils/schemas'

type Props = any

const SubscribeForm = ({ ...rest }: Props) => {
  const tEmail = t('landing:SUBSCRIBE.EMAIL', { returnObjects: true })
  const tErrors = t('ERRORS.EMAIL', { returnObjects: true })
  const tForm = t('FORM', { returnObjects: true })

  const slots = rest as Slots<'error'>

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: valibotResolver(SubscribeEmailSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit: SubmitHandler<SubscribeEmailType> = async ({ email }) => {
    clearErrors('email')

    await emailjs
      .send(
        EMAILJS.GMAIL_SERVICE_ID,
        EMAILJS.WELCOME_TEMPLATE_ID,
        { to: email },
        {
          publicKey: import.meta.env.PUBLIC_EMAILJS_KEY,
          limitRate: {
            throttle: 500,
          },
        },
      )
      .then(
        () => {}, // Can use as success scenario handling if needed
        (error) => {
          console.log({ error })
          setError('email', { message: 'SUBSCRIBE' })
        },
      )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="relative flex items-center sm:w-full">
      <div
        className={clsx(
          'relative flex w-full items-center rounded-full border-2 border-secondary-300 bg-transparent px-4 py-2 sm:flex-col sm:gap-3 sm:!border-transparent sm:px-8',
          { '!border-danger-500': !!errors.email },
        )}
      >
        <Controller
          name="email"
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <Input
              {...field}
              radius="full"
              label={tEmail.LABEL}
              autoComplete="email"
              placeholder={tEmail.PLACEHOLDER}
              className="min-w-[320px] *:!bg-transparent sm:min-w-full"
              classNames={{
                inputWrapper: clsx(
                  'hover:!bg-transparent space-y-4 pt-4 sm:!h-16 sm:space-y-3 sm:border-2 sm:border-secondary-300 sm:px-6 sm:pt-4',
                  { 'sm:!border-danger-500': !!errors.email },
                ),
                label: '!text-white text-lg font-semibold',
                input: 'text-base font-light font-inter placeholder:font-kanit placeholder:text-slate-300',
              }}
            />
          )}
        />

        <Button
          size="lg"
          radius="full"
          type="submit"
          variant="solid"
          disabled={isSubmitting}
          className="gradient-secondary px-12 sm:w-full"
        >
          {isSubmitting ? <CircularProgress aria-label="Progress bar" size="sm" className="w-[51px]" /> : tForm.SUBSCRIBE}
        </Button>
      </div>

      {errors.email && (
        <p className="absolute inset-x-2 top-full flex translate-y-2 items-center gap-1 leading-[1.2] text-danger-500 sm:inset-x-8 sm:translate-y-0 sm:items-start sm:text-sm">
          {slots.error} {tErrors[errors.email.message as keyof typeof tErrors]}
        </p>
      )}

      {isSubmitSuccessful && !errors.email && (
        <p className="absolute inset-x-2 top-full flex translate-y-4 items-center justify-center gap-1 text-center text-3xl font-light leading-[1.2] text-primary-700 sm:inset-x-8 sm:translate-y-1 sm:items-start sm:text-2xl xs:text-lg">
          {tEmail.SUCCESS}
        </p>
      )}
    </form>
  )
}

export default SubscribeForm
