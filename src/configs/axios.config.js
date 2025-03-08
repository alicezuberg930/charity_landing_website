import axios from "axios"

let apiUrl = process.env.REACT_APP_PRODUCTION_API
if (process.env.REACT_APP_ENVIRONMENT === "production") {
    apiUrl = process.env.REACT_APP_PRODUCTION_API
}
if (process.env.REACT_APP_ENVIRONMENT === "development") {
    apiUrl = process.env.REACT_APP_DEVELOPMENT_API
}

const axioInstance = axios.create({ baseURL: apiUrl, headers: { Accept: "application/json" } })

// do something before requesting
axioInstance.interceptors.request.use(async (config) => {
    // if (typeof window !== "undefined") {
    //     const session = await getCachedSession() // Fetch or retrieve cached session
    //     console.log(session ?? "no session")
    //     if (session && config.url !== "/.netlify/functions/getlist") {
    //      config.headers["Authorization"] = `Bearer ${session.user.access_token}`
    config.headers["Authorization"] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I4NWIyODRkZjBjOGM3YTQzNzY3YTgiLCJlbWFpbCI6IkxpbGlhbmExMjNAZ21haWwuY29tIiwiaWF0IjoxNzQwMTM1MzIxLCJleHAiOjE3NDg3NzUzMjF9.xqJ_u3Pkg_tdTH5VOxDd4_KFbF_DEAu3NXQVXj8X6Vg`
    //     } else {
    //         delete config.headers["Authorization"]
    //     }
    // }
    return config
}, (error) => {
    return Promise.reject(error)
})

// do something after responding
axioInstance.interceptors.response.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

export default axioInstance