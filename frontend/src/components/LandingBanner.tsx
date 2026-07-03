import { Children, memo, useEffect, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import { useGetBannersHook } from '../hooks/banner.hook'
import LoadingShimmerList from './LoadingShimmerList'

type BannerSliderProps = {
  children: ReactNode
  slidesToShow?: number
  autoplay?: boolean
  autoplaySpeed?: number
  loop?: boolean
  showDot?: boolean
  showButton?: boolean
}

const BannerSlider = ({
  children,
  slidesToShow = 1,
  autoplay = false,
  autoplaySpeed = 3000,
  loop = true,
  showDot = true,
  showButton = true
}: BannerSliderProps) => {
  const [api, setApi] = useState<CarouselApi>()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [slideCount, setSlideCount] = useState(0)
  const totalSlides = Children.count(children)

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
            style={{ flexBasis: `${100 / slidesToShow}%` }}
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

const LandingBanner = () => {
  const bannerSettings = {
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    loop: true,
    showDot: true,
  }
  const { data: banners, isLoading } = useGetBannersHook({ isActive: true })

  return (
    <>
      {isLoading ? <LoadingShimmerList /> :
        <BannerSlider {...bannerSettings}>
          {
            banners && banners.data.map(banner => {
              return (
                <div key={banner._id} className='aspect-video w-full max-h-[75vh]'>
                  <img className='object-center h-full w-full' src={banner.image} alt={banner.image} />
                </div>
              )
            })
          }
        </BannerSlider>
      }
    </>
  )
}

export default memo(LandingBanner)