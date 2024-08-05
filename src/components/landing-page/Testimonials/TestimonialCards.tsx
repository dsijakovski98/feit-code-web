import { type ReactNode } from 'react'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

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
  const slots = rest as Record<string, ReactNode>

  return (
    <Swiper
      grabCursor
      centeredSlides
      effect="fade"
      speed={800}
      slidesPerView={1}
      spaceBetween={50}
      fadeEffect={{ crossFade: true }}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination, Navigation, EffectFade]}
      className="max-w-[600px] lg:max-w-[100dvw]"
    >
      {testimonials.map(({ TEXT, NAME, ROLE, WORKPLACE, imgSlot }) => (
        <SwiperSlide key={TEXT} className="cursor-pointer mb-12">
          <div className="mx-10 flex flex-col justify-between gap-10 lg:!mx-0">
            <p className="font-inter text-2xl font-extralight sm:text-xl">{TEXT}</p>

            <div className="flex items-end justify-start gap-4">
              {slots[imgSlot]}

              <div className="text-start">
                <p>{NAME}</p>
                <p className="font-normal">
                  {ROLE} <span className="font-extralight">@</span> {WORKPLACE}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
