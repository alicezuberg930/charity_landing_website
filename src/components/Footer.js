import facebook from '../assets/icon/facebook.png'
import zalo from '../assets/icon/zalo.png'
import youtube from '../assets/icon/youtube.png'

const Footer = () => {
  return (
    <footer>
      <div className='border-t border-gray-300'>
        <div className='max-w-screen-xl mx-auto py-12 flex gap-4 flex-col md:flex-row px-2 md:px-0'>
          <div className='flex-1'>
            <span className='text-main-color font-semibold text-xl'>
              THÔNG TIN VỀ CHÚNG TÔI
            </span>
            <ul className='mt-3 space-y-2'>
              <li>
                <span className='text-main-color'>Cháo tình thương: </span>
                <span>269/37 Bà Hom P.13 Q.6 TP. Hồ Chí Minh</span>
              </li>
              <li>
                <span className='text-main-color'>Kho hàng: </span>
                <span>
                  25 Đường 52B, Phường Tân Tạo, Quận Bình Tân, TP. Hồ Chí Minh
                </span>
              </li>
              <li>
                <span className='text-main-color'>Hỗ trợ: </span>
                <span>0986.44.99.14 - 0938.88.44.07 (Mr. Tân)</span>
              </li>
              <li>
                <span className='text-main-color'>Email: </span>
                <span>nguyenthanhtan1985@gmail.com</span>
              </li>
              <li className='flex items-center'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.facebook.com/profile.php?id=100064669450553'
                  className='mr-3'
                >
                  <img src={facebook} width={46} height={46} alt='facebook' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='http://zaloapp.com/qr/p/1wi43cqb45nhd'
                  className='mr-3'
                >
                  <img src={zalo} width={46} height={46} alt='zalo' />
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://www.youtube.com/channel/UCWOjhTJBvyQXanFiy5SeyFA/videos'
                >
                  <img src={youtube} width={46} height={46} alt='youtube' />
                </a>
              </li>
            </ul>
          </div>
          <div className='flex-1'>
            <span className='text-main-color font-semibold text-xl'>
              THEO DÕI CHÚNG TÔI
            </span>
            <div className='mt-3 w-full'>
              <iframe
                src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064669450553&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true'
                width='100%'
                height='400'
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

export default Footer
