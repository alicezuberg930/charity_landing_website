import { useEffect } from 'react'
import { format } from 'date-fns'
import { type Resolver, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  type Post,
  type PostCategory,
  type PostPayload,
} from '@/@types/post'
import {
  useCreatePostHook,
  useUpdatePostHook,
} from '@/hooks/post.hook'
import { useUploadFileHook } from '@/hooks/file.hook'
import {
  FormProvider,
  RHFRichTextEditor,
  RHFSelect,
  RHFSingleDatePicker,
  RHFTextField,
  RHFUpload,
} from '@/components/hook-form'
import {
  isLocalUploadImage,
  type UploadImage,
} from '@/components/upload'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

const postCategories: { label: string; value: PostCategory }[] = [
  { label: 'Cháo tình thương', value: 'chao-tinh-thuong' },
  { label: 'Chương trình thường niên', value: 'chuong-trinh-thuong-nien' },
  { label: 'Hỗ trợ hoàn cảnh', value: 'ho-tro-hoan-canh' },
  { label: 'Tiếp sức tri thức', value: 'tiep-suc-tri-thuc' },
]

type PostFormValues = {
  title: string
  description: string
  date: Date
  category: PostCategory
  cover: UploadImage | null
}

const postFormSchema = z.object({
  title: z.string().trim().min(1, 'Vui lòng nhập tiêu đề.'),
  description: z.string().trim().min(1, 'Vui lòng nhập nội dung.'),
  date: z.date(),
  category: z.enum([
    'chao-tinh-thuong',
    'chuong-trinh-thuong-nien',
    'ho-tro-hoan-canh',
    'tiep-suc-tri-thuc',
  ]),
  cover: z.custom<UploadImage>(
    (value) => typeof value === 'string' || (typeof value === 'object' && value !== null),
    { message: 'Vui lòng chọn ảnh bìa.' }
  ),
})

const zodResolver: Resolver<PostFormValues> = async (values) => {
  const result = postFormSchema.safeParse(values)

  if (result.success) {
    return { values: result.data, errors: {} }
  }

  return {
    values: {},
    errors: result.error.issues.reduce<Record<string, { type: string; message: string }>>(
      (errors, issue) => {
        const fieldName = issue.path[0]
        if (typeof fieldName === 'string') {
          errors[fieldName] = {
            type: issue.code,
            message: issue.message,
          }
        }
        return errors
      },
      {}
    ),
  }
}

const parsePostDate = (value?: string) => {
  if (!value) return new Date()
  const [day, month, year] = value.split('/').map(Number)
  if (day && month && year) return new Date(year, month - 1, day)
  const date = new Date(value)
  return Number.isNaN(date.getTime()) ? new Date() : date
}

const getDefaultValues = (post?: Post): PostFormValues => ({
  title: post?.title ?? '',
  description: post?.description ?? '',
  date: parsePostDate(post?.date),
  category: post?.category ?? 'chao-tinh-thuong',
  cover: post?.cover ?? null,
})

type PostsActionDialogProps = {
  currentRow?: Post | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export const PostsActionDialog = ({
  currentRow,
  open,
  onOpenChange,
}: PostsActionDialogProps) => {
  const isEdit = !!currentRow
  const upload = useUploadFileHook()
  const createPost = useCreatePostHook()
  const updatePost = useUpdatePostHook()
  const form = useForm<PostFormValues>({
    resolver: zodResolver,
    defaultValues: getDefaultValues(currentRow ?? undefined),
  })

  useEffect(() => {
    if (open) {
      form.reset(getDefaultValues(currentRow ?? undefined))
    }
  }, [currentRow, form, open])

  const onSubmit = async (values: PostFormValues) => {
    try {
      let coverUrl = typeof values.cover === 'string' ? values.cover : ''

      if (isLocalUploadImage(values.cover)) {
        const formData = new FormData()
        formData.set('files', values.cover)
        const response = await upload.mutateAsync({ file: formData })
        coverUrl = response.data[0] ?? ''
      }

      const post: PostPayload = {
        title: values.title,
        description: values.description,
        date: format(values.date, 'dd/MM/yyyy'),
        category: values.category,
        cover: coverUrl,
      }

      if (currentRow) {
        await updatePost.mutateAsync({ id: currentRow._id, post })
      } else {
        await createPost.mutateAsync({ post })
      }

      form.reset(getDefaultValues())
      onOpenChange(false)
    } catch {
      // Hook-level onError handlers show the API error.
    }
  }

  const isSubmitting =
    form.formState.isSubmitting ||
    upload.isPending ||
    createPost.isPending ||
    updatePost.isPending

  return (
    <Dialog
      open={open}
      onOpenChange={(state) => {
        if (!state) form.reset(getDefaultValues(currentRow ?? undefined))
        onOpenChange(state)
      }}
    >
      <DialogContent className='max-h-[calc(100vh-2rem)] overflow-y-auto sm:max-w-4xl'>
        <DialogHeader className='text-start'>
          <DialogTitle>{isEdit ? 'Cập nhật bài viết' : 'Tạo bài viết'}</DialogTitle>
          <DialogDescription>
            Nhập thông tin bài viết và lưu thay đổi tại đây.
          </DialogDescription>
        </DialogHeader>
        <FormProvider
          id='post-form'
          methods={form}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className='grid gap-4 md:grid-cols-2'>
            <RHFTextField
              name='title'
              fieldLabel='Tiêu đề'
              placeholder='Nhập tiêu đề'
            />
            <RHFSingleDatePicker
              name='date'
              fieldLabel='Ngày'
              placeholder='Chọn ngày'
            />
            <RHFSelect name='category' fieldLabel='Loại hoạt động'>
              {postCategories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </RHFSelect>
            <RHFUpload
              name='cover'
              fieldLabel='Ảnh bìa'
              accept={{ 'image/*': [] }}
            />
          </div>
          <div className='mt-4'>
            <RHFRichTextEditor name='description' fieldLabel='Nội dung' />
          </div>
        </FormProvider>
        <DialogFooter>
          <Button type='submit' form='post-form' disabled={isSubmitting}>
            {isSubmitting ? 'Đang lưu...' : 'Lưu thay đổi'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
