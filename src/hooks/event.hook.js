import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { createEvent, deleteEvent, getEvents, updateEvent } from "../services/api.service"
import { toast } from "react-toastify"
import { API } from "../utils/api"
import { showResponseError } from "../utils/utils"

export const useGetEventsHook = ({ filter }) => {
    return useQuery({
        queryKey: [API.EVENTS, filter],
        queryFn: () => getEvents({ filter }),
        placeholderData: (previousData, _) => previousData,
    })
}

export const useDeleteEventHook = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({ id }) => deleteEvent({ id }),
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
    return useMutation({
        mutationFn: ({ event }) => createEvent({ event }),
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
    return useMutation({
        mutationFn: ({ id, event }) => updateEvent({ id, event }),
        onSuccess(data) {
            toast.success(data.message)
            queryClient.invalidateQueries({ queryKey: [API.EVENTS] })
        },
        onError(error) {
            showResponseError(error)
        },
    })
}