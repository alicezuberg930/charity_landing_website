import Section from '../components/Section'
import ActivityBody from '../components/ActivityBody'

const HoTroHoanCanh = () => {
  let response = {
    category: 'ho-tro-hoan-canh',
    data: [
      {
        banner: 'vu-lan-trang-2017-27-600x450.jpg',
        images: [
          'vu-lan-trang-2017-1.jpg',
          'vu-lan-trang-2017-2.jpg',
          'vu-lan-trang-2017-3.jpg',
          'vu-lan-trang-2017-4.jpg',
          'vu-lan-trang-2017-5.jpg',
          'vu-lan-trang-2017-6.jpg',
          'vu-lan-trang-2017-7.jpg',
          'vu-lan-trang-2017-8.jpg',
          'vu-lan-trang-2017-9.jpg',
          'vu-lan-trang-2017-10.jpg',
          'vu-lan-trang-2017-11.jpg',
          'vu-lan-trang-2017-12.jpg',
          'vu-lan-trang-2017-13.jpg',
          'vu-lan-trang-2017-14.jpg',
          'vu-lan-trang-2017-15.jpg',
          'vu-lan-trang-2017-16.jpg',
          'vu-lan-trang-2017-17.jpg',
          'vu-lan-trang-2017-18.jpg'
        ],
        title: 'VU LAN TRẮNG 2017',
        description: `<ul>
        <li>Đợt 1 (ngày 10.09.2017): 13 phần quà phát ở Huyện Mỏ Cày Bắc, Tỉnh Bến Tre.</li>
        <li>Đợt 2 (ngày 17.09.2017): 05 phần quà + 01CPU (100% new) ở Huyện Chợ Gạo, Tỉnh 
        Tiền Giang &amp; 03 phần quà ở Tp.HCM.</li>
        <li><strong>Nhóm Ánh Sáng</strong> xin chân thành cảm ơn các mạnh 
        thường quân gần xa đã cùng chung tay ủng hộ góp sức với nhóm. Kính chúc sức khoẻ &amp; may mắn đến 
        với mọi người. Tiền còn dư sẽ được chuyển sang chương trình Vui Mùa Trung Thu 2017 (ngày 30.09.2017).</li></ul>`,
        key: 1
      },
      {
        banner: 'vu-lan-trang-2016-23-768x432.jpg',
        images: [
          'vu-lan-trang-2016-1.jpg',
          'vu-lan-trang-2016-2.jpg',
          'vu-lan-trang-2016-3.jpg',
          'vu-lan-trang-2016-4.jpg',
          'vu-lan-trang-2016-5.jpg',
          'vu-lan-trang-2016-6.jpg',
          'vu-lan-trang-2016-7.jpg',
          'vu-lan-trang-2016-8.jpg',
          'vu-lan-trang-2016-9.jpg',
          'vu-lan-trang-2016-10.jpg',
          'vu-lan-trang-2016-11.jpg',
          'vu-lan-trang-2016-12.jpg',
          'vu-lan-trang-2016-13.jpg'
        ],
        title: 'HỖ TRỢ HOÀN CẢNH KHÓ KHĂN - CẢM THƯƠNG',
        description: `<ul>
        <li>Đợt 1 (ngày 17.07.2016): 04 Hoàn Cảnh tại Cần Giuộc, Long An.</li>
        <li>Đợt 2 (ngày 24.07.2016): 02 Hoàn cảnh tại Xã Mỹ Hòa, Huyện Tháp Mười, Đồng Tháp 
        (có 1 hoàn cảnh bệnh phải nhập viện nên đã gửi chuyển phát hộ).</li>
        <li>Đợt 3 (ngày 31.07.2016): 10 hoàn cảnh tại Huyện Châu Thành, Tỉnh Tiền Giang 
        (có 1 số hoàn cảnh không lấy được hình tư liệu do vắng vào bệnh viện).</li>
        <li>Đợt 4 (ngày 07.08.2016): 10 hoàn cảnh tại Mỹ Thành &amp; Giồng Trôm, 
        Tỉnh Bến Tre.</li></ul>`,
        key: 2
      },
      {
        banner: 'cam-thuong-banner.jpg',
        images: [
          'cam-thuong-1.jpg',
          'cam-thuong-2.jpg',
          'cam-thuong-3.jpg',
          'cam-thuong-4.jpg',
          'cam-thuong-5.jpg',
          'cam-thuong-6.jpg',
          'cam-thuong-7.jpg',
          'cam-thuong-8.jpg',
          'cam-thuong-9.jpg',
          'cam-thuong-10.jpg'
        ],
        title: 'HỖ TRỢ HOÀN CẢNH KHÓ KHĂN - CẢM THƯƠNG',
        description: `<ul>
        <li>CẢM THƯƠNG! Cuộc sống có mấy ai biết trước được lòng người, hôm nay thương thương nhớ nhớ, ngày mai sẽ còn 
        không? Khi thời khỏe mạnh vẫn là vợ chồng nhưng đến khi bệnh tật thì mới hay người đó thương mình không?
        Hoàn cảnh của Chị Hoàng Thị Thời (sinh năm 1983).</li>
        <li>Quê quán Quảng Bình, khi xưa chị làm công nhân may trong Công ty Pouyuen Bình Tân, TP.HCM. 
        Tưởng chừng cuộc sống bé nhỏ của Chị sẽ bình yên. Nhưng khắc nghiệp lại ùa đến với Chị. Cơn bệnh Viêm Màn Não ập 
        đến với bản thân Chị, tưởng chừng như đã chết khi mang về quê. Với ý chí và nghị lực Chị đã vượt qua căn bệnh nhưng 
        di chứng để lại là không thể đi lại được và giọng nói không thể phát âm rõ nữa. Từ khi Chị bị như vậy Chồng đã lặng 
        lẽ bỏ ra đi cùng với đưa con nhỏ 4 tuổi không một lời tạ từ.</li>
        <li>Sống ở quê, thân xác bị khiếm khuyết nhưng trái tim của Chị không hề lùi bước. Một lần nữa Chị đã lên Tp.HCM để 
        kiếm thêm thu nhập tự nuôi sống bản thân mình. Hiện nay công việc mưu sinh chính của Chị là đi bán vé số buổi sáng, 
        thu nhập khoảng 100 đến 120.000đ/ ngày. Buổi chiều chị kiếm thêm bằng việc bán khẩu trang y tế (gần Nhà Hàng Thủy Tạ Đầm Sen).</li>
        <li>Phương tiện hiện nay của Chị vận chuyển là một chiếc xe lăn tay. Do phải di chuyển nhiều nơi trong ngày nên đôi lúc đôi 
        cánh tay Chị cũng rất mỏi mệt, Chị đang ao ước có một chiếc xe điện để giúp chị di chuyển cho dễ dàng. Hiện tại nhóm Ánh 
        Sáng đã đến và khảo sát giá của một chiếc xe điện cũ là 3 triệu. Hiện tại Chị có tích lũy được một triệu, như vậy sẽ còn thiếu 2 
        triệu. Nhóm Ánh Sáng xin các mạnh thường quân và các bạn cùng chung tay cùng nhóm Ánh Sáng biến giấc mơ thành hiện thực.</li></ul>.`,
        key: 3
      },
      {
        banner: 'vu-lan-trang-2015-banner.jpg',
        images: [
          'vu-lan-trang-2015-1.jpg',
          'vu-lan-trang-2015-2.jpg',
          'vu-lan-trang-2015-3.jpg',
          'vu-lan-trang-2015-4.jpg',
          'vu-lan-trang-2015-5.jpg',
          'vu-lan-trang-2015-6.jpg',
          'vu-lan-trang-2015-7.jpg',
          'vu-lan-trang-2015-8.jpg',
          'vu-lan-trang-2015-9.jpg',
          'vu-lan-trang-2015-10.jpg',
          'vu-lan-trang-2015-11.jpg',
          'vu-lan-trang-2015-12.jpg',
          'vu-lan-trang-2015-13.jpg',
          'vu-lan-trang-2015-14.jpg',
          'vu-lan-trang-2015-15.jpg',
          'vu-lan-trang-2015-16.jpg',
          'vu-lan-trang-2015-17.jpg',
          'vu-lan-trang-2015-18.jpg',
          'vu-lan-trang-2015-19.jpg',
          'vu-lan-trang-2015-20.jpg',
          'vu-lan-trang-2015-21.jpg',
          'vu-lan-trang-2015-22.jpg',
          'vu-lan-trang-2015-23.jpg',
          'vu-lan-trang-2015-24.jpg'
        ],
        title: 'VU LAN TRẮNG THÁNG 08.2015',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân, các tình nguyện viên & các thành viên đã cùng nhóm thực hiện sứ mệnh tháng 08.2015.
        <ul>
        <li>ĐỢT 1: ngày 09.08.2015 (Xã Hiệp Hòa, Huyện Đức Hòa, Tỉnh Long An) - 10 hoàn cảnh cụ già neo đơn khó khăn.</li>
        <li>ĐỢT 2: ngày 16.08.2015 (Quận 6, Quận 8, Tp.HCM) - 04 hoàn cảnh cụ già neo đơn khó khăn (có 1 hoàn cảnh đang nằm viện nên không ghi hình được).</li>
        <li>ĐỢT 3: TX.Bình Long, Tỉnh Bình Phước (06 hoàn cảnh cụ già neo đơn).</li>
        <li>ĐỢT 4: ngày 02.09.2015 (Xã Tăng Hòa, Huyện Gò Công Đông, Tỉnh Tiền Giang) - 03 hoàn cảnh cụ già neo đơn khó khăn.</li>
        <li>ĐỢT 5: ngày 06.09.2015 (Phường 7, Quận 8, TP.HCM).</li>
        </ul>`,
        key: 4
      },
      {
        banner: 'ho-tro-hoan-canh-kho-khan-banner.jpg',
        images: [
          'ho-tro-hoan-canh-kho-khan-1.jpg',
          'ho-tro-hoan-canh-kho-khan-2.jpg',
          'ho-tro-hoan-canh-kho-khan-3.jpg',
          'ho-tro-hoan-canh-kho-khan-4.jpg',
          'ho-tro-hoan-canh-kho-khan-5.jpg',
          'ho-tro-hoan-canh-kho-khan-6.jpg',
          'ho-tro-hoan-canh-kho-khan-7.jpg',
          'ho-tro-hoan-canh-kho-khan-8.jpg',
          'ho-tro-hoan-canh-kho-khan-9.jpg',
          'ho-tro-hoan-canh-kho-khan-10.jpg'
        ],
        title: 'HỖ TRỢ HOÀN CẢNH - LÁ VÀNG',
        description: `<ul>
        <li>Cuộc đời như là đóa hoa vô thường, sớm nở tối tàn. Đâu ai biết được ngày mai sẽ ra sao? Hôm nay ta khỏe mạnh ngày mai ta mang như thế nào? 
        Có con nhưng ta có nhờ vả được con mình không? Hoàn cảnh gia đình chú Nguyễn Văn Thành (sn: 1953) hiện cư ngụ tại số 141/10 Hoài Thanh Phường 14 Quận 08 Tp.HCM. 
        Có con nhưng không nhờ vả được con cái. Ông bà ta thường nói, nuôi con đừng mong có ngày con trả hiếu.</li>
        <li>Chú Thành đã ở độ tuổi già sức yếu với con mắt bị kéo mây không nhìn rõ đã qua phẫu thuật. Với công việc bảo vệ cho một Công Ty nhỏ, bây giờ chú Thành cũng 
        phải đành bỏ việc để ở nhà chăm sóc cho vợ đang bị bệnh tai biến là Cô Đoàn Thị Màu (sinh năm: 1956) bị té gãy xương hông &amp; bệnh tai biến không thể đi tới 
        lui được nữa. Khi xưa còn khỏe mạnh Cô bán vé số kiếm sống qua ngày. Bây giờ lâm bệnh chỉ còn biết ngồi một chổ, hàng xóm ai cho gì ăn đó.
        Nhóm Ánh Sáng hi vọng các mạnh thường quân càng sẻ chia một chút ấm áp tình thương đến với Chú Thành &amp; Cô Màu.</li></ul>`,
        key: 5
      }
    ]
  }
  let numberOfCardsPerRow = []
  for (let i = 0; i < response.data.length / 2; i++) {
    numberOfCardsPerRow.push('unique_' + i)
  }
  return (
    <>
      <Section title={'HOẠT ĐỘNG HỖ TRỢ HOÀN CẢNH'} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
    </>
  )
}

export default HoTroHoanCanh
