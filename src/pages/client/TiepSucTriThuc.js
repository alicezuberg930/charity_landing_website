import LoadingShimmerItemList from '../../components/LoadingShimmerItemList'
import ActivityList from '../../components/ActivityList'
import Section from '../../components/Section'
import { useGetPostsHook } from '../../hooks/post.hook'

const TiepSucTriThucPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'tiep-suc-tri-thuc' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG TIẾP SỨC TRI THỨC'} />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts && posts?.data && <ActivityList posts={posts.data} />}
    </>
  )
}

export default TiepSucTriThucPage