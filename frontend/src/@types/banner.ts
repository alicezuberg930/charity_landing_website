import type { ApiQueryParams, DataResponse, DeleteParams, DetailParams, EntityId, MutationResponse } from './api'

export type Banner = {
  _id: EntityId
  image: string
  isActive: boolean
  order?: string | number
  createdAt?: string
  updatedAt?: string
}

export type BannerPayload = {
  image?: string
  isActive?: boolean
  order?: FormDataEntryValue | number
  [key: string]: FormDataEntryValue | string | number | boolean | undefined
}

export type BannerFilter = ApiQueryParams & {
  isActive?: boolean
  page?: number
  limit?: number
  search?: string
}

export type GetBannersParams = BannerFilter

export type CreateBannerParams = {
  banner: BannerPayload
}

export type UpdateBannerParams = {
  id: EntityId
  banner: BannerPayload
}

export type DeleteBannerParams = DeleteParams

export type GetBannerDetailsParams = DetailParams

export type BannerListResponse = DataResponse<Banner[]>

export type BannerDetailsResponse = DataResponse<Banner>

export type BannerMutationResponse = MutationResponse
