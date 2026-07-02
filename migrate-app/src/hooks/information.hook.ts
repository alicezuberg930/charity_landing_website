import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getInformation, updateInformation } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../utils/api"
import { showResponseError } from "../lib/utils"

export const useGetInformationHook = () => {
    return useQuery({
        queryKey: [API.INFORMATION],
        queryFn: () => getInformation(),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useUpdateInformationHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ information }: any) => updateInformation({ information }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.INFORMATION] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}
