import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createBanner, deleteBanner, getBannerDetails, getBanners, updateBanner } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../utils/api"
import { showResponseError } from "../lib/utils"

export const useGetBannersHook = (params?: any) => {
    return useQuery({
        queryKey: [API.BANNERS],
        queryFn: () => getBanners(params),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeleteBannerHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ id }: any) => deleteBanner({ id }),
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
    return useMutation<any, any, any>({
        mutationFn: ({ banner }: any) => createBanner({ banner }),
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
    return useMutation<any, any, any>({
        mutationFn: ({ id, banner }: any) => updateBanner({ id, banner }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.BANNERS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useGetBannerDetailsHook = ({ id }: any) => {
    return useQuery({
        queryKey: [API.BANNERS, id],
        queryFn: () => getBannerDetails({ id }),
        placeholderData: (previousData, _) => previousData,
    })
}
