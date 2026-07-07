import { useState, type FormEvent } from 'react'
import { useUploadFileHook } from '../../../../hooks/file.hook'
import { useCreateEventHook } from '../../../../hooks/event.hook'
import { LoadingOverlay } from '@/layout/admin'
import { Switch } from '@/components/ui/switch'
import {
  Upload,
  createUploadImage,
  isLocalUploadImage,
  type UploadImage,
} from '@/components/upload'
import type { EventPayload } from '@/@types/event'

const CreateEventPage = () => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [image, setImage] = useState<UploadImage | null>(null)
  const upload = useUploadFileHook()
  const create = useCreateEventHook()
  const [isActive, setIsActive] = useState(false)

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsProcessing(true)
    let imageUrl = ""
    if (isLocalUploadImage(image)) {
      const imageForm = new FormData()
      imageForm.set("files", image)
      await new Promise(resolve => {
        upload.mutate({ file: imageForm }, {
          onSuccess(data) {
            imageUrl = data.data[0]
            resolve(null)
          }
        })
      })
    }
    const event: EventPayload = { isActive, image: imageUrl }
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
            <Switch checked={isActive} onCheckedChange={setIsActive} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ảnh</span>
          <div className='mt-2 p-3 bg-gray-100 rounded-md'>
            <Upload
              accept={{ 'image/*': [] }}
              file={image}
              onDrop={(acceptedFiles) => {
                const file = acceptedFiles[0]
                if (file) setImage(createUploadImage(file))
              }}
              onDelete={() => setImage(null)}
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
