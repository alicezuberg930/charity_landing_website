import LandingBanner from '../components/LandingBanner'
import Body from '../components/Body'
import Carousel from '../components/Carousel'
import GoogleMap from '../components/GoogleMap'
import EventOverlay from '../components/EventOverlay'

function IndexPage() {
  return (
    <>
      <LandingBanner />
      <Body />
      <Carousel />
      <GoogleMap />
      <EventOverlay />
    </>
  )
}

export default IndexPage
