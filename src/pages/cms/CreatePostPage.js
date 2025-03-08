import { useState } from 'react'
import CustomCKEditor from '../../components/CustomCKEditor'
import CustomDatePicker from '../../components/CustomDatePicker'
import CustomImagePicker from '../../components/CustomImagePicker'
import { useUploadFileHook } from '../../hooks/file.hook'
import { useCreatePostHook } from '../../hooks/post.hook'

const CreatePostPage = () => {
  const [description, setDescription] = useState('')
  const [cover, setCover] = useState([]) // { file: File | null, url: string }[]
  const upload = useUploadFileHook()
  const [images, setImages] = useState([]) // { file: File | null, url: string }[]
  const create = useCreatePostHook()

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const object = new FormData(e.currentTarget)
    const entries = Object.fromEntries(object.entries())
    console.log({ ...entries, description })
    let coverUrl = ""
    let imageUrls = []
    // upload cover photo
    if (cover.length > 0) {
      const coverForm = new FormData()
      coverForm.set("files", cover[0].file)
      await new Promise(resolve => {
        upload.mutate({ file: coverForm }, {
          onSuccess(data) {
            coverUrl = data.data[0]
            resolve(null)
          }
        })
      })
    }
    // upload details photo
    if (images.length > 0) {
      const imagesForm = new FormData()
      images.forEach((image) => { imagesForm.append('files', image.file) })
      await new Promise(resolve => {
        upload.mutate({ file: imagesForm }, {
          onSuccess(data) {
            imageUrls = data.data
            resolve(null)
          }
        })
      })
    }
    const post = { ...entries, cover: coverUrl, images: imageUrls }
    create.mutate({ post })
  }

  return (
    <div className='bg-white rounded-md p-4'>
      <div className='flex flex-col gap-1 mb-10'>
        <span className='text-xl font-bold'>Tạo bài viết</span>
        <span className='text-sm text-gray-500'>
          Điền đầy đủ thông tin của bài viết
        </span>
      </div>

      <form onSubmit={handleSubmitForm} className='space-y-6'>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Tiêu đề</span>
          <div className='mt-2'>
            <input type='text' placeholder='Nhập tiêu đề' name='title'
              className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
            />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Nội dung</span>
          <div className='mt-2'>
            <CustomCKEditor defaultValue={'Nhập nội dung'} onChange={(val) => setDescription(val)} />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ngày thực hiện</span>
          <div className='mt-2'>
            <CustomDatePicker name='date' />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Loại hoạt động</span>
          <div className='mt-2'>
            <select className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color' name='category'>
              <option value='chao-tinh-thuong'>Cháo tình thương</option>
              <option value='chuong-trinh-thuong-nien'>Chương trình thường niên</option>
              <option value='ho-tro-hoan-canh'>Hỗ trợ hoàn cảnh</option>
              <option value='tiep-suc-tri-thuc'>Tiếp sức tri thức</option>
            </select>
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ảnh bìa</span>
          <div className='mt-2 p-3 bg-gray-100 rounded-md'>
            <CustomImagePicker
              isMultiple={false}
              images={cover}
              setImages={setCover}
              id='cover'
            />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ảnh chi tiết</span>
          <div className='mt-2 p-3 bg-gray-100 rounded-md'>
            <CustomImagePicker
              limit={99}
              images={images}
              setImages={setImages}
              id='images'
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

export default CreatePostPage
