import type { ApiQueryParams, DataResponse, DeleteParams, DetailParams, EntityId, MutationResponse } from './api'

export type PostCategory =
  | 'chao-tinh-thuong'
  | 'chuong-trinh-thuong-nien'
  | 'ho-tro-hoan-canh'
  | 'tiep-suc-tri-thuc'

export type Post = {
  _id: EntityId
  title: string
  description: string
  date: string
  category: PostCategory
  cover: string
  images: string[]
  createdAt?: string
  updatedAt?: string
}

export type PostPayload = {
  title?: FormDataEntryValue
  date?: FormDataEntryValue
  category?: FormDataEntryValue | PostCategory
  description?: string | null
  cover?: string
  images?: string[]
  [key: string]: FormDataEntryValue | string | string[] | null | undefined
}

export type PostFilter = ApiQueryParams & {
  page?: number
  limit?: number
  search?: string
  category?: PostCategory
}

export type GetPostsParams = {
  filter?: PostFilter
}

export type CreatePostParams = {
  post: PostPayload
}

export type UpdatePostParams = {
  id: EntityId
  post: PostPayload
}

export type DeletePostParams = DeleteParams

export type GetPostDetailsParams = DetailParams

export type PostListResponse = DataResponse<Post[]>

export type PostDetailsResponse = DataResponse<Post>

export type PostMutationResponse = MutationResponse
