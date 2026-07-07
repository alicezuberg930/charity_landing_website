import { useEffect, useState, type FormEvent } from 'react'
import { useUploadFileHook } from '../../../../hooks/file.hook'
import { useCreateBannerHook, useUpdateBannerHook } from '../../../../hooks/banner.hook'
import { LoadingOverlay } from '@/layout/admin'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import {
    Upload,
    createUploadImage,
    isLocalUploadImage,
    type UploadImage,
} from '@/components/upload'
import type { Banner, BannerPayload } from '@/@types/banner'

type HandleBannerProps = {
    selectedBanner?: Banner
}

const HandleBanner = ({ selectedBanner }: HandleBannerProps) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [image, setImage] = useState<UploadImage | null>(null)
    const upload = useUploadFileHook()
    const create = useCreateBannerHook()
    const update = useUpdateBannerHook()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (selectedBanner !== undefined) {
            setImage(selectedBanner.image)
            setIsActive(selectedBanner.isActive)
        }
    }, [selectedBanner])

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const entries: Record<string, FormDataEntryValue> = Object.fromEntries(form.entries())
        let imageUrl = typeof image === 'string' ? image : ''
        if (isLocalUploadImage(image)) {
            const imageForm = new FormData()
            imageForm.set("files", image)
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
        <div className='rounded-md p-4'>
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
                        <Input type='number' placeholder='Nhập thứ tự' name='order' defaultValue={selectedBanner?.order ?? ''} />
                    </div>
                </div>
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

export default HandleBanner
