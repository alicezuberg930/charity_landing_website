import { memo } from "react"
import { useGetInformationHook } from "../hooks/information.hook"

const Footer = () => {
  const { data: information } = useGetInformationHook()

  return (
    <footer className="border-t border-gray-300 bg-gray-100 py-12 px-3 lg:px-0">
      <div className='max-w-screen-xl mx-auto flex gap-4 flex-col md:flex-row'>
        <div className='flex-1'>
          <span className='text-main-color font-semibold text-xl'>
            THÔNG TIN VỀ CHÚNG TÔI
          </span>
          <ul className='mt-3 space-y-2'>
            <li>
              <span className='text-main-color'>Cháo tình thương: </span>
              <span>{information?.data?.activityAddress ?? "Không có"}</span>
            </li>
            <li>
              <span className='text-main-color'>Kho hàng: </span>
              <span>{information?.data?.storageAddress ?? "Không có"}</span>
            </li>
            <li>
              <span className='text-main-color'>Hotline: </span>
              <span>{information?.data?.hotline}</span>
            </li>
            <li>
              <span className='text-main-color'>Email: </span>
              <span>{information?.data?.email}</span>
            </li>
            <li className='flex items-center'>
              <a
                target='_blank'
                rel='noreferrer'
                href={information?.data?.facebookUrl}
                className='mr-3'
              >
                <img src='./assets/facebook.png' className="w-12 h-12" alt='facebook' />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href={information?.data?.zaloURL}
                className='mr-3'
              >
                <img src='./assets/zalo.png' className="w-12 h-12" alt='zalo' />
              </a>
              <a
                target='_blank'
                rel='noreferrer'
                href={information?.data?.youtubeURL}
              >
                <img src='./assets/youtube.png' className="w-12 h-12" alt='youtube' />
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
              src={`https://www.facebook.com/plugins/page.php?href=${information?.data?.facebookUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
              width='100%'
              height='400'
              className='overflow-hidden'
              allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
            />
            {/* <div
                className='overflow-hidden border-none'
                data-href='https://www.facebook.com/profile.php?id=100064669450553'
                data-tabs='timeline'
                data-height='400'
                data-width='100%'
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
    </footer >
  )
}

export default memo(Footer)
