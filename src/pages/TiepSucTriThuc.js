import LoadingShimmerList from '../components/LoadingShimmerList'
import ActivityListTemp from '../components/PostListTemp'
import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'

const TiepSucTriThuc = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'tiep-suc-tri-thuc' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG TIẾP SỨC TRI THỨC'} />
      {isLoading ? <LoadingShimmerList /> : posts.data && <ActivityListTemp posts={posts.data} />}
    </>
  )
}

export default TiepSucTriThuc
