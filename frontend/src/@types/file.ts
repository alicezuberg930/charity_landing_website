import type { DataResponse } from './api'

export type UploadFileParams = {
  file: FormData
}

export type UploadFileResponse = DataResponse<string[]>
