import { Children, memo, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from '@/components/ui/carousel'
import { Skeleton } from '@/components/ui/skeleton'
import type { SliderProps } from '../../../../components/custom-carousel'

const settings = {
  slidesToShow: 3,
  autoplay: false,
  loop: true,
  showDot: false,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 2
    },
    {
      breakpoint: 640,
      slidesToShow: 1
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

type PlayListSliderProps = {
  videoIds: string[]
  isLoading?: boolean
}

const PlayListSlider = ({ videoIds, isLoading = false }: PlayListSliderProps) => {
  return (
    <div className='my-4 -mx-2'>
      {isLoading ? (
        <div
          className='grid grid-cols-1 gap-4 px-2 sm:grid-cols-2 lg:grid-cols-3'
          aria-label='Loading videos'
          aria-busy='true'
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className='h-60 w-full rounded-none' />
          ))}
        </div>
      ) : (
        <CustomSlider {...settings}>
          {videoIds.map((videoId) => (
            <div key={videoId} className='px-2'>
              <iframe
                title={videoId}
                src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
                loading='lazy'
                className='w-full h-60 border-0'
              />
            </div>
          ))}
        </CustomSlider>
      )}
    </div>
  )
}

export default memo(PlayListSlider)
