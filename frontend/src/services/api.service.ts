import { httpClient } from '@/lib/repository/http-client'
import type {
    LoginParams,
    LoginResponse,
    ProfileResponse,
} from '@/@types/auth'
import type {
    BannerDetailsResponse,
    BannerListResponse,
    BannerMutationResponse,
    CreateBannerParams,
    DeleteBannerParams,
    GetBannerDetailsParams,
    GetBannersParams,
    UpdateBannerParams,
} from '@/@types/banner'
import type {
    CreateEventParams,
    DeleteEventParams,
    EventListResponse,
    EventMutationResponse,
    GetEventsParams,
    UpdateEventParams,
} from '@/@types/event'
import type { UploadFileParams, UploadFileResponse } from '@/@types/file'
import type {
    InformationMutationResponse,
    InformationResponse,
    UpdateInformationParams,
} from '@/@types/information'
import type {
    DeleteLogParams,
    GetLogsParams,
    LogListResponse,
    LogMutationResponse,
} from '@/@types/log'
import type {
    CreatePostParams,
    DeletePostParams,
    GetPostDetailsParams,
    GetPostsParams,
    PostDetailsResponse,
    PostListResponse,
    PostMutationResponse,
    UpdatePostParams,
} from '@/@types/post'
import type {
    YoutubePlaylistVideosParams,
    YoutubePlaylistVideosResponse,
} from '@/@types/youtube'
import { API } from '../lib/api'

// auth
export const login = async (params: LoginParams) => {
    return httpClient.post<LoginResponse>(API.AUTH.LOGIN, params)
}

export const getProfile = async () => {
    return httpClient.get<ProfileResponse>(API.USERS.PROFILE)
}

// common
export const uploadFile = async ({ file }: UploadFileParams) => {
    return httpClient.post<UploadFileResponse>(API.UPLOAD_FILE, file)
}

// banner
export const createBanner = async ({ banner }: CreateBannerParams) => {
    return httpClient.post<BannerMutationResponse>(API.BANNERS, banner)
}

export const updateBanner = async ({ id, banner }: UpdateBannerParams) => {
    return httpClient.patch<BannerMutationResponse>(`${API.BANNERS}/${id}`, banner)
}

export const deleteBanner = async ({ id }: DeleteBannerParams) => {
    return httpClient.delete<BannerMutationResponse>(`${API.BANNERS}/${id}`)
}

export const getBanners = async (params?: GetBannersParams) => {
    return httpClient.get<BannerListResponse>(API.BANNERS, params)
}

export const getBannerDetails = async ({ id }: GetBannerDetailsParams) => {
    return httpClient.get<BannerDetailsResponse>(`${API.BANNERS}/${id}`)
}

// post
export const createPost = async ({ post }: CreatePostParams) => {
    return httpClient.post<PostMutationResponse>(API.POSTS, post)
}

export const updatePost = async ({ id, post }: UpdatePostParams) => {
    return httpClient.patch<PostMutationResponse>(`${API.POSTS}/${id}`, post)
}

export const deletePost = async ({ id }: DeletePostParams) => {
    return httpClient.delete<PostMutationResponse>(`${API.POSTS}/${id}`)
}

export const getPosts = async ({ filter }: GetPostsParams = {}) => {
    return httpClient.get<PostListResponse>(API.POSTS, filter)
}

export const getPostDetails = async ({ id }: GetPostDetailsParams) => {
    return httpClient.get<PostDetailsResponse>(`${API.POSTS}/${id}`)
}

// log
export const getLogs = async ({ filter }: GetLogsParams = {}) => {
    return httpClient.get<LogListResponse>(API.LOGS, filter)
}

export const deleteLog = async ({ id }: DeleteLogParams) => {
    return httpClient.delete<LogMutationResponse>(`${API.LOGS}/${id}`)
}

// information
export const updateInformation = async ({ information }: UpdateInformationParams) => {
    return httpClient.post<InformationMutationResponse>(API.INFORMATION, information)
}

export const getInformation = async () => {
    return httpClient.get<InformationResponse>(API.INFORMATION)
}

// event
export const createEvent = async ({ event }: CreateEventParams) => {
    return httpClient.post<EventMutationResponse>(API.EVENTS, event)
}

export const updateEvent = async ({ id, event }: UpdateEventParams) => {
    return httpClient.patch<EventMutationResponse>(`${API.EVENTS}/${id}`, event)
}

export const deleteEvent = async ({ id }: DeleteEventParams) => {
    return httpClient.delete<EventMutationResponse>(`${API.EVENTS}/${id}`)
}

export const getEvents = async ({ filter }: GetEventsParams = {}) => {
    return httpClient.get<EventListResponse>(API.EVENTS, filter)
}

export const getYoutubePlaylistVideos = async ({ playlistId }: YoutubePlaylistVideosParams) => {
    const googleApiKey = import.meta.env.REACT_APP_GOOGLE_API_KEY ?? import.meta.env.VITE_GOOGLE_API_KEY

    return httpClient.get<YoutubePlaylistVideosResponse>(
        'https://youtube.googleapis.com/youtube/v3/playlistItems',
        {
            part: 'snippet,contentDetails',
            maxResults: 20,
            playlistId,
            key: googleApiKey,
        },
        { credentials: 'omit' }
    )
}
