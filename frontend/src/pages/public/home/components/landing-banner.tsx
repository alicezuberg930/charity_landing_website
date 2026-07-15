import { memo } from 'react'
import { useGetBannersHook } from '../../../../hooks/banner.hook'
import ShimmerList from '@/layout/common/shimmer-list'
import { CustomSlider, type SliderProps } from '@/components/custom-slider'
import LazyLoadImage from '@/components/lazy-load-image/lazy-load-image'

const settings = {
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  loop: true,
  showDot: true,
} as SliderProps

const LandingBanner = () => {
  const { data: banners, isLoading } = useGetBannersHook({ isActive: true })

  return (
    <>
      {isLoading ? (
        <ShimmerList />
      ) : (
        <CustomSlider {...settings}>
          {banners?.data.map(banner => (
            <div key={banner._id} className='aspect-video'>
              <LazyLoadImage
                widths={[
                  { screenWidth: 640, imageWidth: 640 },  // Phone
                  { screenWidth: 1024, imageWidth: 1024 },  // Tablet
                  { screenWidth: 1920, imageWidth: 1920 },  // Desktop and larger
                ]}
                className='object-center h-full w-full'
                alt={banner._id}
                src={banner.image}
                effect='blur'
              />
            </div>
          ))}
        </CustomSlider>
      )}
    </>
  )
}

export default memo(LandingBanner)