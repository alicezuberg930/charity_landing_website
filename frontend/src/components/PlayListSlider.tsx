import { memo } from 'react'
import CustomSlider from './CustomSlider'

const PlayListSlider = ({ videos }) => {
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    showDot: false,
    responsive: [
      {
        breakpoint: 1024,
        slidesToShow: 2
      },
      {
        breakpoint: 640,
        slidesToShow: 1
      }
    ]
  }

  return (
    <div className='my-4 -mx-2'>
      <CustomSlider {...settings}>
        {videos.map((video, i) => (
          <div key={i} className='px-2'>
            <iframe
              title={video}
              key={video}
              src={`https://www.youtube-nocookie.com/embed/${video}`}
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              loading='lazy'
              className='w-full h-60 border-0'
            />
          </div>
        ))}
      </CustomSlider>
    </div >
  )
}

export default memo(PlayListSlider)