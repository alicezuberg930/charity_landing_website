import Header from '../components/Header'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import { importAll } from '../utils/import_img'
const images = importAll(
  require.context('../assets/activity_image', false, /\.(png|jpe?g|svg)$/)
)

function ActivityDetailsPage () {
  const location = useLocation()
  const { details } = location.state
  console.log(details.description)
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-12 text-center'>
            <h3 className='main-theme'>{details.title}</h3>
            <hr />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12 d-flex justify-content-center'>
            <div
              className='image-wrapper image-container'
              style={{ width: '80%', height: '100%' }}
            >
              <img
                src={images[details.banner]}
                width={'100%'}
                height={'100%'}
                alt={details.banner}
              />
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div
            className='col-12'
            dangerouslySetInnerHTML={{ __html: details.description }}
          ></div>
        </div>
        <div className='row mt-4 mb-4'>
          <div className='col-12 d-flex flex-column align-items-center'>
            <div className='w-100 text-center'>
              <h3 className='main-theme'>Hình ảnh thực hiện chương trình</h3>
              <hr />
            </div>
            {details.images.map(image => {
              return (
                <div
                  className='image-wrapper image-container mt-2 mb-2'
                  style={{ width: '65%', height: '100%' }}
                >
                  <img
                    src={images[image]}
                    width={'100%'}
                    height={'100%'}
                    alt={image}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ActivityDetailsPage
