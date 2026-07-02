import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createEvent, deleteEvent, getEvents, updateEvent } from "../services/api.service"
import { toast } from "sonner"
import { API } from "../utils/api"
import { showResponseError } from "../lib/utils"

export const useGetEventsHook = ({ filter }: any = {}) => {
    return useQuery({
        queryKey: [API.EVENTS, filter],
        queryFn: () => getEvents({ filter }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeleteEventHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ id }: any) => deleteEvent({ id }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.EVENTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useCreateEventHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ event }: any) => createEvent({ event }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.EVENTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}

export const useUpdateEventHook = () => {
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn: ({ id, event }: any) => updateEvent({ id, event }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.EVENTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}
