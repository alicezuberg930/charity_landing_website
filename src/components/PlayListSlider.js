import React from 'react'
import CustomSlider from './CustomSlider'

const PlayListSlider = ({ videos }) => {
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
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
    <div className='my-4'>
      {
        <CustomSlider {...settings}>
          {
            videos.map((video, i) => {
              const videoId = 'https://www.youtube-nocookie.com/embed/' + video
              return (
                <div key={i} className='my-2 px-2'>
                  <iframe
                    title={video}
                    key={video}
                    width={'100%'}
                    height={'250'}
                    src={videoId}
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    allowFullScreen
                    style={{ border: '0px' }}
                  />
                </div>
              )
            })
          }
        </CustomSlider>
      }
    </div >
  )
}

export default PlayListSlider