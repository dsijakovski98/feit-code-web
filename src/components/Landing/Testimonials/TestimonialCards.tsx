import { t } from 'i18n:astro'
import { Fragment, useState } from 'react'
import 'swiper/css'
import 'swiper/css/a11y'
import 'swiper/css/navigation'
import { A11y, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Slots } from 'types/index'

import Button from '@components/ui/Button'

type Props = {
  testimonials: Array<{
    TEXT: string
    NAME: string
    ROLE: string
    WORKPLACE: string
    imgSlot: string
  }>
}

export default function TestimonialCards({ testimonials, ...rest }: Props) {
  const slots = rest as Slots

  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null)

  return (
    <Fragment>
      <Swiper
        grabCursor
        centerInsufficientSlides
        speed={300}
        spaceBetween={30}
        pagination={false}
        slidesPerView="auto"
        navigation={{ prevEl, nextEl }}
        modules={[A11y, Navigation]}
        className="px-[50px]"
      >
        {[...testimonials, ...testimonials, ...testimonials, ...testimonials, ...testimonials].map(
          // TODO: Remove duplication once all testimonials are added
          ({ TEXT, NAME, ROLE, WORKPLACE, imgSlot }, index) => (
            <SwiperSlide key={TEXT + index} className="w-[320px]">
              <article className="flex flex-col justify-between gap-6 lg:!mx-0">
                <div className="bg-gradient-to-br from-secondary-100 to-transparent p-5 pb-0 space-y-2 to-60% rounded-xl">
                  {slots.quote}

                  <p className="font-inter text-xl font-extralight">{TEXT}</p>
                </div>

                <div className="flex items-end justify-start gap-4">
                  {slots[imgSlot]}

                  <div className="text-start -space-y-1">
                    <p>{NAME}</p>
                    <p className="font-extralight">
                      {ROLE} <span>@</span> {WORKPLACE}
                    </p>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ),
        )}
      </Swiper>

      <nav className="flex items-center gap-2 justify-end container mt-10 *:rounded-full *:scale-[0.9]">
        <Button isIconOnly variant="solid" ref={(e) => setPrevEl(e)} color="secondary" aria-label={t('PREV')}>
          {slots.prev}
        </Button>

        <Button isIconOnly variant="solid" ref={(e) => setNextEl(e)} color="secondary" aria-label={t('NEXT')}>
          {slots.next}
        </Button>
      </nav>
    </Fragment>
  )
}
