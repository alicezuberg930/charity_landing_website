import axios from "axios"
import axioInstance from "../configs/axios.config"
import { API } from "../utils/api"

// common
export const uploadFile = async ({ file }) => {
    const response = await axioInstance({ url: API.UPLOAD_FILE, method: "POST", data: file })
    return response.data
}

// banner
export const createBanner = async ({ banner }) => {
    const response = await axioInstance({ url: API.BANNERS, method: "POST", data: banner })
    return response.data
}

export const updateBanner = async ({ id, banner }) => {
    const response = await axioInstance({ url: `${API.BANNERS}/${id}`, method: "PATCH", data: banner })
    return response.data
}

export const deleteBanner = async ({ id }) => {
    const response = await axioInstance({ url: `${API.BANNERS}/${id}`, method: "DELETE" })
    return response.data
}

export const getBanners = async () => {
    const response = await axioInstance({ url: API.BANNERS, method: "GET" })
    return response.data
}

// bài đăng
export const createPost = async ({ post }) => {
    const response = await axioInstance({ url: API.POSTS, method: "POST", data: post })
    return response.data
}

export const updatePost = async ({ id, post }) => {
    const response = await axioInstance({ url: `${API.POSTS}/${id}`, method: "PATCH", data: post })
    return response.data
}

export const deletePost = async ({ id }) => {
    const response = await axioInstance({ url: `${API.POSTS}/${id}`, method: "DELETE" })
    return response.data
}

export const getPosts = async ({ filter }) => {
    const response = await axioInstance({ url: API.POSTS, method: "GET", params: filter })
    return response.data
}

export const getPostDetails = async ({ id }) => {
    const response = await axioInstance({ url: `${API.POSTS}/${id}`, method: "GET" })
    return response.data
}

// thông tin website
export const updateInformation = async ({ information }) => {
    const response = await axioInstance({ url: API.INFORMATION, method: "POST", data: information })
    return response.data
}

export const getInformation = async () => {
    const response = await axioInstance({ url: API.INFORMATION, method: "GET" })
    return response.data
}

// sự kiện
export const createEvent = async ({ event }) => {
    const response = await axioInstance({ url: API.EVENTS, method: "POST", data: event })
    return response.data
}

export const updateEvent = async ({ id, event }) => {
    const response = await axioInstance({ url: `${API.EVENTS}/${id}`, method: "PATCH", data: event })
    return response.data
}

export const deleteEvent = async ({ id }) => {
    const response = await axioInstance({ url: `${API.EVENTS}/${id}`, method: "DELETE" })
    return response.data
}

export const getEvents = async ({ filter }) => {
    const response = await axioInstance({ url: API.EVENTS, method: "GET", params: filter })
    return response.data
}


export const getYoutubePlaylistVideos = async ({ playlistId }) => {
    const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${playlistId}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    return response.data
}