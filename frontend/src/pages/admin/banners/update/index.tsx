import { useParams } from "@tanstack/react-router"
import { useGetBannerDetailsHook } from "../../../../hooks/banner.hook"
import HandleBannerBody from "@/pages/admin/banners/components/handle-banner"

const UpdateCreateBannerPage = () => {
    const { id } = useParams({ strict: false }) as { id?: string }
    const { data: banner, error } = useGetBannerDetailsHook({ id })
    if (error) return (<span>{JSON.stringify(error)}</span>)
    return (banner?.data && < HandleBannerBody selectedBanner={banner.data} />)
}

export default UpdateCreateBannerPage
