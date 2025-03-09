import { importAll } from '../utils/import_img'
import CustomSlider from './CustomSlider'
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

  return (
    <CustomSlider {...bannerSettings}>
      <div className='aspect-video w-full max-h-[75vh]'>
        <img
          className='object-cover h-full w-full'
          src={images['chao-tinh-thuong.jpg']}
          alt='First slide'
        />
      </div>
      <div className='aspect-video w-full max-h-[75vh]'>
        <img
          className='object-cover h-full w-full'
          src={images['chuong-trinh-thuong-nien.jpg']}
          alt='Second slide'
        />
      </div>
      <div className='aspect-video w-full max-h-[75vh]'>
        <img
          className='object-cover h-full w-full'
          src={images['hoan-canh-kho-khan.jpg']}
          alt='Third slide'
        />
      </div>
    </CustomSlider>
  )
}

export default LandingBanner