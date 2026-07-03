import { useEffect, useState, type FormEvent } from 'react'
import CustomImagePicker, { type PickedImage } from './CustomImagePicker'
import { useUploadFileHook } from '../hooks/file.hook'
import { useCreateBannerHook, useUpdateBannerHook } from '../hooks/banner.hook'
import CustomSwitch from './CustomSwitch'
import LoadingOverlay from './LoadingOverlay'
import type { Banner, BannerPayload } from '@/@types/banner'

type HandleBannerBodyProps = {
    selectedBanner?: Banner
}

const HandleBannerBody = ({ selectedBanner }: HandleBannerBodyProps) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [image, setImage] = useState<PickedImage[]>([])
    const upload = useUploadFileHook()
    const create = useCreateBannerHook()
    const update = useUpdateBannerHook()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (selectedBanner !== undefined) {
            setImage([{ file: null, url: selectedBanner.image }])
            setIsActive(selectedBanner.isActive)
        }
    }, [selectedBanner])

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const entries: Record<string, FormDataEntryValue> = Object.fromEntries(form.entries())
        let imageUrl: string = image[0]?.url ?? ''
        if (image.length > 0 && image[0].file != null) {
            const imageForm = new FormData()
            imageForm.set("files", image[0].file)
            await new Promise<void>(resolve => {
                upload.mutate({ file: imageForm }, {
                    onSuccess(data) {
                        imageUrl = data.data[0]
                        resolve()
                    }
                })
            })
        }
        const banner: BannerPayload = { ...entries, image: imageUrl, isActive }
        if (selectedBanner === undefined) {
            create.mutate({ banner }, { onSettled() { setIsProcessing(false) } })
        } else {
            update.mutate({ banner, id: selectedBanner._id }, { onSettled() { setIsProcessing(false) } })
        }
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <div className='flex flex-col gap-1 mb-10'>
                <span className='text-xl font-bold'>{selectedBanner ? 'Sửa' : 'Tạo'} banner</span>
                <span className='text-sm text-gray-500'>
                    Điền đầy đủ thông tin của banner
                </span>
            </div>

            <form onSubmit={handleSubmitForm} className='space-y-6'>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Thứ tự</span>
                    <div className='mt-2'>
                        <input type='number' placeholder='Nhập thứ tự' name='order' defaultValue={selectedBanner?.order ?? ''}
                            className='rounded-md w-full p-2 border border-gray-400 focus:outline-main-color'
                        />
                    </div>
                </div>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Kích hoạt</span>
                    <div className='mt-2'>
                        <CustomSwitch checked={isActive} onChange={(e) => setIsActive(e)} />
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

export default HandleBannerBody
