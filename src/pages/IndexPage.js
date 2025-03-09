import LandingBanner from '../components/LandingBanner'
import Body from '../components/Body'
import Carousel from '../components/Carousel'
import GoogleMap from '../components/GoogleMap'
import NotificationOverlay from '../components/NotificationOverlay'

function IndexPage() {
  return (
    <>
      <LandingBanner />
      <Body />
      <Carousel />
      <GoogleMap />
      <NotificationOverlay />
    </>
  )
}

export default IndexPage
