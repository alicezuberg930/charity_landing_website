import { useParams } from "react-router-dom"
import { useGetPostDetailsHook } from "../../hooks/post.hook"
import HandlePostBody from "../../components/HandlePostBody"

const UpdatePostPage = () => {
    const { id } = useParams()
    const { data: post, error } = useGetPostDetailsHook({ id })
    if (!post || !post.data) return (<span>{JSON.stringify(error)}</span>)
    return (<HandlePostBody selectedPost={post.data} />)
}

export default UpdatePostPage