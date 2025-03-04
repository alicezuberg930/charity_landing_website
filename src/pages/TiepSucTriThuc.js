import Section from '../components/Section'
import ActivityBody from '../components/ActivityBody'

const TiepSucTriThuc = () => {
  let response = {
    category: 'tiep-suc-tri-thuc',
    data: [
      {
        banner: 'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-banner.jpg',
        images: [
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-1.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-2.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-3.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-4.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-5.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-6.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-7.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-8.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-9.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-10.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-11.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-12.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-13.jpg',
          'tiep-suc-tri-thuc-lan-03-04-ngay-12-06-2016-14.jpg'
        ],
        title: 'TIẾP SỨC TRI THỨC LẦN 03 & 04 - NGÀY 12/06/2016 TIỀN GIANG',
        description: `
        <li>Có những ước mơ giản dị, nhỏ bé tuy nhiên sẽ chẳng bao giờ trở thành hiện thực do hoàn cảnh quá khó khăn. Đó là trường hợp của hai em Hương và Hoàng,  
        cả hai đều là học sinh giỏi trường THPT Vĩnh Kim huyện Châu Thành, tỉnh Tiền Giang. Hãy cùng nhóm ánh sáng chắp cánh cho những ước mơ mộc mạc này trở thành hiện thực.</li>
        <li>Em Đỗ Thị Ngọc Hương (sn: 2000). Địa chỉ: 903/4 Tổ 21 Xã Kim Sơn, Huyện Châu Thành, Tỉnh Tiền Giang.</li>
        <li>Học sinh trường THPT Vĩnh Kim. Lớp 10A1. Học lực giỏi.</li>
        <li>Cha bị tai nạn mất 2010. Mẹ bán vé số tiền 48.000đ/ngày.</li>
        <li>Hiện tại mẹ đang bị bệnh khớp.</li>
        <li>Có người anh trai sn 1996 học cao đẳng điện tử ở Tp. MỹTho (vừa học vừa làm).</li>
        <li>Căn nhà được nhà nước hỗ trợ cho mượn 08tr để sửa lại chemưa che nắng. (1năm đóng cho nhà nước 1tr6).</li>
        <li>Chi phí học: được nhà trường giảm 100% & 50% phí phụ đạo.</li>
        <li>Ước mong của em sau này sẽ học ngành y.</li>
        <li>Em Nguyễn Minh Hoàng (sn: 1999). Địa chỉ: Ấp Bình Trung, Xã Bình Trưng, Huyện Châu Thành,Tỉnh Tiền Giang.</li> 
        <li>Học sinh trường THPT Vĩnh Kim. Lớp 11A1. Học lực giỏi.</li>
        <li>Ba mẹ ly dị từ khi bé còn nhỏ, không được trợ cấp gì từ Ba. Ba đi lấy vợ khác.</li>
        <li>Một mình mẹ (1 cánh tay phải của mẹ bị tật bẩm sinh khônglàm đồ nặng được ) mẹ tần tảo nuôi 2 đứa con (nuôi vài con heo & 1 ít vườn).</li>
        <li>Căn nhà được nhà nước hỗ trợ cho mượn 18 000 000 đ để sửa lại chemưa che nắng.</li>
        <li>Chi phí học: được nhà trường giảm 100% & 50% phí phụ đạo.</li>
        <li>Ước mong của em sau này sẽ học kế toán.</li>`,
        key: 1
      },
      {
        banner: 'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-banner.jpg',
        images: [
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-1.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-2.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-3.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-4.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-5.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-6.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-7.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-8.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-9.jpg',
          'tiep-suc-tri-thuc-2017-dot-2-13-08-2017-10.jpg'
        ],
        title: 'TIẾP SỨC TRI THỨC 2017 (ĐỢT 2 - 13.08.2017)',
        description: `Ngày 23.07.2017 Nhóm Ánh Sáng đã đến trao tặng cho em bộ máy vi tính mới 100%. Bao gồm: 1 laptop ASUS cũ, 
        2 CPU Chip Dure core 2.8ghz cũ, 3 USB 3G Mobi và 3 sim 3G viettel, 5 mainboard cũ, 10 RAM cũ và 4 màn hình cũ`,
        key: 2
      },
      {
        banner: 'tiep-suc-tri-thuc-2017-dot-1-ngay-23-7-2017-banner.jpg',
        images: [
          'tiep-suc-tri-thuc-2017-dot-1-ngay-23-7-2017-1.jpg',
          'tiep-suc-tri-thuc-2017-dot-1-ngay-23-7-2017-2.jpg',
          'tiep-suc-tri-thuc-2017-dot-1-ngay-23-7-2017-3.jpg'
        ],
        title: 'TIẾP SỨC TRI THỨC 2017 (ĐỢT 1) NGÀY 23/7/2017',
        description: `Ngày 23.07.2017 Nhóm Ánh Sáng đã đến trao tặng cho em bộ máy vi tính mới 100%. Bao gồm: màn hình 
        Compaq HP 19.5inch (IPS), CPU: Chip Dure core 2.8ghz, Ram 4G, HDD 80G, USB 3G Mobi, 1 sim 3G viettel`,
        key: 1
      }
    ]
  }
  let numberOfCardsPerRow = []
  for (let i = 0; i < response.data.length / 2; i++) {
    numberOfCardsPerRow.push('unique_' + i)
  }
  return (
    <>
      <Section title={'HOẠT ĐỘNG TIẾP SỨC TRI THỨC'} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
    </>
  )
}

export default TiepSucTriThuc
