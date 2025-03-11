import { useState } from 'react'
import CustomImagePicker from '../../components/CustomImagePicker'
import { useUploadFileHook } from '../../hooks/file.hook'
import { useCreateEventHook } from '../../hooks/event.hook'
import CustomSwitch from '../../components/CustomSwitch'
import LoadingOverlay from '../../components/LoadingOverlay'

const CreateEventPage = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [image, setImage] = useState([]) // { file: File | null, url: string }[]
  const upload = useUploadFileHook()
  const create = useCreateEventHook()
  const [isActive, setIsActive] = useState(false)

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    setIsProcessing(true)
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
    const event = { isActive, image: imageUrl }
    create.mutate({ event }, {
      onSettled(_) { setIsProcessing(false) }
    })
  }

  return (
    <div className='bg-white rounded-md p-4'>
      <div className='flex flex-col gap-1 mb-10'>
        <span className='text-xl font-bold'>Tạo sự kiện</span>
        <span className='text-sm text-gray-500'>
          Điền đầy đủ thông tin của sự kiện
        </span>
      </div>

      <form onSubmit={handleSubmitForm} className='space-y-6'>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Kích hoạt</span>
          <div className='mt-2'>
            <CustomSwitch onChange={(e) => setIsActive(e)} />
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
      <LoadingOverlay isLoading={isProcessing} />
    </div>
  )
}

export default CreateEventPage