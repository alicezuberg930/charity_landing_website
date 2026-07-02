import React from 'react'
import Section from '../../components/Section'

const DesignPage = () => {
  const designs = [
    {
      'name': 'NHẬN THIẾT KẾ TỜ RƠI, BROCHURE, BANNER, ALBUM, QUẢNG CÁO',
      'images': ["./assets/design/canh-en-mua-xuan.jpg", "./assets/design/cung-be-den-truong.jpg", "./assets/design/chao-tinh-thuong.jpg", "./assets/design/mua-he-yeu-thuong.jpg", "./assets/design/tiep-suc-tri-thuc.jpg", "./assets/design/vui-mua-trung-thu.jpg", "./assets/design/vu-lan-trang.jpg"]
    }
  ]
  return (
    <>
      {
        designs.map(design => {
          return (
            <React.Fragment key={design.name}>
              <Section title={design.name} />
              <div className='max-w-screen-md mx-auto'>
                {
                  design.images.map(image => {
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

export default DesignPage