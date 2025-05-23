import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createPost, deletePost, getPostDetails, getPosts, updatePost } from "../services/api.service"
import { toast } from "react-toastify"
import { API } from "../utils/api"
import { showResponseError } from "../utils/utils"

export const useGetPostsHook = ({ filter }) => {
    return useQuery({
        queryKey: [API.POSTS, filter],
        queryFn: () => getPosts({ filter }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useGetPostDetailsHook = ({ id }) => {
    return useQuery({
        queryKey: [API.POSTS, id],
        queryFn: () => getPostDetails({ id }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeletePostHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id }) => deletePost({ id }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.POSTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useCreatePostHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ post }) => createPost({ post }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.POSTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useUpdatePostHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, post }) => updatePost({ id, post }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.POSTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
} 