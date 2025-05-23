import Section from '../../components/Section'
import GoogleMap from '../../components/GoogleMap'
import { useGetInformationHook } from '../../hooks/information.hook'

const ContactPage = () => {
  const { data: information } = useGetInformationHook()

  return (
    <div className='mb-6'>
      <Section title='THÔNG TIN LIÊN HỆ NHÓM ÁNH SÁNG TỪ THIỆN' />
      <GoogleMap />
      <div className='flex flex-col md:flex-row'>
        <div className='flex-1'>
          <Section title='THÔNG TIN LIÊN HỆ' />
          <ul>
            <li>
              <p>
                <strong>
                  Website:
                  <a
                    href={information?.data?.websiteURL ?? "/"}
                    className='text-main-color'
                  >
                    {' '}
                    {information?.data?.websiteURL ?? ""}
                  </a>
                </strong>
              </p>
            </li>
            <li>
              <p>
                <strong>Hotline</strong>: {information?.data?.hotline ?? ""}
              </p>
            </li>
            <li>
              <p>
                <strong>Địa chỉ nấu cháo:</strong> {information?.data?.activityAddress ?? ""}
              </p>
            </li>
            <li>
              <p>
                <strong>Kho lưu trữ:</strong> {information?.data?.storageAddress ?? ""}
              </p>
            </li>
          </ul>
        </div>
        <div className='flex-1'>
          <Section title='THÔNG TIN CHUYỂN KHOẢN' />
          <ul>
            <li>
              <p>
                <strong>Chuyển khoản:</strong> Chủ Tài Khoản Nguyễn Thanh Tân.
              </p>
            </li>
            <li>
              <p>Ngân hàng Á Châu: {information?.data?.achaubankNumber ?? ""}</p>
            </li>
            <li>
              <p>Ngân hàng VPBank: {information?.data?.vpbankNumber ?? ""}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
