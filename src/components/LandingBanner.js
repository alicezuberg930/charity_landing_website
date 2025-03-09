import { useGetBannersHook } from '../hooks/banner.hook'
import { importAll } from '../utils/import_img'
import CustomSlider from './CustomSlider'
import LoadingShimmer from './LoadingShimmer'
const images = importAll(
  require.context('../assets/other', false, /\.(png|jpe?g|svg)$/)
)

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
      {isLoading ? <LoadingShimmer /> :
        <CustomSlider {...bannerSettings}>
          {
            banners && banners.data.map(banner => {
              return (
                <div key={banner._id} className='aspect-video w-full max-h-[75vh]'>
                  <img className='object-cover h-full w-full' src={banner.image} alt={banner.image} />
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