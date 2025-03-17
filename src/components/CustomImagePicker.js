import { useEffect, useState } from 'react'
import { icons } from '../utils/icons'
import { toast } from 'react-toastify'

const CustomImagePicker = ({
  images,
  setImages,
  isMultiple = true,
  resetAll = false,
  limit = isMultiple ? 9 : 1,
  id,
  showTitle = true,
  isDisabled = false
}) => {
  const [tempfiles, setTempFiles] = useState([])
  const [draggedIndex, setDraggedIndex] = useState(null)
  const { RiImageAddFill, FaRegTrashAlt } = icons

  useEffect(() => {
    if (images !== undefined) setTempFiles(images)
  }, [images])

  useEffect(() => {
    if (resetAll === true) resetImages()
  }, [resetAll])

  const handleDrop = e => {
    e.preventDefault()
    if (e.dataTransfer.items.length > limit) {
      toast.error(`Bạn chỉ có thể tải lên không quá ${limit} file`)
      return
    }

    const newFiles = []
    if (e.dataTransfer.items) {
      ;[...e.dataTransfer.items].forEach(item => {
        if (item.kind === 'file') {
          const file = item.getAsFile()
          if (file) {
            const url = URL.createObjectURL(file)
            newFiles.push({ file, url })
          }
        }
      })
    }

    setTempFiles(prev => [...prev, ...newFiles].slice(0, limit))
    setImages && setImages(prev => [...prev, ...newFiles].slice(0, limit))
  }

  const handleFileChange = e => {
    const files = e.target.files
    if (files.length > limit) {
      toast.error(`Bạn chỉ có thể tải lên không quá ${limit} file`)
      return
    }

    if (files) {
      let newFiles = []
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        const url = URL.createObjectURL(file)
        newFiles.push({ file, url })
      }

      newFiles = newFiles.slice(0, 8)
      setTempFiles(prev => [...prev, ...newFiles].slice(0, limit))
      setImages && setImages(prev => [...prev, ...newFiles].slice(0, limit))
    }
  }

  const handleDragStart = index => {
    setDraggedIndex(index)
  }

  const handleDragOver = (e, index) => {
    e.preventDefault()
    if (draggedIndex === null || draggedIndex === index) return

    setTempFiles(prev => {
      const updatedFiles = [...prev]
      const [draggedFile] = updatedFiles.splice(draggedIndex, 1)
      updatedFiles.splice(index, 0, draggedFile)
      return updatedFiles
    })

    setDraggedIndex(index)
  }

  const handleDragEnd = () => {
    setDraggedIndex(null)
    setImages && setImages(tempfiles)
  }

  const resetImages = () => {
    tempfiles.forEach(f => URL.revokeObjectURL(f.url))
    setTempFiles([])
    setImages && setImages([])
  }

  return (
    <div className='text-main-color'>
      {/* Image list */}
      {tempfiles.length > 0 && (
        <div>
          <div className='flex flex-wrap gap-3 max-h-[268px] overflow-auto'>
            {tempfiles.slice(0, limit).map((file, i) => (
              <div
                draggable
                key={i}
                onDragStart={() => handleDragStart(i)}
                onDragOver={e => handleDragOver(e, i)}
                onDragEnd={handleDragEnd}
              >
                <div className='rounded-md overflow-hidden relative h-32 w-44 bg-gray-300'>
                  <img
                    className='object-cover w-full h-full'
                    src={file.url}
                    alt={`Uploaded file ${i}`}
                  />

                  <div>
                    <div className='text-white top-1 right-1 absolute bg-gray-300 rounded-full p-2'>
                      <FaRegTrashAlt
                        fill='purple'
                        size={14}
                        onClick={() => {
                          setTempFiles(prev =>
                            prev.filter((_, index) => index !== i)
                          )
                          setImages &&
                            setImages(prev =>
                              prev.filter((_, index) => index !== i)
                            )
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Dropzone */}
      <div
        onDragOver={e => {
          e.preventDefault()
        }}
        onDrop={handleDrop}
        className={`${tempfiles.length < limit ? 'block' : 'hidden'} ${tempfiles.length > 0 && 'mt-5'
          } border border-dashed border-gray-400 rounded-lg w-fit`}
      >
        <label htmlFor={id} className='flex items-center py-3 px-5'>
          <RiImageAddFill size={24} />
          {showTitle && (
            <span className='text-sm pl-4'>
              Chọn ảnh hoặc kéo thả ({tempfiles.length}/{limit})
            </span>
          )}
        </label>
        <input
          multiple={isMultiple}
          disabled={isDisabled}
          type='file'
          accept='image/*'
          id={id}
          className='hidden option-file-input'
          onChange={handleFileChange}
        />
      </div>
    </div>
  )
}

export default CustomImagePicker
