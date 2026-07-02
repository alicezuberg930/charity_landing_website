import { useMutation } from "@tanstack/react-query"
import { uploadFile } from "../services/api.service"
import { showResponseError } from "../lib/utils"

export const useUploadFileHook = () => {
    return useMutation<any, any, any>({
        mutationFn: (file: any) => uploadFile(file),
        onError(error) { showResponseError(error) }
    })
}
