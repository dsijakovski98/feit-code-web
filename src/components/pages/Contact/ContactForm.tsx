import { t } from 'i18n:astro'
import { type FormEvent, useEffect, useRef, useState } from 'react'
import { Controller, type SubmitHandler, useForm } from 'react-hook-form'
import { type InferInput, email, nonEmpty, object, pipe, string, trim } from 'valibot'

import { Input, Textarea } from '@heroui/react'

import Button from '@components/ui/Button'

import { EMAILJS } from '@constants/email'
import emailjs from '@emailjs/browser'
import { valibotResolver } from '@hookform/resolvers/valibot'

import type { Slots } from 'types/index'

const ContactSchema = object({
  name: pipe(string(), trim(), nonEmpty('NAME.EMPTY')),
  email: pipe(string(), trim(), nonEmpty('EMAIL.EMPTY'), email('EMAIL.INVALID')),
  message: pipe(string(), trim(), nonEmpty('MESSAGE.EMPTY')),
})

type Props = any

const ContactForm = ({ ...rest }: Props) => {
  const tForm = t('FORM', { returnObjects: true })

  const slots = rest as Slots<'error' | 'success'>

  const honeyRef = useRef<HTMLInputElement | null>(null)

  const [formHeight, setFormHeight] = useState(0)
  const formRef = useRef<HTMLFormElement | null>(null)

  const [topic, setTopic] = useState<'Contact' | 'Review' | 'Misc Issue' | 'Exam Issue'>('Contact')

  useEffect(() => {
    if (!formRef.current) return
    setFormHeight(formRef.current.offsetHeight)
  }, [])

  const {
    handleSubmit,
    control,
    setError,
    setValue,
    clearErrors,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: valibotResolver(ContactSchema),
    defaultValues: { name: '', email: '', message: '' },
  })

  useEffect(() => {
    const url = new URL(location.href)
    const typeParam = url.searchParams.get('type')

    if (!typeParam) return

    const reportType = ['report-issue', 'exam-issue', 'review'].includes(typeParam)

    if (!reportType) return

    const name = url.searchParams.get('name') ?? 'N/A'
    const email = url.searchParams.get('email') ?? 'N/A'

    setValue('name', name)
    setValue('email', email)

    if (typeParam === 'review') {
      setTopic('Review')
      setValue('name', '')
      setValue('email', '')
    }

    if (typeParam === 'report-issue') {
      setTopic('Misc Issue')
      setValue('message', 'Hey FEIT Code team!\nI need some help regarding... \n')
    }

    if (typeParam == 'exam-issue') {
      setTopic('Exam Issue')
      const taskId = url.searchParams.get('taskId') ?? 'N/A'
      const examId = url.searchParams.get('examId') ?? 'N/A'

      setValue(
        'message',
        `Hey FEIT Code team!\nI would like to report an issue regarding my latest exam...\n\nDescribe your issue here...\n\nTask <${taskId}>\nExam <${examId}>`,
      )
    }
  }, [])

  const onSubmit: SubmitHandler<InferInput<typeof ContactSchema>> = async ({ name, email, message }) => {
    clearErrors('root')

    await emailjs
      .send(
        EMAILJS.SERVICE_ID,
        EMAILJS.TEMPLATES.CONTACT,
        { from: email, topic, name, message },
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

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (honeyRef.current?.value) {
      setError('root', { message: 'GOTCHA' })
      return
    }

    handleSubmit(onSubmit)(e)
  }

  if (isSubmitSuccessful) {
    return (
      <div
        className="grid h-full max-h-[550px] gap-5 place-items-center text-center content-center"
        style={{ minHeight: `${formHeight}px` }}
      >
        <div>{slots.success}</div>
        <h2 role="alert" className="text-3xl md:text-2xl text-balance text-center">
          {t('contact:REACH_OUT.SUCCESS')}
        </h2>
      </div>
    )
  }

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className="h-full flex flex-col justify-between gap-14">
      <div className="flex flex-col gap-12 flex-1 sm:mb-2">
        <Controller
          name="name"
          control={control}
          disabled={isSubmitting}
          render={({ field }) => (
            <div className="relative">
              <Input
                {...field}
                aria-required
                color="primary"
                variant="bordered"
                autoComplete="name"
                aria-describedby="contact-name-status"
                label={tForm.NAME.LABEL}
                placeholder={tForm.NAME.PLACEHOLDER}
                isDisabled={isSubmitting}
                isInvalid={!!errors.name?.message}
                aria-invalid={!!errors.name?.message}
                classNames={{
                  inputWrapper: 'rounded-xl h-[2.7lh] shadow-lg border-slate-600',
                  label: 'text-medium font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-exo text-medium text-slate-50 placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />

              <div id="contact-name-status">
                {errors.name?.message && (
                  <p className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0">
                    {slots.error} {t(`common:ERRORS.${errors.name.message}` as any)}
                  </p>
                )}
              </div>
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
                aria-required
                color="primary"
                variant="bordered"
                autoComplete="email"
                aria-describedby="contact-email-status"
                label={tForm.EMAIL.LABEL}
                placeholder={tForm.EMAIL.PLACEHOLDER}
                isDisabled={isSubmitting}
                aria-invalid={!!errors.email?.message}
                isInvalid={!!errors.email?.message}
                classNames={{
                  inputWrapper: 'rounded-xl h-[2.7lh] shadow-lg border-slate-600',
                  label: 'text-medium font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-exo text-medium !text-slate-50 placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />

              <div id="contact-email-status">
                {errors.email?.message && (
                  <p className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0">
                    {slots.error} {t(`common:ERRORS.${errors.email.message}` as any)}
                  </p>
                )}
              </div>
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
                rows={7}
                aria-required
                disableAutosize
                color="primary"
                autoComplete="off"
                variant="bordered"
                aria-describedby="contact-message-status"
                label={tForm.MESSAGE.LABEL}
                placeholder={tForm.MESSAGE.PLACEHOLDER}
                isDisabled={isSubmitting}
                aria-invalid={!!errors.message?.message}
                isInvalid={!!errors.message?.message}
                classNames={{
                  inputWrapper: 'rounded-xl border-2 shadow-lg border-slate-600',
                  label: 'text-lg font-semibold sm:font-normal !text-slate-50',
                  input:
                    'font-exo text-medium leading-[1.3] placeholder:text-medium placeholder:font-kanit placeholder:text-slate-400 placeholder:font-extralight',
                }}
              />
              <div id="contact-message-status">
                {errors.message?.message && (
                  <p className="absolute inset-x-2 top-full flex translate-y-1 items-center gap-1 leading-[1.2] text-danger-500 sm:text-sm sm:[&_svg]:!scale-[0.7] sm:gap-0">
                    {slots.error} {t(`common:ERRORS.${errors.message.message}` as any)}
                  </p>
                )}
              </div>
            </div>
          )}
        />

        <input ref={honeyRef} type="text" autoComplete="off" className="sr-only" />
      </div>

      <div className="w-full space-y-2" role="alert" aria-live="polite">
        {errors.root?.message && (
          <p className="leading-[1.2] sm:text-start text-center flex items-center justify-center gap-1 text-danger-500 text-lg sm:inset-x-8 sm:translate-y-0 sm:items-start sm:gap-2 sm:[&_svg]:scale-[1.2]">
            {slots.error} {t(`common:ERRORS.${errors.root.message}` as any)}
          </p>
        )}
        <Button fullWidth type="submit" isLoading={isSubmitting} size="lg" className="rounded-xl bg-primary-300">
          {tForm.CONTACT.SUBMIT}
        </Button>
      </div>
    </form>
  )
}

export default ContactForm
