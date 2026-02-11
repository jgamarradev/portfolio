'use client'

import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'
import testimonialsData from '@/data/testimonials.json'
import { Testimonial } from '@/types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { getAssetPath } from '@/lib/utils/images'

export default function Testimonials() {
  const { t } = useI18n()
  const testimonials = testimonialsData as Testimonial[]

  return (
    <div className="container-fluid bg-light py-5 my-5" id="testimonial">
      <div className="container-fluid py-5">
        <h1 className="display-5 text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
          {t('testimonialsTitle')}
        </h1>
        <div className="row justify-content-center">
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-left h-100">
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.1s"
                src={getAssetPath('/img/testimonial-1.jpg')}
                alt=""
                width={70}
                height={70}
              />
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.3s"
                src={getAssetPath('/img/testimonial-2.jpg')}
                alt=""
                width={60}
                height={60}
              />
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.5s"
                src={getAssetPath('/img/testimonial-3.jpg')}
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              speed={1000}
              slidesPerView={1}
              loop={true}
              className="testimonial-carousel"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="testimonial-item text-center">
                    <div className="position-relative mb-5">
                      <Image
                        className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                        src={getAssetPath(`/img/${testimonial.image}`)}
                        alt={testimonial.name}
                        width={120}
                        height={120}
                      />
                      <div className="testimonial-icon">
                        <i className="fa fa-quote-left text-primary"></i>
                      </div>
                    </div>
                    <p className="fs-5 fst-italic">
                      {testimonial.text}
                    </p>
                    <hr className="w-25 mx-auto" />
                    <h5>{testimonial.name}</h5>
                    <span>{testimonial.role}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-lg-3 d-none d-lg-block">
            <div className="testimonial-right h-100">
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.1s"
                src={getAssetPath('/img/testimonial-1.jpg')}
                alt=""
                width={70}
                height={70}
              />
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.3s"
                src={getAssetPath('/img/testimonial-2.jpg')}
                alt=""
                width={60}
                height={60}
              />
              <Image
                className="img-fluid wow fadeIn"
                data-wow-delay="0.5s"
                src={getAssetPath('/img/testimonial-3.jpg')}
                alt=""
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

