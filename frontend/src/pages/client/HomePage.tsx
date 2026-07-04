import LandingBanner from '@/components/LandingBanner'
import Body from '@/components/Body'
import DonationSlider from '@/components/DonationSlider'
import GoogleMap from '@/components/GoogleMap'

const HomePage = () => {
  return (
    <div className='mb-12'>
      <LandingBanner />
      <Body />
      <DonationSlider />
      <GoogleMap />
    </div>
  )
}

export default HomePage