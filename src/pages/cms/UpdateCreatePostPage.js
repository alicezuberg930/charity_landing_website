import { useParams } from "react-router-dom"
import { useGetPostDetailsHook } from "../../hooks/post.hook"
import HandlePostBody from "../../components/HandlePostBody"

const UpdateCreatePostPage = () => {
    const { id } = useParams()
    const { data: post, error } = useGetPostDetailsHook({ id })
    if (id) {
        if (!post || !post.data) return (<span>{JSON.stringify(error)}</span>)
        return (<HandlePostBody selectedPost={post.data} />)
    }
    return (<HandlePostBody selectedPost={undefined} />)
}

export default UpdateCreatePostPage