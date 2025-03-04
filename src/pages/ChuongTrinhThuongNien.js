import Header from '../components/Header'
import Section from '../components/Section'
import Footer from '../components/Footer'
import ActivityBody from '../components/ActivityBody'

function ChuongTrinhThuongNien () {
  let response = {
    category: 'chao-tinh-thuong',
    data: [
      {
        banner: 'mua-he-yeu-thuong-2018-43-768x512.jpg',
        images: [
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-1.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-2.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-3.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-4.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-5.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-6.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-7.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-8.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-9.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-10.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-11.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-12.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-13.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-14.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-15.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-16.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-17.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-18.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-19.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-20.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-21.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-22.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-23.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-24.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-25.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-26.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-27.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-28.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-29.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-30.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-31.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-32.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-33.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-34.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-35.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-36.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-37.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-38.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-39.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-40.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-41.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-42.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-43.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-44.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-45.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-46.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-47.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-48.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-49.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-50.jpg',
          'mua-he-yeu-thuong-2018-tinh-ninh-thuan-51.jpg'
        ],
        title: 'Mùa Hè Yêu Thương 2018 Tỉnh Ninh Thuận',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để 
        mang đến gần 200 phần quà cho các em có hoàn cảnh khó khăn tại Trường Tiểu Học Phước Tiến B, Thôn Suối Ruau, Xã Phước Tiến, 
        Huyện Bắc Ái, Tỉnh Ninh Thuận. Kính chúc sức khỏe và may mắn sẽ đến với mọi người.`,
        key: 1
      },
      {
        banner: 'mua-dong-am-ap-2017-20-600x450.jpg',
        images: [
          'mua-dong-am-ap-2017-1.jpg',
          'mua-dong-am-ap-2017-2.jpg',
          'mua-dong-am-ap-2017-3.jpg',
          'mua-dong-am-ap-2017-4.jpg',
          'mua-dong-am-ap-2017-5.jpg',
          'mua-dong-am-ap-2017-6.jpg',
          'mua-dong-am-ap-2017-7.jpg',
          'mua-dong-am-ap-2017-8.jpg',
          'mua-dong-am-ap-2017-9.jpg',
          'mua-dong-am-ap-2017-10.jpg',
          'mua-dong-am-ap-2017-11.jpg',
          'mua-dong-am-ap-2017-12.jpg',
          'mua-dong-am-ap-2017-13.jpg',
          'mua-dong-am-ap-2017-14.jpg',
          'mua-dong-am-ap-2017-15.jpg',
          'mua-dong-am-ap-2017-16.jpg',
          'mua-dong-am-ap-2017-17.jpg',
          'mua-dong-am-ap-2017-18.jpg',
          'mua-dong-am-ap-2017-19.jpg'
        ],
        title: 'MÙA ĐÔNG ẤM ÁP 2017 (Ngày 02.12.2017)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân, các bạn bè gần xa đã cùng chung tay thực hiện chương trình MÙA ĐÔNG ẤM 
        ÁP 2017 (đêm ngày 02.12.2017). Trao tặng 70 phần quà (mền, dầu gió, mì gói, bánh mì…) cho người vô gia cư, lao động về khuya. * Lưu ý: 
        mền & sữa còn dư sẽ chuyển sang chương trình Cánh Én Mùa Xuân (27.01.2018 tại U Minh, Cà Mau).`,
        key: 2
      },
      {
        banner: 'vui-mua-trung-thu-2017-24-768x512.jpg',
        images: [
          'vui-mua-trung-thu-2017-0.jpg',
          'vui-mua-trung-thu-2017-1.jpg',
          'vui-mua-trung-thu-2017-2.jpg',
          'vui-mua-trung-thu-2017-3.jpg',
          'vui-mua-trung-thu-2017-4.jpg',
          'vui-mua-trung-thu-2017-5.jpg',
          'vui-mua-trung-thu-2017-6.jpg',
          'vui-mua-trung-thu-2017-7.jpg',
          'vui-mua-trung-thu-2017-8.jpg',
          'vui-mua-trung-thu-2017-9.jpg',
          'vui-mua-trung-thu-2017-10.jpg',
          'vui-mua-trung-thu-2017-11.jpg',
          'vui-mua-trung-thu-2017-12.jpg',
          'vui-mua-trung-thu-2017-13.jpg',
          'vui-mua-trung-thu-2017-14.jpg',
          'vui-mua-trung-thu-2017-15.jpg'
        ],
        title: 'VUI MÙA TRUNG THU 30.09.2017 (TIỀN GIANG)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để trao tặng 303 phần quà (trong 
        đó có 70 phần đặc biệt dành cho các bé khó khăn) tại trường tiểu học Phước Trung 2, Ấp Tân Xuân, Xã Phước Trung, Huyện Gò Công Đông, Tỉnh Tiền Giang.
        Kính chúc sức khoẻ đến với mọi người!`,
        key: 3
      },
      {
        banner: 'canh-en-mua-xuan-23-768x512.jpg',
        images: [
          'canh-en-mua-xuan-0.jpg',
          'canh-en-mua-xuan-1.jpg',
          'canh-en-mua-xuan-2.jpg',
          'canh-en-mua-xuan-3.jpg',
          'canh-en-mua-xuan-4.jpg',
          'canh-en-mua-xuan-5.jpg',
          'canh-en-mua-xuan-6.jpg',
          'canh-en-mua-xuan-7.jpg',
          'canh-en-mua-xuan-8.jpg',
          'canh-en-mua-xuan-9.jpg',
          'canh-en-mua-xuan-10.jpg',
          'canh-en-mua-xuan-11.jpg',
          'canh-en-mua-xuan-12.jpg',
          'canh-en-mua-xuan-13.jpg',
          'canh-en-mua-xuan-14.jpg',
          'canh-en-mua-xuan-15.jpg',
          'canh-en-mua-xuan-16.jpg'
        ],
        title: 'CÁNH ÉN MÙA XUÂN 2017 - ĐỒNG THÁP (08.01.2017)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để trao tặng 124 phần quà cho trẻ em và
        40 phần quà dành cho hộ gia đình có hoàn cảnh khó khăn tại trường THCS Thạnh Lợi, Ấp 1, Xã Thạnh Lợi, Huyện Tháp 10, Tỉnh Đồng Tháp. Kính chúc sức khoẻ đến với mọi người`,
        key: 4
      },
      {
        banner: 'mua-he-yeu-thuong-2017-17-768x512.jpg',
        images: [
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-1.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-2.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-3.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-4.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-5.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-6.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-7.jpg',
          'mua-he-yeu-thuong-2017-ngay-29-04-2017-8.jpg'
        ],
        title: 'MÙA HÈ YÊU THƯƠNG 2017 (Ngày 29.04.2017)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa rất nhiều đã cùng góp sức với nhóm 
        thực hiện trao tặng 300 phần quà cho học sinh vùng cao tại trường TH & THCS Bùi Thị Xuân (Xã Easin, Huyện Krông 
        Búk, Tỉnh Dăk Lăk). Kính chúc mọi người sức khoẻ & may mắn.`,
        key: 5
      },
      {
        banner: 'cung-be-den-truong-2017-35-768x543.jpg',
        images: [
          'cung-be-den-truong-2017-ngay-27-08-2017-1.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-2.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-3.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-4.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-5.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-6.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-7.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-8.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-9.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-10.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-11.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-12.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-13.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-14.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-15.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-16.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-17.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-18.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-19.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-20.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-21.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-22.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-23.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-24.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-25.jpg',
          'cung-be-den-truong-2017-ngay-27-08-2017-26.jpg'
        ],
        title: 'CÙNG BÉ ĐẾN TRƯỜNG 2017 (ngày 27.08.2017)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa đã cùng chung tay góp sức với nhóm để trao tặng 80 phần quà 
        cho các bé nhân dịp khai giảng tại trường Phước Hội, Xã Phước Chỉ, Huyện Trảng Bàng, Tỉnh Tây Ninh. Kính chúc sức khoẻ đến với mọi người!`,
        key: 5
      },
      {
        banner: 'tet-trung-thu-2016-32-768x512.jpg',
        images: [
          'vui-mua-trung-thu-10-09-2016-tra-vinh-1.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-2.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-3.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-4.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-5.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-6.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-7.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-8.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-9.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-10.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-11.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-12.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-13.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-14.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-15.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-16.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-17.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-18.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-19.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-20.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-21.jpg',
          'vui-mua-trung-thu-10-09-2016-tra-vinh-22.jpg'
        ],
        title: 'VUI MÙA TRUNG THU 10.09.2016 (TRÀ VINH)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn thành viên & tình nguyện 
        viên đã cùng chung tay góp sức để thực hiện chương trình VUI MÙA TRUNG THU 2016 tại trường Hiếu Tử B, Tiểu Cần, 
        Tỉnh Trà Vinh. Phát 150 phần quà cho các bé. Kính chúc mọi người, mọi nhà có một mùa Trung Thu thật hạnh phúc & ấm áp.`,
        key: 6
      },
      {
        banner: 'mua-dong-am-ap-2016-40.jpg',
        images: [
          'mua-dong-am-ap-2016-1.jpg',
          'mua-dong-am-ap-2016-2.jpg',
          'mua-dong-am-ap-2016-3.jpg',
          'mua-dong-am-ap-2016-4.jpg',
          'mua-dong-am-ap-2016-5.jpg',
          'mua-dong-am-ap-2016-6.jpg',
          'mua-dong-am-ap-2016-7.jpg',
          'mua-dong-am-ap-2016-8.jpg',
          'mua-dong-am-ap-2016-9.jpg',
          'mua-dong-am-ap-2016-10.jpg',
          'mua-dong-am-ap-2016-11.jpg',
          'mua-dong-am-ap-2016-12.jpg',
          'mua-dong-am-ap-2016-13.jpg',
          'mua-dong-am-ap-2016-14.jpg',
          'mua-dong-am-ap-2016-15.jpg',
          'mua-dong-am-ap-2016-16.jpg',
          'mua-dong-am-ap-2016-17.jpg',
          'mua-dong-am-ap-2016-18.jpg',
          'mua-dong-am-ap-2016-19.jpg',
          'mua-dong-am-ap-2016-20.jpg',
          'mua-dong-am-ap-2016-21.jpg',
          'mua-dong-am-ap-2016-22.jpg',
          'mua-dong-am-ap-2016-23.jpg',
          'mua-dong-am-ap-2016-24.jpg',
          'mua-dong-am-ap-2016-25.jpg',
          'mua-dong-am-ap-2016-26.jpg',
          'mua-dong-am-ap-2016-27.jpg',
          'mua-dong-am-ap-2016-28.jpg',
          'mua-dong-am-ap-2016-29.jpg',
          'mua-dong-am-ap-2016-30.jpg',
          'mua-dong-am-ap-2016-31.jpg',
          'mua-dong-am-ap-2016-32.jpg',
          'mua-dong-am-ap-2016-33.jpg'
        ],
        title: 'MÙA ĐÔNG ẤM ÁP 2016 (NGÀY 10.12.2016)',
        description: `Hi vọng những món quà nhỏ của Nhóm Ánh Sáng sẽ một phần nào đó sưởi ấm cái lạnh của tiết trời này đến những mãnh đời khó khăn. 
        Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn tình nguyện viên & thành viên của nhóm đã cùng chung tay góp sức 
        thực hiện chương trình Mùa Đông Ấm Áp 2016 (ngày 10.12.2016)`,
        key: 7
      },
      {
        banner: 'mua-he-yeu-thuong-2016-banner.jpg',
        images: [
          'mua-he-yeu-thuong-nam-2016-1.jpg',
          'mua-he-yeu-thuong-nam-2016-2.jpg',
          'mua-he-yeu-thuong-nam-2016-3.jpg',
          'mua-he-yeu-thuong-nam-2016-4.jpg',
          'mua-he-yeu-thuong-nam-2016-5.jpg',
          'mua-he-yeu-thuong-nam-2016-6.jpg',
          'mua-he-yeu-thuong-nam-2016-7.jpg',
          'mua-he-yeu-thuong-nam-2016-8.jpg',
          'mua-he-yeu-thuong-nam-2016-9.jpg',
          'mua-he-yeu-thuong-nam-2016-10.jpg',
          'mua-he-yeu-thuong-nam-2016-11.jpg',
          'mua-he-yeu-thuong-nam-2016-12.jpg',
          'mua-he-yeu-thuong-nam-2016-13.jpg'
        ],
        title: 'MÙA HÈ YÊU THƯƠNG NĂM 2016',
        description: `Mùa Hè Yêu Thương 30.04.2016- Xã Đan Phượng, Lâm Hà, Lâm Đồng
        Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn bè & thành viên đã cùng chung tay 
        góp sức với nhóm để thực hiện mang 200 phần quà đến tay các hộ dân & các em khó khăn. Kính chúc sức khoẻ & hạnh phúc.`,
        key: 8
      },
      {
        banner: 'cung-be-den-truong-2016-banner.jpg',
        images: [
          'cung-be-den-truong-2016-1.jpg',
          'cung-be-den-truong-2016-2.jpg',
          'cung-be-den-truong-2016-3.jpg',
          'cung-be-den-truong-2016-4.jpg',
          'cung-be-den-truong-2016-5.jpg',
          'cung-be-den-truong-2016-6.jpg',
          'cung-be-den-truong-2016-7.jpg',
          'cung-be-den-truong-2016-8.jpg',
          'cung-be-den-truong-2016-9.jpg',
          'cung-be-den-truong-2016-10.jpg',
          'cung-be-den-truong-2016-11.jpg',
          'cung-be-den-truong-2016-12.jpg',
          'cung-be-den-truong-2016-13.jpg',
          'cung-be-den-truong-2016-14.jpg',
          'cung-be-den-truong-2016-15.jpg',
          'cung-be-den-truong-2016-16.jpg',
          'cung-be-den-truong-2016-17.jpg',
          'cung-be-den-truong-2016-18.jpg',
          'cung-be-den-truong-2016-19.jpg',
          'cung-be-den-truong-2016-20.jpg'
        ],
        title: 'CÙNG BÉ ĐẾN TRƯỜNG 28.08.2016 (BÌNH PHƯỚC)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn, các anh chị, đã cùng chung tay góp sức cho nhóm thực 
        hiện trao 100 phần quà nhân mùa tựu trường cho các em dân tộc khó khăn ở trường tiểu học Long Hà B (Huyện Phú Riềng, Tỉnh Bình Phước). Kính 
        chúc sức khoẻ & may mắn sẽ đến với mọi người.`,
        key: 9
      },
      {
        banner: 'tet-tinh-thuong-2016-banner.jpg',
        images: [
          'tet-tinh-thuong-2016-1.jpg',
          'tet-tinh-thuong-2016-2.jpg',
          'tet-tinh-thuong-2016-3.jpg',
          'tet-tinh-thuong-2016-4.jpg',
          'tet-tinh-thuong-2016-5.jpg',
          'tet-tinh-thuong-2016-6.jpg',
          'tet-tinh-thuong-2016-7.jpg',
          'tet-tinh-thuong-2016-8.jpg',
          'tet-tinh-thuong-2016-9.jpg',
          'tet-tinh-thuong-2016-10.jpg',
          'tet-tinh-thuong-2016-11.jpg',
          'tet-tinh-thuong-2016-12.jpg',
          'tet-tinh-thuong-2016-13.jpg',
          'tet-tinh-thuong-2016-14.jpg',
          'tet-tinh-thuong-2016-15.jpg',
          'tet-tinh-thuong-2016-16.jpg',
          'tet-tinh-thuong-2016-17.jpg'
        ],
        title: 'TẾT TÌNH THƯƠNG NĂM 2016',
        description: `20 phần quà đã được lần lượt trao đến tận tay các hoàn cảnh khó khăn trong dịp tết năm nay. Hình ảnh đang trong 
        quá trình cập nhật (có một vài hoàn cảnh ở xa nên không cập nhật được hình ảnh). Số lượng vật phẩm còn dư sẽ được nhóm chuyển 
        sang chương trình MÙA HÈ YÊU THƯƠNG 2016. Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân đã chung tay góp sức cùng 
        nhóm! Kính chúc sức khoẻ & may mắn trong năm mới.`,
        key: 10
      },
      {
        banner: 'canh-en-mua-xuan-2016-banner.jpg',
        images: [
          'canh-en-mua-xuan-2016-1.jpg',
          'canh-en-mua-xuan-2016-2.jpg',
          'canh-en-mua-xuan-2016-3.jpg',
          'canh-en-mua-xuan-2016-4.jpg',
          'canh-en-mua-xuan-2016-5.jpg',
          'canh-en-mua-xuan-2016-6.jpg',
          'canh-en-mua-xuan-2016-7.jpg',
          'canh-en-mua-xuan-2016-8.jpg',
          'canh-en-mua-xuan-2016-9.jpg',
          'canh-en-mua-xuan-2016-10.jpg',
          'canh-en-mua-xuan-2016-11.jpg',
          'canh-en-mua-xuan-2016-12.jpg',
          'canh-en-mua-xuan-2016-13.jpg'
        ],
        title: 'CÁNH ÉN MÙA XUÂN NĂM 2016',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các thành viên & tình nguyện viên đã chung tay 
        ủng hộ chương trình. Kính chúc sức khoẻ & hạnh phúc. *** Lưu ý: số tiền còn dư sẽ được nhóm chuyển tiếp sang chương trình Tiếp 
        Sức Tri Thức lần 3 & Cánh Én Mùa Xuân 2016.`,
        key: 11
      },
      {
        banner: 'mua-dong-am-ap-2015-banner.jpg',
        images: [
          'mua-dong-am-ap-2015-1.jpg',
          'mua-dong-am-ap-2015-2.jpg',
          'mua-dong-am-ap-2015-3.jpg',
          'mua-dong-am-ap-2015-4.jpg',
          'mua-dong-am-ap-2015-5.jpg',
          'mua-dong-am-ap-2015-6.jpg',
          'mua-dong-am-ap-2015-7.jpg',
          'mua-dong-am-ap-2015-8.jpg',
          'mua-dong-am-ap-2015-9.jpg',
          'mua-dong-am-ap-2015-10.jpg',
          'mua-dong-am-ap-2015-11.jpg',
          'mua-dong-am-ap-2015-12.jpg',
          'mua-dong-am-ap-2015-13.jpg',
          'mua-dong-am-ap-2015-14.jpg',
          'mua-dong-am-ap-2015-15.jpg',
          'mua-dong-am-ap-2015-16.jpg'
        ],
        title: 'MÙA ĐÔNG ẤM ÁP 2015 (NGÀY 05.12.2015)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các thành viên & tình nguyện viên đã chung tay 
        ủng hộ chương trình. Kính chúc sức khoẻ & hạnh phúc. *** Lưu ý: số tiền còn dư sẽ được nhóm chuyển tiếp sang chương trình 
        Tiếp Sức Tri Thức lần 3 & Cánh Én Mùa Xuân 2016.`,
        key: 12
      },
      {
        banner: 'vui-mua-trung-thu-26.09.2015-banner.jpg',
        images: [
          'vui-mua-trung-thu-26.09.2015-1.jpg',
          'vui-mua-trung-thu-26.09.2015-2.jpg',
          'vui-mua-trung-thu-26.09.2015-3.jpg',
          'vui-mua-trung-thu-26.09.2015-4.jpg',
          'vui-mua-trung-thu-26.09.2015-5.jpg',
          'vui-mua-trung-thu-26.09.2015-6.jpg',
          'vui-mua-trung-thu-26.09.2015-7.jpg',
          'vui-mua-trung-thu-26.09.2015-8.jpg',
          'vui-mua-trung-thu-26.09.2015-9.jpg',
          'vui-mua-trung-thu-26.09.2015-10.jpg'
        ],
        title: 'VUI MÙA TRUNG THU 26.09.2015',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn thành viên & tình nguyện viên rất nhiều vì đã góp 
        sức cùng nhóm mang không khí Trung Thu đến các em tại Trường Tiểu HỌc Hiếu Trung A (điểm Phú Thọ 1) Ấp Phú Thọ 1, Xã Hiếu Trung, Huyện 
        Tiểu Cần, Tỉnh Trà Vinh. Xin cảm ơn mọi người rất nhiều, kính chúc sức khỏe & may mắn sẽ đến với mọi nhà!.`,
        key: 13
      },
      {
        banner: 'mua-he-yeu-thuong-2015-banner.jpg',
        images: [
          'mua-he-yeu-thuong-2015-1.jpg',
          'mua-he-yeu-thuong-2015-2.jpg',
          'mua-he-yeu-thuong-2015-3.jpg',
          'mua-he-yeu-thuong-2015-4.jpg',
          'mua-he-yeu-thuong-2015-5.jpg',
          'mua-he-yeu-thuong-2015-6.jpg',
          'mua-he-yeu-thuong-2015-7.jpg',
          'mua-he-yeu-thuong-2015-8.jpg',
          'mua-he-yeu-thuong-2015-9.jpg',
          'mua-he-yeu-thuong-2015-10.jpg',
          'mua-he-yeu-thuong-2015-11.jpg',
          'mua-he-yeu-thuong-2015-12.jpg',
          'mua-he-yeu-thuong-2015-13.jpg',
          'mua-he-yeu-thuong-2015-14.jpg',
          'mua-he-yeu-thuong-2015-15.jpg',
          'mua-he-yeu-thuong-2015-16.jpg',
          'mua-he-yeu-thuong-2015-17.jpg'
        ],
        title: 'MÙA HÈ YÊU THƯƠNG 2015',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các tình nguyện viên & thành viên đã chung tay cùng nhóm mang cái ấm áp của 
        tình thương mang lên vùng cao Quảng Khê Đắk Nông. Ngày 28.04.2015 (Tổng kinh phí trao tặng > 40 triệu) gồm 150 phần cho hộ dân & 100 phần cho trẻ em.`,
        key: 14
      },
      {
        banner: 'chung-be-den-truong-2015-banner.jpg',
        images: [
          'chung-be-den-truong-2015-1.jpg',
          'chung-be-den-truong-2015-2.jpg',
          'chung-be-den-truong-2015-3.jpg',
          'chung-be-den-truong-2015-4.jpg',
          'chung-be-den-truong-2015-5.jpg',
          'chung-be-den-truong-2015-6.jpg',
          'chung-be-den-truong-2015-7.jpg',
          'chung-be-den-truong-2015-8.jpg',
          'chung-be-den-truong-2015-8.jpg',
          'chung-be-den-truong-2015-9.jpg',
          'chung-be-den-truong-2015-10.jpg',
          'chung-be-den-truong-2015-11.jpg',
          'chung-be-den-truong-2015-12.jpg',
          'chung-be-den-truong-2015-13.jpg'
        ],
        title: 'CÙNG BÉ ĐẾN TRƯỜNG 23.08.2015',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân, các nhà hảo tâm gần xa cùng các tình nguyện viên & thành viên đã chung tay góp sức 
        cùng nhóm Ánh Sáng trong cuộc hành trình năm 2015. Kính chúc sức khỏe & may mắn đến với mọi người. Trong quá trình thực hiện chương trình nhóm còn thiếu sót, 
        xin rút kinh nghiệm để lần sau sẽ hoàn thành tốt hơn.
        Ngày 23.08.2015, địa điểm Trường Nguyễn Văn Dinh (điểm Tà Kép) Xã Bình Phong Thạnh, huyện Mộc Hóa, Tỉnh Long An ( phát 150 phần quà cho học sinh nghèo hiếu học ).`,
        key: 15
      },
      {
        banner: 'canh-en-mua-xuan-2015-ngay-24-01-2015-banner.jpg',
        images: [
          'canh-en-mua-xuan-2015-ngay-24-01-2015-1.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-2.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-3.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-4.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-5.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-6.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-7.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-8.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-9.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-10.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-11.jpg',
          'canh-en-mua-xuan-2015-ngay-24-01-2015-12.jpg'
        ],
        title: 'CÁNH ÉN MÙA XUÂN 2015 (ngày 24.01.2015)',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân, bạn bè đã làm hậu phương vững chắc cho nhóm. Và xin cảm ơn các thành viên & tình nguyện viên 
        nhóm Ánh Sáng rất nhiều đã giúp nhóm Ánh Sáng mang đến chương trình phát 200 phần quà từ thiện dịp cuối năm cho bà con ở Xã An Thạnh Trung, Huyện Chợ Mới, An Giang.`,
        key: 16
      },
      {
        banner: 'tet-tinh-thuong-dot-2-ngay-10.02-banner.jpg',
        images: ['tet-tinh-thuong-dot-2-ngay-10.02-banner.jpg'],
        title: 'TẾT TÌNH THƯƠNG (ĐỢT 2) NGÀY 10.02.2015',
        description: `Song song các hoàn cảnh nhóm Ánh Sáng gửi tặng đã có chụp hình ảnh lại. Có 4 trường hợp ở xa (Cà Mau, Bạc Liêu, Quãng Nam). Nhóm đã nhờ người gửi hộ quà tặng nên không thể chụp hình lại.`,
        key: 17
      },
      {
        banner: 'canh-en-mua-xuan-2018-banner.jpg',
        images: [
          'canh-en-mua-xuan-2018-1.jpg',
          'canh-en-mua-xuan-2018-2.jpg',
          'canh-en-mua-xuan-2018-3.jpg',
          'canh-en-mua-xuan-2018-4.jpg',
          'canh-en-mua-xuan-2018-5.jpg',
          'canh-en-mua-xuan-2018-6.jpg',
          'canh-en-mua-xuan-2018-7.jpg',
          'canh-en-mua-xuan-2018-8.jpg',
          'canh-en-mua-xuan-2018-9.jpg',
          'canh-en-mua-xuan-2018-10.jpg',
          'canh-en-mua-xuan-2018-11.jpg',
          'canh-en-mua-xuan-2018-12.jpg',
          'canh-en-mua-xuan-2018-13.jpg',
          'canh-en-mua-xuan-2018-14.jpg',
          'canh-en-mua-xuan-2018-15.jpg',
          'canh-en-mua-xuan-2018-16.jpg',
          'canh-en-mua-xuan-2018-17.jpg',
          'canh-en-mua-xuan-2018-18.jpg',
          'canh-en-mua-xuan-2018-19.jpg',
          'canh-en-mua-xuan-2018-20.jpg',
          'canh-en-mua-xuan-2018-21.jpg',
          'canh-en-mua-xuan-2018-22.jpg',
          'canh-en-mua-xuan-2018-23.jpg',
          'canh-en-mua-xuan-2018-24.jpg',
          'canh-en-mua-xuan-2018-25.jpg',
          'canh-en-mua-xuan-2018-26.jpg',
          'canh-en-mua-xuan-2018-27.jpg',
          'canh-en-mua-xuan-2018-28.jpg',
          'canh-en-mua-xuan-2018-29.jpg',
          'canh-en-mua-xuan-2018-30.jpg',
          'canh-en-mua-xuan-2018-31.jpg',
          'canh-en-mua-xuan-2018-32.jpg',
          'canh-en-mua-xuan-2018-33.jpg',
          'canh-en-mua-xuan-2018-34.jpg',
          'canh-en-mua-xuan-2018-35.jpg',
          'canh-en-mua-xuan-2018-36.jpg',
          'canh-en-mua-xuan-2018-37.jpg',
          'canh-en-mua-xuan-2018-38.jpg',
          'canh-en-mua-xuan-2018-39.jpg',
          'canh-en-mua-xuan-2018-40.jpg',
          'canh-en-mua-xuan-2018-41.jpg',
          'canh-en-mua-xuan-2018-42.jpg',
          'canh-en-mua-xuan-2018-43.jpg',
          'canh-en-mua-xuan-2018-44.jpg',
          'canh-en-mua-xuan-2018-45.jpg'
        ],
        title: 'CÁNH ÉN MÙA XUÂN 2018',
        description: `Nhóm Ánh Sáng xin chân thành cảm ơn các mạnh thường quân gần xa, các bạn, các anh chị, đã cùng chung tay góp sức cho nhóm thực 
        hiện trao 146 phần quà cho các em nhỏ dân tộc khó khăn và 50 phần quà người lớn ở trường tiểu học Đỗ Thừa Luôn (Ấp 1, Xã Khánh Thuận, Huyện U Minh, Tỉnh Cà Mau). 
        Kính chúc sức khoẻ & may mắn sẽ đến với mọi người.`,
        key: 18
      }
    ]
  }
  let numberOfCardsPerRow = []
  for (let i = 0; i < response.data.length / 2; i++) {
    numberOfCardsPerRow.push('unique_' + i)
  }
  return (
    <>
      <Header />
      <Section title={'HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN'} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
      <Footer />
    </>
  )
}

export default ChuongTrinhThuongNien
