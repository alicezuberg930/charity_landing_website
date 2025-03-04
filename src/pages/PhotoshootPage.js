import React from 'react'
import Section from '../components/Section'
import { importAll } from '../utils/import_img'
const images = importAll(
  require.context('../assets/photoshoot_image', false, /\.(png|jpe?g|svg)$/)
)

function DesignPage () {
  return (
    <>
      <Section title={'NHẬN CHỤP ALBUM ẢNH CƯỚI'} />
      <div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-1.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-2.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-3.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-4.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-5.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-6.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-cuoi-7.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>
      <Section title={'NHẬN CHỤP ẢNH HỘI TIỆC'} />
      <div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-1.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-2.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-3.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-4.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-5.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-6.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['hoi-tiec-7.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>
      <Section title={'NHẬN CHỤP ẢNH EM BÉ'} />
      <div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-1.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-2.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-3.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-4.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-5.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['anh-em-be-6.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>
      <Section title={'NHẬN CHỤP ẢNH KỈ YẾU'} />
      <div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-1.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-2.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-3.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-4.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-5.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-6.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-7.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
        <div className='row mt-3 mb-3'>
          <div className='col small-12 large-12'>
            <div className='col-inner image-container-2'>
              <img
                alt='design_image'
                src={images['ki-yeu-8.jpg']}
                width={'100%'}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DesignPage
