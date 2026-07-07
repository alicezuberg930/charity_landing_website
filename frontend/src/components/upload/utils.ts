import { type CustomFile } from './types'

export type UploadImage = CustomFile | string

export const createUploadImage = (file: File): CustomFile =>
  Object.assign(file, {
    path: file.name,
    preview: URL.createObjectURL(file),
  })

export const isLocalUploadImage = (
  file: UploadImage | null | undefined
): file is CustomFile => !!file && typeof file !== 'string'
