import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getInformation, updateInformation } from "../services/api.service"
import { toast } from "react-toastify"
import { API } from "../utils/api"
import { showResponseError } from "../utils/utils"

export const useGetInformationHook = () => {
    return useQuery({
        queryKey: [API.INFORMATION],
        queryFn: () => getInformation(),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useUpdateInformationHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ information }) => updateInformation({ information }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.INFORMATION] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}