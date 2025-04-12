import React from 'react'
import Section from '../../components/Section'

const PhotoShootPage = () => {
  const photoshoots = [
    {
      'name': 'NHẬN CHỤP ALBUM ẢNH CƯỚI',
      'images': ["./assets/photoshoot/anh-cuoi-1.jpg", "./assets/photoshoot/anh-cuoi-2.jpg", "./assets/photoshoot/anh-cuoi-3.jpg", "./assets/photoshoot/anh-cuoi-4.jpg", "./assets/photoshoot/anh-cuoi-5.jpg", "./assets/photoshoot/anh-cuoi-6.jpg", "./assets/photoshoot/anh-cuoi-7.jpg"]
    },
    {
      'name': 'NHẬN CHỤP ẢNH HỘI TIỆC',
      'images': ["./assets/photoshoot/hoi-tiec-1.jpg", "./assets/photoshoot/hoi-tiec-2.jpg", "./assets/photoshoot/hoi-tiec-3.jpg", "./assets/photoshoot/hoi-tiec-4.jpg", "./assets/photoshoot/hoi-tiec-5.jpg", "./assets/photoshoot/hoi-tiec-6.jpg", "./assets/photoshoot/hoi-tiec-7.jpg"]
    },
    {
      'name': 'NHẬN CHỤP ẢNH EM BÉ',
      'images': ["./assets/photoshoot/anh-em-be-1.jpg", "./assets/photoshoot/anh-em-be-2.jpg", "./assets/photoshoot/anh-em-be-3.jpg", "./assets/photoshoot/anh-em-be-4.jpg", "./assets/photoshoot/anh-em-be-5.jpg", "./assets/photoshoot/anh-em-be-6.jpg"]
    },
    {
      'name': 'NHẬN CHỤP ẢNH KỈ YẾU',
      'images': ["./assets/photoshoot/ki-yeu-1.jpg", "./assets/photoshoot/ki-yeu-2.jpg", "./assets/photoshoot/ki-yeu-3.jpg", "./assets/photoshoot/ki-yeu-4.jpg", "./assets/photoshoot/ki-yeu-5.jpg", "./assets/photoshoot/ki-yeu-6.jpg", "./assets/photoshoot/ki-yeu-7.jpg", "./assets/photoshoot/ki-yeu-8.jpg"]
    }
  ]
  return (
    <>
      {
        photoshoots.map(photoshoot => {
          return (
            <React.Fragment key={photoshoot.name}>
              <Section title={photoshoot.name} />
              <div className='max-w-screen-md mx-auto'>
                {
                  photoshoot.images.map(image => {
                    return (
                      <div key={image} className='my-4'>
                        <div className='image-container rounded-2xl relative aspect-video'>
                          <img src={image} alt={image} className='w-full h-full object-cover rounded-xl' />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </React.Fragment>
          )
        })
      }
    </>
  )
}

export default PhotoShootPage