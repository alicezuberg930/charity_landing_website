import LandingBanner from './components/landing-banner'
import Body from './components/body'
import DonationSlider from './components/donation-slider'
import GoogleMap from './components/google-map'
import EventDialog from './components/event-dialog'
import { VideoPlayer } from '@/components/video/video-player'

const HomePage = () => {
  return (
    <div className='mb-12'>
      {/* <LandingBanner />
      <Body />
      <DonationSlider />
      <GoogleMap /> */}
      <VideoPlayer videoUrl='/videos/22.07.2018-chao-tinh-thuong.mp4' />
      <EventDialog />
    </div>
  )
}

export default HomePage