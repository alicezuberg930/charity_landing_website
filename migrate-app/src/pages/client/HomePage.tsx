import LandingBanner from '../../components/LandingBanner'
import Body from '../../components/Body'
import DonationSlider from '../../components/DonationSlider'
import GoogleMap from '../../components/GoogleMap'
import EventOverlay from '../../components/EventOverlay'

const HomePage = () => {
  return (
    <>
      <LandingBanner />
      <Body />
      <DonationSlider />
      <GoogleMap />
      <EventOverlay />
    </>
  )
}

export default HomePage
