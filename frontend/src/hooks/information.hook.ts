import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getInformation, updateInformation } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../lib/api"
import { showResponseError } from "../lib/utils"
import type {
    InformationMutationResponse,
    InformationResponse,
    UpdateInformationParams,
} from "@/@types/information"

export const useGetInformationHook = () => {
    return useQuery<InformationResponse>({
        queryKey: [API.INFORMATION],
        queryFn: () => getInformation(),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useUpdateInformationHook = () => {
    const queryClient = useQueryClient()
    return useMutation<InformationMutationResponse, unknown, UpdateInformationParams>({
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
