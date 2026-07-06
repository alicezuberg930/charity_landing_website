import { useGetInformationHook, useUpdateInformationHook } from "../../../hooks/information.hook"
import { Input } from "@/components/ui/input"

const InformationPage = () => {
  const update = useUpdateInformationHook()
  const { data: information } = useGetInformationHook()

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const entries = Object.fromEntries(form.entries())
    const information = { ...entries }
    update.mutate({ information })
  }

  return (
    <div className='bg-white rounded-md p-4'>
      <div className='flex flex-col gap-1 mb-10'>
        <span className='text-xl font-bold'>Chỉnh sửa thông tin website</span>
        <span className='text-sm text-gray-500'>
          Điền đầy đủ thông tin của website
        </span>
      </div>

      <form onSubmit={handleSubmitForm} className='space-y-6'>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Địa chỉ nấu cháo</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ nấu cháo' name='activityAddress' defaultValue={information?.data?.activityAddress} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Địa chỉ kho</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ kho' name='storageAddress' defaultValue={information?.data?.storageAddress} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Email</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ kho' name='email' defaultValue={information?.data?.email} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Hotline</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập hotline' name='hotline' defaultValue={information?.data?.hotline} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Trang facebook</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ url trang facebook' name='facebookUrl' defaultValue={information?.data?.facebookUrl} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Trang zalo</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ url trang zalo' name='zaloURL' defaultValue={information?.data?.zaloURL} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Trang youtube</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ url trang youtube' name='youtubeURL' defaultValue={information?.data?.youtubeURL} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>URL google map</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập url của google map' name='googleMapURL' defaultValue={information?.data?.googleMapURL} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Địa chỉ website</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập địa chỉ URL của website' name='websiteURL' defaultValue={information?.data?.websiteURL} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>STK Á châu bank</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập STK ngân hàng' name='achaubankNumber' defaultValue={information?.data?.achaubankNumber} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>STK VP bank</span>
          <div className='mt-2'>
            <Input type='text' placeholder='Nhập STK ngân hàng' name='vpbankNumber' defaultValue={information?.data?.vpbankNumber} />
          </div>
        </div>
        <button type='submit' className='rounded-md px-6 py-2 bg-main-color'>
          <span className='text-white'>Lưu thông tin</span>
        </button>
      </form>
    </div>
  )
}

export default InformationPage
