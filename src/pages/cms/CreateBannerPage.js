import { useState } from 'react'
import CustomImagePicker from '../../components/CustomImagePicker'
import { useUploadFileHook } from '../../hooks/file.hook'
import { useCreateBannerHook } from '../../hooks/banner.hook'

const CreateBannerPage = () => {
  const [image, setImage] = useState([]) // { file: File | null, url: string }[]
  const upload = useUploadFileHook()
  const create = useCreateBannerHook()

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const entries = Object.fromEntries(form.entries())
    let imageUrl = ""
    if (image.length > 0) {
      const imageForm = new FormData()
      imageForm.set("files", image[0].file)
      await new Promise(resolve => {
        upload.mutate({ file: imageForm }, {
          onSuccess(data) {
            imageUrl = data.data[0]
            resolve(null)
          }
        })
      })
    }
    const banner = { ...entries, image: imageUrl }
    create.mutate({ banner })
  }

  return (
    <div className='bg-white rounded-md p-4'>
      <div className='flex flex-col gap-1 mb-10'>
        <span className='text-xl font-bold'>Tạo banner</span>
        <span className='text-sm text-gray-500'>
          Điền đầy đủ thông tin của banner
        </span>
      </div>

      <form onSubmit={handleSubmitForm} className='space-y-6'>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Thứ tự</span>
          <div className='mt-2'>
            <input type='number' placeholder='Nhập thứ tự' name='order'
              className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
            />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ảnh</span>
          <div className='mt-2 p-3 bg-gray-100 rounded-md'>
            <CustomImagePicker
              isMultiple={false}
              images={image}
              setImages={setImage}
              id='image'
            />
          </div>
        </div>
        <button type='submit' className='rounded-md px-6 py-2 bg-main-color '>
          <span className='text-white'>Lưu thông tin</span>
        </button>
      </form>
    </div>
  )
}

export default CreateBannerPage
