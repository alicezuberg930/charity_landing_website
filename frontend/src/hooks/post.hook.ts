import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createPost, deletePost, getPostDetails, getPosts, updatePost } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../lib/api"
import { showResponseError } from "../lib/utils"

export const useGetPostsHook = ({ filter }: any = {}) => {
    return useQuery({
        queryKey: [API.POSTS, filter],
        queryFn: () => getPosts({ filter }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useGetPostDetailsHook = ({ id }: any) => {
    return useQuery({
        queryKey: [API.POSTS, id],
        queryFn: () => getPostDetails({ id }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeletePostHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ id }: any) => deletePost({ id }),
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
    return useMutation<any, any, any>({
        mutationFn: ({ post }: any) => createPost({ post }),
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
    return useMutation<any, any, any>({
        mutationFn: ({ id, post }: any) => updatePost({ id, post }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.POSTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
} 
