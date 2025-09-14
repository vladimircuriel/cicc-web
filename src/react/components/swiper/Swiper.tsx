/** biome-ignore-all lint/suspicious/noArrayIndexKey: we have no id */

import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'

type SwiperComponentProps = {
  children: React.ReactNode[]
}

export default function SwiperComponent({ children }: SwiperComponentProps) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      centeredSlides
      navigation
      loop
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      autoplay={{ delay: 3000 }}
      className="w-full min-h-[410px]"
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          <div className="slide-scale">{child}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
