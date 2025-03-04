import { removeOverlay } from '../utils/overlay_click'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Body from '../components/Body'
import Carousel from '../components/Carousel'
import GoogleMap from '../components/GoogleMap'
import Footer from '../components/Footer'
import AlertImage from '../assets/other/thong-bao.jpg'
import { Link } from 'react-router-dom'

function IndexPage () {
  return (
    <>
      <Header />
      <Banner />
      <Body />
      <Carousel />
      <GoogleMap />
      <Footer />
      <div id='background-overlay' onClick={removeOverlay}>
        <div id='overlay'>
          <div className='position-relative'>
            <div
              className='position-absolute text-danger'
              onClick={removeOverlay}
              style={{ right: '10px', top: '10px' }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='25'
                height='25'
                fill='currentColor'
                className='bi bi-x-circle-fill'
                viewBox='0 0 16 16'
              >
                <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'></path>
              </svg>
            </div>
            <Link to={'/news'}>
              <img
                alt='news_image'
                src={AlertImage}
                width={'100%'}
                height={'100%'}
                style={{ objectFit: 'contain' }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
