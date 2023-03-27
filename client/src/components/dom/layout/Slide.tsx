import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'

interface Props {
  list: string[]
}

export const Slide = ({ list, ...props }: Props) => {
  return (
    <div className='flex w-full h-fit'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={false}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={false}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {list.map((item, index) => (
          <SwiperSlide
            key={index}
            className='relative rounded-lg overflow-hidden items-center justify-center w-full cursor-pointer h-fit'>
            <Image src={item} alt={''} width={1920} height={1080} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
