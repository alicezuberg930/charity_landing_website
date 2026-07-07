import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import type {
  DeleteLogParams,
  GetLogsParams,
  LogListResponse,
  LogMutationResponse,
} from '@/@types/log'
import { API } from '@/lib/api'
import { showResponseError } from '@/lib/utils'
import { deleteLog, getLogs } from '@/services/api.service'

export const useGetLogsHook = ({ filter }: GetLogsParams = {}) => {
  return useQuery<LogListResponse>({
    queryKey: [API.LOGS, filter],
    queryFn: () => getLogs({ filter }),
    placeholderData: (previousData, _) => previousData,
  })
}

export const useDeleteLogHook = () => {
  const queryClient = useQueryClient()

  return useMutation<LogMutationResponse, unknown, DeleteLogParams>({
    mutationFn: ({ id }) => deleteLog({ id }),
    onSuccess(data) {
      toast.success(data.message)
      queryClient.invalidateQueries({ queryKey: [API.LOGS] })
    },
    onError(error) {
      showResponseError(error)
    },
  })
}
