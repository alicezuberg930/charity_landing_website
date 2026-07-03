import type { DataResponse, MutationResponse } from './api'

export type WebsiteInformation = {
  _id?: string
  activityAddress?: string
  storageAddress?: string
  email?: string
  hotline?: string
  facebookUrl?: string
  zaloURL?: string
  youtubeURL?: string
  googleMapURL?: string
  websiteURL?: string
  achaubankNumber?: string
  vpbankNumber?: string
  createdAt?: string
  updatedAt?: string
}

export type InformationPayload = Partial<
  Record<keyof WebsiteInformation, FormDataEntryValue | string>
>

export type UpdateInformationParams = {
  information: InformationPayload
}

export type InformationResponse = DataResponse<WebsiteInformation>

export type InformationMutationResponse = MutationResponse
