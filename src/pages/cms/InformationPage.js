const InformationPage = () => {
  // const create = useCreateBannerHoo()

  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const object = new FormData(e.currentTarget)
    const entries = Object.fromEntries(object.entries())
    const information = { ...entries }
    // create.mutate({ banner })
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
          <span className='font-semibold text-lg'>Thứ tự</span>
          <div className='mt-2'>
            <input type='number' placeholder='Nhập thứ tự' name='order'
              className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
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

export default InformationPage