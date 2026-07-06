import LandingBanner from '@/pages/public/home/components/landing-banner'
import Body from '@/pages/public/home/components/body'
import DonationSlider from '@/pages/public/home/components/donation-slider'
import GoogleMap from '@/pages/public/home/components/google-map'
import EventDialog from '@/pages/public/home/components/event-dialog'

const HomePage = () => {
  return (
    <div className='mb-12'>
      <LandingBanner />
      <Body />
      <DonationSlider />
      <GoogleMap />
      <EventDialog />
    </div>
  )
}

export default HomePage