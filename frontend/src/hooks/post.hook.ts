import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createPost, deletePost, getPostDetails, getPosts, updatePost } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../lib/api"
import { showResponseError } from "../lib/utils"
import type {
    CreatePostParams,
    DeletePostParams,
    GetPostDetailsParams,
    GetPostsParams,
    PostDetailsResponse,
    PostListResponse,
    PostMutationResponse,
    UpdatePostParams,
} from "@/@types/post"

export const useGetPostsHook = ({ filter }: GetPostsParams = {}) => {
    return useQuery<PostListResponse>({
        queryKey: [API.POSTS, filter],
        queryFn: () => getPosts({ filter }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useGetPostDetailsHook = ({ id }: GetPostDetailsParams) => {
    return useQuery<PostDetailsResponse>({
        queryKey: [API.POSTS, id],
        queryFn: () => getPostDetails({ id }),
        enabled: Boolean(id),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeletePostHook = () => {
    const queryClient = useQueryClient()
    return useMutation<PostMutationResponse, unknown, DeletePostParams>({
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
    return useMutation<PostMutationResponse, unknown, CreatePostParams>({
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
    return useMutation<PostMutationResponse, unknown, UpdatePostParams>({
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
