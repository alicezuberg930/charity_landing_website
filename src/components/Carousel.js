import Section from './Section'
import { importAll } from '../utils/import_img'
const images = importAll(
  require.context('../assets/donation_image', false, /\.(png|jpe?g|svg)$/)
)

export default function Carousel () {
  return (
    <div className='container mt-5 mb-5'>
      <Section title={'SẢN PHẨM QUYÊN GÓP CỦA NHÓM'} />
      <div
        id='carouselExampleControls'
        className='carousel slide'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <div className='row'>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['nuoc-uong-dong-chai-4-300x300.jpg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>
                    Nước uống đóng chai - 24 chai/thùng
                  </h5>
                  <strong>70.000 đ</strong>
                </div>
              </div>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['moc-khoa-nhua-treo-deo-1-300x300.jpeg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>Móc khoá nhựa trong dẻo</h5>
                  <strong>10.000 đ</strong>
                </div>
              </div>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['bo-ly-anh-sang-tu-thien-2019-300x300.jpg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>Bộ ly thuỷ tinh hộp 6 cái</h5>
                  <strong>120.000 đ</strong>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <div className='row'>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['non-thoi-trang-soc-dua-2-300x300.jpg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>Nón thời trang sọc dưa </h5>
                  <strong>5.000 đ</strong>
                </div>
              </div>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['tui-rut-du-lich-anh-sang-tu-thien.jpg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>
                    Túi rút du lịch vải chịu lực tốt
                  </h5>
                  <strong>60.000 ₫</strong>
                </div>
              </div>
              <div className='bg-light m-0 col-sm-12 col-md-4 col-lg-4'>
                <div className='image-wrapper'>
                  <img
                    src={images['Viet-bic-xanh-nhua-ma-kim-loai-3-300x300.jpg']}
                    alt='Card image cap'
                  />
                </div>
                <div className='card-body'>
                  <span className='card-title'>
                    Sản phẩm quyên góp từ thiện
                  </span>
                  <h5 className='card-text'>Viết bic xanh nhựa mạ kim loại</h5>
                  <strong>10.000 đ</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev main-theme'
          href='#carouselExampleControls'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleControls'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  )
}
