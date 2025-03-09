import { useGetBannersHook } from '../hooks/banner.hook'
import CustomSlider from './CustomSlider'
import LoadingShimmerList from './LoadingShimmerList'

const LandingBanner = () => {
  const bannerSettings = {
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    showDot: true,
  }
  const { data: banners, isLoading } = useGetBannersHook()

  return (
    <>
      {isLoading ? <LoadingShimmerList /> :
        <CustomSlider {...bannerSettings}>
          {
            banners && banners.data.map(banner => {
              return (
                <div key={banner._id} className='aspect-video w-full max-h-[75vh]'>
                  <img className='object-center h-full w-full' src={banner.image} alt={banner.image} />
                </div>
              )
            })
          }
        </CustomSlider>
      }
    </>
  )
}

export default LandingBanner