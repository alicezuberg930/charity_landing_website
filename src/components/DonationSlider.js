import Section from './Section'
import CustomSlider from './CustomSlider'

const DonationSlider = () => {
  const settings = {
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    showDot: false,
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
  }
  const donationProducts = [
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
  return (
    <div className='my-6'>
      <Section title={'SẢN PHẨM QUYÊN GÓP CỦA NHÓM'} />
      <div className='-mx-0 lg:-mx-3'>
        <CustomSlider {...settings}>
          {
            donationProducts.map(product => {
              return (
                <div key={product.image} className='w-full px-3'>
                  <div className='bg-gray-100 rounded-md overflow-hidden'>
                    <div className='aspect-square overflow-hidden'>
                      <img src={product.image} className='w-full h-full object-cover hover:scale-110 transition-all duration-1000' alt={product.image} />
                    </div>
                    <div className='p-2'>
                      <b className='text-lg line-clamp-1'>{product.name}</b>
                      <span className='block text-sm'>{product.price}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </CustomSlider>
      </div>
    </div>
  )
}

export default DonationSlider