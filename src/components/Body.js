const Body = () => {
  return (
    <div className='w-full px-2 md:px-0'>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <div className='flex-1'>
          <img src='./assets/preview/preview_1.jpg' className='w-full' alt='preview_1' />
        </div>
        <div className='flex-1'>
          <h3 className='text-main-color font-bold'>CHÁO TÌNH THƯƠNG</h3>
          <span>
            Chủ nhật tuần thứ 3 hàng tháng, nhóm ánh sáng thực hiện chương trình
            cháo tình thương, cháo được phát tại 4 bệnh viện ở TP.HCM: Nhi Đồng
            1, Bình Dân, Chợ Rẫy, 115...
          </span>
        </div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <div className='order-2 md:order-1 flex-1'>
          <h3 className='text-main-color font-bold'>PHÁT QUÀ THƯỜNG NIÊN</h3>
          <span>
            Hàng năm Nhóm ánh sáng thực hiện những chương trình phát quà cho các
            hoàn cảnh khó khăn tại các tỉnh miền tây và miền đông nam bộ...
          </span>
        </div>
        <div className='order-1 md:order-2 flex-1'>
          <img src='./assets/preview/preview_2.jpg' className='w-full' alt='preview_2' />
        </div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <div className='flex-1'>
          <img src='./assets/preview/preview_3.jpg' className='w-full' alt='preview_3' />
        </div>
        <div className='flex-1'>
          <h3 className='text-main-color font-bold'>TIẾP SỨC TRI THỨC</h3>
          <span>
            Hỗ trợ trẻ em có nguy cơ ngưng việc học và cùng hỗ trợ hoàn cảnh lẻ
            không còn khả năng lao động...
          </span>
        </div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <div className='order-2 md:order-1 flex-1'>
          <h3 className='text-main-color font-bold'>HỖ TRỢ HOÀN CẢNH</h3>
          <span>
            Hỗ trợ trẻ em có nguy cơ ngưng việc học và cùng hỗ trợ hoàn cảnh lẻ
            không còn khả năng lao động...
          </span>
        </div>
        <div className='order-1 md:order-2 flex-1'>
          <img src='./assets/preview/preview_4.jpg' className='w-full' alt='preview_4' />
        </div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
    </div>
  )
}

export default Body