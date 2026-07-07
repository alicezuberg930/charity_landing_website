import { lazy, useEffect, useState, type FormEvent } from 'react'
import { DatePicker } from '../../../../components/date-picker'
import { useUploadFileHook } from '../../../../hooks/file.hook'
import { useCreatePostHook, useUpdatePostHook } from '../../../../hooks/post.hook'
import { LoadingOverlay } from '@/layout/admin'
import { Input } from '@/components/ui/input'
import {
    Upload,
    createUploadImage,
    isLocalUploadImage,
    type UploadImage,
} from '@/components/upload'
import type { Post, PostPayload } from '@/@types/post'

const CKEditor = lazy(() => import('../../../../components/ck-editor').then((module) => ({ default: module.CKEditor })))

type HandlePostProps = {
    selectedPost?: Post
}

const HandlePost = ({ selectedPost }: HandlePostProps) => {
    const [isProcessing, setIsProcessing] = useState(false)
    const [description, setDescription] = useState<string | null>(null)
    const [cover, setCover] = useState<UploadImage | null>(null)
    const upload = useUploadFileHook()
    const [images, setImages] = useState<UploadImage[]>([])
    const create = useCreatePostHook()
    const update = useUpdatePostHook()
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        if (selectedPost !== undefined) {
            const [day, month, year] = selectedPost.date.split("/").map(Number);
            setDate(new Date(year, month - 1, day))
            setCover(selectedPost.cover)
            setImages(selectedPost.images)
            setDescription(selectedPost.description)
        }
    }, [selectedPost])

    const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsProcessing(true)
        const form = new FormData(e.currentTarget)
        const entries: Record<string, FormDataEntryValue> = Object.fromEntries(form.entries())
        let coverUrl = typeof cover === 'string' ? cover : ''
        let imageUrls = images.filter((image): image is string => typeof image === 'string')
        if (isLocalUploadImage(cover)) {
            const coverForm = new FormData()
            coverForm.set('files', cover)
            await new Promise(resolve => {
                upload.mutate({ file: coverForm }, {
                    onSuccess(data) {
                        coverUrl = data.data[0]
                        resolve(null)
                    }
                })
            })
        }
        const localImages = images.filter(isLocalUploadImage)
        if (localImages.length > 0) {
            const imagesForm = new FormData()
            localImages.forEach((image) => imagesForm.append('files', image))
            await new Promise(resolve => {
                upload.mutate({ file: imagesForm }, {
                    onSuccess(data) {
                        imageUrls = [...imageUrls, ...data.data]
                        resolve(null)
                    }
                })
            })
        }
        const post: PostPayload = { ...entries, description, cover: coverUrl, images: imageUrls }
        if (selectedPost === undefined) {
            create.mutate({ post }, { onSettled(_) { setIsProcessing(false) } })
        } else {
            update.mutate({ post, id: selectedPost._id }, { onSettled(_) { setIsProcessing(false) } })
        }
    }

    return (
        <div className='bg-white rounded-md p-4'>
            <div className='flex flex-col gap-1 mb-10'>
                <span className='text-xl font-bold'>{selectedPost ? 'Sửa' : 'Tạo'} bài viết</span>
                <span className='text-sm text-gray-500'>
                    Điền đầy đủ thông tin của bài viết
                </span>
            </div>
            <form onSubmit={handleSubmitForm} className='space-y-6'>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Tiêu đề</span>
                    <div className='mt-2'>
                        <Input type='text' placeholder='Nhập tiêu đề' name='title' defaultValue={selectedPost?.title ?? ''} />
                    </div>
                </div>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Nội dung</span>
                    <div className='mt-2'>
                        <CKEditor initialData={description ?? ''} defaultValue={'Nhập nội dung'} onChange={(val) => setDescription(val)} />
                    </div>
                </div>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Ngày thực hiện</span>
                    <div className='mt-2'>
                        <DatePicker value={date} onChange={(v) => { }} />
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
                        <Upload
                            accept={{ 'image/*': [] }}
                            file={cover}
                            onDrop={(acceptedFiles) => {
                                const file = acceptedFiles[0]
                                if (file) setCover(createUploadImage(file))
                            }}
                            onDelete={() => setCover(null)}
                        />
                    </div>
                </div>
                <div className='h-fit'>
                    <span className='font-semibold text-lg'>Ảnh chi tiết</span>
                    <div className='mt-2 p-3 bg-gray-100 rounded-md'>
                        <Upload
                            multiple
                            thumbnail
                            accept={{ 'image/*': [] }}
                            maxFiles={99}
                            files={images}
                            onDrop={(acceptedFiles) => {
                                setImages((prev) => [
                                    ...prev,
                                    ...acceptedFiles.map(createUploadImage),
                                ].slice(0, 99))
                            }}
                            onRemove={(file) => {
                                setImages((prev) => prev.filter((image) => image !== file))
                            }}
                            onRemoveAll={() => setImages([])}
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

export default HandlePost
