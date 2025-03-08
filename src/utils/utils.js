import { isAxiosError } from "axios"
import { toast } from "react-toastify"

export const showResponseError = (error) => {
    if (isAxiosError(error)) {
        if (error.code == "ERR_NETWORK") {
            toast.error(error.message)
        } else {
            const err = error.response?.data.message
            if (Array.isArray(err)) {
                err.forEach(e => toast.error(e))
            } else {
                toast.error(err)
            }
        }
    } else {
        toast.error("Lỗi không xác định")
    }
}