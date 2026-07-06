import { useParams } from "@tanstack/react-router"
import HandlePostBody from "../../components/HandlePostBody"
import { useGetBannerDetailsHook } from "../../hooks/banner.hook"
import HandleBannerBody from "../../components/HandleBannerBody"

const UpdateCreateBannerPage = () => {
    const { id } = useParams({ strict: false }) as { id?: string }
    const { data: banner, error } = useGetBannerDetailsHook({ id })
    if (id) {
        if (!banner || !banner.data) return (<span>{JSON.stringify(error)}</span>)
        return (<HandleBannerBody selectedBanner={banner.data} />)
    }
    return (<HandleBannerBody selectedBanner={undefined} />)
}

export default UpdateCreateBannerPage
