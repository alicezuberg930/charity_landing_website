import { Children, memo, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import Section from '../../../../layout/public/section'
import type { SliderProps } from '../../../../components/custom-carousel'
import LazyLoadImage from '../../../../components/lazy-load-image/LazyLoadImage'

const donationItems = [
  {
    name: 'Nước uống đóng chai - 24 chai/thùng',
    image: './assets/donation/nuoc-uong-dong-chai.jpg',
    price: '70.000 đ'
  },
  {
    name: 'Móc khoá nhựa trong dẻo',
    image: './assets/donation/moc-khoa-nhua-treo-deo.jpg',
    price: '10.000 đ'
  },
  {
    name: 'Bộ ly thuỷ tinh hộp 6 cái',
    image: './assets/donation/bo-ly-anh-sang-tu-thien-2019.jpg',
    price: '120.000 đ'
  },
  {
    name: 'Nón thời trang sọc dưa',
    image: './assets/donation/non-thoi-trang-soc-dua.jpg',
    price: '5.000 đ'
  },
  {
    name: 'Túi rút du lịch vải chịu lực tốt',
    image: './assets/donation/tui-rut-du-lich-anh-sang-tu-thien.jpg',
    price: '60.000 đ'
  },
  {
    name: 'Viết bic xanh nhựa mạ kim loại',
    image: './assets/donation/viet-bic-xanh-nhua-ma-kim-loai.jpg',
    price: '10.000 đ'
  },
]

const settings = {
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  loop: true,
  showDot: false,
  showButton: true,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 3
    },
    {
      breakpoint: 640,
      slidesToShow: 2
    }
  ]
} as SliderProps


const CustomSlider = ({
  children,
  slidesToShow = 4,
  autoplay = false,
  autoplaySpeed = 5000,
  loop = true,
  showDot = true,
  showButton = true,
  responsive
}: SliderProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(0)
  const totalSlides = Children.count(children)
  const [visibleSlides, setVisibleSlides] = useState(slidesToShow)

  useEffect(() => {
    if (!responsive) return
    const updateSlidesToShow = () => {
      let newSlidesToShow = slidesToShow
      responsive.forEach((breakpoint) => {
        if (window.innerWidth <= breakpoint.breakpoint) {
          newSlidesToShow = breakpoint.slidesToShow
        }
      })
      setVisibleSlides(newSlidesToShow)
    }
    updateSlidesToShow()
    window.addEventListener('resize', updateSlidesToShow)
    return () => window.removeEventListener('resize', updateSlidesToShow)
  }, [responsive, slidesToShow])

  useEffect(() => {
    if (!api) return
    const handleSelect = () => {
      setCurrentIndex(api.selectedScrollSnap())
      setSlideCount(api.scrollSnapList().length)
    }
    handleSelect()
    api.on('select', handleSelect)
    api.on('reInit', handleSelect)
    return () => {
      api.off('select', handleSelect)
      api.off('reInit', handleSelect)
    }
  }, [api])

  useEffect(() => {
    if (!api || !autoplay) return
    const interval = window.setInterval(() => {
      api.scrollNext()
    }, autoplaySpeed)
    return () => window.clearInterval(interval)
  }, [api, autoplay, autoplaySpeed])

  return (
    <Carousel
      setApi={setApi}
      opts={{ loop, align: 'start' }}
      className='relative w-full overflow-hidden'
    >
      <CarouselContent className='ml-0'>
        {Children.map(children, (child, index) => (
          <CarouselItem
            key={index}
            className='pl-0'
            style={{ flexBasis: `${100 / visibleSlides}%` }}
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>

      {showButton && totalSlides > 0 && (
        <>
          <button
            type='button'
            onClick={() => api?.scrollPrev()}
            className='absolute left-0 z-50 bg-slider-icon-gradient p-4 bottom-1/2 translate-y-1/2'
          >
            <ChevronLeft size={24} color='white' />
          </button>
          <button
            type='button'
            onClick={() => api?.scrollNext()}
            className='absolute right-0 z-50 bg-slider-icon-gradient p-4 bottom-1/2 translate-y-1/2'
          >
            <ChevronRight size={24} color='white' />
          </button>
        </>
      )}
      {showDot && slideCount > 0 && (
        <div className='flex gap-3 absolute left-1/2 -translate-x-1/2 top-[95%]'>
          {Array.from({ length: slideCount }).map((_, index) => (
            <button
              key={index}
              type='button'
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`rounded-full ${currentIndex === index ? 'bg-main-color' : 'bg-purple-200'} p-1`}
            />
          ))}
        </div>
      )}
    </Carousel>
  )
}

const DonationSlider = () => {
  return (
    <div className='mt-20'>
      <Section title='SẢN PHẨM QUYÊN GÓP CỦA NHÓM' />
      <div className='-mx-3'>
        <CustomSlider {...settings}>
          {donationItems.map((item, index) => (
            <div className='w-full px-3' key={index}>
              <div className='bg-gray-100 rounded-md overflow-hidden'>
                <div className='aspect-square overflow-hidden'>
                  <LazyLoadImage
                    alt={item.name}
                    src={item.image}
                    className='w-full h-full object-cover hover:scale-110 transition-all duration-1000'
                    effect='blur'
                  />
                </div>
                <div className='p-2'>
                  <b className='text-lg line-clamp-1'>{item.name}</b>
                  <span className='block text-sm'>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  )
}

export default memo(DonationSlider)