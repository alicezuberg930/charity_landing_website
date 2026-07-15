import { memo } from 'react'
import Section from '@/layout/public/section'
import { CustomSlider, type SliderProps } from '@/components/custom-slider'
import LazyLoadImage from '@/components/lazy-load-image/lazy-load-image'

const donationItems = [
  {
    name: 'Nước uống đóng chai - 24 chai/thùng',
    image: './assets/donation/nuoc-uong-dong-chai.jpg',
    price: '70.000 đ'
  },
  {
    name: 'Móc khoá nhựa trong dẻo',
    image: './assets/donation/moc-khoa-nhua-treo-deo.jpg',
    price: '10.000 đ'
  },
  {
    name: 'Bộ ly thuỷ tinh hộp 6 cái',
    image: './assets/donation/bo-ly-anh-sang-tu-thien-2019.jpg',
    price: '120.000 đ'
  },
  {
    name: 'Nón thời trang sọc dưa',
    image: './assets/donation/non-thoi-trang-soc-dua.jpg',
    price: '5.000 đ'
  },
  {
    name: 'Túi rút du lịch vải chịu lực tốt',
    image: './assets/donation/tui-rut-du-lich-anh-sang-tu-thien.jpg',
    price: '60.000 đ'
  },
  {
    name: 'Viết bic xanh nhựa mạ kim loại',
    image: './assets/donation/viet-bic-xanh-nhua-ma-kim-loai.jpg',
    price: '10.000 đ'
  },
]

const settings = {
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  loop: true,
  showDot: false,
  showButton: true,
  responsive: [
    {
      breakpoint: 1024,
      slidesToShow: 3
    },
    {
      breakpoint: 640,
      slidesToShow: 2
    }
  ]
} as SliderProps

const DonationSlider = () => {
  return (
    <div className='mt-20'>
      <Section title='SẢN PHẨM QUYÊN GÓP CỦA NHÓM' />
      <div className='-mx-3'>
        <CustomSlider {...settings}>
          {donationItems.map((item, index) => (
            <div className='w-full px-3' key={index}>
              <div className='bg-gray-100 rounded-md overflow-hidden'>
                <div className='aspect-square overflow-hidden'>
                  <LazyLoadImage
                    alt={item.name}
                    src={item.image}
                    className='w-full h-full object-cover hover:scale-110 transition-all duration-1000'
                    effect='blur'
                  />
                </div>
                <div className='p-2'>
                  <b className='text-lg line-clamp-1'>{item.name}</b>
                  <span className='block text-sm'>{item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </CustomSlider>
      </div>
    </div>
  )
}

export default memo(DonationSlider)