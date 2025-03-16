import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'
import ActivityList from '../components/ActivityList'
import LoadingShimmerItemList from '../components/LoadingShimmerItemList'

const ChaoTinhThuong = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chao-tinh-thuong' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG CHÁO TÌNH THƯƠNG' />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts && posts?.data && <ActivityList posts={posts.data} />}
    </>
  )
}

export default ChaoTinhThuong