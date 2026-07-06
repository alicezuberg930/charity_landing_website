import { useParams } from "@tanstack/react-router"
import { useGetPostDetailsHook } from "../../hooks/post.hook"
import HandlePostBody from "../../components/HandlePostBody"

const UpdateCreatePostPage = () => {
    const { id } = useParams({ strict: false }) as { id?: string }
    const { data: post, error } = useGetPostDetailsHook({ id })
    if (id) {
        if (!post || !post.data) return (<span>{JSON.stringify(error)}</span>)
        return (<HandlePostBody selectedPost={post.data} />)
    }
    return (<HandlePostBody selectedPost={undefined} />)
}

export default UpdateCreatePostPage
