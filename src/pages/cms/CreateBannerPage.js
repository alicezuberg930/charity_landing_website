import { useState } from 'react'
import CustomCKEditor from '../../components/CustomCKEditor'
import CustomDatePicker from '../../components/CustomDatePicker'
import CustomImagePicker from '../../components/CustomImagePicker'

const CreateBannerPage = () => {
  const [content, setContent] = useState('')
  const [images, setImages] = useState([]) // { file: File | null, url: string }[]

  const handleSubmitForm = e => {
    e.preventDefault()
    const object = new FormData(e.currentTarget)
    const entries = Object.fromEntries(object.entries())
    console.log(entries)
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
            <input
              type='text'
              className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
              placeholder='Nhập tiêu đề'
              name='title'
            />
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Nội dung</span>
          <div className='mt-2'>
            <CustomCKEditor defaultValue={'Nhập nội dung'} />
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
            <select
              className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
              name='category'
            >
              <option value={'chao-tinh-thuong'}>Cháo tình thương</option>
              <option value={'chuong-trinh-thuong-nien'}>
                Chương trình thường niên
              </option>
              <option value={'ho-tro-hoan-canh'}>Hỗ trợ hoàn cảnh</option>
              <option value={'tiep-suc-tri-thuc'}>Tiếp sức tri thức</option>
            </select>
          </div>
        </div>
        <div className='h-fit'>
          <span className='font-semibold text-lg'>Ảnh bìa</span>
          <div className='mt-2 p-3 bg-gray-100 rounded-md'>
            <CustomImagePicker
              isMultiple={false}
              images={images}
              setImages={setImages}
              id='banner'
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

export default CreateBannerPage
