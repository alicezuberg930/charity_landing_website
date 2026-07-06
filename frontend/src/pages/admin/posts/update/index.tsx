import { useParams } from "@tanstack/react-router"
import { useGetPostDetailsHook } from "../../../../hooks/post.hook"
import HandlePostBody from "@/components/HandlePostBody"

const UpdatePostPage = () => {
    const { id } = useParams({ strict: false }) as { id?: string }
    const { data: post, error } = useGetPostDetailsHook({ id })
    if (error) return (<span>{JSON.stringify(error)}</span>)
    return (post?.data && <HandlePostBody selectedPost={post.data} />)
}

export default UpdatePostPage