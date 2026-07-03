import { type Response as ApiResponse } from '@/@types/response'
import { HttpError } from './http-error'
import { InterceptorManager } from './interceptor'

const DEFAULT_BASE_URL = 'http://localhost:8080/api/v1'
const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I4NWIyODRkZjBjOGM3YTQzNzY3YTgiLCJlbWFpbCI6IkxpbGlhbmExMjNAZ21haWwuY29tIiwiaWF0IjoxNzQwMTM1MzIxLCJleHAiOjE3NDg3NzUzMjF9.xqJ_u3Pkg_tdTH5VOxDd4_KFbF_DEAu3NXQVXj8X6Vg'

const getBaseUrl = () => {
  const environment = import.meta.env.VITE_ENVIRONMENT
  const productionApi = import.meta.env.VITE_PRODUCTION_API
  const developmentApi = import.meta.env.VITE_DEVELOPMENT_API
  const apiUrl = import.meta.env.VITE_API_URL

  if (environment === 'development') {
    return developmentApi ?? apiUrl ?? productionApi ?? DEFAULT_BASE_URL
  }

  if (environment === 'production') {
    return productionApi ?? apiUrl ?? DEFAULT_BASE_URL
  }

  return apiUrl ?? productionApi ?? developmentApi ?? DEFAULT_BASE_URL
}

const BASE_URL = getBaseUrl()

const isAbsoluteUrl = (url: string) => /^https?:\/\//i.test(url)

const getRequestUrl = (endpoint: string) => {
  return isAbsoluteUrl(endpoint) ? endpoint : `${BASE_URL}${endpoint}`
}

const getErrorMessage = (data: unknown) => {
  if (typeof data === 'string') return data || 'Request failed'

  if (data && typeof data === 'object') {
    if ('message' in data) {
      const message = (data as { message?: unknown }).message
      if (Array.isArray(message)) return message.join(', ')
      if (typeof message === 'string') return message
    }

    if ('error' in data) {
      return getErrorMessage((data as { error?: unknown }).error)
    }
  }

  return 'Request failed'
}

const parseResponseBody = async <T>(response: globalThis.Response) => {
  const text = await response.text()
  if (!text) return null as T

  try {
    return JSON.parse(text) as T
  } catch {
    return text as T
  }
}

export type ResponseWithHeaders<T> = {
  data: T
  headers: Headers
}

export class HttpClient {
  interceptors = {
    request: new InterceptorManager<RequestInit>(),
    response: new InterceptorManager<
      Error | HttpError | ResponseWithHeaders<unknown>
    >(),
  }

  private async fetchJson<T = any>(
    url: string,
    options: RequestInit = {},
    includeAuth = !isAbsoluteUrl(url)
  ): Promise<T> {
    const headers = new Headers(options.headers)
    headers.set('Accept', headers.get('Accept') ?? 'application/json')

    if (includeAuth) {
      headers.set(
        'Authorization',
        headers.get('Authorization') ?? `Bearer ${AUTH_TOKEN}`
      )
    }

    if (options.body !== undefined && !(options.body instanceof FormData)) {
      headers.set(
        'Content-Type',
        headers.get('Content-Type') ?? 'application/json'
      )
    }

    let config: RequestInit = {
      ...options,
      headers,
    }

    for (const { onFulfilled } of this.interceptors.request.getHandlers()) {
      if (onFulfilled) config = await onFulfilled(config)
    }

    try {
      const response = await fetch(url, config)
      if (!response.ok) {
        const data = await parseResponseBody<ApiResponse<null> | string>(
          response
        )
        throw new HttpError(response.status, getErrorMessage(data), data)
      }

      const data = await parseResponseBody<T>(response)

      for (const { onFulfilled } of this.interceptors.response.getHandlers()) {
        if (onFulfilled) {
          await onFulfilled({ data: data as T, headers: response.headers })
        }
      }

      return data as T
    } catch (error: unknown) {
      const handledError =
        error instanceof HttpError
          ? error
          : new HttpError(
            0,
            error instanceof Error ? error.message : 'Network Error'
          )

      for (const { onRejected } of this.interceptors.response.getHandlers()) {
        if (onRejected) onRejected(handledError)
      }

      throw handledError
    }
  }

  get<T = any>(
    endpoint: string,
    params: Record<string, unknown> = {},
    options?: RequestInit
  ) {
    const queryParams = new URLSearchParams()
    for (const key in params) {
      const value = params[key]
      if (value !== undefined && value !== null) {
        if (Array.isArray(value)) {
          queryParams.append(key, JSON.stringify(value))
        } else {
          queryParams.append(key, String(value))
        }
      }
    }

    const requestUrl = getRequestUrl(endpoint)
    const queryString = queryParams.toString()
    const separator = requestUrl.includes('?') ? '&' : '?'

    return this.fetchJson<T>(
      queryString ? `${requestUrl}${separator}${queryString}` : requestUrl,
      {
        method: 'GET',
        credentials: 'include',
        ...options,
      },
      !isAbsoluteUrl(endpoint)
    )
  }

  post<T = any>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.fetchJson<T>(
      getRequestUrl(endpoint),
      {
        method: 'POST',
        credentials: 'include',
        body:
          body !== undefined
            ? body instanceof FormData
              ? body
              : JSON.stringify(body)
            : undefined,
        ...options,
      },
      !isAbsoluteUrl(endpoint)
    )
  }

  put<T = any>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.fetchJson<T>(
      getRequestUrl(endpoint),
      {
        method: 'PUT',
        credentials: 'include',
        body:
          body !== undefined
            ? body instanceof FormData
              ? body
              : JSON.stringify(body)
            : undefined,
        ...options,
      },
      !isAbsoluteUrl(endpoint)
    )
  }

  patch<T = any>(endpoint: string, body?: unknown, options?: RequestInit) {
    return this.fetchJson<T>(
      getRequestUrl(endpoint),
      {
        method: 'PATCH',
        credentials: 'include',
        body:
          body !== undefined
            ? body instanceof FormData
              ? body
              : JSON.stringify(body)
            : undefined,
        ...options,
      },
      !isAbsoluteUrl(endpoint)
    )
  }

  delete<T = any>(endpoint: string, options?: RequestInit) {
    return this.fetchJson<T>(
      getRequestUrl(endpoint),
      {
        method: 'DELETE',
        credentials: 'include',
        ...options,
      },
      !isAbsoluteUrl(endpoint)
    )
  }
}

export const httpClient = new HttpClient()
