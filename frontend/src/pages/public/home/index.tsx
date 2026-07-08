import LandingBanner from './components/landing-banner'
import Body from './components/body'
import DonationSlider from './components/donation-slider'
import GoogleMap from './components/google-map'
import EventDialog from './components/event-dialog'

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