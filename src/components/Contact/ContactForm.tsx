import { t } from 'i18n:astro'
import { useEffect, useRef, useState } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import type { Slots } from 'types/index'
import { type InferInput, email, nonEmpty, object, pipe, string, trim } from 'valibot'

import { Input, Textarea } from '@nextui-org/react'

import Button from '@components/ui/Button'

import { EMAILJS } from '@constants/email'
import { CONTACT } from '@constants/routes'
import emailjs from '@emailjs/browser'
import { valibotResolver } from '@hookform/resolvers/valibot'

const ContactSchema = object({
  name: pipe(string(), trim(), nonEmpty('NAME.EMPTY')),
  email: pipe(string(), trim(), nonEmpty('EMAIL.EMPTY'), email('EMAIL.INVALID')),
  message: pipe(string(), trim(), nonEmpty('MESSAGE.EMPTY')),
})

type Props = any

const ContactForm = ({ ...rest }: Props) => {
  const tForm = t('FORM', { returnObjects: true })

  const slots = rest as Slots<'error' | 'success'>

  const [formHeight, setFormHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (!formRef.current) return
    setFormHeight(formRef.current.offsetHeight)
  }, [])

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: valibotResolver(ContactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  const onSubmit: SubmitHandler<InferInput<typeof ContactSchema>> = async ({ name, email, message }) => {
    clearErrors('root')

    await emailjs
      .send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATES.CONTACT,
        { to: CONTACT.email, from: email, name, message },
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
          setError('root', { message: 'CONTACT' })
        },
      )
  }

  if (isSubmitSuccessful) {
    return (
      <div
        className="relative h-full min-h-[500px] grid place-items-center text-center content-center"
        style={{ minHeight: `${formHeight}px` }}
      >
        <div className="absolute top-20 sm:top-10 right-10">{slots.success}</div>
        <h2 role="alert" className="text-3xl text-balance sm:text-wrap">
          {t('contact:REACH_OUT.SUCCESS')}
        </h2>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="h-full flex flex-col justify-between gap-14">
      <div className="flex flex-col gap-8 flex-1 sm:mb-2">
        <Controller
          name="name"
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <div className="relative">
              <Input
                {...field}
                color="primary"
                variant="bordered"
                autoComplete="name"
                label={tForm.NAME.LABEL}
                placeholder={tForm.NAME.PLACEHOLDER}
                isInvalid={!!errors.name?.message}
                classNames={{
                  inputWrapper: 'rounded-xl h-[2.7lh] shadow-lg border-slate-600',
                  label: 'text-medium font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-inter text-medium text-slate-50 placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />
              {errors.name?.message && (
                <p
                  role="alert"
                  className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0"
                >
                  {slots.error} {t(`common:ERRORS.${errors.name.message}` as any)}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="email"
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <div className="relative">
              <Input
                {...field}
                color="primary"
                variant="bordered"
                autoComplete="email"
                label={tForm.EMAIL.LABEL}
                placeholder={tForm.EMAIL.PLACEHOLDER}
                isInvalid={!!errors.email?.message}
                classNames={{
                  inputWrapper: 'rounded-xl h-[2.7lh] shadow-lg border-slate-600',
                  label: 'text-medium font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-inter text-medium !text-slate-50 placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />
              {errors.email?.message && (
                <p
                  role="alert"
                  className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0"
                >
                  {slots.error} {t(`common:ERRORS.${errors.email.message}` as any)}
                </p>
              )}
            </div>
          )}
        />

        <Controller
          name="message"
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <div className="relative">
              <Textarea
                {...field}
                rows={5}
                disableAutosize
                autoComplete="off"
                variant="bordered"
                label={tForm.MESSAGE.LABEL}
                placeholder={tForm.MESSAGE.PLACEHOLDER}
                isInvalid={!!errors.message?.message}
                classNames={{
                  inputWrapper: 'rounded-xl border-2 shadow-lg border-slate-600',
                  label: 'text-lg font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-inter text-medium leading-[1.3] placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />
              {errors.message?.message && (
                <p
                  role="alert"
                  className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0"
                >
                  {slots.error} {t(`common:ERRORS.${errors.message.message}` as any)}
                </p>
              )}
            </div>
          )}
        />
      </div>

      <div className="w-full space-y-2">
        {errors.root?.message && (
          <p
            role="alert"
            className="leading-[1.2] sm:text-start text-center flex items-center justify-center gap-1 text-danger-500 text-lg sm:inset-x-8 sm:translate-y-0 sm:items-start sm:gap-2 sm:[&_svg]:scale-[1.2]"
          >
            {slots.error} {t(`common:ERRORS.${errors.root.message}` as any)}
          </p>
        )}
        <Button fullWidth type="submit" size="lg" className="rounded-xl bg-primary-300">
          {tForm.CONTACT.SUBMIT}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
