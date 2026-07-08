import { Main } from "@/layout/admin"
import { useGetInformationHook, useUpdateInformationHook } from "../../../hooks/information.hook"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Pen } from "lucide-react"

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
    <Main>
      <div className='flex flex-col gap-1 mb-10'>
        <span className='text-xl font-bold'>Chỉnh sửa thông tin website</span>
        <span className='text-sm text-gray-500'>
          Điền đầy đủ thông tin của website
        </span>
      </div>

      <form onSubmit={handleSubmitForm} className='space-y-6'>
        <span className='font-semibold text-lg'>Địa chỉ nấu cháo</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ nấu cháo' name='activityAddress' defaultValue={information?.data?.activityAddress} />
        </div>
        <span className='font-semibold text-lg'>Địa chỉ kho</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ kho' name='storageAddress' defaultValue={information?.data?.storageAddress} />
        </div>
        <span className='font-semibold text-lg'>Email</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ kho' name='email' defaultValue={information?.data?.email} />
        </div>
        <span className='font-semibold text-lg'>Hotline</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập hotline' name='hotline' defaultValue={information?.data?.hotline} />
        </div>
        <span className='font-semibold text-lg'>Trang facebook</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ url trang facebook' name='facebookUrl' defaultValue={information?.data?.facebookUrl} />
        </div>
        <span className='font-semibold text-lg'>Trang zalo</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ url trang zalo' name='zaloURL' defaultValue={information?.data?.zaloURL} />
        </div>
        <span className='font-semibold text-lg'>Trang youtube</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ url trang youtube' name='youtubeURL' defaultValue={information?.data?.youtubeURL} />
        </div>
        <span className='font-semibold text-lg'>URL google map</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập url của google map' name='googleMapURL' defaultValue={information?.data?.googleMapURL} />
        </div>
        <span className='font-semibold text-lg'>Địa chỉ website</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập địa chỉ URL của website' name='websiteURL' defaultValue={information?.data?.websiteURL} />
        </div>
        <span className='font-semibold text-lg'>STK Á châu bank</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập STK ngân hàng' name='achaubankNumber' defaultValue={information?.data?.achaubankNumber} />
        </div>
        <span className='font-semibold text-lg'>STK VP bank</span>
        <div className='mt-2'>
          <Input type='text' placeholder='Nhập STK ngân hàng' name='vpbankNumber' defaultValue={information?.data?.vpbankNumber} />
        </div>
        <Button className='gap-1.5'>
          <Pen size={18} />
          <span>Chỉnh sửa</span>
        </Button>
      </form>
    </Main >
  )
}

export default InformationPage