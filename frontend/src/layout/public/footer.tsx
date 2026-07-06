import { memo, useEffect } from "react"
import { useGetInformationHook } from "../../hooks/information.hook"
import moment from "moment"

const Footer = () => {
  const { data: information } = useGetInformationHook()

  return (
    <>
      <footer className="border-t border-gray-300 bg-gray-100 py-12 px-3 lg:px-0">
        <div className='max-w-7xl mx-auto flex gap-4 flex-col md:flex-row'>
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
                title="facebook"
                src={`https://www.facebook.com/plugins/page.php?href=${information?.data?.facebookUrl}&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`}
                className='overflow-hidden h-100 w-full'
                allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center py-4 bg-gray-600">
        <span className="font-semibold text-sm text-white">Ánh sáng từ thiện - {moment().format('MM/YYYY')}</span>
      </div>
    </>
  )
}

export default memo(Footer)