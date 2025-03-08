import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBanner, deleteBanner, getBanners, updateBanner } from "../services/api.service"
import { toast } from "react-toastify"
import { API } from "../utils/api"
import { showResponseError } from "../utils/utils"

export const useGetBannersHook = () => {
    return useQuery({
        queryKey: [API.BANNERS],
        queryFn: () => getBanners(),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeleteBannerHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id }) => deleteBanner({ id }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.BANNERS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useCreateBannerHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ banner }) => createBanner({ banner }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.BANNERS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useUpdateBannerHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id, banner }) => updateBanner({ id, banner }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.BANNERS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}