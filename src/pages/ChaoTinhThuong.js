import Section from '../components/Section'
import ActivityBody from '../components/ActivityBody'

function ChaoTinhThuong () {
  let response = {
    category: 'chao-tinh-thuong',
    data: [
      {
        banner: 'chao-tinh-thuong-1.jpg',
        images: [
          'nhom-anh-sang-tu-thien-30-1.jpg',
          'nhom-anh-sang-tu-thien-29-1.jpg',
          'nhom-anh-sang-tu-thien-28-1.jpg',
          'nhom-anh-sang-tu-thien-27-1.jpg',
          'nhom-anh-sang-tu-thien-26-1.jpg',
          'nhom-anh-sang-tu-thien-25-1.jpg',
          'nhom-anh-sang-tu-thien-24-1.jpg',
          'nhom-anh-sang-tu-thien-23-1.jpg',
          'nhom-anh-sang-tu-thien-22-1.jpg',
          'nhom-anh-sang-tu-thien-21-1.jpg',
          'nhom-anh-sang-tu-thien-20-1.jpg',
          'nhom-anh-sang-tu-thien-19-1.jpg',
          'nhom-anh-sang-tu-thien-18-1.jpg',
          'nhom-anh-sang-tu-thien-17-1.jpg',
          'nhom-anh-sang-tu-thien-16-1.jpg'
        ],
        title: 'Cháo Tình Thương 07/2018',
        description: `Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên rất nhiều. Nhóm đã thực hiện trao >600 suất cháo thịt bằm, >1000 đ gói 
          mì & >500 chai nước suối đến các bệnh nhân ở tại BV Chợ Rẫy vào ngày 22.07.2018. Chúc sức khoẻ & hạnh phúc đến với mọi người.`,
        key: 1
      },
      {
        banner: 'chao-tinh-thuong-2.jpg',
        images: [
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-53.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-52.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-51.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-50.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-49.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-48.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-47.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-46.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-45.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-44.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-43.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-42.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-41.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-40.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-39.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-38.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-37.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-36.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-35.jpg',
          'chao-tinh-thuong-nhom-anh-sang-tu-thien-thang-5-34.jpg'
        ],
        title: 'Chương trình Cháo tình thương bệnh viện 115 năm 2018',
        description: `Danh sách nhà hảo tâm chương trình cháo tình thương bệnh viện 115 Hồ Chí Minh
          <table class="table table-striped">
            <tbody>
            <tr>
            <td>1</td>
            <td>Bạn Nam (Hóc Môn, Tp.HCM)</td>
            <td>200,000 đ</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Cô Sương (Q11, Tp.HCM)</td>
            <td>08kg thịt xay</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Lee Kenny &amp; Lê Tuấn Thảo</td>
            <td>50USD</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Cô Phương (Sư Vạn Hạnh, Q3, Tp.HCM)</td>
            <td>500,000 đ</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Chị Thuý (Cty Pouyen, Tp.HCM)</td>
            <td>01kg bột ngọt &amp; 03kg đường</td>
            </tr>
            <tr>
            <td>6</td>
            <td>Gia đình Em Thanh (Phan Văn Hớn, Q12, Tp.HCM)</td>
            <td width="353">10 lít dầu ăn,<br>
            10 bịch bột ngọt &amp; 20 bịch đường</td>
            </tr>
            <tr>
            <td>7</td>
            <td>Đức Vincent (Q1, Tp.HCM)</td>
            <td>10 thùng mì</td>
            </tr>
            <tr>
            <td>8</td>
            <td>Xa Trịnh Việt Hùng (Q. Bình Thạnh, Tp.HCM)</td>
            <td>07 thùng mì</td>
            </tr>
            <tr>
            <td>9</td>
            <td>A Chiêu (Vĩnh Viễn, Quận 10, Tp.HCM)</td>
            <td>10 thùng mì</td>
            </tr>
            <tr>
            <td>10</td>
            <td>Cao Yến Nghi (Nhơn Trạch, Đồng Nai)</td>
            <td>500,000 đ</td>
            </tr>
            <tr>
            <td>11</td>
            <td>E Phương Quí (Q. Bình Tân, Tp.HCM)</td>
            <td>500,000 đ</td>
            </tr>
            <tr>
            <td>12</td>
            <td>Chị Thuỷ (Q. 12, Tp.HCM)</td>
            <td>200,000 đ</td>
            </tr>
            <tr>
            <td>13</td>
            <td>Chị Ánh (Q12, Tp.HCM)</td>
            <td>100,000 đ</td>
            </tr>
            <tr>
            <td>14</td>
            <td>Chị Nguyễn Hạnh (bạn của Khắc Tuấn)</td>
            <td>10kg gạo</td>
            </tr>
            <tr>
            <td>15</td>
            <td>Chị Phượng (Bình Chánh, Tp.HCM)</td>
            <td>2,000 đ,000 đ</td>
            </tr>
            <tr>
            <td>16</td>
            <td>Thủy Xác</td>
            <td>10kg cà rốt</td>
            </tr>
            <tr>
            <td>17</td>
            <td>Mỹ Bình (Q8, Tp.HCM)</td>
            <td width="353">05 thùng mì, 01 lốc nước tương<br>
            &amp; 1 thùng nước tương</td>
            </tr>
            <tr>
            <td>18</td>
            <td>Phương Đôi (Xã Tân Trạch, Long An)</td>
            <td>100,000 đ</td>
            </tr>
            <tr>
            <td>19</td>
            <td>Nguyễn Đức Phát (Xã Tân Trạch, Long An)</td>
            <td>50,000 đ</td>
            </tr>
            <tr>
            <td>20</td>
            <td width="342">Kho Tư Tài C3-4F (Chị Đinh, Thủy, Nhung, Lam, Mỹ, Ưới, Liễu, Nhung)</td>
            <td>450,000 đ</td>
            </tr>
            <tr>
            <td>21</td>
            <td>Ngô Hạo Nguyên</td>
            <td>200,000 đ</td>
            </tr>
            <tr>
            <td>22</td>
            <td>Võ Thị Nhang</td>
            <td>100,000 đ</td>
            </tr>
            <tr>
            <td>23</td>
            <td>Giấu tên</td>
            <td>500,000 đ</td>
            </tr>
            <tr>
            <td>24</td>
            <td>Tình (Q. Tân Phú, Tp.HCM)</td>
            <td>30 kg gạo</td>
            </tr>
            </tbody>
          </table>`,
        key: 2
      },
      {
        banner: 'chao-tinh-thuong-3.jpg',
        images: [
          'chao-tinh-thuong-21-01-2018-1.jpg',
          'chao-tinh-thuong-21-01-2018-2.jpg',
          'chao-tinh-thuong-21-01-2018-3.jpg'
        ],
        title: 'CHÁO TÌNH THƯƠNG TẠI BV BÌNH DÂN VÀO NGÀY 21.01.2018',
        description: `Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên rất nhiều. Nhóm đã thực hiện trao 500 suất cháo thịt bằm, 
          1000 gói mì & 500 chai nước suối đến các bệnh nhân ở tại BV Bình Dân vào ngày 21.01.2018. Xin chân thành cảm ơn các nhà hảo tâm, 
          các thành viên & tình nguyện viên rất nhiều.`,
        key: 3
      },
      {
        banner: 'chao-tinh-thuong-4.jpg',
        images: [
          'chao-tinh-thuong-bv-115-15.jpg',
          'chao-tinh-thuong-bv-115-14.jpg',
          'chao-tinh-thuong-bv-115-13.jpg',
          'chao-tinh-thuong-bv-115-12.jpg',
          'chao-tinh-thuong-bv-115-11.jpg',
          'chao-tinh-thuong-bv-115-10.jpg',
          'chao-tinh-thuong-bv-115-9.jpg',
          'chao-tinh-thuong-bv-115-8.jpg',
          'chao-tinh-thuong-bv-115-7.jpg',
          'chao-tinh-thuong-bv-115-6.jpg',
          'chao-tinh-thuong-bv-115-5.jpg',
          'chao-tinh-thuong-bv-115-4.jpg',
          'chao-tinh-thuong-bv-115-3.jpg',
          'chao-tinh-thuong-bv-115-2.jpg',
          'chao-tinh-thuong-bv-115-1.jpg',
          'chao-tinh-thuong-bv-115-0.jpg'
        ],
        title: 'CHÁO TÌNH THƯƠNG 17.12.2017 (BV.115)',
        description: `Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên rất nhiều. Nhóm đã thực hiện trao 500 suất cháo thịt bằm, 
        1000 gói mì & 500 chai nước suối đến các bệnh nhân ở tại BV.115 vào ngày 17.12.2017. Xin chân thành cảm ơn các nhà hảo tâm, 
        các thành viên & tình nguyện viên rất nhiều.`,
        key: 4
      },
      {
        banner: 'chao-tinh-thuong-5.jpg',
        images: [
          'chao-tinh-thuong-2018-cho-ray-11.jpg',
          'chao-tinh-thuong-2018-cho-ray-10.jpg',
          'chao-tinh-thuong-2018-cho-ray-9.jpg',
          'chao-tinh-thuong-2018-cho-ray-8.jpg',
          'chao-tinh-thuong-2018-cho-ray-7.jpg',
          'chao-tinh-thuong-2018-cho-ray-6.jpg',
          'chao-tinh-thuong-2018-cho-ray-5.jpg',
          'chao-tinh-thuong-2018-cho-ray-4.jpg',
          'chao-tinh-thuong-2018-cho-ray-3.jpg',
          'chao-tinh-thuong-2018-cho-ray-2.jpg',
          'chao-tinh-thuong-2018-cho-ray-1.jpg',
          'chao-tinh-thuong-2018-cho-ray-0.jpg'
        ],
        title: 'CHÁO TÌNH THƯƠNG 18.03.2018 (BV. CHỢ RẪY)',
        description: `Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên rất nhiều. Nhóm đã thực hiện trao 500 suất cháo thịt bằm, 
        1000 gói mì & 500 chai nước suối đến các bệnh nhân ở tại BV Chợ Rẫy vào ngày 18.03.2018. Xin chân thành cảm ơn các nhà hảo tâm, 
        các thành viên & tình nguyện viên rất nhiều.`,
        key: 5
      },
      {
        banner: 'chao-tinh-thuong-6.jpg',
        images: [
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-12.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-11.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-10.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-9.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-8.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-7.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-6.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-5.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-4.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-3.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-2.jpg',
          'chao-tinh-thuong-22-10-2017-bv-cho-ray-1.jpg'
        ],
        title: 'CHÁO TÌNH THƯƠNG 22.10.2017 (BV. CHỢ RẪY)',
        description: `Để chia sẻ gánh nặng cho các bệnh nhân cũng như người thân của họ. Nhóm Ánh Sáng đã tổ chức phát cháo tình thương cho bệnh nhân và người thân tại Bệnh Viện Chợ Rẫy - Q5 - TP.HCM
        với 600 khẩu phần cháo thịt bằm (500ml/khẩu phần), 1000 gói mì, 500 chai nước suối `,
        key: 5
      },
      {
        banner: 'chao-tinh-thuong-7.jpg',
        images: [
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-12.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-11.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-10.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-9.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-8.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-7.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-6.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-5.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-4.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-3.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-2.jpg',
          'chao-tinh-thuong-19-11-2017-bv-nhi-dong-1-1.jpg'
        ],
        title: 'CHÁO TÌNH THƯƠNG 19.11.2017 (BV. NHI ĐỒNG 1)',
        description: `Xin chân thành cảm ơn các nhà hảo tâm, các thành viên & tình nguyện viên rất nhiều. Nhóm đã thực hiện trao 600 suất cháo thịt bằm, 
        1000 gói mì & 500 chai nước suối đến các bệnh nhân ở tại BV Nhi Đồng 1 vào ngày 19.11.2017. Chúc sức khoẻ & hạnh phúc đến với mọi người.`,
        key: 6
      }
    ]
  }
  let numberOfCardsPerRow = []
  for (let i = 0; i < response.data.length / 2; i++) {
    numberOfCardsPerRow.push('unique_' + i)
  }
  return (
    <>
      <Section title={'HOẠT ĐỘNG CHÁO TÌNH THƯƠNG'} />
      <ActivityBody information={{ response, numberOfCardsPerRow }} />
    </>
  )
}

export default ChaoTinhThuong
