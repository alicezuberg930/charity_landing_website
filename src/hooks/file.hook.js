import { useMutation } from "@tanstack/react-query"
import { uploadFile } from "../services/api.service"
import { showResponseError } from "../utils/utils"

export const useUploadFileHook = () => {
    return useMutation({
        mutationFn: (file) => uploadFile(file),
        onError(error) { showResponseError(error) }
    })
}