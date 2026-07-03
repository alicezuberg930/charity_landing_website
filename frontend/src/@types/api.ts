import type { Response } from './response'

export type EntityId = string

export type ApiQueryPrimitive = string | number | boolean

export type ApiQueryValue =
  | ApiQueryPrimitive
  | ApiQueryPrimitive[]
  | null
  | undefined

export type ApiQueryParams = Record<string, ApiQueryValue>

export type DetailParams = {
  id?: EntityId
}

export type DeleteParams = {
  id: EntityId
}

export type MutationResponse = Response<null>

export type DataResponse<T> = Response<T> & {
  data: T
}
