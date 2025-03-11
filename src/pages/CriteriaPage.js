import Section from '../components/Section'
import { importAll } from '../utils/import_img'
const images = importAll(
  require.context('../assets/other', false, /\.(png|jpe?g|svg)$/)
)

const CriteriaPage = () => {
  return (
    <>
      <Section title={'TIÊU CHÍ NHÓM'} />
      <div className='space-y-12 mb-6'>
        <div className='shadow-md rounded-lg overflow-hidden'>
          <img
            className='w-full aspect-video max-h-[75vh] object-cover'
            src={images['tiep-suc-tri-thuc.jpg']}
            alt='chuong-trinh-thuong-nien'
          />
          <div className='p-3'>
            <span className='font-bold text-lg text-main-color'>
              CHÁO TÌNH THƯƠNG
            </span>
            <p className=''>
              <ul>
                <li>Hàng tháng vào chủ nhật của tuần thứ 3</li>
                <li>Nấu cháo thịt bằm phát tại các bệnh viện ở TP.HCM</li>
                <li>Chi phí vận động mạnh thường quân</li>
              </ul>
            </p>
          </div>
        </div>
        <div className='shadow-md rounded-lg overflow-hidden'>
          <img
            className='w-full aspect-video max-h-[75vh] object-cover'
            src={images['tiep-suc-tri-thuc.jpg']}
            alt='chuong-trinh-thuong-nien'
          />
          <div className='p-3'>
            <span className='font-bold text-lg text-main-color'>
              CHƯƠNG TRÌNH THƯỜNG NIÊN
            </span>
            <p className=''>
              <ul>
                <li>
                  <strong className='text-main-color'>
                    Tên các chương trình:
                  </strong> tết tình thương, mùa hè yêu thương, cùng bé đến trường, vu lan trắng, vui mùa trung thu, mùa đông ấm áp.
                </li>
                <li>
                  Các chương trình có thể được tiết giảm tùy thuộc vào nguồn
                  quỹ và tình hình hàng năm.
                </li>
                <li>
                  Chi phí từ quỹ nhóm & vận động thêm các mạnh thường quân.
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className='shadow-md rounded-lg overflow-hidden'>
          <img
            className='w-full aspect-video max-h-[75vh] object-cover'
            src={images['tiep-suc-tri-thuc.jpg']}
            alt='chuong-trinh-thuong-nien'
          />
          <div className='p-3'>
            <span className='font-bold text-lg text-main-color'>
              CÁC HOÀN CẢNH KHÓ KHĂN
            </span>
            <p className=''>
              <ul>
                <li>
                  <strong className='text-main-color'>Chỉ xét 2 đối tượng:</strong>
                  cụ già neo đơn và trẻ em có nguy cơ bỏ học. Sống tại TP.HCM
                  hoặc các tỉnh lân cận. Không xét duyệt các hoàn cảnh đang
                  nằm viện. Không được ở trọ.
                </li>
                <li>
                  <strong className='main-theme'>Cụ Già: </strong>Không con
                  cái, bệnh già, bệnh hiểm nghèo, giấy xác nhận hoàn cảnh
                  nghèo (nếu có)
                </li>
                <li>
                  <strong className='main-theme'>Trẻ Em</strong> mồ côi cha
                  hoặc mẹ, cha hoặc mẹ bị bệnh hiểm nghèo, giấy xác nhận khó
                  khăn (nhà trường hoặc địa phương xét duyệt).
                </li>
              </ul>
            </p>
          </div>
        </div>
        <div className='shadow-md rounded-lg overflow-hidden'>
          <img
            className='w-full aspect-video max-h-[75vh] object-cover'
            src={images['tiep-suc-tri-thuc.jpg']}
            alt='chuong-trinh-thuong-nien'
          />
          <div className='p-3'>
            <span className='font-bold text-lg text-main-color'>
              TIẾP SỨC TRI THỨC
            </span>
            <p className=''>
              <ul>
                <li>
                  Phải sống tại tỉnh thành nơi cư trú (không được ở trọ)
                </li>
                <li>Hiện tại phải là học sinh cấp 3</li>
                <li>Học lực phải từ tiên tiến trở lên</li>
                <li>Mồ côi cha hoặc mẹ</li>
                <li>Thuộc hoàn cảnh khó khăn của địa phương</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CriteriaPage
