import facebook from '../assets/icon/facebook.png'
import zalo from '../assets/icon/zalo.png'
import youtube from '../assets/icon/youtube.png'

export default function Footer () {
  return (
    <footer className='text-dark bg-light pl-5 pr-5'>
      <div className='p-5 border-top'>
        <div className='row pl-5 pr-5'>
          <div className='col-lg-6 col-md-12 col-sm-12 justify-content-center'>
            <h4 className='main-theme'>THÔNG TIN VỀ CHÚNG TÔI</h4>
            <ul className='nav flex-column'>
              <li className='nav-item mb-1'>
                <span className='p-0 main-theme'>Cháo tình thương: </span>
                <span>269/37 Bà Hom P.13 Q.6 TP. Hồ Chí Minh</span>
              </li>
              <li className='nav-item mb-1'>
                <span className='p-0 main-theme'>Kho hàng: </span>
                <span>
                  25 Đường 52B, Phường Tân Tạo, Quận Bình Tân, TP. Hồ Chí Minh
                </span>
              </li>
              <li className='nav-item mb-1'>
                <span className='p-0 main-theme'>Hỗ trợ: </span>
                <span>0986.44.99.14 - 0938.88.44.07 (Mr. Tân)</span>
              </li>
              <li className='nav-item mb-1'>
                <span className='p-0 main-theme'>Email: </span>
                <span>nguyenthanhtan1985@gmail.com</span>
              </li>
              <li className='nav-item mb-1'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/profile.php?id=100064669450553'
                  className='mr-3'
                >
                  <img src={facebook} width={50} height={50} alt='facebook' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='http://zaloapp.com/qr/p/1wi43cqb45nhd'
                  className='mr-3'
                >
                  <img src={zalo} width={50} height={50} alt='zalo' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.youtube.com/channel/UCWOjhTJBvyQXanFiy5SeyFA/videos'
                >
                  <img src={youtube} width={50} height={50} alt='youtube' />
                </a>
              </li>
            </ul>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <h4 className='main-theme'>THEO DÕI CHÚNG TÔI</h4>
            <div className='' style={{ width: '100%' }}>
              <iframe
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064669450553&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true'
                width='100%'
                height='500'
                style={{ border: 'none', overflow: 'hidden' }}
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
              ></iframe>
            </div>
            {/* <div
              className='fb-page'
              data-href='https://www.facebook.com/profile.php?id=100064669450553'
              data-tabs='timeline'
              data-height='330'
              data-width='330'
              data-small-header='false'
              data-adapt-container-width='false'
              data-hide-cover='false'
              data-show-facepile='true'
              data-show-post='true'
            >
              <blockquote
                cite='https://www.facebook.com/profile.php?id=100064669450553'
                className='fb-xfbml-parse-ignore'
              >
                <a href='https://www.facebook.com/profile.php?id=100064669450553'>
                  Trang Ánh Sáng Từ Thiện
                </a>
              </blockquote>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  )
}
