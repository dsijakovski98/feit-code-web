import clsx from 'clsx'
import { getLocale, t } from 'i18n:astro'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import type { Slots } from 'types/index'
import { type InferInput, email, nonEmpty, object, pipe, string, trim } from 'valibot'

import { Input } from '@nextui-org/input'
import { CircularProgress } from '@nextui-org/react'

import Button from '@components/ui/Button'

import { EMAILJS } from '@constants/email'
import emailjs from '@emailjs/browser'
import { valibotResolver } from '@hookform/resolvers/valibot'

const SubscribeEmailSchema = object({
  email: pipe(string(), trim(), nonEmpty('EMAIL.EMPTY'), email('EMAIL.INVALID')),
})

type Props = any

const SubscribeForm = ({ ...rest }: Props) => {
  const tForm = t('FORM', { returnObjects: true })

  const locale = getLocale()

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

  const onSubmit: SubmitHandler<InferInput<typeof SubscribeEmailSchema>> = async ({ email }) => {
    clearErrors('email')

    await emailjs
      .send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATES.SUBSCRIBE[locale],
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
              label={tForm.EMAIL.LABEL}
              autoComplete="email"
              placeholder={tForm.EMAIL.PLACEHOLDER}
              className="min-w-[320px] *:!bg-transparent sm:min-w-full"
              classNames={{
                inputWrapper: clsx(
                  'subscribe-input hover:!bg-transparent space-y-4 pt-4 sm:!h-16 sm:space-y-3 sm:border-2 sm:border-secondary-300 sm:px-6 sm:pt-4',
                  { 'sm:!border-danger-500': !!errors.email },
                ),
                label: '!text-white text-lg font-semibold',
                input: 'text-base font-light font-exo placeholder:font-kanit placeholder:text-slate-300',
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
          {isSubmitting ? (
            <CircularProgress
              size="sm"
              aria-label={t('PROGRESS_BAR')}
              className={clsx('w-[50px]', { 'mx-[27px]': locale === 'mk' })}
            />
          ) : (
            tForm.SUBSCRIBE.SUBMIT
          )}
        </Button>
      </div>

      {errors.email && (
        <p
          role="alert"
          className="absolute inset-x-2 top-full flex translate-y-2 items-center gap-1 leading-[1.2] text-danger-500 sm:inset-x-8 sm:translate-y-0 sm:items-start sm:text-sm"
        >
          {slots.error} {t(`common:ERRORS.${errors.email.message}` as any)}
        </p>
      )}

      {isSubmitSuccessful && !errors.email && (
        <p
          role="alert"
          className="absolute inset-x-2 top-full flex translate-y-4 items-center justify-center gap-1 text-center text-3xl font-light leading-[1.2] text-primary-700 sm:inset-x-8 sm:translate-y-1 sm:items-start sm:text-2xl xs:text-lg"
        >
          {t('landing:SUBSCRIBE.SUCCESS')}
        </p>
      )}
    </form>
  )
}

export default SubscribeForm
