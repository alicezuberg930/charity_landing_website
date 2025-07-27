import { motion } from 'framer-motion'
import { slideLeft, slideRight } from '../utils/animate'

const Body = () => {
  return (
    <div className='w-full px-2 md:px-0 mt-20'>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <motion.div variants={slideLeft({ x: -200, duration: 1 })} whileInView="visible" initial="invisible" className='flex-1'>
          <img src='./assets/preview/preview_1.jpg' className='w-full' alt='preview_1' />
        </motion.div>
        <motion.div variants={slideRight({ x: 200, duration: 1 })} whileInView="visible" initial="invisible" className='flex-1'>
          <h3 className='text-main-color text-2xl font-bold'>CHÁO TÌNH THƯƠNG</h3>
          <span>
            Chủ nhật tuần thứ 3 hàng tháng, nhóm ánh sáng thực hiện chương trình
            cháo tình thương, cháo được phát tại 4 bệnh viện ở TP.HCM: Nhi Đồng
            1, Bình Dân, Chợ Rẫy, 115...
          </span>
        </motion.div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <motion.div variants={slideLeft({ x: -200, duration: 1 })} whileInView="visible" initial="invisible" className='order-2 md:order-1 flex-1'>
          <h3 className='text-main-color text-2xl font-bold'>PHÁT QUÀ THƯỜNG NIÊN</h3>
          <span>
            Hàng năm Nhóm ánh sáng thực hiện những chương trình phát quà cho các
            hoàn cảnh khó khăn tại các tỉnh miền tây và miền đông nam bộ...
          </span>
        </motion.div>
        <motion.div variants={slideRight({ x: 200, duration: 1 })} whileInView="visible" initial="invisible" className='order-1 md:order-2 flex-1'>
          <img src='./assets/preview/preview_2.jpg' className='w-full' alt='preview_2' />
        </motion.div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <motion.div variants={slideLeft({ x: -200, duration: 1 })} whileInView="visible" initial="invisible" className='flex-1'>
          <img src='./assets/preview/preview_3.jpg' className='w-full' alt='preview_3' />
        </motion.div>
        <motion.div variants={slideRight({ x: 200, duration: 1 })} whileInView="visible" initial="invisible" className='flex-1'>
          <h3 className='text-main-color text-2xl font-bold'>TIẾP SỨC TRI THỨC</h3>
          <span>
            Hỗ trợ trẻ em có nguy cơ ngưng việc học và cùng hỗ trợ hoàn cảnh lẻ
            không còn khả năng lao động...
          </span>
        </motion.div>
      </div>
      <div className='border-dashed border-b w-4/5 mx-auto border-main-color'></div>
      <div className='py-5 flex justify-center flex-col md:flex-row items-center'>
        <motion.div variants={slideLeft({ x: -200, duration: 1 })} whileInView="visible" initial="invisible" className='order-2 md:order-1 flex-1'>
          <h3 className='text-main-color text-2xl font-bold'>HỖ TRỢ HOÀN CẢNH</h3>
          <span>
            Hỗ trợ trẻ em có nguy cơ ngưng việc học và cùng hỗ trợ hoàn cảnh lẻ
            không còn khả năng lao động...
          </span>
        </motion.div>
        <motion.div variants={slideRight({ x: 200, duration: 1 })} whileInView="visible" initial="invisible" className='order-1 md:order-2 flex-1'>
          <img src='./assets/preview/preview_4.jpg' className='w-full' alt='preview_4' />
        </motion.div>
      </div>
    </div>
  )
}

export default Body